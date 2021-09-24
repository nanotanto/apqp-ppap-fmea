@extends('layouts.app')


@section('content')
<div class="container">    
    <div style="margin-top: 2%;"></div>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Approval Request') }}</div>

                <div class="card-body">
                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('FMEA No :') }}</label>
                              <div class="col-md-6">
                                <label class="col-form-label text-md-left">{{ $product->number }}</label>
                              </div>
                        </div>
                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Subject :') }}</label>
                              <div class="col-md-6">
                                <label class="col-form-label text-md-left">{{ $product->name }}</label>
                              </div>
                        </div>
                        <div class="form-group row">
                            <label for="file" class="col-md-4 col-form-label text-md-right">{{ __('Attachment :') }}</label>
                              <div class="col-md-6">
                                <a  class="col-form-a text-md-left" href="../fmea/{{$product->id}}" target="_blank">View FMEA</a>
                              </div>
                        </div>

                        <form method="post">
                        @csrf

                        <input name="id"  type="hidden" value="{{ $product->id }}">

                        <div class="form-group row">
                            <label for="comment" class="col-md-4 col-form-label text-md-right">{{ __('Comment :') }}</label>

                            <div class="col-md-6">
                                <textarea  class="form-control" name="body"></textarea>

                                <input type="hidden" name="document_id" value="{{ $product->id }}" />
                                <input type="hidden" name="product_id" value="{{ $product->id }}" />
                                <input type="hidden" name="user_id" value="{{ $product->user_id }}" />
                            </div>
                        </div>

                       
                        @if($product->user_id != Auth::user()->id )     
                      
                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-success" formaction="{{ url('updateStatusFMEA') }}">
                                        {{ __('Approve') }}
                                    </button>

                                    <!-- <button type="submit" class="btn btn-danger" formaction="{{ route('comments.store') }}">
                                        {{ __('Reject') }}
                                    </button> -->

                                    <input type="submit" name="comment" class="btn btn-danger" value="Reject" formaction="{{ url('RejectFMEA') }}"/>
                            </div>
                          </div>
                        
                        @endif
                        
                    </form>

                </div>

            </div>
        </div>

      </br>

        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Comments') }}</div>                  
                <div class="card-body">
                 @include('fmea.commentsDisplay', ['comments' => $product->comments, 'product_id' => $product->id])
                </div>
            </div>
        </div>

    </div>
</div>

@endsection