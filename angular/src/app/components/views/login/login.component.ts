import { Component, OnInit } from '@angular/core';
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

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private stateService: StateService,
    private loadingoverlayService: LoadingoverlayService,
    private modalService: ModalService
  ) { }

  onSubmit() {
    
    // stop here if form is invalid
    if (this.loginForm.invalid) return

    this.loadingoverlayService.start()

    this.authenticationService.login(this.f.email.value, this.f.password.value)
    .then(
       () => {
          // SUCCESS
          this.loadingoverlayService.stop()
          this.stateService.go('base.dashboard')
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

  get f() { return this.loginForm.controls }

}
