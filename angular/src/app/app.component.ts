import { Component } from '@angular/core';
import { TransitionService, Transition } from '@uirouter/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smaug';

   constructor(ts : TransitionService) {
      let criteria = { to: '**', from: '**' };
      ts.onSuccess(criteria, this.onPageChange.bind(this));
   }

   private onPageChange(transition : Transition) {
      let entering = transition.entering();
      if(!Array.isArray(entering) || entering.length === 0)
        return;
   }
}