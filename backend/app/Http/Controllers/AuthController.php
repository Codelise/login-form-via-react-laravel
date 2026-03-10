<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    // register
    public function createAccount(Request $request){
        $request->validate([
            'name' => ['required', 'min:4'],
            'email' => ['required', 'unique:users,email'],
            'password' => ['required', 'min:8', 'max:200'],
            'confirm-password' => 'required',
        ]);
        $createUser = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);
        
        $userToken = $createUser->createToken('auth_token')->plainTextToken;
        return response()->json([
            'user' => $createUser,
            'token' => $userToken
        ]);
    }

    // login 
    public function accountLogin(Request $request){
        $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'min:8', 'max:200']
        ]);
        if(Auth::attempt(['email' => $request->email, 'password'=>$request->password])){
            $findUser = User::where('email', $request->email)->first();
            $findUser->tokens()->delete();
            $newToken =  $findUser->createToken('auth_token')->plainTextToken;
            return response()->json(['user' => $findUser, 'newToken' => $newToken]);
        } else {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }
    }
}
