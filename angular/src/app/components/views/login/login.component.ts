import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms'
import { AuthenticationService } from '@services/authentication.service'
import { LoadingoverlayService } from '@services/loadingoverlay.service'
import { ModalService } from '@services/modal.service'
import { StateService } from '@uirouter/angular'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  submitted = false

  @Output() onSubmit_event: EventEmitter<any> = new EventEmitter()

  constructor(
    private formBuilder: FormBuilder,
    // private userService: UserService,
    private authenticationService: AuthenticationService,
    private stateService: StateService,
    private loadingoverlayService: LoadingoverlayService,
    private modalService: ModalService
  ) { }

   onSubmit() {
      this.submitted = true
      
      // stop here if form is invalid
      if (this.loginForm.invalid) return

      this.onSubmit_event.emit()
      this.loadingoverlayService.start()

      this.authenticationService.login(this.f.email.value, this.f.password.value)
      .then(
         () => {
            // SUCCESS
            this.loadingoverlayService.stop()
            // this.stateService.go('base.backend')
            console.log("login successfull")
         },
         () => {
            // ERROR
         }
      )
   }

   ngOnInit() {
      this.loginForm = this.formBuilder.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        email: ['', [Validators.required, Validators.email]]
      });
   }

   register(){
      // button itself handles stateservice.goto

      // currently only closes dialog so we use it
      this.onSubmit_event.emit()
   }

   get f() { return this.loginForm.controls }

}
