@extends('layouts.app')

@section('content')
    <!-- App -->
    <script src="{{ asset('public/frontend_fmea/codebase/app.js') }}" defer></script>
    	<script type="text/javascript">
		webix.ready(function(){
			if (webix.CustomScroll)
				webix.CustomScroll.init();

			const app = new fmea.App();
			app.render(document.body);
		});
	</script>
@endsection
