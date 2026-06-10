import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NbMenuModule, NbSpinnerModule, NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ProductsComponent } from './products/products/products.component';
import { CustomTableComponent } from './shared/custom-table/custom-table.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    FormsModule,
    NbMenuModule,
    NbSpinnerModule,
    NbCardModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
    ProductsComponent,
    CustomTableComponent,
  ],
})
export class PagesModule {
}
