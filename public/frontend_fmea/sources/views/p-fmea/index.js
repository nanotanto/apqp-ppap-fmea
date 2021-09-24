import {JetView} from "webix-jet";
import {division} from "models/data_division";
import {user} from "models/data_user";
import {document_user} from "models/data_document_user";
import {status} from "models/data_document_user";
import {comment} from "models/data_document_user";

export default class IndexView extends JetView{
	config(){
		return {
			type:"wide", 
            rows:[
                {
                    cols:[
                        {   gravity:2,
                            rows:[
                                {
                                    "css": "webix_dark",
                                    "view": "toolbar",
                                    "height": 34,
                                    "cols": [
                                        { "view": "button", "label": "New P-FMEA", "autowidth": true, "height": 0, "css":"webix_primary",
                                            click:()=>this.app.show("/top/p-fmea.new_planning")
                                        },
                                        { id:"btn_view", "view": "button", "label": "View P-FMEA", disabled:true, "autowidth": true, "height": 0, "css":"webix_secondary",
                                            click:()=>{
                                                var fmea_id = $$("tbl_fmea").getSelectedId();
                                                this.app.show("/top/p-fmea.show?id="+fmea_id);
                                            }
                                        }
                                    ]
                                },
                                {
                                    id:"tbl_fmea",
                                    "view": "datatable", 
                                    "columns": [
                                        { id: 'id', hidden:true},                       
                                        { "id": "number", "header": "P-FMEA ID Number" },
                                        { "id": "subject", "header": "Subject", "fillspace": true },
                                        { "id": "division_id", "header": "Division", collection:division  }, 
                                        { "id": "issued", "header": "Prepared By" },                  
                                        { "id": "user_id", "header": "Issued By",  collection:user },  
                                        { "id": "status", "header": "Status" },      
                                        { header:"", template:"{common.trashIcon()}", width:40}
                                        

                                    ],
                                    onClick:{
                                        "wxi-trash":function(event, id, node){
                                            webix.confirm("Are you sure want to delete data ?").then(function(result){
                                                webix.ajax().headers({
                                                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                                }).post("products/delete/"+id).then(() =>{
                                                    webix.message("Deleted");                                                    
                                                    $$("tbl_fmea").remove(id);
                                                    $$('tbl_fmea').clearAll();
                                                    $$('tbl_fmea').load('products');
                                                });
                                            });
                                        }                    
                                    },                
                                    url: "products",
                                    select:true,
                                    ready: function(){
                                            this.adjustColumn('number');
                                            // this.adjustColumn('subject');
                                            this.adjustColumn('division_id');
                                            this.adjustColumn('issued');
                                            this.adjustColumn('user_id');
                                    },
                                    on:{
                                        "onAfterSelect":function(id){
                                            $$("btn_planning").enable();
                                            $$("btn_structure").enable();
                                            $$("btn_failure").enable();
                                            $$("btn_risk").enable();
                                            $$("btn_optimization").enable();

                                            $$('form_user').clear();
                                            $$('user_id').enable();
                                            $$('add_email').enable();
                                            $$('date').enable();
                                            $$('document_id').setValue(id);

                                            $$("tbl_user").sync(document_user, function(){
                                                this.filter(function(data) {
                                                    return data.document_id == id;
                                                });
                                            });

                                            $$("status_approval").clearAll();
                                            $$("comment").clearAll();

                                            $$("status_approval").sync(status, function(){
                                                    this.filter(function(data) {
                                                    return data.document_id == id;
                                                });
                                            });

                                            $$("comment").sync(comment, function(){
                                                    this.filter(function(data) {
                                                    return data.document_id == id;
                                                });
                                            });

                                            var record = this.getItem(id);
                                            if (record.status == 'Approved') {  
                                                $$("btn_view").enable();
                                            } else {
                                                $$("btn_view").disable();
                                            }
                                        },
                                    }
                                },                                
                            ]
                        },
                        {
                            rows:[
                                {
                                    gravity:1.5,
                                    rows:[
                                        {
                                            view:'toolbar',
                                            "cols": [
                                                { "view": "label", "label": "Send To" },
                                            ]
                                        },
                                        {
                                            cols:[
                                                {
                                                    view:'form',
                                                    id:"form_user",  
                                                    elementsConfig: { "labelPosition": "top" },
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
                                                                const id = $$('document_id').getValue();
                                                                console.log(id);
                                                                webix.ajax().
                                                                headers({'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}).
                                                                post("submitFMEA/"+id).then(() => {
                                                                    webix.alert("Has been sent");
                                                                    $$("tbl_fmea").clearAll();
                                                                    $$("tbl_fmea").load("products");
                                                                    }); 
                                                                }                               
                                                            }
                                                    ],
                                                    rules:{
                                                        user_id:webix.rules.isNotEmpty,
                                                        due_date:webix.rules.isNotEmpty,
                                                        }
                                                    }
                                            ]
                                        },
                                        {
                                            view:'datatable',
                                            id:'tbl_user',
                                            columns: [
                                                { "id": "id", "header": "ID", "fillspace": false, "sort": "string", "hidden": true, width:35 },
                                                { "id": "document_id", "header": "Doc ID", "fillspace": false, "sort": "string", "hidden": true, width:35 },
                                                { "id": "user_id", "header": "Name", "sort": "string", "fillspace": true, "hidden": false, collection:user  },
                                                { "id": "due_date", "header": "Due Date", "sort": "string", "fillspace": false, "hidden": false  },
                                                { header:"", template:"<span class='webix_icon wxi-trash' style='cursor:pointer;'></span>", width:35} 
                                            ],
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

                                        }
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
                                                {
                                                    "view": "timeline", id:"status_approval", 
                                                    // type:"alternate" ,
                                                    "layout": "x",
                                                    "item": {
                                                        "width": 100
                                                    }
                                                }
                                            ]
                                        },
                                {
                                    gravity:1.5,
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
                    "height": 34,
                    "cols": [
                        { "view": "label", "label": "Set up", "align": "center" },
                        { id:"btn_planning", "label": "Planning & Preparation", "view": "button", "height": 32, disabled:true,
                            click: () => {
                                var id = $$("tbl_fmea").getSelectedId();
                                this.app.show("/top/p-fmea.planning?id="+id);
                            }
                        },
                        { id:"btn_structure", "label": "Structure & Function Analysis", "view": "button", "height": 32, disabled:true,
                            click: () => {
                                var id = $$("tbl_fmea").getSelectedId();
                                this.app.show("/top/p-fmea.structure?id="+id);
                            }
                        },
                        { id:"btn_failure", "label": "Failure Analysis", "view": "button", "height": 32, disabled:true,
                            click: () => {
                                var id = $$("tbl_fmea").getSelectedId();
                                this.app.show("/top/p-fmea.mode?id="+id);
                            }
                        },
                        { id:"btn_risk", "label": "Risk Analysis", "view": "button", "height": 32, disabled:true,
                            click: () => {
                                var id = $$("tbl_fmea").getSelectedId();
                                this.app.show("/top/p-fmea.risk?id="+id);
                            }
                        },
                        { id:"btn_optimization", "label": "Optimization", "view": "button", "height": 32, disabled:true,
                            click: () => {
                                var id = $$("tbl_fmea").getSelectedId();
                                this.app.show("/top/p-fmea.optimization?id="+id);
                            }
                        }
                    ],                    
                    "padding": { "left": 10, "right": 10 }
                }
            ]

            
		}
    }

    saveDocumentUser(values){
        document_user.add(values);
        webix.ajax().post("api/document_users", values);
    }    
}
