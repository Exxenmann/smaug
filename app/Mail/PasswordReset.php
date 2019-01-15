<?php

namespace App\Mail;

use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class PasswordReset extends Mailable
{
    use Queueable, SerializesModels;

    protected $user;

    protected $token;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(User $user, $token) {
        $this->user = $user;
        $this->token = $token;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build() {
        return $this->subject('smaug - Reset your password')->markdown('emails.account.reset')->with([
            'user_name' => $this->user->firstname." ".$this->user->lastname,
            'token' => $this->token
        ]);
    }
}
