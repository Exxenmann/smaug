import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

   isloggedin
   dev=false

   constructor() {

      if(window.location.origin.includes('192.168.'))
         this.dev=true

   }

}