import {JetView} from "webix-jet";

export default class EditConditionView extends JetView{
	config(){
		return {
            view:"popup",
            position:"center",
            id:'pop_condition',
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
                            { "view": "label", "label": "EDIT CURRENT CONDITION", "align": "center" },
                            //{ "icon": "wxi-close", "view": "icon", "height": 0, "width": 30 }
                        ]
                    },
                    {
            cols:[
                { id:"mode_name2","view": "text", "label": "Failure Mode (FM)", "name": "mode",readonly:true, gravity:3, labelPosition:"top" },
                { id:"severity2","view": "text", "label": "Severity", "name": "s",readonly:true, format:"111", labelPosition:"top" },
            ]
        },

                    { id:"form_condition2","autoheight": false, "view": "form", "elementsConfig": { "required": false, "labelPosition": "top" },
	"rows": [
		{ id:"id_mode2","view": "text", "label": "Mode ID", "name": "mode_id", hidden:true },
        // {
        //     cols:[
        //         { id:"mode_name2","view": "text", "label": "Failure Mode (FM)", "name": "mode",readonly:true, gravity:3 },
        //         { id:"severity2","view": "text", "label": "Severity", "name": "s",readonly:true, format:"111" },
        //     ]
        // },		
		{
			"cols": [
				{ "label": "Work Element", "options": ["","Man","Machine","Material",'Method','Measurement','Environment'], "view": "select", "name": "element" },
				{ "view": "label", "gravity": 3 }
			]
		},
		{ "label": "Failure Cause (FC)", "view": "text", "name": "cause" },
		{ "label": "Prevention Control (PC) of FC", "view": "text", "name": "prevention" },
		{
			"cols": [
				{ id:"o2","label": "Occurrence (O)", "options":['1','2','3','4','5','6','7','8','9','10'], "view": "select", "name": "o", format:"111",
                    on:{
                        onItemClick: function(){     
                            var S = $$("severity2").getValue(); 
                            var O = $$("o2").getValue();     
                            var D = $$("d2").getValue(); 

                            
                            if (S >= 9 && O >= 6 && D >= 1) {
                                $$("ap2").define("options", [ 'High' ]);
                                $$("ap2").refresh();

                            } else if (S >= 9 && O >= 4 && D >= 2) {
                                $$("ap2").define("options", [ 'High' ]);
                                $$("ap2").refresh();

                            } else if (S >= 9 && O >= 2 && D >= 7) {
                                $$("ap2").define("options", [ 'High' ]);
                                $$("ap2").refresh();

                            } else if (S >= 7 && O >= 8 && D >= 1) {
                                $$("ap2").define("options", [ 'High' ]);
                                $$("ap2").refresh();

                            } else if (S >= 7 && O >= 6 && D >= 2) {
                                $$("ap2").define("options", [ 'High' ]);
                                $$("ap2").refresh();

                            } else if (S >= 7 && O >= 4 && D >= 7) {
                                $$("ap2").define("options", [ 'High' ]);
                                $$("ap2").refresh();

                            } else if (S >= 4 && O >= 8 && D >= 5) {
                                $$("ap2").define("options", [ 'High' ]);
                                $$("ap2").refresh();

                            } else if (S >= 9 && O >= 4 && D >= 1) {
                                $$("ap2").define("options", [ 'Medium' ]);
                                $$("ap2").refresh();

                            } else if (S >= 9 && O >= 2 && D >= 5) {
                                $$("ap2").define("options", [ 'Medium' ]);
                                $$("ap2").refresh();

                            } else if (S >= 7 && O >= 6 && D >= 1) {
                                $$("ap2").define("options", [ 'Medium' ]);
                                $$("ap2").refresh();

                            } else if (S >= 7 && O >= 4 && D >= 1) {
                                $$("ap2").define("options", [ 'Medium' ]);
                                $$("ap2").refresh();

                            } else if (S >= 7 && O >= 2 && D >= 5) {
                                $$("ap2").define("options", [ 'Medium' ]);
                                $$("ap2").refresh();

                            } else if (S >= 4 && O >= 8 && D >= 2) {
                                $$("ap2").define("options", [ 'Medium' ]);
                                $$("ap2").refresh();

                            } else if (S >= 4 && O >= 6 && D >= 1) {
                                $$("ap2").define("options", [ 'Medium' ]);
                                $$("ap2").refresh();

                            } else if (S >= 4 && O >= 4 && D >= 7) {
                                $$("ap2").define("options", [ 'Medium' ]);
                                $$("ap2").refresh();

                            } else if (S >= 2 && O >= 8 && D >= 5) {
                                $$("ap2").define("options", [ 'Medium' ]);
                                $$("ap2").refresh();

                            } else {
                                $$("ap2").define("options", [ 'Low' ]);
                                $$("ap2").refresh();

                            }                                       
                        }
                      }
                },
				{ "view": "label", "height": 0, "gravity": 3 }
			]
		},
		{ "label": "Detection Control (DC) of FC or FM", "view": "text", "name": "detection" },
		{
			"cols": [
				{ id:"d2","label": "Detection (D)", "options": ['1','2','3','4','5','6','7','8','9','10'], "view": "select", "name": "d", format:"111",
                    on:{
                        onItemClick: function(){     
                            var S = $$("severity2").getValue(); 
                            var O = $$("o2").getValue();     
                            var D = $$("d2").getValue(); 

                            if (S >= 9 && O >= 6 && D >= 1) {
                                $$("ap2").define("options", [ 'High' ]);
                                $$("ap2").refresh();

                            } else if (S >= 9 && O >= 4 && D >= 2) {
                                $$("ap2").define("options", [ 'High' ]);
                                $$("ap2").refresh();

                            } else if (S >= 9 && O >= 2 && D >= 7) {
                                $$("ap2").define("options", [ 'High' ]);
                                $$("ap2").refresh();

                            } else if (S >= 7 && O >= 8 && D >= 1) {
                                $$("ap2").define("options", [ 'High' ]);
                                $$("ap2").refresh();

                            } else if (S >= 7 && O >= 6 && D >= 2) {
                                $$("ap2").define("options", [ 'High' ]);
                                $$("ap2").refresh();

                            } else if (S >= 7 && O >= 4 && D >= 7) {
                                $$("ap2").define("options", [ 'High' ]);
                                $$("ap2").refresh();

                            } else if (S >= 4 && O >= 8 && D >= 5) {
                                $$("ap2").define("options", [ 'High' ]);
                                $$("ap2").refresh();

                            } else if (S >= 9 && O >= 4 && D >= 1) {
                                $$("ap2").define("options", [ 'Medium' ]);
                                $$("ap2").refresh();

                            } else if (S >= 9 && O >= 2 && D >= 5) {
                                $$("ap2").define("options", [ 'Medium' ]);
                                $$("ap2").refresh();

                            } else if (S >= 7 && O >= 6 && D >= 1) {
                                $$("ap2").define("options", [ 'Medium' ]);
                                $$("ap2").refresh();

                            } else if (S >= 7 && O >= 4 && D >= 1) {
                                $$("ap2").define("options", [ 'Medium' ]);
                                $$("ap2").refresh();

                            } else if (S >= 7 && O >= 2 && D >= 5) {
                                $$("ap2").define("options", [ 'Medium' ]);
                                $$("ap2").refresh();

                            } else if (S >= 4 && O >= 8 && D >= 2) {
                                $$("ap2").define("options", [ 'Medium' ]);
                                $$("ap2").refresh();

                            } else if (S >= 4 && O >= 6 && D >= 1) {
                                $$("ap2").define("options", [ 'Medium' ]);
                                $$("ap2").refresh();

                            } else if (S >= 4 && O >= 4 && D >= 7) {
                                $$("ap2").define("options", [ 'Medium' ]);
                                $$("ap2").refresh();

                            } else if (S >= 2 && O >= 8 && D >= 5) {
                                $$("ap2").define("options", [ 'Medium' ]);
                                $$("ap2").refresh();

                            } else {
                                $$("ap2").define("options", [ 'Low' ]);
                                $$("ap2").refresh();

                            }              
                        }
                      }
                },
				{ "view": "label", "height": 0, "gravity": 3 }
			]
		},
		{
			"cols": [
				{ id:"ap2","label": "Action Priority (AP)", options:["High","Medium","Low"], "view": "select", "name": "ap" },
				{ "view": "label", "gravity": 3 }
			]
		},
		{
			"cols": [
				{ "label": "Special Characteristic", "options": ["","Safety","Emission","Regulation"], "view": "select", "name": "sc" },
				{ "view": "label", "height": 0, "gravity": 3 }
			]
		},
		{
			"cols": [
				{ "view": "template", "role": "placeholder", "gravity": 3, "borderless": true },
                
                { id:"btn_edit_condition","view": "button", "css": "webix_primary", "label": "Save",
                    click:()=>{                                               
                        var Select_mode = $$("tbl_modes_all").getSelectedItem();
                        var mode_id = Select_mode['id'];
                        var data = $$("form_condition2").getValues(); 
                        webix.confirm("Do you wont to save data ?").then(function(result){
                            webix.ajax().
                            headers({'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}).
                            put("currents/save/"+data.id, data).then(() => {
                                webix.message("Saved")    
                                $$("tbl_current").clearAll();                  
                                $$("tbl_current").load("currents/show/"+mode_id);
                            });
                        $$('pop_condition').hide();
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
        var id = $$("tbl_current").getSelectedId();
        $$("form_condition2").load("currents/"+id);    

        var Select_mode = $$("tbl_modes_all").getSelectedItem();
        var mode_id = Select_mode['id'];
        var mode_name = Select_mode['mode'];
        var s = Select_mode['s'];
        $$("id_mode2").setValue(mode_id);  
        $$("mode_name2").setValue(mode_name); 
        $$("severity2").setValue(s);  

                                        
    }

}