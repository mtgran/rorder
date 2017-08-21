import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { BpSComponent } from './bp-s/bp-s.component';
import { BpComponent } from './bp-s/bp/bp.component';
import { RoutingOrdersComponent } from './routing-orders/routing-orders.component';
import { RoutingOrderComponent } from './routing-orders/routing-order/routing-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BpSComponent,
    BpComponent,
    RoutingOrdersComponent,
    RoutingOrderComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
