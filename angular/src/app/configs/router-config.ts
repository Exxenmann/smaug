
// uiRouter
import { UIRouter, Transition, Ng2ViewDeclaration } from '@uirouter/angular'
import { HeaderComponent } from '@components/header/header.component'
import { ContentComponent } from '@components/content/content.component'
import { FooterComponent } from '@components/footer/footer.component'

// "views"
import { LoginComponent } from '@components/views/login/login.component'
import { DashboardComponent } from '@components/views/dashboard/dashboard.component'

// import { VerifyMailComponent } from '@components/page/verify-mail/verify-mail.component'
// import { PasswordResetUseComponent } from '@components/auth/password-reset-use/password-reset-use.component'
import { PasswordResetComponent } from '@components/auth/passwordreset/passwordreset.component'

// import { AuthenticationService } from '../service/authentication.service'
// import { PrivacyPolicyComponent } from '@components/page/privacy-policy/privacy-policy.component'
// import { LegalDisclaimerComponent } from '@components/page/legal-disclaimer/legal-disclaimer.component'
// import { AboutThisWebsiteComponent } from '@components/page/about-this-website/about-this-website.component'
// import { RegistrationComponent } from '@components/page/registration/registration.component'
// import { RegistersuccessfullComponent } from '@components/page/registersuccessfull/registersuccessfull.component'

export function uiRouterConfig(router: UIRouter) {}

export const uiRouterStates = [

  {
    abstract:true,
    name: 'base',
    url: '',
    views: {
      header: {component: HeaderComponent} as Ng2ViewDeclaration,
      content: {component: ContentComponent} as Ng2ViewDeclaration,
      footer: {component: FooterComponent} as Ng2ViewDeclaration
    }
  },

  {
    name: 'base.login', 
    url: '/',
    views: {
      main: {component: LoginComponent} as Ng2ViewDeclaration,
    },
    data: { }
  },

  {
    name: 'base.dashboard',
    url: '/dashboard',
    views: {
      main: {component: DashboardComponent} as Ng2ViewDeclaration,
    },
    data: { },
  },

  {
    name: 'base.password_reset',
    url: '/password-reset',
    resolve: [],
    views: {
       main: { component: PasswordResetComponent }
    },
    data: { background: 'red' }
  },

]
