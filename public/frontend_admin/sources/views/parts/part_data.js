import {JetView} from "webix-jet";
import {parts} from "models/data_part";
import PartNew from "views/parts/part_new";
import {division} from "models/data_division";
// import {projects} from "models/projects";


export default class PartData extends JetView{
    config(){
        return { 
                    gravity:7,
            rows:[
                {
                    "css": "webix_dark",
                    "view": "toolbar",
                    "cols": [
                        { "view": "label", "label": "List Parts", "id": 1615794429571 },
                        {
                            "view": "button",
                            "label": "Add Part",
                            "autowidth": true,
                            "css": "webix_primary",
                            "localId": "button:add",
                            "height": 0,
                            click:()=> {
                                $$("form_part").clear();
                                const project_id = this.getParam("project");
                                $$("proj_id").setValue(project_id);
                                this.WinPartNew.showWindow();
                            }
                                

                        },
                        { id:"btn_submit","label": "Submit", "view": "button", "height": 0, "width": 100, "css": "webix_secondary", disabled:false,
                            click: () => {

                                // webix.extend($$('tbl_part'), webix.ProgressBar);

                                // $$("tbl_part").showProgress({
                                //    type:"icon",
                                //    delay:39000,
                                //    hide:true
                                // });

                                const id = this.getParam("project");
                                // console.log(id);
                                webix.ajax().post("../api/submitProject/"+id).then(() => {
                                    webix.alert("Has been sent");
                                });  
                                                    
                            }
                        }
                    ],
                    "id": 1615794429570,
                    "height": 0
                },
                {                    
                    id:"tbl_part",
                    // gravity:2,
                    view:"datatable",    
                    // autoConfig:true, 
                    // css:"webix_shadow_medium",
                    editable:true,
                    select:true,
                    "columns": [
                        { id: 'id', hidden:true},
                        { header:"", template:"<span class='webix_icon wxi-eye' style='cursor:pointer;'></span>", width:40}, 
                        { "id": "project_id", "header": ["Project Id"], "fillspace": true, "sort": "string", "hidden": true },
                        { "id": "no", "header": "Part No", "fillspace": true, "sort": "string", "hidden": false },
                        { "id": "name", "header": "Part Name", "sort": "string", "fillspace": true, "hidden": false },
                        { "id": "division_id", "header": "Division", "sort": "string", "fillspace": false, "hidden": false, collection:division },
                        { "id": "proto", "header": "Need Proto", "sort": "string", "hidden": false },
                        { "id": "drawing", "header": "Drawing No", "sort": "string", "fillspace": true, "hidden": false },
                        // { "id": "file_drawing", "header": "Drawing", "sort": "string", "fillspace": false, "width": 70, template:"<a class='link' target='_blank' href='"+"../viewdoc?file=#file_drawing#'><span class='webix_icon wxi-file' style='cursor:pointer;'></span></a>" },
                        // { "id": "file_drawing", "header": "Drawing", "sort": "string", "fillspace": false, "width": 70, template:"<a class='link' target='_blank' href='"+"../public/uploads/#file_drawing#'><span class='webix_icon wxi-file' style='cursor:pointer;'></span></a>" },
                        { "id": "file_rfq", "header": "RFQ", "sort": "string", "fillspace": false, "width": 50, template:"<a class='link' target='_blank' href='"+"../public/uploads/#file_rfq#'><span class='webix_icon wxi-file' style='cursor:pointer;'></span></a>" },
                        { "id": "file_spk", "header": "SPK", "sort": "string", "fillspace": false, "width": 50, template:"<a class='link' target='_blank' href='"+"../public/uploads/#file_spk#'><span class='webix_icon wxi-file' style='cursor:pointer;'></span></a>" },
                        { "id": "file_pqr", "header": "PQR", "sort": "string", "fillspace": false, "width": 50, template:"<a class='link' target='_blank' href='"+"../public/uploads/#file_pqr#'><span class='webix_icon wxi-file' style='cursor:pointer;'></span></a>" },
                        { header:"", template:"<span class='webix_icon wxi-pencil' style='cursor:pointer;'></span> | <span class='webix_icon wxi-trash' style='cursor:pointer;'></span>", width:70}                   
                    ],
                    onClick:{
                        "wxi-trash":(e, id) => {
                            webix.confirm({
                                text:"The data will be deleted. <br/> Are you sure?",
                                ok:"Yes", cancel:"Cancel",
                                callback: res => {              
        
                                    if (res){

                                        parts.remove(id.row);
                                        webix.ajax().del("../api/parts/"+id).then(function(){

        // const pj_id = this.getParam("project");
        $$("tbl_part").clearAll();
        const pj_id  = $$("proj_id").getValue();

        $$("tbl_part").load("../part/"+pj_id);
        
                                        });



                                        // parts.remove(id.row);
                                        // webix.ajax().del("/api/parts/"+id).then(function(){
                                        //     parts.remove(id.row);
                                        // $$("tbl_part").clearAll();
                                        // const project_id = this.getParam("project");
                                        // $$("tbl_part").load("/api/part/"+project_id);

                                        // });                             
                                    };
                                        
                                }
                            });
                        },
                        
                        "wxi-pencil":(e, id) =>{

                            $$("form_part").clear();
                            $$("form_part").load("../api/parts/"+id);

                            // parts.waitData.then(()=>{                                
                            //     if (id && parts.exists(id)){
                            //         $$("form_part").setValues(parts.getItem(id));
                            //     }
                            // });

                            this.WinPartNew.showWindow();

                            // this.setParam("id", id, true); 
                            // this.show("parts.index?id="+id);
                            // $$("save_part_add").hide();
                            // $$("save_part_close").hide();
                            // $$("edit_part").show();
                        },

                        
                        "wxi-eye":(e, id) =>{
                            // var id = $$("tbl_part").getSelectedId();
                            this.show("documents?part="+id+"&category="); 

                        } 
                    }
                }
            ]
        };
    }
    init(){
        this.WinPartNew = this.ui(PartNew); 

        // view.load("http://localhost/myproject/NewModel/api/part/"+id);
        // view.parse(parts);
        // view.attachEvent("onBeforeRender", function(){            
        //     view.filter('#project_id#',2);
        // });

        // const id = this.getParam("project");
        // view.attachEvent("onBeforeLoad", function(){
        //     webix.extend(view, webix.ProgressBar);
        //     return true;
        // });

        // view.load("http://localhost/myproject/NewModel/api/part/"+id);

    }
    urlChange(view, url){

        $$("tbl_part").clearAll();

        const id = this.getParam("project");
        $$("tbl_part").load("../part/"+id);

        // parts.waitData.then(()=>{
        //     const project_id = this.getParam("project");
            
        //     if (project_id && parts.exists(project_id)){
        //         // view.parse(parts.getItem(project_id));
        //         $$("tbl_part").sync(parts, function(){
        //             this.filter(function(data) {
        //                 // return data.project_id == project_id && data.division_id == 2;
        //                 return data.project_id == project_id;
        //             });
        //         });
        //     }
        // });



    }
}