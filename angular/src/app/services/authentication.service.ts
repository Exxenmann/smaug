import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { RestService } from '@services/rest.service'
import { GlobalsService } from '@services/globals.service'
import { StateService } from '@uirouter/angular'

export type PasswordResetData = {
   password : string,
   password_confirmation : string
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

   constructor(
      private http: HttpClient,
      private globalsService: GlobalsService,
      private stateService: StateService,
      private restService: RestService
   ) { 

      if((localStorage.getItem("currentToken") != null) && (localStorage.getItem("username") != null)){
         this.globalsService.isloggedin = true
         this.stateService.go('base.backend')
      }
   }

   login(email: string, password: string) {

      let promise = new Promise((resolve, reject) => {

         this.restService.post('auth/login',{ email: email, password: password })
         .then(
            // SUCCESS
            (data) => {
               this.setLoginData(data)
               resolve()
            },
            // ERROR
            () => {
               reject()
            }
         )
      })

      return promise

      // return this.http.post<any>('/api/auth/login', { email: email, password: password })
      //    .pipe(
      //       map(data => {
      //          this.setLoginData(data)
      //       })
      //    )
   }

   setLoginData(data){
      if(data.user && data.token) {

         // also store it in global service so buttons can watch it
         this.globalsService.isloggedin = true

         // store user details and jwt token in local storage to keep user logged in between page refreshes
         localStorage.setItem('currentToken', data.token)
         localStorage.setItem('username', data.user.name)
         localStorage.setItem('isAdmin', data.user.admin)
      }
   }

   isAuthenticated(){
      return (localStorage.getItem("currentToken") !== null)
   }

   isAdmin(){
      return localStorage.getItem('isAdmin')=="true"
   }

   getUsername(){
      return localStorage.getItem('username')
   }

  logout() {
    // TODO use rest service so a consistent unified api is used

    let f = () => {
      this.globalsService.isloggedin = false
      localStorage.removeItem('currentToken')
      localStorage.removeItem('isAdmin')
      localStorage.removeItem('username')
    }

    return this.http.post('/api/protected/account/logout', {})
    .toPromise()
    .then(f)
    .catch(f)
  }

  public requestPasswordReset(email : string) {
    return this.restService.post('auth/reset/generate', { email });
  }

  public resetPassword(token : string, data : PasswordResetData) {
    let body = Object.assign({ token }, data);

    return this.restService.post('auth/reset/use', body);
  }
}
