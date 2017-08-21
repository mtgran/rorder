import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { BpSComponent } from './bp-s/bp-s.component';
import { BpComponent } from './bp-s/bp/bp.component';
import { RoutingOrdersComponent } from './routing-orders/routing-orders.component';
import { RoutingOrderComponent } from './routing-orders/routing-order/routing-order.component';
import { RoutingOrderDetailComponent } from './routing-orders/routing-order-detail/routing-order-detail.component';
import { RoutingOrderListComponent } from './routing-orders/routing-order-list/routing-order-list.component';
import { BpListComponent } from './bp-s/bp-list/bp-list.component';
import { BpDetailComponent } from './bp-s/bp-detail/bp-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BpSComponent,
    BpComponent,
    RoutingOrdersComponent,
    RoutingOrderComponent,
    RoutingOrderDetailComponent,
    RoutingOrderListComponent,
    BpListComponent,
    BpDetailComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
