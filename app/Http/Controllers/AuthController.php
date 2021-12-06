<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\LoginRequest;

class AuthController extends Controller
{
    function index() {
        return view('login');
    }

    function login(LoginRequest $req) {
        $req->authenticate();

        $req->session()->regenerate();
        return redirect()->intended(route('home.index'));
    }

    function logout(Request $req) {
        Auth::logout();

        $req->session()->invalidate();
        $req->session()->regenerateToken();

        return redirect()->route('login.index');
    }
}
