import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NewDashboard} from './dashboard.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NewDashboard],
  exports: [NewDashboard],
  providers: []
})
export class NewDashboardModule {}