import { Injectable } from '@angular/core';
import * as $ from "jquery";

@Injectable({
  providedIn: 'root'
})
export class LoadingoverlayService {

   overlay
   spinner

   constructor() { 
      this.overlay = $('<div id="overlay"></div>')
      this.overlay.appendTo(document.body)

      this.spinner = $('<img id="spinner" src="assets/images/Eclipse-1s-90px.svg"/>')
      this.spinner.appendTo(document.body)

      this.overlay.css('z-index', 80001);
      this.spinner.css('z-index', 80002);
   }

   start(){
      // console.log("start loading")
      $(this.overlay).css('visibility','visible')
      $(this.overlay).css('opacity','0.5')

      $(this.spinner).css('visibility','visible')
      $(this.spinner).css('opacity','1')
   }

   stop(){
      // console.log("stop loading")
      $(this.overlay).css('visibility','hidden')
      $(this.overlay).css('opacity','0.0')

      $(this.spinner).css('visibility','hidden')
      $(this.spinner).css('opacity','0.0')
   }

   /**
    * This shows the loading overlay until the resolution of the given promise.
    *
    * @param      {Promise<T>}  promise  The promise
    * @param      {boolean}     swallow  Whether to rethrow errors in the
    *                                    catch-handler. This can be used to
    *                                    prevent console-spam when error
    *                                    responses are expected (e.g.
    *                                    server-side validation)
    * @return     {Promise<T>}  Effectively the first argument
    */
   public wrap<T>(promise : Promise<T>, swallow? : boolean) : Promise<T> {
      this.start();

      return promise
         .then(a => (this.stop(), a))
         .catch(e => {
            this.stop();

            if(swallow !== true)
               return Promise.reject(e);
         });
   }
}
