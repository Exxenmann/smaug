import { Component, OnInit } from '@angular/core'
import * as $ from "jquery"

@Component({
   selector: 'modal-general',
   templateUrl: './modal-general.component.html',
   styleUrls: ['./modal-general.component.less']
})
export class ModalGeneralComponent implements OnInit {

   ngOnInit(){
      this.showoverlay()
   }

   scrollable : boolean;

   ok: Function = function() {}
   destroy: Function = function() {}
   closeModal: Function = function() {}

   btn_ok: Boolean = false
   btn_oktxt: String = "OK"

   btn_cancel: Boolean = false
   btn_canceltxt: String = ""

   modalheadline: String = ""
   modalbody: String = ""

   private hideoverlay(){
      $('div#modalOverlay').css('visibility','hidden')
      $('div#modalOverlay').css('opacity','0.0')
   }

   private showoverlay(){
      $('div#modalOverlay').css('visibility','visible')
      $('div#modalOverlay').css('opacity','0.4')
   }

   onCancel(): void{
      this.hideoverlay()
      this.closeModal()
      this.destroy()
   }

   onOk(): void{
      this.hideoverlay()
      this.closeModal()
      this.destroy()
      this.ok()
   }


}
