import {JetView} from "webix-jet";
import PartID from "views/documents/part_id";
import {documents} from "models/data_document";
import {status} from "models/data_status";
import {category} from "models/data_category";
import {user} from "models/data_user";
import {document_user} from "models/data_document_user";
import DocumentNew from "views/documents/document_new";
import DocumentView from "views/documents/document_view";
import {comment} from "models/data_comment";



export default class DataView extends JetView{
	config(){
		return { type:'form',
	"rows": [
		{
			"css": "webix_dark",
			"view": "toolbar",
			"height": 35,
			"cols": [
				{ "icon": "wxi-angle-double-left", "view": "icon", "height": 0, "width": 30, 
                    click:()=>{
                    	const id = $$("pro_id").getValue();                    	
                        this.show("parts?project="+id); 
                    } },
				{ "view": "label", "label": "DOCUMENTS", "align": "center" },
				{ "icon": "wxi-close", "view": "icon", "height": 0, "width": 30, 
                    click:()=>{
                    	// const id = $$("pro_id").getValue();                    	
                     //    this.show("parts?project="+id); 
                     this.show("projects"); 
                    }
                }
			]
		},
		{	
			$subview:PartID
		},
		{
			gravity:7,
			"cols": [
				{
					"rows": [
						{
							"css": "webix_dark",
							"view": "toolbar",
							"cols": [
								{ "view": "label", "label": "List Documents" },
								{ "view": "button", "label": "Add Document", "autowidth": true, "css": "webix_primary",
		                            click:()=> {
		                                $$("form_document").clear();
		                                const part_id = this.getParam("part");
		                                $$("part_id").setValue(part_id);
		                                this.WinDocumentNew.showWindow();
		                            }
		                        }
							]
						},
						{
							// "data": documents,
							"columns": [
                        		{ header:"", template:"<span class='webix_icon wxi-file' style='cursor:pointer;'></span>", width:40}, 
								{ "id": "name", "header": "Document Name", "fillspace": true, "hidden": false },
								{ "id": "file", "header": "Attachment", "fillspace": true, "hidden": true },
								{ "id": "category_id", "header": "Category", "width": 100, "hidden": false, collection:category },
								{ "id": "user_id", "header": "Issued By", "width": 150, "hidden": false, collection:user },
								{ "id": "status", "header": "Status", "fillspace": false, "hidden": false },
								// { "id": "sent_to", "header": "Sent to", "fillspace": false, "hidden": false },
                        		{ header:"", template:"<span class='webix_icon wxi-pencil' style='cursor:pointer;'></span> | <span class='webix_icon wxi-trash' style='cursor:pointer;'></span>", width:70} 
							],
							"view": "datatable",
							editable:true,
                    		select:true,
                    		id:"tbl_doc",
                    		on:{
                    			"onAfterSelect":function(id){
                    				$$("status_approval").clearAll();
                    				$$("comment").clearAll();
                    				// $$("status_approval").parse(status.getItem(id))

                    				$$("status_approval").sync(status, function(){
							                this.filter(function(data) {
							                return data.document_id == id;
							            });
							        });

							        $$("tbl_user").sync(document_user, function(){
							                this.filter(function(data) {
							                return data.document_id == id;
							            });
							        });

							        $$("comment").sync(comment, function(){
							                this.filter(function(data) {
							                return data.document_id == id;
							            });
							        });


							        $$('form_user').clear();
							        $$('user_id').enable();
							        $$('add_email').enable();
							        $$('date').enable();
							        $$('document_id').setValue(id);

                    			}
                    		},

		                    onClick:{
		                        "wxi-trash":(e, id) => {
		                            webix.confirm({
		                                text:"The data will be deleted. <br/> Are you sure?",
		                                ok:"Yes", cancel:"Cancel",
		                                callback: res => {              
		        
		                                    if (res){
            									const part_id = this.getParam("part");
		                                        $$('tbl_doc').clearAll();

		                                        documents.remove(id.row);
		                                        webix.ajax().headers({'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}).del("documents/"+id).then(() => {
		                                        	$$("tbl_doc").load("document/"+part_id);
									            });


            
		                                        // webix.ajax().del("http://localhost/myproject/NewModel/api/parts/"+id).then(function(){
		                                            // parts.remove(id.row);
		                                        // $$("tbl_part").clearAll();
		                                        // const project_id = this.getParam("project");
		                                        // $$("tbl_part").load("http://localhost/myproject/NewModel/api/part/"+project_id);

		                                        // });                             
		                                    };
		                                        
		                                }
		                            });
		                        },
		                        
		                        "wxi-pencil":(e, id) =>{

		                            $$("form_document").clear();
		                            documents.waitData.then(()=>{                                
		                                if (id && documents.exists(id)){
		                                    $$("form_document").setValues(documents.getItem(id));
		                                }
		                            });

		                            this.WinDocumentNew.showWindow();
		                        },
		                        
		                        "wxi-file":(e, id) =>{

		                            // $$("form_document_view").clear();
		                            // documents.waitData.then(()=>{                                
		                            //     if (id && documents.exists(id)){
		                            //         $$("form_document_view").setValues(documents.getItem(id));
		                            //     }
		                            // });
	                            	                            

			                        var record = $$('tbl_doc').getItem(id);

	 								if (record.status == 'Approved') {	

										//you can access data fields directly
										var file = record.file;

			                            // window.open("public/uploads/"+file);
			                            window.open("documents_view/"+record.id);

	        							// $$("frame-body").load("/documents/"+id)

			                            // this.WinDocumentView.showWindow();

		                        	}


		                        },
		                        
		                    }
						}
					],
					// "gravity": 1
				},
				{
					rows:[
						{
							// type:"wide",
							cols:[ 
								{
gravity:1.5,
								"rows": [
									{
										"view": "toolbar",
										"cols": [
											{ "view": "label", "label": "Send To" },
										]
									},
									{
										"cols": [
											{
												"rows": [
													{
														"cols": [
															{
																"view": "form", 
																id:"form_user",  "elementsConfig": { "labelPosition": "top" },
																cols:[
																	{ name:"document_id", view:"text", id:"document_id", hidden:true},
																	{ name:"user_id", label:'Name', "options": user, "view": "combo", disabled:true, id:"user_id", gravity:1.5 },
																	{ name:"due_date", label:'Due Date',"view": "datepicker", disabled:true, id:"date" },
																	{ "label": "Add", "view": "button", id:"add_email", disabled:true, "height": 0, "width": 50, "name": "add", css:"webix_primary",
																		click:()=>{

                                        									if ($$("form_user").validate()) {
									                                        	var data = $$("form_user").getValues();  
									                                        	this.saveDocumentUser(data);
									                                        	$$('send_email').enable();
                                        									}
									                                    }
																	},

															{ id:"send_email", "view": "button", "label": "Send", disabled:true,  "autowidth": true, "name": "send", css:"webix_secondary ",
																click:()=>{
																	// webix.extend($$('tbl_doc'), webix.ProgressBar);

									        //                         $$("tbl_doc").showProgress({
									        //                            type:"icon",
									        //                            delay:5000,
									        //                            hide:true
									        //                         });

																	const id = $$('document_id').getValue();
																	console.log(id);
																	webix.ajax().post("api/submitDoc/"+id).then(() => {
																		webix.alert("Has been sent");
																		 const part_id = this.getParam("part");
																		 $$("tbl_doc").clearAll();
															             $$("tbl_doc").load("document/"+part_id);
														            });	

																}								
															}
																],

													            rules:{
													                user_id:webix.rules.isNotEmpty,
													                due_date:webix.rules.isNotEmpty,
													            }
															},
															]
													},
													{
														// "url": "demo->5fd1ae8024ab08001840fc37",
														"columns": [
															{ "id": "id", "header": "ID", "fillspace": false, "sort": "string", "hidden": true, width:35 },
															{ "id": "document_id", "header": "Doc ID", "fillspace": false, "sort": "string", "hidden": true, width:35 },
															{ "id": "user_id", "header": "Name", "sort": "string", "fillspace": true, "hidden": false, collection:user  },
															{ "id": "due_date", "header": "Due Date", "sort": "string", "fillspace": false, "hidden": false  },
	                        								{ header:"", template:"<span class='webix_icon wxi-trash' style='cursor:pointer;'></span>", width:35} 
														],
														id:"tbl_user",
														"view": "datatable",
														onClick:{
			                        "wxi-trash":(e, id) => {
			                            webix.confirm({
			                                text:"The data will be deleted. <br/> Are you sure?",
			                                ok:"Yes", cancel:"Cancel",
			                                callback: res => {              
			        
			                                    if (res){
			                                        document_user.remove(id.row);
			                                        webix.ajax().del("api/document_users/"+id);                           
			                                    };
			                                        
			                                }
			                            });
			                        },		                        
			                        
			                    }
													},
													// {
													// 	css:{"background":"#fff !important"},
													// 	"view": "toolbar",
													// 	"cols": [
													// 		{},
													// 		{ "view": "button", "label": "Send", "autowidth": true, "name": "send", css:"webix_primary",
													// 			click:()=>{
													// 				const id = $$('document_id').getValue();
													// 				console.log(id);
													// 				webix.ajax().post("/api/submitDoc/"+id);
													// 				// webix.ajax().post("/submitForm");		
													// 				}								
													// 		}
													// 	]
													// }
												]
											}
										]
									},
								]
							},

								{ 
								"rows": [
									{
										"css": "webix_dark",
										"view": "toolbar",
										"cols": [
											{ "view": "label", "label": "Status Approval" }
										]
									},
									{"view": "timeline", id:"status_approval", type:"alternate" }
								]
							}
							]
						},
						
						{
							"rows": [
								{
									"css": "webix_dark",
									"view": "toolbar",
									"cols": [
										{ "view": "label", "label": "Comments" }
									]
								},
								{
									"view": "comments", 
									id:"comment",
									readonly:true,
									// data:comment,
									users:user

								}
							]
						}
					]
				}
				
			]
		},
		{
			"css": "webix_dark",
			"view": "toolbar",
			"height": 40,
			"cols": [
    //             { "label": "All", "view": "button", "height": 32 },
    //             { "label": "Proto", "view": "button", "height": 32 },
				// { "label": "N1-N5", "view": "button", "height": 32, "id": 1606719931916 },
    //             { "label": "FTP", "view": "button", "height": 32, "id": 1606719931917 },
    //             { "label": "N1000", "view": "button", "height": 32, "id": 1606719931918 },
    //             { "label": "Initial Control", "view": "button", "height": 32 },

				// { "label": "Back", "view": "button", "height": 0, "width": 100, 
    //                 click:()=>{
    //                 	const id = $$("pro_id").getValue();                    	
    //                     this.show("parts?project="+id); 
    //                 } },
				// { "view": "label" },
				// { "label": "Next", "view": "button", "height": 0, "width": 100, "css": "webix_danger" }
			],
			"padding": { "left": 10, "right": 10 }
		}
	]
};
	}
	init(view){
		// view.parse(data);
        this.WinDocumentNew = this.ui(DocumentNew); 
        this.WinDocumentView = this.ui(DocumentView); 
	}
    urlChange(view, url){
    	$$("status_approval").clearAll();
        // view.clearAll();

        // const id = this.getParam("project");
        // view.load("http://localhost/myproject/NewModel/api/part/"+id);

        documents.waitData.then(()=>{
            const part_id = this.getParam("part");
            const category_id = this.getParam("category");

            // $$("tbl_doc").load("api/document/"+part_id);
            $$("tbl_doc").load("document/"+part_id);
            
            // if (part_id && documents.exists(part_id)){
            //     // view.parse(parts.getItem(part_id));
            //     $$("tbl_doc").sync(documents, function(){
            //         this.filter(function(data) {
            //             // return data.part_id == part_id && data.division_id == 2;
            //             if (category_id >= 1) {
            //             	return data.part_id == part_id && data.category_id == category_id;
            //             } else {
            //             	return data.part_id == part_id;                       	
            //             }
            //         });
            //     });
            // }
        });

    }
        saveDocumentUser(values){
        // values.id ? documents.updateItem(values.id,values) : documents.add(values);

            document_user.add(values);
            webix.ajax().post("api/document_users", values);


    }
}