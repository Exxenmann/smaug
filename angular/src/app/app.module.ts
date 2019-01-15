import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {UIRouterModule} from "@uirouter/angular";
import { uiRouterConfig, uiRouterStates } from '@configs/router-config'

import { AppComponent } from './app.component';
import { CubeComponent } from '@components/cube/cube.component';
import { LoginComponent } from '@components/views/login/login.component';
import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';
import { ContentComponent } from '@components/content/content.component';
import { CubestackComponent } from '@components/cubestack/cubestack.component';
import { DashboardComponent } from '@components/views/dashboard/dashboard.component';
import { ModalGeneralComponent } from '@components/modals/modal-general/modal-general.component';
import { PasswordResetComponent } from '@components/auth/passwordreset/passwordreset.component'

import {RestService} from '@services/rest.service'

import { ReactiveFormsModule, FormsModule }    from '@angular/forms'

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { JwtInterceptor } from '@helper/jwt-inceptor';

@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    CubestackComponent,
    DashboardComponent,
    ModalGeneralComponent,
    PasswordResetComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    UIRouterModule.forRoot({ //required to configure the app wide router
      states: uiRouterStates, // inital set of static states
      config: uiRouterConfig // configuration of the uiRouter (e.g. default state)
    }),

  ],
  providers:[
    RestService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
