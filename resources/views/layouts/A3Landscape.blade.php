<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>FMEA Spreadsheet</title>

  <!-- Normalize or reset CSS with your favorite library -->
  <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"> -->
    <link href="{{ asset('public/css/normalize.min.css') }}" rel="stylesheet">

  <!-- Load paper.css for happy printing -->
  <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/paper-css/0.4.1/paper.css"> -->
    <link href="{{ asset('public/css/paper.css') }}" rel="stylesheet">

  <!-- Set page size here: A5, A4 or A3 -->
  <!-- Set also "landscape" if you need -->
  	<style>
  		@page { size: A3 landscape }
  		
	</style>
</head>

<!-- Set "A5", "A4" or "A3" for class name -->
<!-- Set also "landscape" if you need -->
<body class="A3 landscape">

@yield('content')


</body>
</html>