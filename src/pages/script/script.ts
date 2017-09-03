import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


// import { SafeResourceUrl, DomSanitizationService } from '@angular/platform-browser';
// import { Http } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';


/**
 * Generated class for the ScriptPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-script',
  templateUrl: 'script.html',
})
export class ScriptPage {

  url: any;
  page: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer: DomSanitizer) {
  	let url = 'web/hinglish.html';
    this.page = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScriptPage');
  }

}
