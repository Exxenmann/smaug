<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\User;
use App\Mail\PasswordReset;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class ForgotPasswordController extends Controller
{
   /**
    * Tokens are valid for this duration, which is given in seconds.
    *
    * @var        integer
    */
   private $validDuration = 30 * 60;

   private function encodeParts($data, $t) {
      return bin2hex($data) . '.' . $t;
   }

   private function generateToken($secret, $data) {
      $str = $this->encodeParts($data, time());
      $signature = hash_hmac('sha512', $str, $secret, true);

      return bin2hex("$str.$signature");
   }

   private function parseToken($token) {
      $str = hex2bin($token);
      $parts = explode('.', $str);

      return [
         'data' => hex2bin($parts[0]),
         'timestamp' => intval($parts[1]),
         'signature' => $parts[2]
      ];
   }

   private function validateToken($secret, $token) {
      $parts = $this->parseToken($token);
      $now = time();

      if($now - $parts['timestamp'] > $this->validDuration)
         return false;

      $data = $this->encodeParts($parts['data'], $parts['timestamp']);
      $signature = hash_hmac('sha512', $data, $secret, true);

      return $signature == $parts['signature'];
   }

   public function createToken(Request $request) {
      $user = User::where('email', $request->email)->firstOrFail();
      $userSecret = random_bytes(16);
      $secret = env('APP_KEY') . $userSecret;

      $user->reset_secret = base64_encode($userSecret);
      $token = $this->generateToken($secret, $user->id);

      $user->update();

      $mailContent = new PasswordReset($user, $token);

      $name = $user->firstname." ".$user->lastname;

      Mail::to([$name => $request->email])->queue($mailContent);

      return [ 'success' => true ];
   }

   public function useToken(Request $request) {
      $this->validate($request, [
         'token' => 'required|string',
         'password' => 'required|string|min:6|confirmed'
      ]);

      $token = $request->token;
      $userId = $this->parseToken($token)['data'];

      $user = User::findOrFail($userId);
      $secret = env('APP_KEY') . base64_decode($user->reset_secret);

      $user->reset_secret = null;
      $user->update();

      if(!$this->validateToken($secret, $token)) {
         return ['success' => false];
      }

      $user->password = Hash::make($request->password);
      $user->update();

      return ['success' => true];
   }
}
