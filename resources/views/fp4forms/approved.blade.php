
  <form action="{{ url('documents.submit') }}" method="POST" >
    @csrf
    <input name="id"  type="hidden" value="{{ $document->id }}">

      <div class="col-xs-12 col-sm-12 col-md-12 text-center">           
        <button type="submit" name="approve" class="btn btn-primary">Approved</button>
      </div>
  <form>