import {JetView} from "webix-jet";
import {parts} from "models/data_part";
import PartData from "views/parts/part_data";


export default class PartNew extends JetView{
	config(){
		return {
            view:"popup",
            position:"center",
            width:500,
            height:450,
            select:true,
            body:{
                type:"wide", rows:[
                    {
                        "css": "webix_dark",
                        "view": "toolbar",
                        "height": 35,
                        "cols": [
                            { "view": "label", "label": "Add / Edit Part", "align": "center" },
                        ]
                    },
                    {
                        "autoheight": false,
                        "view": "form",
                        id:"form_part",
                        "rows": [
                            {
                                "rows": [
                                { view:"text", id:"proj_id", name:"project_id", label:"project_id", hidden:true},
                                { "label": "Part ID :", "view": "text", "labelPosition": "top", "name": "id", id:"part_id", hidden:true },
                                { "label": "Part No", "view": "text", "name": "no" },
                                { "label": "Part Name", "view": "text", "name": "name" },
                                { "label": "Division", "view": "select", options:[{id:'',value:''},{id:1, value:'Aluminium'},{id:2, value:'Gear & Axle'}], "name": "division_id" },
                                { "label": "Need Proto", "view": "select", options:['','No Need','Need'], "name": "proto" },
                                { "label": "Drawing No", "view": "text", "name": "drawing" },

                                // {
                                //     "height": 38,
                                //     "cols": [
                                //     {
                                //         view:"uploader", upload:"../uploadfile",
                                //         id:"upl1", name:"file_drawing",
                                //         value:"Upload Drawing", 
                                //         link:"doclist1", autosend:true
                                //     },
                                //     { view:"list", scroll:false, id:"doclist1", type:"uploader", autoheight:true, borderless:true },

                                //     ]
                                // },
                                {
                                    "height": 38,
                                    "cols": [
                                    {
                                        view:"uploader", upload:"../uploadfile",
                                        id:"upl2", name:"file_rfq",
                                        value:"Upload RFQ", 
                                        link:"doclist2", autosend:true
                                    },
                                    { view:"list", scroll:false, id:"doclist2", type:"uploader", autoheight:true, borderless:true },

                                    ]
                                },
                                {
                                    "height": 38,
                                    "cols": [
                                    {
                                        view:"uploader", upload:"../uploadfile",
                                        id:"upl3", name:"file_spk",
                                        value:"Upload SPK", 
                                        link:"doclist3", autosend:true
                                    },
                                    { view:"list", scroll:false, id:"doclist3", type:"uploader", autoheight:true, borderless:true },

                                    ]
                                },
                                {
                                    "height": 38,
                                    "cols": [
                                    {
                                        view:"uploader", upload:"../uploadfile",
                                        id:"upl4", name:"file_pqr",
                                        value:"Upload PQR", 
                                        link:"doclist4", autosend:true
                                    },
                                    { view:"list", scroll:false, id:"doclist4", type:"uploader", autoheight:true, borderless:true },

                                    ]
                                },

                                    // {
                                    //     view:"uploader", upload:"../samples/server/upload",
                                    //     id:"upl1", name:"file",
                                    //     value:"Upload General Schedule", 
                                    //     link:"doclist", autosend:false
                                    // },
                                    // { view:"list", scroll:false, id:"doclist", type:"uploader", autoheight:true, borderless:true },
                                    // { "label": "Genaral Schedule :", "view": "text", "labelPosition": "top", "name": "file" }
                                ]
                            },
                            {paddingY:20,
                                "cols": [
                                    { "view": "template", "role": "placeholder", "gravity": 4, "borderless": true },                               
                                    { id:"btn_save_part","label": "Save", "view": "button", "css": "webix_primary", "width": 100, 
                                    click:()=>{
                                        if ($$("form_part").validate()) {
                                            var data = $$("form_part").getValues();  

                                            webix.confirm({
                                                text:"The data will be saved. <br/> Are you sure?",
                                                ok:"Yes", cancel:"Cancel",
                                                callback: res => { 


                                                    if (res){

                                                        this.saveParts(data);

                                                        // webix.ajax().post("http://localhost/myproject/NewModel/api/projects", data, webix.bind(function(text, data){
                                                            
                                                        //     var project = data.json();      
                                                        //     this.show("parts?project="+project.id); 
                                                        //  }, this));

                                                        this.getRoot().hide();          

                                                    };
                                                        
                                                }
                                            });

                                        }
                                    }
                                    },
                                ]
                            }
                        ],

            rules:{
                name:webix.rules.isNotEmpty,
                no:webix.rules.isNotEmpty,
                proto:webix.rules.isNotEmpty,
                division_id:webix.rules.isNotEmpty,
                drawing:webix.rules.isNotEmpty,
            }
                    }
                ]
            }
		}
    }
    showWindow(){
        this.getRoot().show();        
    }
    saveParts(values){
        // values.id ? parts.updateItem(values.id,values) : parts.add(values);

        $$("tbl_part").clearAll();
        const proj_id = this.getParam("project");

        const id = $$("part_id").getValue();
        // console.log(id);

        if ( id == "" ) {
            // parts.add(values);
            webix.ajax().post("../api/parts", values).then(() => {
            $$("tbl_part").load("../part/"+proj_id);
            });
        } else {            
            // parts.updateItem(values.id,values);
            webix.ajax().put("../api/parts/"+values.id, values).then(() => {
            $$("tbl_part").load("../part/"+proj_id);
            });
        }


    }
    

}