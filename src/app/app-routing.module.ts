import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'social-media', loadChildren: './social-media/social-media.module#SocialMediaPageModule' },
  { path: 'youtube', loadChildren: './youtube/youtube.module#YoutubePageModule' },
  { path: 'music', loadChildren: './music/music.module#MusicPageModule' },
  { path: 'calculator', loadChildren: './calculator/calculator.module#CalculatorPageModule' },
  { path: 'stopwatch', loadChildren: './stopwatch/stopwatch.module#StopwatchPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
