import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { FanProfileSetupPage } from '../pages/fpsetup/fpsetup';
import { InfluencerProfileSetupPage } from '../pages/ipsetup/ipsetup';
import { IWalkthroughPage } from '../pages/iwalkthrough/iwalkthrough';
import { StartBondfirePage } from '../pages/startbondfire/startbondfire';
import { ConfirmBondfirePage } from '../pages/confirmbondfire/confirmbondfire';
import { AllsetPage } from '../pages/allset/allset';
import { IProfilePage } from '../pages/iprofile/iprofile';
// import {FollowPage} from '../pages/follow/follow';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
