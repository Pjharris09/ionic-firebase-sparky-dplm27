import { Component } from '@angular/core';

import { JobsPage } from '../jobs/jobs';
import { SparkyPage } from '../sparky/sparky';
import { DashboardPage } from '../dashboard/dashboard';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DashboardPage;
  tab3Root = ContactPage;
  tab4Root = SparkyPage;
  tab5Root = JobsPage;

  constructor() {

  }
}
