import { Component } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '@services/authentication.service';
import { LoadingoverlayService } from '@services/loadingoverlay.service';
import { ModalService } from '@services/modal.service';

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.component.html',
  styleUrls: ['./passwordreset.component.less']
})
export class PasswordResetComponent {

  formGroup : FormGroup;

  constructor(
    formBuilder : FormBuilder,
    private authService : AuthenticationService,
    private loadingOverlay : LoadingoverlayService,
    private stateService : StateService,
    private modalService : ModalService
  ) {
    this.formGroup = formBuilder.group({
      email : [ '', [ Validators.required, Validators.email ] ]
    });
  }

  onSubmit() {

    if(this.formGroup.invalid)
      return;

    let email = this.formGroup.value.email,
        promise = this.authService.requestPasswordReset(email),
        dialog = {
          title: 'E-Mail sent',
          message: `An E-Mail with the link to reset your password has been sent to ${email}.`
        };

    return this.loadingOverlay.wrap(promise)
      .then(() => this.modalService.info(dialog))
      .then(() => this.stateService.go('base.home'));
  }

}
