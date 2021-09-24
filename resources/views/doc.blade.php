@extends('layouts.app')

@section('content')
    <!-- App -->

    		<script type="text/javascript" charset="utf-8">
			webix.ui({
				view:"window",
				height:500,
			    width:500,
			    head:"Approval Document",
			    position:"center",
				body:{
					rows:[
						{
                        "autoheight": false,
                        "view": "form",
                        id:"form_document",
                        "rows": [
                            {
                                "rows": [
                                { view:"text", id:"part_id", name:"part_id", label:"part_id", hidden:true},
                                { "label": "Issued By", "view": "text", "name": "user_id", labelWidth:120 },
                                { "label": "Category", "view": "select", "name": "category_id", options:[{id:0, value:""},{id:1, value:"Proto"},{id:2, value:"N1-N5"},{id:3, value:"FTP"},{id:4, value:"N1000"},{id:5, value:"Initial Control"}], labelWidth:120 },
                                { "label": "Document Name", "view": "text", "name": "name", labelWidth:120 },
                                // { "label": "Attachment", "view": "text", "name": "file" },                                
                                {
                                    "height": 38,
                                    "cols": [
                                    { view:"label", width:120, "label": "Attachment", },
                                    {
                                        view:"uploader", upload:"/samples/server/upload",
                                        id:"upl1", name:"file",
                                        value:"View", 
                                        link:"doclist1", autosend:false
                                    },
                                    { view:"list", scroll:false, id:"doclist1", type:"uploader", autoheight:true, borderless:true },

                                    ]
                                },
                                // { "label": "Status", "view": "text", "name": "status", labelWidth:120 },
                                // { "label": "Sent_to", "view": "text", "name": "sent_to", labelWidth:120 },
                                
                                ]
                            },
                            {paddingY:20,
                                "cols": [
                                    { "view": "template", "role": "placeholder", "gravity": 4, "borderless": true },                               
                                    { id:"btn_save_document","label": "Send", "view": "button", "css": "webix_primary", "width": 100, 
                                    click:()=>{
                                        var data = $$("form_document").getValues();  

                                        webix.confirm({
                                            text:"The data will be Send. <br/> Are you sure?",
                                            ok:"Yes", cancel:"Cancel",
                                            callback: res => { 


                                                if (res){

                                                    this.saveDocuments(data);

                                                    // webix.ajax().post("http://localhost/myproject/NewModel/api/projects", data, webix.bind(function(text, data){
                                                        
                                                    //     var project = data.json();      
                                                    //     this.show("parts?project="+project.id); 
                                                    //  }, this));

                                                    this.getRoot().hide();  
                                                };
                                                    
                                            }
                                        });

                                    }
                                    },
                                ]
                            }
                        ],

            rules:{
                name:webix.rules.isNotEmpty,
            }
                    }
					]
				}
			}).show();
		</script>
@endsection
