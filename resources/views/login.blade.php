<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>App</title>
        <link rel="stylesheet" src="{{ asset('css/reset.css')  }}">
    </head>
    <body class="antialiased">
        <form
            action="{{route('login.post')}}"
            method="POST">
            @csrf
            <input
                name="email"
                type="email"
                placeholder="EMAIL">
            <input
                name="password"
                type="password"
                placeholder="PASSWORD">
            <button type="submit">
                SUBMIT
            </button>
        </form>
    </body>
</html>
