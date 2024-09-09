import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterViewRoutingModule } from './master-view-routing.module';
import { MasterViewComponent } from './master-view.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { IgxBadgeModule, IgxListModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxAvatarModule, IgxCalendarModule, IgxDialogModule, IgxInputGroupModule, IgxChipsModule, IgxCardModule, IgxTabsModule, IgxGridModule, IgxDropDownModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { BacklogComponent } from './backlog/backlog.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';

@NgModule({
  declarations: [
    MasterViewComponent,
    MyTasksComponent,
    DashboardsComponent,
    BacklogComponent,
    CustomerOrdersComponent
  ],
  imports: [
    CommonModule,
    MasterViewRoutingModule,
    IgxBadgeModule,
    IgxListModule,
    IgxIconModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxToggleModule,
    IgxAvatarModule,
    IgxCalendarModule,
    IgxDialogModule,
    IgxInputGroupModule,
    IgxChipsModule,
    FormsModule,
    IgxCardModule,
    IgxTabsModule,
    IgxGridModule,
    IgxDropDownModule,
    IgxNavigationDrawerModule
  ]
})
export class MasterViewModule {
}
