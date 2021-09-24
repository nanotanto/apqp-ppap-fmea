import {JetView} from "webix-jet";
import ProjectID from "views/parts/project_id";
import PartData from "views/parts/part_data";
import PartForm from "views/parts/part_form";
import {parts} from "models/data_part";
// import PartNew from "views/parts/part_new";


export default class PartsIndex extends JetView{
	config(){
		return {
			type:"form", 
            rows:[
				{
                    "css": "webix_dark",
                    "view": "toolbar",
                    "height": 35,
                    "cols": [
                        { "view": "label", "label": "PROJECT INFORMATION", "align": "center" },
                        { "icon": "wxi-close", "view": "icon", "height": 33, "width": 30, 
                            click: "location.href='#!/projects'"
                        },
                    ]
                },
                { $subview: ProjectID },
                // {
                //     "css": "webix_dark",
                //     "view": "toolbar",
                //     "cols": [
                //         { "view": "label", "label": "List Parts", "id": 1615794429571 },
                //         {
                //             "view": "button",
                //             "label": "Add Part",
                //             "autowidth": true,
                //             "css": "webix_primary",
                //             "localId": "button:add",
                //             "height": 0,
                //             click:()=> this.WinPartNew.showWindow()

                //         }
                //     ],
                //     "id": 1615794429570,
                //     "height": 0
                // },
                { $subview:PartData },         
                {
                    "css": "webix_dark",
                    "view": "toolbar",
                    "height": 40,
                    "cols": [
                        {},
                        // { id:"btn_all", "label": "All", "view": "button", "height": 32, disabled:false,
                        //     click: () => {
                        //         var id = $$("tbl_part").getSelectedId();
                        //         this.show("documents?part="+id+"&category="); 
                        //     }
                        // },
                        // { id:"btn_proto", "label": "Proto", "view": "button", "height": 32, disabled:false,
                        //     click: () => {
                        //         var id = $$("tbl_part").getSelectedId();
                        //         this.show("documents?part="+id+"&category=1"); 
                        //     }
                        // },
                        // { "label": "N1-N5", "view": "button", "height": 32, "id": 1606719931916 },
                        // { "label": "FTP", "view": "button", "height": 32, "id": 1606719931917 },
                        // { "label": "N1000", "view": "button", "height": 32, "id": 1606719931918 },
                        // { "label": "Initial Control", "view": "button", "height": 32 },
                        // { "label": "Back", "view": "button", "height": 0, "width": 100,
                        //     click: () => {
                        //         this.app.show("/top/preparation");
                        //     }
                        // },
                        // { "view": "label" },
                        // { id:"btn_submit","label": "Submit", "view": "button", "height": 0, "width": 100, "css": "webix_danger", disabled:false,
                        //     click: () => {
                        //         var id = $$("id").getValue();
                        //         this.app.show("/top/preparation?id="+id);
                        //     }
                        // }
                    ],
                    //"padding": { "left": 10, "right": 10 }
                }
			]
		}
    }


    init(){
        // this.WinPartNew = this.ui(PartNew);   
    }

}