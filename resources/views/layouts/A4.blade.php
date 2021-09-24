<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Document</title>

  <!-- Normalize or reset CSS with your favorite library -->
  <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"> -->
    <link href="{{ asset('public/css/normalize.min.css') }}" rel="stylesheet">

  <!-- Load paper.css for happy printing -->
  <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/paper-css/0.4.1/paper.css"> -->
    <link href="{{ asset('public/css/paper.css') }}" rel="stylesheet">

  <!-- Set page size here: A5, A4 or A3 -->
  <!-- Set also "landscape" if you need -->
  	<style>
  		@page { size: A4 }
  		section {
  			padding: 3.5cm 1.5cm 3.5cm 1.5cm;
  		}
  		header,
		footer {
		  position: absolute;
		  left: 0;
		  right: 0;
		  background-color: #fff;
		  padding-right: 1.5cm;
		  padding-left: 1.5cm;
		  text-align: center;
		}

		header {
		  top: 0;
		  padding-top: 3.5mm;
		  padding-bottom: 3mm;
		}
		footer {
		  bottom: 0;
		  color: #000;
		  padding-top: 15mm;
		  padding-bottom: 5mm;
		}
		footer::after{			
		  font-size: 10pt;	
		  content:"Dokumen ini hanya digunakan untuk kepentingan PT. Yamaha Motor Parts Manufacturing Indonesia";
		}
		header::after{			
		  content:"";
		}
	</style>
</head>

<!-- Set "A5", "A4" or "A3" for class name -->
<!-- Set also "landscape" if you need -->
<body class="A4">

@yield('content')


</body>
</html>