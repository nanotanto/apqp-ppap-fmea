import {JetView} from "webix-jet";
import {projects} from "models/data_project";


export default class ProjectsData extends JetView{
	config(){
		return { 
			id:"data_project",
			view:"dataview",
	        select:true,
	        drag: true,
	        xCount:4,
	        yCount:6,
	        type:{
	            width: "auto",
	            height:"auto",
	            padding:20, // 8 by default
	            type: "tiles",
	            template:"<div class='webix_strong'>Project Name: #name#</div> Model: #model# <br/> Customer: #customer#"
	        },
	         on:{
	         	"onItemDblClick":(id) => this.show("parts?project="+id),
	         	// onItemClick:()=>{
	         	// 	// $$("btn_edt_project").enable();
	         	// 	// $$("btn_del_project").enable();
	         	// }
		    }
		};
	}
	init(view){
		view.sync(projects);

	}
}