import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {YoutubeService} from '../youtube.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {
  song: any;
  sub: Subscription;
  constructor(
    private youtubeService: YoutubeService,
    private activatedRouter: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    // @ts-ignore
    this.sub = this.activatedRouter.paramMap.subscribe((paramMa: ParamMap) => {
      const id =
      this.song = this.youtubeService.find(paramMa.get('id'))
    })
  }

  getSrc() {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + this.song.id);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
