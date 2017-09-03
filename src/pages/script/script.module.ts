import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScriptPage } from './script';

@NgModule({
  declarations: [
    ScriptPage,
  ],
  imports: [
    IonicPageModule.forChild(ScriptPage),
  ],
  exports: [
    ScriptPage
  ]
})
export class ScriptPageModule {}
