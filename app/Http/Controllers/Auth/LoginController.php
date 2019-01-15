<?php

namespace App\Http\Controllers\Auth;

use App\User;
use JWTAuth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class LoginController extends Controller
{

   /**
   *  Some description
   *  
   *  @param Request $request
   *  
   *  @return Response
   */
   public function login(Request $request){
      $this->validate($request, [
         'email' => 'required|string|email|max:255',
         'password'=> 'required'
      ]);

      $user = User::where('email', $request->email)->first();

      if(empty($user)){
         return response()->json(['error' => 'invalid_credentials'], 401);
      }

      if(!$user->confirmed){
         return response()->json(['error' => 'user_not_confirmed'], 401);
      }

      $credentials = $request->only('email', 'password');
      try {
         if (! $token = JWTAuth::attempt($credentials)) {
            return response()->json(['error' => 'invalid_credentials'], 401);
         }
      } catch (JWTException $e) {
         return response()->json(['error' => 'could_not_create_token'], 500);
      }

      return compact('token', 'user');
   }

}
