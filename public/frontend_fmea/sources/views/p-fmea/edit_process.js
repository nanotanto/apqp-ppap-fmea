import {JetView} from "webix-jet";

export default class EditProcessView extends JetView{
	config(){
		return {
            view:"popup",
            position:"center",
            id:'pop_process',
            width:900,
            height:350,
            select:true,
            body:{
                type:"wide", rows:[
                    {
                        "css": "webix_dark",
                        "view": "toolbar",
                        "height": 35,
                        "cols": [
                            { "view": "label", "label": "EDIT PROCESS ITEM", "align": "center" },
                            //{ "icon": "wxi-close", "view": "icon", "height": 0, "width": 30 }
                        ]
                    },
                    {
                        "autoheight": false,
                        "view": "form",
                        id:"form_process2",
                        "rows": [
                            {
                                "cols": [
                                    { id:'id_process2',"label": "ID process :", "view": "text", "labelPosition": "top", "name": "id", hidden:true, },
                                    { name:"product_id", "label": "ID", "view": "text", "labelPosition": "top", hidden:true, },
                                    { "label": "Process Item Name :", "view": "text", "labelPosition": "top", "name": "name" },
                                    { "label": "Function of The Process Item (Your Plant) :", "view": "text", "labelPosition": "top", "name": "function" }
                                ]
                            },
                            {
                                "cols": [
                                    { "view": "label", "height": 0 },
                                    { "label": "Function of The Process Item (Ship to Plant) :", "view": "text", "labelPosition": "top", "name": "function2" }
                                ]
                            },
                            {
                                "cols": [
                                    { "view": "label", "height": 0 },
                                    { "label": "Function of The Process Item (End User) :", "view": "text", "labelPosition": "top", "name": "function3" }
                                ]
                            },
                            {paddingY:20,
                                "cols": [
                                    { "view": "template", "role": "placeholder", "gravity": 4, "borderless": true },
                                                                    
                                    { "label": "Save", "view": "button", "css": "webix_primary", "width": 100, 
                                    click:()=>{
                                        var id = $$("id_process2").getValue();
                                        // console.log(id);
                                        var product_id = $$("product_id").getValue();
                                        var data = $$("form_process2").getValues();                                  
                                        webix.confirm("Do you wont to save data ?").then(function(result){
                                            webix.ajax().
                                                headers({'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}).
                                                put("processes/save/"+id, data).then(() => {
                                                    webix.message("Saved")        
                                                    $$("tbl_process").clearAll();                  
                                                    $$("tbl_process").load("processes/show/"+product_id);
                                                });        
                                            $$('pop_process').hide();                        
                                        });
                                    }
                                }
                                ]
                            }
                        ]
                    }
                ]
            }
		}
    }
    showWindow(){
        this.getRoot().show();
    }
}