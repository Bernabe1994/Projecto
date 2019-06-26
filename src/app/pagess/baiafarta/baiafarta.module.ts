import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BaiafartaPage } from './baiafarta.page';

const routes: Routes = [
  {
    path: '',
    component: BaiafartaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BaiafartaPage]
})
export class BaiafartaPageModule {}
