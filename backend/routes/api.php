<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Register
Route::post('/register', [AuthController::class, 'createAccount']);

// Login
Route::post('/login', [AuthController::class, 'accountLogin']);
