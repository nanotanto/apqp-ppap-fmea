import {JetView} from "webix-jet";

var url = window.location.protocol +"//"+ window.location.hostname+":"+window.location.port+window.location.pathname;

export default class FP4FormView extends JetView{
	config(){	
		return {
			type:"space",
			rows:[
				{	id:"view_fp4form",
					rows:[
						{ type:"header", template:"Form Request FP4"},
						/*wjet::Settings*/
						{
							"id": 1610522962845,
							"cols": [
								{ "autoheight": false, "view": "form", "id": "formrequest",  "elementsConfig": { "required": true, "labelPosition": "top" },
									"rows": [
										{ "label": "ID", "view": "text", "name": "id", "labelWidth": 200, hidden:true },
										// { "view": "text", "label": "Nama Lengkap Pemohon", "name": "name", "id": 1610522963045, "labelWidth": 200 },
										{ "id": "opt_user", "label": "Nama Lengkap Pemohon", "view": "combo", readonly:true,
											"options": "user_", "name": "user_id", "labelWidth": 200 },
										{
											"label": "Department",readonly:true,
											"options": "department_",
											"view": "combo",
											"id": 1610522964018,
											"labelWidth": 200,
											"name": "department_id"
										},
										{
											"label": "Tanggal Permohonan",readonly:true,
											"view": "text",
											"id": 1610522964428,
											"labelWidth": 200,
											"name": "created_at"
										},
										{
											"label": "Jenis Permohonan",readonly:true,
											"view": "text",
											"id": 1610522964593,
											"labelWidth": 200,
											"name": "jenis"
										},
										{
											"label": "Jumlah Dokumen",readonly:true,
											"view": "text",
											"id": 1610522964737,
											"labelWidth": 200,
											"name": "jumlah"
										},
										{ "label": "Nama Dokumen", readonly:true,"view": "text", "id": "dokumen", "labelWidth": 200, "name": "dokumen" },
										{ "label": "Alasan Permohonan", readonly:true,"view": "textarea", "name": "alasan" },
										// { "label": "View Attachment", "view": "button", "height": 38, "name": "file" },
										{ "label": "Change Status", "options": [{id:0,value:""},{id:1, value:"Diterima"},{id:3, value:"Ditolak"}], "view": "combo", "name": "status" },
										{ "label": "Result Analysis", "view": "textarea", name:"analisa"},
										{ "label": "PIC SysDur", "options": "pic_sysdur", "view": "combo", "name": "admin_id" },
										// { "label": "Date", "value": "2021-01-13 14:29:23", "view": "datepicker", "name": "date_end" },
										{ "view": "button", "css": "webix_primary", "label": "Save", click: function() {										      

										      const form = $$("formrequest");
												if (form.validate()){
													var data = form.getValues();
													webix.confirm("Do you wont to save data ?").then(function(result){

														webix.extend($$("view_fp4form"), webix.ProgressBar);
														$$("view_fp4form").showProgress({
														   type:"icon",
														   // delay:3000
														});

														webix.send("updateForm", data);
													});
		                                        }
		                                        else
		                                        webix.message({ type:"error", text:"Form data is invalid" });
									    	}
										}
									],
									"type": "form",
									"borderless": 1,
									"scroll": "y"
								},
								{
									gravity:2,
									"rows": [
										{
											id:"tbl_fp4form",
											"url": "fp4forms_open",
											select:true,
				                            on:{
				                                "onAfterSelect":function(id){
				                                    $$("formstatus").clearAll();     
				                                    $$("formstatus").load("fp4status/"+id);    
				                                    $$("formrequest").clear();     
				                                    $$("formrequest").load("fp4forms_view/"+id);  
				                                }
				                            },
				                            ready:function(){ 
				                                this.adjustColumn("user_id"); 
				                                this.adjustColumn("department_id"); 
				                                this.adjustColumn("created_at"); 
				                                this.adjustColumn("jenis"); 
				                                this.adjustColumn("dokumen"); 
				                                this.adjustColumn("alasan"); 
				                                this.adjustColumn("file"); 
				                            },
					                        scheme:{
					                            $init:function(row){
					                            	row.user_id = (row.user || "") && row.user.name
					                            	row.department_id = (row.department || "") && row.department.name
												}
											},
											"columns": [

												{ id:"file",	header:["Lampiran"], template:"<a target='_blank' href='public/uploads/#file#'>View</a>"},
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
													"width": 250,
													"fillspace": false,
													"hidden": false
												}
											],
											"view": "datatable",
											"gravity": 2,
											"borderless": 0
										},
										{cols:[
											{
												url:"total_picsysdur",
												view:"datatable",
					                            ready:function(){ 
					                                this.adjustColumn("admin_id"); 
					                                this.adjustColumn("total"); 
					                            },
					                            scheme:{
					                            	$init:function(row){
					                            		row.admin_id = (row.admin || "") && row.admin.name
												    }
												},
												"columns": [												
													{
														"id": "admin_id",
														"header": "Nama PIC Sysdur",
														"sort": "string",
														"fillspace": true
													},										
													{
														"id": "total",
														"header": "Total Pekerjaan",
														"sort": "string",
														"fillspace": true
													}
												]
											},
											{ gravity:2,
												rows:[
													{ "label": "Status Form Request :", "view": "label", "borderless": 1 },
													{ "id": "formstatus", "view": "timeline", "layout": "x", "borderless": 1 }
												]
											}
										]}
									]
								}
							]
						}
					]
				}
			]			
		}
	}
}

		

