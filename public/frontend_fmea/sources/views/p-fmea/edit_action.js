import {JetView} from "webix-jet";

export default class EditActionView extends JetView{
    config(){
        return {
            view:"popup",
            position:"center",
            id:'pop_action',
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
                { id:"mode_name2","view": "text", "label": "Failure Mode (FM)", "name": "mode", readonly:true, labelPosition:"top", gravity:8 }, 
                { id:"severity4","view": "text", "label": "Severity", "name": "s",readonly:true, format:"111", labelPosition:"top"},
            ]
        },
            

        { id:"form_action2","autoheight": false, "view": "form", "elementsConfig": { "required": false, "labelPosition": "top" },
    "rows": [

        { "view": "text", "label": "Mode ID", "name": "mode_id", hidden:true },
        { "view": "text", "label": "Current ID", "name": "current_id", hidden:true },
        { "view": "text", "label": "Element Name", "name": "element", hidden:true },
        { "label": "Failure Cause (FC)", "view": "text", "name": "cause", readonly:true, labelPosition:"top" },

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
                { id:'status_open2',"label": "Status", "options": ["Open","Closed"], "view": "select", "name": "status" },
                { "view": "label", "gravity": 3 }
            ]
        },

        { "label": "Prevention Action Taken", "view": "text", "name": "prevention_act" },      
        { "label": "Detection Action Taken", "view": "text", "name": "detection_act" },
        {
            "cols": [
                { "label": "Completion Date", "view": "datepicker", "name": "finish_date" },
                { "view": "label", "height": 0, "gravity": 3 }
            ]
        },
        {
            "cols": [
                { id:"o4", "label": "Occurrence (O)", "options":['','1','2','3','4','5','6','7','8','9','10'], "view": "select", "name": "o", 
                on:{
                        onItemClick: function(){     
                            var S = $$("severity4").getValue(); 
                            var O = $$("o4").getValue();     
                            var D = $$("d4").getValue(); 

                            
                            if (S >= 9 && O >= 6 && D >= 1) {
                                $$("ap4").define("options", [ 'High' ]);
                                $$("ap4").refresh();

                            } else if (S >= 9 && O >= 4 && D >= 2) {
                                $$("ap4").define("options", [ 'High' ]);
                                $$("ap4").refresh();

                            } else if (S >= 9 && O >= 2 && D >= 7) {
                                $$("ap4").define("options", [ 'High' ]);
                                $$("ap4").refresh();

                            } else if (S >= 7 && O >= 8 && D >= 1) {
                                $$("ap4").define("options", [ 'High' ]);
                                $$("ap4").refresh();

                            } else if (S >= 7 && O >= 6 && D >= 2) {
                                $$("ap4").define("options", [ 'High' ]);
                                $$("ap4").refresh();

                            } else if (S >= 7 && O >= 4 && D >= 7) {
                                $$("ap4").define("options", [ 'High' ]);
                                $$("ap4").refresh();

                            } else if (S >= 4 && O >= 8 && D >= 5) {
                                $$("ap4").define("options", [ 'High' ]);
                                $$("ap4").refresh();

                            } else if (S >= 9 && O >= 4 && D >= 1) {
                                $$("ap4").define("options", [ 'Medium' ]);
                                $$("ap4").refresh();

                            } else if (S >= 9 && O >= 2 && D >= 5) {
                                $$("ap4").define("options", [ 'Medium' ]);
                                $$("ap4").refresh();

                            } else if (S >= 7 && O >= 6 && D >= 1) {
                                $$("ap4").define("options", [ 'Medium' ]);
                                $$("ap4").refresh();

                            } else if (S >= 7 && O >= 4 && D >= 1) {
                                $$("ap4").define("options", [ 'Medium' ]);
                                $$("ap4").refresh();

                            } else if (S >= 7 && O >= 2 && D >= 5) {
                                $$("ap4").define("options", [ 'Medium' ]);
                                $$("ap4").refresh();

                            } else if (S >= 4 && O >= 8 && D >= 2) {
                                $$("ap4").define("options", [ 'Medium' ]);
                                $$("ap4").refresh();

                            } else if (S >= 4 && O >= 6 && D >= 1) {
                                $$("ap4").define("options", [ 'Medium' ]);
                                $$("ap4").refresh();

                            } else if (S >= 4 && O >= 4 && D >= 7) {
                                $$("ap4").define("options", [ 'Medium' ]);
                                $$("ap4").refresh();

                            } else if (S >= 2 && O >= 8 && D >= 5) {
                                $$("ap4").define("options", [ 'Medium' ]);
                                $$("ap4").refresh();

                            } else {
                                $$("ap4").define("options", [ 'Low' ]);
                                $$("ap4").refresh();

                            }                                       
                        }
                      }
                },
                { "view": "label", "height": 0, "gravity": 3 }
            ]
        },
        {
            "cols": [
                { id:"d4","label": "Detection (D)", "options": ['','1','2','3','4','5','6','7','8','9','10'], "view": "select", "name": "d", 
                on:{
                        onItemClick: function(){     
                            var S = $$("severity4").getValue(); 
                            var O = $$("o4").getValue();     
                            var D = $$("d4").getValue(); 

                            
                            if (S >= 9 && O >= 6 && D >= 1) {
                                $$("ap4").define("options", [ 'High' ]);
                                $$("ap4").refresh();

                            } else if (S >= 9 && O >= 4 && D >= 2) {
                                $$("ap4").define("options", [ 'High' ]);
                                $$("ap4").refresh();

                            } else if (S >= 9 && O >= 2 && D >= 7) {
                                $$("ap4").define("options", [ 'High' ]);
                                $$("ap4").refresh();

                            } else if (S >= 7 && O >= 8 && D >= 1) {
                                $$("ap4").define("options", [ 'High' ]);
                                $$("ap4").refresh();

                            } else if (S >= 7 && O >= 6 && D >= 2) {
                                $$("ap4").define("options", [ 'High' ]);
                                $$("ap4").refresh();

                            } else if (S >= 7 && O >= 4 && D >= 7) {
                                $$("ap4").define("options", [ 'High' ]);
                                $$("ap4").refresh();

                            } else if (S >= 4 && O >= 8 && D >= 5) {
                                $$("ap4").define("options", [ 'High' ]);
                                $$("ap4").refresh();

                            } else if (S >= 9 && O >= 4 && D >= 1) {
                                $$("ap4").define("options", [ 'Medium' ]);
                                $$("ap4").refresh();

                            } else if (S >= 9 && O >= 2 && D >= 5) {
                                $$("ap4").define("options", [ 'Medium' ]);
                                $$("ap4").refresh();

                            } else if (S >= 7 && O >= 6 && D >= 1) {
                                $$("ap4").define("options", [ 'Medium' ]);
                                $$("ap4").refresh();

                            } else if (S >= 7 && O >= 4 && D >= 1) {
                                $$("ap4").define("options", [ 'Medium' ]);
                                $$("ap4").refresh();

                            } else if (S >= 7 && O >= 2 && D >= 5) {
                                $$("ap4").define("options", [ 'Medium' ]);
                                $$("ap4").refresh();

                            } else if (S >= 4 && O >= 8 && D >= 2) {
                                $$("ap4").define("options", [ 'Medium' ]);
                                $$("ap4").refresh();

                            } else if (S >= 4 && O >= 6 && D >= 1) {
                                $$("ap4").define("options", [ 'Medium' ]);
                                $$("ap4").refresh();

                            } else if (S >= 4 && O >= 4 && D >= 7) {
                                $$("ap4").define("options", [ 'Medium' ]);
                                $$("ap4").refresh();

                            } else if (S >= 2 && O >= 8 && D >= 5) {
                                $$("ap4").define("options", [ 'Medium' ]);
                                $$("ap4").refresh();

                            } else {
                                $$("ap4").define("options", [ 'Low' ]);
                                $$("ap4").refresh();

                            }                                       
                        }
                      }
                },
                { "view": "label", "height": 0, "gravity": 3 }
            ]
        },
        {
            "cols": [
                { id:"ap4","label": "Action Priority (AP)", "options": [], "view": "select", "name": "ap" },
                { "view": "label", "gravity": 3 }
            ]
        },
        {
            "cols": [
                { id:'sc4',"label": "Special Characteristic", "view": "text", "name": "sc" },
                { "view": "label", "height": 0, "gravity": 3 }
            ], hidden:true
        },
        {
            "cols": [
                { "view": "template", "role": "placeholder", "gravity": 3, "borderless": true },
                
                { id:"btn_edt_action","view": "button", "css": "webix_primary", "label": "Save",
                    click:()=>{                                               
                        var Select_mode = $$("tbl_currents_all").getSelectedItem();
                        var current_id = Select_mode['id'];
                        var data = $$("form_action2").getValues(); 
                        webix.confirm("Do you wont to save data ?").then(function(result){
                            webix.ajax().
                                    headers({'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}).
                                    put("actions/save/"+data.id, data).then(() => {
                                webix.message("Saved")        
                                $$("tbl_action").clearAll();                  
                                $$("tbl_action").load("actions/show/"+current_id);
                            });
                        $$('pop_action').hide();
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
        // var mode_id = Select_mode['mode_id'];
        var mode_name = Select_mode['mode'];
        // var current_id = Select_mode['id'];
        // var element_name = Select_mode['element'];
        // var cause_name = Select_mode['cause'];
        var s = Select_mode['s'];
        var sc = Select_mode['sc'];
        // $$("id_mode2").setValue(mode_id);  
        $$("mode_name2").setValue(mode_name); 
        // $$("id_current2").setValue(current_id);  
        // $$("element_name2").setValue(element_name); 
        // $$("cause_name2").setValue(cause_name); 
        $$("severity4").setValue(s);  
        $$("sc4").setValue(sc);  
        // $$('status_open2').setValue('Open')

    }
}