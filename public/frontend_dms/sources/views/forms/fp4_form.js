import {JetView} from "webix-jet";

export default class FP4Form extends JetView{
	config(){
		return {
			id:"formrequest2",
			view:"form", paddingY:20, paddingX:30,
			elementsConfig:{ labelWidth:100 },
			elements:[
				{ type:"header", height:45, template:"Form Request" },
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
										{ "label": "Alasan Permohonan", readonly:true,"view": "textarea", "name": "alasan", "labelWidth": 200 },
										// { "label": "View Attachment", "view": "button", "height": 38, "name": "file" },
										{ "label": "PIC SysDur", "options": "pic_sysdur", "view": "combo", "name": "admin_id", "labelWidth": 200, readonly:true },
										{ "label": "Result Analysis", "view": "textarea", name:"analisa", "labelWidth": 200},
										{ "label": "Change Status", "options": [{id:0,value:""},{id:1, value:"Diterima"},{id:2, value:"Selesai"}], "view": "combo", "name": "status", "labelWidth": 200 },
										// { "label": "Date", "value": "2021-01-13 14:29:23", "view": "datepicker", "name": "date_end" },
										{view:"label"},
										
				{
					margin:10,
					cols:[
						{
							view:"button", value:"<< Back", align:"center", width:120,
							click:() => this.getBack()
						},
						{
							view:"button", value:"Save", type:"form", align:"center", width:120, "css": "webix_primary",
							click:() => {
								const form = $$("formrequest2");
												if (form.validate()){
													var data = form.getValues();
													webix.confirm("Do you wont to save data ?").then(function(result){
														webix.send("updateForm2", data);
													});
		                                        }
		                                        else
		                                        webix.message({ type:"error", text:"Form data is invalid" });
							}
						},
						{}
					]
				}
			],
			rules:{

			}
		};
	}
	urlChange(){
		const id = this.getParam("id");
		$$("formrequest2").load("fp4forms_view/"+id);  		
	}
	getBack(){
		//clear values and validation
		const form = this.getRoot();
		form.clear();
		form.clearValidation();
		
		//show grid
		this.show("draft");
	}
}
