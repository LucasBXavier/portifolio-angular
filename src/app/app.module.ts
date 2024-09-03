import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { PrincipalComponent } from './principal/principal.component';
import { SobreMimComponent } from './sobreMim/sobreMim.component';

@NgModule({
  declarations: [	
    AppComponent,
    NavComponent,
    FooterComponent,
    PrincipalComponent,
      SobreMimComponent
   ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
