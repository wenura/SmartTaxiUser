import { Component } from '@angular/core';

import { settingsPage } from '../settings/settings';
import { userprofilePage } from '../userprofile/userprofile';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = settingsPage;
  tab3Root = userprofilePage;

  constructor() {

  }
}
