import {JetView} from "webix-jet";
import {parts} from "models/data_part";


export default class PartID extends JetView {
	config(){
		return {                    
                    "view": "form",   
                    // id:'form_part_id',
                    "autoheight": false,    
                     "elementsConfig": { "labelPosition": "top" },
                    "elements": [
                        {
                            "rows": [
                                {
                                    "cols": [
                                        { "label": "Part No :", "view": "text", name:"no", "labelWidth": 150,  readonly:true },
                                        { "label": "Part Name :", "view": "text", name:"name", "labelWidth": 150,  readonly:true },
                                        { "label": "Proto :", "view": "text",name:"proto",  "labelWidth": 150, readonly:true }
                                    ],
                                    "padding": { "left": 20 },
                                    "borderless": true
                                },
                                {
                                    "rows": [
                                        { id:"pro_id", "label": "Project Name", "view": "text", name:"project_id", "labelWidth": 150, readonly:true, hidden:true },
                                        { "label": "Model", "view": "text", name:"model", "labelWidth": 150,  readonly:true, hidden:true },
                                        { "label": "Customer", "view": "text", name:"customer", "labelWidth": 150,  readonly:true, hidden:true }
                                    ],
                                    "padding": { "right": 20 },
                                    "borderless": true
                                }
                            ],
                            "borderless": true,
                            "height": 0
                        }
                    ]

                    // "padding": { "top": 30 }
		}

	}
	urlChange(form){
		// parts.waitData.then(()=>{
			const id = this.getParam("part");
			
		// 	if (id && parts.exists(id)){
		// 		form.setValues(parts.getItem(id));
		// 	}
		// });

        form.clear();
        form.load("../api/parts/"+id);
	}
    init(form){
        form.attachEvent("onBeforeLoad", function(){
            webix.extend(form, webix.ProgressBar);
            return true;
        });

        // form.load("http://localhost/myproject/NewModel/api//"+id,"json");
    }
    
}