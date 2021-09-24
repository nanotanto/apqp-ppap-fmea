@extends('layouts.app')

@section('content')
<!-- <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    You are logged in!
                </div>
            </div>
        </div>
    </div>
</div> -->
    
    <script type="text/javascript">
        webix.ready(function(){
            if (webix.CustomScroll)
                webix.CustomScroll.init();
                
            const app = new dms.App();
            app.render(document.body);
        });
    </script>

    <!-- App -->
    <script type="text/javascript" src="codebase/app.js"></script>
@endsection
