
// uiRouter
import { UIRouter, Transition, Ng2ViewDeclaration } from '@uirouter/angular'
import { HeaderComponent } from '@components/header/header.component'
import { ContentComponent } from '@components/content/content.component'
import { FooterComponent } from '@components/footer/footer.component'

// "views"
import { LoginComponent } from '@components/views/login/login.component'
// import { AuthComponent } from '@components/auth/auth/auth.component'
// import { BackendComponent } from '@components/page/backend/backend.component'

// import { VerifyMailComponent } from '@components/page/verify-mail/verify-mail.component'
// import { PasswordResetUseComponent } from '@components/auth/password-reset-use/password-reset-use.component'
import { PasswordResetComponent } from '@components/auth/passwordreset/passwordreset.component'
// import { AdminComponent } from '@components/page/admin/admin.component'
// import { AdvantagesComponent } from '@components/page/advantages/advantages.component'

// import { UserService } from '../service/user.service'
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
   // {
   //    name: 'base.registration',
   //    url: '/token-sale',
   //    views: {
   //       main: { component: RegistrationComponent }
   //    },
   //    data: {
   //       background: 'red'
   //    }
   // },
   // {
   //    name: 'base.registrationsuccessfull', 
   //    url: '/register-success',  
   //    views: {
   //       main: {component: RegistersuccessfullComponent} as Ng2ViewDeclaration,
   //    },
   //    data: {
   //       background: 'red'
   //    }
   // },
   // {
   //    name: 'base.auth', 
   //    url: '/auth',  
   //    views: {
   //       main: {component: AuthComponent} as Ng2ViewDeclaration,
   //    },
   //    data: {}
   // },

   // {
   //    name: 'base.verify_email', 
   //    url: '/verify-email/:user_id/:confirmation_code',  
   //    resolve: [
   //       {
   //          token: 'user_id', 
   //          deps: [Transition],
   //          resolveFn: resolveUserId
   //       },
   //       {
   //          token: 'confirmation_code', 
   //          deps: [Transition],
   //          resolveFn: resolveConfirmationCode
   //       }
   //    ],
   //    views: {
   //       main: {component: VerifyMailComponent} as Ng2ViewDeclaration,
   //    },
   //    data: {}
   // },
  {
    name: 'base.password_reset',
    url: '/password-reset',
    resolve: [],
    views: {
       main: { component: PasswordResetComponent }
    },
    data: { background: 'red' }
  },
   // {
   //    name: 'base.password_reset_use',
   //    url: '/password-reset/:token',
   //    resolve: [
   //       {
   //          token: 'token',
   //          deps: [ Transition ],
   //          resolveFn: resolveToken
   //       }
   //    ],
   //    views: {
   //       main: { component: PasswordResetUseComponent }
   //    },
   //    data: { background: 'red' }
   // },
   // {
   //    name: 'base.backend',
   //    url: '/backend',
   //    views: {
   //       main: {component: BackendComponent} as Ng2ViewDeclaration,
   //    },
   //    data: { background: 'black' },
   //    resolve: [
   //       {
   //          token: 'user',
   //          deps: [ UserService ],
   //          resolveFn: resolveAccountInformation
   //       }
   //    ],
   //    redirectTo: redirectAdmin
   // },
   // {
   //    name: 'base.admin',
   //    url: '/admin',
   //    views: {
   //       main: { component: AdminComponent }
   //    },
   //    data: { background: 'black' },
   //    resolve: [
   //       {
   //          token: 'users',
   //          deps: [ UserService ],
   //          resolveFn: resolveValidatableUsers
   //       },
   //       {
   //          token: 'download_token',
   //          deps: [ UserService ],
   //          resolveFn: resolveDownloadToken
   //       }
   //    ]
   // },

]
