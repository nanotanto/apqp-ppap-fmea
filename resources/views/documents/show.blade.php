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
                            <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Document Name :') }}</label>
                              <div class="col-md-6">
                                <label class="col-form-label text-md-left">{{ $document->name }}</label>
                              </div>
                        </div>
                        <div class="form-group row">
                            <label for="file" class="col-md-4 col-form-label text-md-right">{{ __('Attachment :') }}</label>
                              <div class="col-md-6">
                                <a  class="col-form-a text-md-left" href="../public/uploads/{{$document->file}}" target="_blank">{{ $document->file }}</a>
                              </div>
                        </div>

                        <form method="post">
                        @csrf

                        <input name="id"  type="hidden" value="{{ $document->id }}">

                        <div class="form-group row">
                            <label for="comment" class="col-md-4 col-form-label text-md-right">{{ __('Comment :') }}</label>

                            <div class="col-md-6">
                                <textarea  class="form-control" name="body"></textarea>

                                <input type="hidden" name="document_id" value="{{ $document->id }}" />
                                <input type="hidden" name="user_id" value="{{ $document->user_id }}" />
                            </div>
                        </div>

                        @if($document->user_id != Auth::user()->id )       
                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-success" formaction="{{ url('updatedocstatus') }}">
                                        {{ __('Approve') }}
                                    </button>

                                    <!-- <button type="submit" class="btn btn-danger" formaction="{{ route('comments.store') }}">
                                        {{ __('Reject') }}
                                    </button> -->

                                    <input type="submit" name="comment" class="btn btn-danger" value="Reject" formaction="{{ route('comments.store') }}"/>
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
                    @include('documents.commentsDisplay', ['comments' => $document->comments, 'document_id' => $document->id])
                </div>
            </div>
        </div>

    </div>
</div>

@endsection