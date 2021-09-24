import {JetView} from "webix-jet";

export default class EditStepView extends JetView{
	config(){
		return {
            view:"popup",
            position:"center",
            id:'pop_step',
            width:900,
            height:270,
            select:true,
            body:{
                type:"wide", rows:[
                    {
                        "css": "webix_dark",
                        "view": "toolbar",
                        "height": 35,
                        "cols": [
                            { "view": "label", "label": "EDIT PROCESS STEP", "align": "center" },
                            //{ "icon": "wxi-close", "view": "icon", "height": 0, "width": 30 }
                        ]
                    },
                    {
                        "autoheight": false,
                        "view": "form",
                        id:"form_step2",
                        "rows": [
                            {
                                "rows": [
                                    { "label": "ID :", "view": "text", "labelPosition": "top", "name": "id", hidden:true },
                                    { name:"process_id", "label": "ID PROSES", "view": "text", "labelPosition": "top", hidden:true },
                                    { cols:[
                                        { "label": "Process Step :", "view": "text", "labelPosition": "top", "name": "name" },
                                        {}
                                    ]}, 
                                    { "label": "Function of Process Step :", "view": "text", "labelPosition": "top", "name": "function" }
                                ]
                            },
                            {paddingY:20,
                                "cols": [
                                    { "view": "template", "role": "placeholder", "gravity": 4, "borderless": true },                              
                                    { id:"btn_edit_step","label": "Save", "view": "button", "css": "webix_primary", "width": 100, 
                                    click:()=>{
                                        var id = $$('form_step2').getValues().id;
                                        var process_id = $$('form_step2').getValues().process_id;
                                        var data = $$("form_step2").getValues();                                  
                                        webix.confirm("Do you wont to save data ?").then(function(result){
                                            webix.ajax().
                                                headers({'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}).
                                                put("steps/save/"+id, data).then(() => {
                                                    webix.message("Saved")
                                                    $$("btn_save_step").disable();
                                                    $$("btn_new_step").enable();         
                                                    $$("tbl_step").clearAll();                  
                                                    $$("tbl_step").load("steps/show/"+process_id);
                                            });
                                            $$("pop_step").hide();
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