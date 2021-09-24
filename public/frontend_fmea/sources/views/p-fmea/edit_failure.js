import {JetView} from "webix-jet";

export default class EditFailureView extends JetView{
	config(){
		return {
            view:"popup",
            position:"center",
            id:'pop_mode',
            width:900,
            height:400,
            select:true,
            body:{
                type:"wide", rows:[
                    {
                        "css": "webix_dark",
                        "view": "toolbar",
                        "height": 35,
                        "cols": [
                            { "view": "label", "label": "EDIT FAILURE MODE", "align": "center" },
                            //{ "icon": "wxi-close", "view": "icon", "height": 0, "width": 30 }
                        ]
                    },
                    {
                        "rows": [
                            {   
                                id:"form_mode2",
                                "autoheight": false,
                                "view": "form",
                                "rows": [
                                    { "label": "ID", "view": "text", "name": "step_id", hidden:true },
                                    {
                                        "cols": [
                                            { "label": "Failure Mode (FM) :", "view": "text", "name": "name" },
                                            { "label": "Category :", "options": ["","Product","Process"], "view": "select", "name": "category" }
                                        ]
                                    },
                                    { "label": "Failure Effects (FE) to Your Plant :", "view": "text", "name": "effect_in" },
                                    { "label": "Failure Effects (FE) Ship to Plant :", "view": "text", "name": "effect_next" },
                                    { "label": "Failure Effects (FE) to End User :", "view": "text", "name": "effect_end" },
                                    {
                                        "cols": [
                                            { id:"s2","label": "Severity", "options": ["1","2","3","4","5","6","7","8","9","10"], "view": "select", "name": "s" },
                                            { "view": "template", "role": "placeholder", "borderless": true, "gravity": 5 }
                                        ]
                                    },
                                    { "view": "template", "role": "placeholder", "borderless": 1, "height": 20 },
                                    {
                                        "cols": [
                                            { "view": "template", "role": "placeholder", "gravity": 3, "borderless": true },
                                            
                                            { id:"btn_edt_mode", "view": "button", "label": "Save", "css": "webix_primary", 
                                                click:()=>{
                                                    var Select_step = $$("tbl_process_step2").getSelectedId();
                                                    var step_id = Select_step['id'];
                                                    var data = $$("form_mode2").getValues();                                  
                                                    webix.confirm("Do you wont to save data ?").then(function(result){
                                                        webix.ajax().
                                                        headers({'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}).
                                                        put("modes/save/"+data.id, data).then(() => {
                                                            webix.message("Saved")
                                                            $$("btn_save_mode").disable();
                                                            $$("btn_new_mode").enable();         
                                                            $$("tbl_mode").clearAll();                  
                                                            $$("tbl_mode").load("modes/show/"+data.step_id);
                                                        });
                                                        $$('pop_mode').hide(); 
                                                    });
                                                }
                                            }
                                        ]
                                    }
                                ],
                                "elementsConfig": { "required": false, "labelPosition": "top" }
                                //"scroll": "y"
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