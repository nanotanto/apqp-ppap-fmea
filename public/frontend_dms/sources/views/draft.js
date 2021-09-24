import {JetView} from "webix-jet";
// import {documents} from "models/documents";

export default class DraftView extends JetView{
	config(){
		return {
			type:"space",
			"rows": [
				{
					rows:[						
						{
							"css": "webix_dark",
							"view": "toolbar",
							"cols": [
								{ "view": "label", "label": "List Form Request" },
								// { "view": "button", "label": "Update Status", "autowidth": true, "name": "update" }
							]
						},
						{
							"url": "open_picsysdur",
							on:{
								"onAfterSelect":function(id){
									 $$("tbl_document").clearAll();   
									  $$("tbl_document").load("documents_select/"+id);     
								}
				            },
							ready:function(){ 
								this.adjustColumn("user_id"); 
								 this.adjustColumn("department_id"); 
								 this.adjustColumn("created_at"); 
								 this.adjustColumn("jenis"); 
								 this.adjustColumn("dokumen"); 
								 // this.adjustColumn("alasan"); 
								 this.adjustColumn("file"); 
							},
							scheme:{
								$init:function(row){
									row.user_id = (row.user || "") && row.user.name
									row.department_id = (row.department || "") && row.department.name
								}
							},
						"columns": [
							{ id:"edit", header:"", width:35, template:"{common.editIcon()}" },
							{
								"id": "id",
								"header": "Reg. No.",
								"fillspace": false,
								"sort": "string",
								"hidden": false
							},
							{ id:"file",	header:["Lampiran"], template:"<a target='_blank' href='uploads/#file#'>View</a>"},
							{
								"id": "user_id",
								"header": "Nama Pemohon",
								"fillspace": false,
								"sort": "string",
								"hidden": false,
								"width": 150
							},
							{
								"id": "department_id",
								"header": "Department",
								"sort": "string",
								"fillspace": false,
								"hidden": false,
								"width": 150
							},
							{ "id": "created_at", "header": "Tanggal", "sort": "string", "fillspace": false, "hidden": false },
							{
								"id": "jenis",
								"header": "Jenis Permohonan",
								"sort": "string",
								"width": 150,
								"fillspace": false,
								"hidden": false
							},
							{
								"id": "dokumen",
								"header": "Nama Dokumen",
								"sort": "string",
								"width": 150,
								"fillspace": false,
								"hidden": false
							},
							{
								"id": "alasan",
								"header": "Alasan Permohonan",
								"sort": "string",
								"fillspace": true,
								"hidden": false
							}
						],
						onClick:{
							"wxi-pencil":(e, id) => this.show("forms.fp4_form?id="+id.row)
						},				                            
						"view": "datatable",
						select:true
						}
					]
				},
				{
					rows:[						
						{
							"css": "webix_dark",
							"view": "toolbar",
							"cols": [
								{ "view": "label", "label": "List Document" },
								{ "label": "View All Publish", "view": "button", 
								click:()=>{
									$$("tbl_document").clearAll();   
									  $$("tbl_document").load("documents_publish/"+id);
								}
								},
								{ "label": "View All Draft", "view": "button", 
								click:()=>{
									$$("tbl_document").clearAll();   
									  $$("tbl_document").load("documents_draft/"+id);
								}
								},
								// { "label": "Revision Document", "view": "button", "name": "revisi" },
								{ "label": "Create New Document", "view": "button", "name": "new",
									click:() => this.show("forms.documentform")
								}
							]
						},
						{
							url: "documents_all",
							view: "datatable",
							id: "tbl_document",
							select: true,
							scheme:{
								$init:function(row){
									row.department_id = (row.department || "") && row.department.name
								}
							},
							columns: [
								{ id:"no",	header:["Document No.",{ content:"serverFilter"}], sort:"server",	width:180,	 template:"<a class='link' target='_blank' href='/documents_view/#id#'>#no#</a>"},
								{ id:"name",  fillspace:true,	header:["Document Name",{ content:"serverFilter"}], sort:"server"},
								{ id:"no_rev",	header:["Rev."], width:50},
								{ id:"date",	header:["effective Date"], width:100},
								{ id:"department_id",	header:["Department",{ content:"serverFilter"}], sort:"server", width:150},
								// { id:"detail", header:"", width:70, template:"<a class='detail' href='/#'>Detail</a>"}
								
							],					
							on:{
								"onresize":webix.once(function(){ 
									this.adjustRowHeight("name", true); 
								}),
								onBeforeLoad:function(){
									this.showOverlay("Loading...");
								},
								onAfterLoad:function(){
									this.hideOverlay();
								},
								"onAfterSelect":function(id){
				                                    $$("docstatus").clearAll();     
				                                    $$("docstatus").load("docstatus/"+id); 
				                                }
							},
						}
					]
				},
				{
					"cols": [
						{
							"rows": [
								{
									"cols": [
										{ "label": "Send to :", "options": "user_", "view": "combo" },
										{ "label": "Add", "view": "button", "height": 0, "width": 100, "name": "add" }
									]
								},
								{
									"url": "demo->5fd1ae8024ab08001840fc37",
									"columns": [
										{ "id": "name", "header": "Name", "fillspace": true, "sort": "string", "hidden": false },
										{ "id": "email", "header": "Email", "sort": "string", "fillspace": true, "hidden": false }
									],
									"view": "datatable"
								},
								{
									"css": "webix_dark",
									"view": "toolbar",
									"cols": [
										{ "view": "button", "label": "Send", "autowidth": true, "name": "send" }
									]
								}
							]
						},
						{gravity:2,
							"rows": [
								{ "label": "Status Approval :", "view": "label" },
								{ id:"docstatus", "view": "timeline", "scroll": "x", "layout": "x" }
							]
						}
					]
				},
				{	height:40, css:'webix_primary',
					"cols": [
						{ "label": "Create Memo Internal", "view": "button", "name": "memo" },
						{ "label": "Create Surat Edaran", "view": "button", "height": 0, "name": "edaran" },
						{ "label": "Create Surat Keputusan", "view": "button", "height": 0, "name": "keputusan" }
					],
					"borderless": false
				}
			]
		};
	}
	init(){
		// $$('tbl_document').sync(documents);
	}
}
