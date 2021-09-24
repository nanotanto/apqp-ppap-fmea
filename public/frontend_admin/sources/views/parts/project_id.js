import {JetView} from "webix-jet";
import {projects} from "models/data_project";


export default class ProjectID extends JetView {
	config(){
		return {                    
                    "view": "form",   
                    "autoheight": false,    
                    // scroll:true,  
                    // complexData:true,
                     "elementsConfig": { "labelPosition": "top" },
                    "elements": [
                        {
                            "cols": [
                                {
                                    "cols": [
                                        { id: 'id', name:"id", hidden:true},  
                                        { "view": "text", "label": "Project Name :", "name": "name",  readonly:true },
                                        { "view": "text", "label": "Model :", "name": "model",  readonly:true },
                                        { "view": "text", "label": "File :", "name": "file", id:"general_schedule",  hidden:true },
                                        { "label": "Customer :", "view": "text", "name": "customer", readonly:true },
                                        {
                                            rows:[
                                                {},
                                                { "label": "General Schedule", "view": "button", "height": 35, css:"webix_primary",
                                                click:()=>{
                                                    var file = $$('general_schedule').getValue();
                                                    window.open("../public/uploads/"+file);
                                                }
                                                },
                                            ]
                                        }
                                    ],
                                    // "padding": { "left": 50 },
                                    "borderless": true
                                },
                                // {}
                            ],
                            "borderless": true
                        }
                    ],           
                    rules:{
                        "project":webix.rules.isNotEmpty,
                        "model":webix.rules.isNotEmpty,
                        "customer":webix.rules.isNotEmpty
                    },
                    // "padding": { "top": 30 }
		}

	}
	urlChange(form){
		projects.waitData.then(()=>{
			const id = this.getParam("project");
			
			if (id && projects.exists(id)){
				form.setValues(projects.getItem(id));
			}
		});
	}
    init(form){
        const id = this.getParam("project");
        form.attachEvent("onBeforeLoad", function(){
            webix.extend(form, webix.ProgressBar);
            return true;
        });

        // form.load("http://localhost/myproject/NewModel/api/projects/"+id,"json");
    }
    
}