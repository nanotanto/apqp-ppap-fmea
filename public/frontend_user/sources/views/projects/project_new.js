import {JetView} from "webix-jet";
import {projects} from "models/data_project";
import ProjectData from "views/projects/project_data";


export default class ProjectNew extends JetView{
	config(){
		return {
            view:"popup",
            position:"center",
            width:300,
            height:350,
            select:true,
            body:{
                type:"wide", rows:[
                    {
                        "css": "webix_dark",
                        "view": "toolbar",
                        "height": 35,
                        "cols": [
                            { "view": "label", "label": "New / Edit Project", "align": "center" },
                            //{ "icon": "wxi-close", "view": "icon", "height": 0, "width": 30 }
                        ]
                    },
                    {
                        "autoheight": false,
                        "view": "form",
                        id:"form_project",
                        "rows": [
                            {
                                "rows": [
                                    { "label": "Project ID :", "view": "text", "labelPosition": "top", "name": "id", id:"project_id", hidden:true },
                                    { "label": "Project Name :", "view": "text", "labelPosition": "top", "name": "name", id:"project_name" },
                                    { "label": "Model :", "view": "text", "labelPosition": "top", "name": "model" },
                                    { "label": "Customer :", "view": "text", "labelPosition": "top", "name": "customer" },
                                    {
                                        view:"uploader", upload:"uploadfile",
                                        id:"upl", name:"file",
                                        value:"Upload General Schedule", 
                                        link:"doclist", autosend:true
                                    },
                                    { view:"list", scroll:false, id:"doclist", type:"uploader", autoheight:true, borderless:true },
                                    // { "label": "Genaral Schedule :", "view": "text", "labelPosition": "top", "name": "file" }
                                ]
                            },
                            {paddingY:20,
                                "cols": [
                                    { "view": "template", "role": "placeholder", "gravity": 4, "borderless": true },                               
                                    { id:"btn_save_project","label": "Save", "view": "button", "css": "webix_primary", "width": 100, 
                                    click:()=>{
                                        var data = $$("form_project").getValues();  

                                        webix.confirm({
                                            text:"The data will be saved. <br/> Are you sure?",
                                            ok:"Yes", cancel:"Cancel",
                                            callback: res => { 


                                                if (res){

                                    this.saveProjects(data);

                                                    // webix.ajax().post("http://localhost/myproject/NewModel/api/projects", data, webix.bind(function(text, data){
                                                        
                                                    //     var project = data.json();      
                                                    //     this.show("parts?project="+project.id); 
                                                    //  }, this));

                                                    this.getRoot().hide();  
                                                        var project = data ; 
                                                        this.show("parts?project="+project.id); 
                                                };
                                                    
                                            }
                                        });

                                    }
                                    },
                                    // { id:"btn_edit_project","label": "Edit", "view": "button", "css": "webix_primary", "width": 100, 
                                    // click:()=>{
                                    //     var data = $$("form_project").getValues();  

                                    //     webix.confirm({
                                    //         text:"The data will be edited. <br/> Are you sure?",
                                    //         ok:"Yes", cancel:"Cancel",
                                    //         callback: res => {              

                                    //             if (res){
                                    //                 var id = $$("project_id").getValue();
                                    //                 webix.ajax().put("http://localhost/myproject/NewModel/api/projects/"+id, data);
                                    //                 this.getRoot().hide();   
                   
                                    //             };
                                                    
                                    //         }
                                    //     });

                                    // }
                                    // }
                                ]
                            }
                        ],

            rules:{
                name:webix.rules.isNotEmpty,
                model:webix.rules.isNotEmpty,
                customer:webix.rules.isNotEmpty,
            }
                    }
                ]
            }
		}
    }
    // urlChange(form){
    //     projects.waitData.then(()=>{
    //         const id = this.getParam("project");
            
    //         if (id && projects.exists(id)){
    //             form.setValues(projects.getItem(id));
    //         }
    //     });
    // }
    showWindow(){
        this.getRoot().show();        
    }
    saveProjects(values){
        // values.id ? projects.updateItem(values.id,values) : projects.add(values);   

        // if (values.id > 0) {
        //     webix.ajax().put("api/projects/"+values.id, values);
        // } else {
        //     webix.ajax().post("api/projects", values);
        // }
        const id = $$("project_id").getValue();
        // console.log(id);

        if ( id == "" ) {
            projects.add(values);
            webix.ajax().post("api/projects", values);
        } else {            
            projects.updateItem(values.id,values);
            webix.ajax().put("api/projects/"+values.id, values);
        }
     
    }

}