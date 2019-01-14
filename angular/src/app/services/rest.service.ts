import { Injectable } from '@angular/core'
import { HttpClient,HttpHeaders, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http'
import { StateService } from '@uirouter/angular'
import { LoadingoverlayService } from './loadingoverlay.service'
import { GlobalsService } from '@services/globals.service'
import { ModalService } from '@services/modal.service'

@Injectable()
export class RestService {

   baseurl = '/api/';

   constructor(
      private http: HttpClient,
      private stateService: StateService,
      private loadingoverlayService: LoadingoverlayService,
      private globalsService: GlobalsService,
      private modalService: ModalService
   ) {}

   private notAuthorized(){

      alert("Your Authentication could not be verified. Probably your session is expired. Please login again.")

      this.globalsService.isloggedin = false
      localStorage.removeItem('currentToken')
      localStorage.removeItem('isAdmin')
      localStorage.removeItem('username')
      this.stateService.go('base.home')
   }

   private requestErrorGeneral(error){
      console.error(error)
      this.loadingoverlayService.stop()
   }

   public uploadFiles(files: Set<File>){

      let promise = new Promise((resolve, reject) => {
         files.forEach(file => {

            const formData: FormData = new FormData()
            formData.append('file', file, file.name)
            const req = new HttpRequest('POST', this.baseurl+'admin/acceptpdfs', formData, {})

            this.http.request(req).subscribe(
               event => {
                  if (event instanceof HttpResponse)
                     resolve()
               },
               error => {
                  this.requestErrorGeneral(error)

                  if(error.status==401){
                     this.notAuthorized()
                     this.stateService.go('base.home')
                  }
                  reject()
               }
            )
         })

      })

      return promise
   }

   public downloadFile(endpoint:String, postData:Object, filename:string, p_responseMimeType:string){

      var restService = this

      var responseMimeType = (p_responseMimeType) ? p_responseMimeType : "application/octet-stream"

      var HTTPOptions = {
         headers: new HttpHeaders({
            'Accept': responseMimeType
         }),
         'responseType': 'blob' as 'json',
      }

      // COMMENTED OUT IN CASE ONE EVER NEEDS A REAL PROGRESSBAR THAT KNOWS PERCENT - DOESNT WORK BUT IS A GOOD HEADSTART
      // also reportProgress: true in HTTPOptions
      // const req = new HttpRequest('POST', this.baseurl+endpoint, filename, HTTPOptions)

      // this.http.request(req).subscribe(
      //    event => {
      //       if (event.type === HttpEventType.DownloadProgress) {

      //          console.log(event)

      //          const percentDone = Math.round(100 * event.loaded / event.total)
      //          console.log(`File is ${percentDone}% downloaded.`)
      //       } else if (event instanceof HttpResponse) {
      //          console.log('File is completely downloaded!')
      //       }
      // })

      this.http.post(this.baseurl+endpoint,postData,HTTPOptions)
      .subscribe(
         res => {
            // console.log('start download:',res)

            var blob = new Blob([res], {type: "octet/stream"})
            var url = window.URL.createObjectURL(blob)

            var a = document.createElement('a')
            document.body.appendChild(a)
            a.setAttribute('style', 'display: none')
            a.href = url
            a.download = filename;
            a.click()
            window.URL.revokeObjectURL(url)
            a.remove()
         },
         error => {
            this.requestErrorGeneral(error)

            if(error.status==401){
               this.notAuthorized()
               this.stateService.go('base.home')
            }

         },
         () => {
            // console.log('Completed file download.')
         }
      )
   }

   public post(endpoint:String, postData:Object){

      let promise = new Promise((resolve, reject) => {
         this.http.post(this.baseurl+endpoint,postData,{}).toPromise()
         .then((res: Response) => {
            resolve(res)
         })
         .catch((response: Response | any) => {
            this.handleResponseError(response)
            reject()
         })
      })

      return promise
   }

   public get(endpoint : string) {
      let promise = new Promise((resolve, reject) => {
         this.http.get(this.baseurl + endpoint).toPromise()
         .then((res: Response) => {
            resolve(res)
         })
         .catch((response: Response | any) => {
            this.handleResponseError(response)
            reject()
         })
      })

      return promise
   }

   public put(endpoint : string, data : any) {

      let promise = new Promise((resolve, reject) => {
         this.http.put(this.baseurl + endpoint, data).toPromise()
         .then((res: Response) => {
            resolve(res)
         })
         .catch((response: Response | any) => {
            this.handleResponseError(response)
            reject()
         })
      })

      return promise
   }

   private handleResponseError(response){
      this.requestErrorGeneral(response)

      if(response.status==200) return

      else if(response.status==401){

         if( response.error.error=="user_not_confirmed" ){
            this.modalService.info({
               title: 'Account not yet confirmed',
               message: "This account has not yet been confirmed via Email. Please confirm it via the link we have sent you."
            })
         }
         else if(response.error.error=="invalid_credentials"){
            this.modalService.info({
               title: 'Login not successfull',
               message: "The login was not successfull. Please check your credentials."
            })
         }
         else{
            this.notAuthorized()
         }

         // if invalid credentials is returned dont go to start page
         // because user probably is on login screen and wants to reenter credentials
         if( response.error.error!="invalid_credentials" )
            this.stateService.go('base.home')

      }

      // Method Not Allowed
      else if(response.status==405){
         this.notAuthorized()
      }

      else if(response.status==422){

         var errors_s=""

         for (var key in response.error.errors) {
            if (response.error.errors.hasOwnProperty(key)) {
               errors_s+=key+": "+response.error.errors[key]
               errors_s+='<br>'
            }
         }

         var message = 'Your request was invalid because of the following errors:<br>'+errors_s

         this.modalService.info({
            title: 'ERROR',
            message: message
         })

      }

      else if(response.status==500){
         alert("ERROR: an internal server error happened - please contact the system administrator.")
      }

      else{
         let msg = JSON.stringify(response.error.message)
         let time = JSON.stringify(response.error.time)

         this.modalService.info({
            title: 'ERROR - please report this message to us',
            message: "ERROR: a server error happened - please report this error to us.<br>HTTP Code: "+
            response.status+"<br>Error message: " + msg + " " + time
         })

      }
   }

}
