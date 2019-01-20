@component('mail::message')
# smaug password reset

<span style="font-weight:700;">Hi {{ $user_name }},</span><br/><br/>

You recently requested to reset the password of your account.  

@component('mail::button', ['url' => URL::to("/password-reset/$token", [], true)
])
Reset your password
@endcomponent

Your,<br>
{{ config('app.name') }}
@endcomponent
