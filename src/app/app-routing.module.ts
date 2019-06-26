import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'lobito', loadChildren: './pagess/lobito/lobito.module#LobitoPageModule' },
  { path: 'catumbela', loadChildren: './pagess/catumbela/catumbela.module#CatumbelaPageModule' },
  { path: 'baiafarta', loadChildren: './pagess/baiafarta/baiafarta.module#BaiafartaPageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
