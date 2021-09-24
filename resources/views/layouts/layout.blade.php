<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', '') }}</title>
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script type="text/javascript" src="{{ asset('js/jquery-1.11.1.js') }}"></script>
    
</head>
<body>
    <div id="app">

        <!-- <main class="py-4"> -->
            <div class="container">
            @yield('content')
            </div>
        <!-- </main> -->
    </div>

    <script>
        function bacaGambar(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
            
                reader.onload = function (e) {
                    $('#gambar_nodin').attr('src', e.target.result);
                }
            
                reader.readAsDataURL(input.files[0]);
            }
        }

        $("#preview_gambar").change(function(){
            bacaGambar(this);
        });
    </script>
</body>
</html>