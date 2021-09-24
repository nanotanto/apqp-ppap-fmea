<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', '') }}</title>
    <!-- Scripts -->
    <script src="{{ asset('public/js/app.js') }}" defer></script>
    <!-- Fonts -->
    <!-- <link rel="dns-prefetch" href="https://fonts.gstatic.com"> -->
    <!-- <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css"> -->
    <!-- Styles -->
    <link href="{{ asset('public/css/app.css') }}" rel="stylesheet">
    <!-- Webix -->
    <script type="text/javascript" src="{{ asset('public/webix/webix.min.js') }}"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('public/webix/skins/compact.min.css') }}">
    <!-- Component TinyMCE Text Editor -->
    <script type="text/javascript" src="{{ asset('public/webix/components/tinymce/tinymce.js') }}"></script>
    <!-- <script type="text/javascript" src="{{ asset('tinymce/tinymce.min.js') }}"></script> -->

    <link rel="stylesheet" href="{{asset('public/MaterialDesign/css/materialdesignicons.css')}}" type="text/css" charset="utf-8">
    
    
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-dark navbar-laravel bg-primary">
            <div class="container-fluid">
                @role('Superadmin')
                <a class="navbar-brand" href="{{ url('/admin/#!') }}">
                    New Model Preparation
                </a>
                @else
                <a class="navbar-brand" href="{{ url('/') }}">
                    New Model Preparation
                </a>
                @endrole
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
    
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <ul class="navbar-nav mr-auto"></ul>


                    
                    <ul class="navbar-nav ml-auto">
                        
                        @guest
                            <li><a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a></li>
                            <li><a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a></li>
                        @else
                            <li><a style="color: #fff" class="nav-link" href="{{ url('dms') }}">DMS</a></li>
                            <li><a style="color: #fff" class="nav-link" href="{{ url('fmea') }}">FMEA</a></li>
                        @role('Superadmin')
                            <li><a class="nav-link" href="{{ route('users.index') }}">Manage Users</a></li>
                            <li><a class="nav-link" href="{{ route('roles.index') }}">Manage Role</a></li>
                            <li><a class="nav-link" href="{{ route('companies.index') }}">Manage Company</a></li>
                            <li><a class="nav-link" href="{{ route('departments.index') }}">Manage Department</a></li>
                            <li><a class="nav-link" href="{{ route('positions.index') }}">Manage Position</a></li>
                            <!-- <li><a class="nav-link" href="{{ route('documents.index') }}">Manage Document</a></li> -->
                        @endrole


                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>


                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>


                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>


        <!-- <main class="py-4"> -->
            <div class="container">
            @yield('content')
            </div>
        <!-- </main> -->
    </div>
</body>
</html>