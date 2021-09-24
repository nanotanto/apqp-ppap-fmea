import {JetView} from "webix-jet";
import {projects} from "models/data_project";
import ProjectData from "views/projects/project_data";
import ProjectNew from "views/projects/project_new";


export default class DataView extends JetView{
	config(){
		return { type:'form',
			"rows": [
				// {
				// 	"css": "webix_dark",
				// 	"view": "toolbar",
				// 	"height": 34,
				// 	"cols": [
				// 		// { "view": "button", "label": "New Project", "autowidth": true, "height": 0, css:"webix_primary", 
				// 		// 	 click:(function(){
				// 		// 	 	this.$scope.setParam("project", "", true);
				// 		// 	 	this.$scope.WinProjectNew.showWindow();
				// 		// 	 })
				// 		// },
				// 		// {},		
				// 		// { "view": "button", "label": "Edit", "autowidth": true, "height": 0, disabled:true, id:"btn_edt_project",
				// 		// 	 click:(function(){
				// 		// 	 	var item = $$("data_project").getSelectedId();
				// 		// 	 	this.$scope.setParam("project", item, true);
				// 		// 	 	this.$scope.WinProjectNew.showWindow();
				// 		// 	 })
				// 		// },				
				// 		// { "view": "button", "label": "Delete", "autowidth": true, "height": 0, css:"webix_danger", disabled:true, id:"btn_del_project",
				// 		// 	 click:(function(e, id){

				// 		// 	 	webix.confirm({
			 //   //                      text:"The data will be deleted. <br/> Are you sure?",
			 //   //                      ok:"Yes", cancel:"Cancel",
			 //   //                      callback: res => {              

			 //   //                          if (res){
			 //   //                          	var item = $$("data_project").getSelectedId();
				// 		// 				 	projects.remove(item);
				// 		// 				 	webix.ajax().del("api/projects/"+item);

			 //   //                          };
			                                
			 //   //                      }
			 //   //                  });

							 	
				// 		// 	 })
				// 		// }
				// 	],
				// 	"id": 1606719931909
				// },
				{ $subview: ProjectData},				
				{
					"css": "webix_dark",
					"view": "toolbar",
					"height": 40,
					"cols": [
						// { "label": "Proto", "view": "button", "height": 32, "id": 1606719931915 },
						// { "label": "N1-N5", "view": "button", "height": 32, "id": 1606719931916 },
						// { "label": "FTP", "view": "button", "height": 32, "id": 1606719931917 },
						// { "label": "N1000", "view": "button", "height": 32, "id": 1606719931918 },
						// { "label": "Initial Control", "view": "button", "height": 32 }
					],
					"id": 1606719931912
				}
			],
			"id": 1606719931908
		};
	}
	init(){
		this.WinProjectNew = this.ui(ProjectNew);   
	}
	urlChange(){
		$$("form_project").clear();
        projects.waitData.then(()=>{
            const id = this.getParam("project");
            
            if (id && projects.exists(id)){
                $$("form_project").setValues(projects.getItem(id));
            }
        });
    }
}