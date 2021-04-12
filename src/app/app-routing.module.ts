import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {TimelinesComponent} from './timelines/timelines.component';
import {YoutubePlaylistComponent} from './youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';
import {HomeComponent} from './home/home.component';
import {DictionaryComponent} from './dictionary/dictionary.component';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
  path: 'time',
  component: TimelinesComponent
  },
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  },
  {
    path: 'dictionary',
    component:DictionaryComponent,
    children: [{
      path: 'detail',
      component: DictionaryDetailComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
