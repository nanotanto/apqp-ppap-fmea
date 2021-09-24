<!doctype html>
<html>
  <head>
    <title>View Drawing</title>
  </head>
  <body>
    <script type="text/javascript" src="{{ asset('public/js/tiff.min.js') }}"></script>
    <script type="text/javascript">

      var loadImage = function (filename) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'arraybuffer';
        xhr.open('GET', filename);
        xhr.onload = function (e) {
          var tiff = new Tiff({buffer: xhr.response});
          var width = tiff.width();
          var height = tiff.height();
          var canvas = tiff.toCanvas();
          if (canvas) {
            canvas.setAttribute('style', 'width:' + (width*0.3) +
              'px; height: ' + (height*0.3) + 'px');
            // var elem = document.createElement("div");
            // elem.innerHTML ='<div><a href="' + filename + '">' + filename +
            //               ' (width: ' + width + ', height:' + height + ')' +
            //               '</a></div>';
            // document.body.append(elem);
            document.body.append(canvas);
          }
        };
        xhr.send();
      }

      var queryString = window.location.search;
      console.log(queryString);

      const urlParams = new URLSearchParams(queryString);
      const file = urlParams.get('file')
      console.log(file);

      loadImage('public/uploads/'+file);

    </script>
  </body>
</html>
