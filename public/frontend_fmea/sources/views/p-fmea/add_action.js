import {JetView} from "webix-jet";

export default class AddActionView extends JetView{
	config(){
		return {
            view:"popup",
            position:"center",
            width:900,
            height:600,
            select:true,
            body:{
                type:"wide", rows:[
                    {
                        "css": "webix_dark",
                        "view": "toolbar",
                        "height": 35,
                        "cols": [
                            { "view": "label", "label": "ADD ACTION", "align": "center" },
                            //{ "icon": "wxi-close", "view": "icon", "height": 0, "width": 30 }
                        ]
                    },

        {
            cols:[
                { id:"mode_name","view": "text", "label": "Failure Mode (FM)", "name": "mode", readonly:true, labelPosition:"top", gravity:8 }, 
                { id:"severity3","view": "text", "label": "Severity", "name": "s",readonly:true, format:"111", labelPosition:"top"},
            ]
        },
            

        { id:"form_action","autoheight": false, "view": "form", "elementsConfig": { "required": false, "labelPosition": "top" },
	"rows": [

        { id:"id_mode","view": "text", "label": "Mode ID", "name": "mode_id", hidden:true },
        { id:"id_current","view": "text", "label": "Current ID", "name": "current_id", hidden:true },
        { id:"element_name","view": "text", "label": "Element Name", "name": "element", hidden:true },
        { id:"cause_name", "label": "Failure Cause (FC)", "view": "text", "name": "cause", readonly:true, labelPosition:"top" },

		{ "label": "Prevention Action Plan", "view": "text", "name": "prevention" },		
		{ "label": "Detection Action Plan", "view": "text", "name": "detection" },
        {
			"cols": [
				{ "label": "Responsible Person's Name", "view": "text", "name": "pic" },
				{ "view": "label", "height": 0 }
			]
        },
        {
			"cols": [
				{ "label": "Target Date", "view": "datepicker", "name": "target_date" },
				{ "view": "label", "height": 0, "gravity": 3 }
			]
        },
		{
			"cols": [
				{ id:'status_open',"label": "Status", "options": ["Open"], "view": "select", "name": "status" },
				{ "view": "label", "gravity": 3 }
			], hidden:true
		},

        { "label": "Prevention Action Taken", "view": "text", "name": "prevention_act", hidden:true },		
		{ "label": "Detection Action Taken", "view": "text", "name": "detection_act", hidden:true },
        {
			"cols": [
				{ "label": "Completion Date", "view": "datepicker", "name": "finish_date" },
				{ "view": "label", "height": 0, "gravity": 3 }
			], hidden:true
        },
		{
			"cols": [
				{ "label": "Occurrence (O)", "options":['','1','2','3','4','5','6','7','8','9','10'], "view": "select", "name": "o" },
				{ "view": "label", "height": 0, "gravity": 3 }
			], hidden:true
        },
        {
			"cols": [
				{ "label": "Detection (D)", "options": ['','1','2','3','4','5','6','7','8','9','10'], "view": "select", "name": "d" },
				{ "view": "label", "height": 0, "gravity": 3 }
			], hidden:true
		},
		{
			"cols": [
				{ "label": "Action Priority (AP)", "options": ["","Low","Medium","High"], "view": "select", "name": "ap" },
				{ "view": "label", "gravity": 3 }
			], hidden:true
		},
		{
			"cols": [
				{ id:'sc',"label": "Special Characteristic","view": "text", "name": "sc" },
				{ "view": "label", "height": 0, "gravity": 3 }
			], hidden:true
		},
		{
			"cols": [
				{ "view": "template", "role": "placeholder", "gravity": 3, "borderless": true },
                { id:'btn_new_action',"label": "Add New", "view": "button", disabled:true,
                    click:()=>{
                        $$("form_action").clear();
                        $$("btn_save_action").enable(); 
                        $$("btn_new_action").disable();                         
                        var Select_mode = $$("tbl_currents_all").getSelectedItem();
                        var mode_id = Select_mode['mode_id'];
                        var mode_name = Select_mode['mode'];
                        var current_id = Select_mode['id'];
                        var element_name = Select_mode['element'];
                        var cause_name = Select_mode['cause'];
                        var sc = Select_mode['sc'];
                        $$("id_mode").setValue(mode_id);  
                        $$("mode_name").setValue(mode_name); 
                        $$("id_current").setValue(current_id);  
                        $$("element_name").setValue(element_name); 
                        $$("cause_name").setValue(cause_name);   
                        $$("sc").setValue(sc); 
                        $$('status_open').setValue('Open')

                    }
                },
                { id:"btn_save_action","view": "button", "css": "webix_primary", "label": "Save",
                    click:()=>{                                               
                        var Select_mode = $$("tbl_currents_all").getSelectedItem();
                        var current_id = Select_mode['id'];
                        var data = $$("form_action").getValues(); 
                        webix.confirm("Do you wont to save data ?").then(function(result){
                            webix.ajax().
                                    headers({'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}).
                                    post("actions/save", data).then(() => {
                                webix.message("Saved")
                                $$("btn_save_action").disable();
                                $$("btn_new_action").enable();         
                                $$("tbl_action").clearAll();                  
                                $$("tbl_action").load("actions/show/"+current_id);
                            });
                            
                        });  
                    }
                }
			]
		}
	],
	"scroll": "y"
}

                ]
            }
		}
    }
    showWindow(){
        this.getRoot().show();                
                            
        var Select_mode = $$("tbl_currents_all").getSelectedItem();
        var mode_id = Select_mode['mode_id'];
        var mode_name = Select_mode['mode'];
        var current_id = Select_mode['id'];
        var element_name = Select_mode['element'];
        var cause_name = Select_mode['cause'];
        var s = Select_mode['s'];
        var sc = Select_mode['sc'];
        $$("id_mode").setValue(mode_id);  
        $$("mode_name").setValue(mode_name); 
        $$("id_current").setValue(current_id);  
        $$("element_name").setValue(element_name); 
        $$("cause_name").setValue(cause_name); 
        $$("severity3").setValue(s);  
        $$("sc").setValue(sc);  
        $$('status_open').setValue('Open')

    }
}