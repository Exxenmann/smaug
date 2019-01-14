import {
  Component,
  NgModule,
  ViewChild,
  OnInit,
  ViewContainerRef,
  Compiler,
  ReflectiveInjector,
  Injectable,
  Injector,
  ComponentRef,
  ApplicationRef,
  EmbeddedViewRef,
  ComponentFactoryResolver
} from "@angular/core"

import {
  of,
  Observable,
  Subject,
  BehaviorSubject,
  ReplaySubject
} from "rxjs"

import { AppModule } from "../app.module"
import { ModalGeneralComponent } from '@components/modals/modal-general/modal-general.component';
import * as $ from "jquery"

export type InfoModalData = {
   title : string,
   message : string,
   ok? : string
};

@Injectable({
  providedIn: 'root'
})
export class ModalService {

   // here we hold our placeholder
   private vcRef: ViewContainerRef;
   // here we hold our injector
   // private injector: Injector
   // we can use this to determine z-index of multiple modals
   public activeInstances: number = 0
    
   constructor(
      private compiler: Compiler,
      private appRef : ApplicationRef,
      private factoryResolver : ComponentFactoryResolver,
      private injector : Injector
   ) {

   }

   /**
    * This method is only kept for backwards-compatibility
    */
   registerViewContainerRef(vcRef: ViewContainerRef): void {
   }

   /**
    * This method is only kept for backwards-compatibility
    */
   registerInjector(injector: Injector): void {
   }

   create<T>(component: any, parameters?: Object): ReplaySubject<ComponentRef<T>> {

      // we return a stream so we can  access the componentref
      let componentRef$ = new ReplaySubject<ComponentRef<T>>()

      let factory = this.factoryResolver.resolveComponentFactory(component),
          ref = factory.create(this.injector),
          elem = (ref.hostView as EmbeddedViewRef<T>).rootNodes[0],
          destroy = ref.destroy.bind(ref);

      (ref.instance as any).destroy = (...args) => {
         document.body.removeChild(elem)
         destroy(...args)
      }

      Object.assign(ref.instance, parameters)

      this.appRef.attachView(ref.hostView);
      document.body.appendChild(elem);

      componentRef$.next(ref as ComponentRef<T>)

      return componentRef$
   }

   public info(data : InfoModalData) {

      let params = {
         modalheadline: data.title,
         modalbody: data.message,
         btn_ok: true,
         btn_oktxt: data.ok || 'OK'
      }

      return new Promise(resolve => {
         this.create<ModalGeneralComponent>(ModalGeneralComponent, params)
            .subscribe(ref => {
               ref.instance.ok = resolve;
            })
      })
   }
}
