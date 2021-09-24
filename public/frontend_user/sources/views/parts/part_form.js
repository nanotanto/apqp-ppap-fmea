import {JetView} from "webix-jet";
import {parts} from "models/data_part";


export default class PartForm extends JetView{
	config(){
		return {
			view:"form", 
			// paddingY:20, 
			// paddingX:30,
			elementsConfig:{ labelWidth:150 , "labelPosition": "left"},
			elements:[
				{ type:"header", height:45, template:"parts' info editor" },
				// {},
				{ view:"text", id:"project_id", name:"project_id", label:"project_id"},
				{ "label": "Part No", "view": "text", "name": "no" },
				{ "label": "Part Name", "view": "text", "name": "name" },
				{ "label": "Need Proto", "view": "text", "name": "proto" },
				{ "label": "Drawing No", "view": "text", "name": "drawing" },
				{
					"height": 38,
					"cols": [
					{ "label": "Drawing", "view": "label", "width": 150 },
					{ "label": "Upload Drawing", "view": "button", "width": 150 },
					{ "view": "template", "role": "placeholder", "borderless": true }
					]
				},
				{
					"height": 38,
					"cols": [
					{ "label": "RFQ", "view": "label", "width": 150 },
					{ "label": "Upload RFQ", "view": "button", "width": 150 },
					{ "view": "template", "role": "placeholder", "borderless": true }
					]
				},
				{
					"height": 38,
					"cols": [
					{ "label": "SPK", "view": "label", "width": 150 },
					{ "label": "Upload SPK", "view": "button", "width": 150 },
					{ "view": "template", "role": "placeholder", "borderless": true }
					]
				},
				{
					"height": 38,
					"cols": [
					{ "label": "PQR", "view": "label", "width": 150 },
					{ "label": "Upload PQR", "view": "button", "width": 150 },
					{ "view": "template", "role": "placeholder", "borderless": true }
					]
				},
				{},		
                
				{
					margin:10,
					cols:[
						{
							view:"button", value:"<< Back", align:"center", width:120,
							click:() => this.getBack()
						},
						{
							view:"button", value:"Save & Add New", type:"form", align:"center", width:120, id:"save_part_add", hidden:true, "css": "webix_primary",
							click:() => {
								const form = this.getRoot();
								if (form.validate()) {
									//save values
									this.savePart(form.getValues());
									form.clear();
									form.clearValidation();
									const project_id = this.getParam("project");
									$$("project_id").setValue(project_id);
								}
							}
						},
						{
							view:"button", value:"Save & Close", type:"form", align:"center", width:120, id:"save_part_close", hidden:true, "css": "webix_primary",
							click:() => {
								const form = this.getRoot();
								if (form.validate()) {
									//save values
									this.savePart(form.getValues());
									this.getBack();
								}
							}
						},
						{
							view:"button", value:"Edit", type:"form", align:"center", width:120, id:"edit_part", hidden:true, "css": "webix_primary",
							click:() => {
								const form = this.getRoot();
								if (form.validate()) {
									//save values
									this.editPart(form.getValues());
									this.getBack();
								}
							}
						},
						
					]
				}
			],
			rules:{
				no:webix.rules.isNotEmpty
			}
		};
	}
	urlChange(form){
		const project_id = this.getParam("project");
		$$("project_id").setValue(project_id);

		parts.waitData.then(()=>{
			const id = this.getParam("id");
			
			if (id && parts.exists(id)){
				form.setValues(parts.getItem(id));
			}
		});
	}
	savePart(values){
		// webix.ajax().post("http://localhost/myproject/NewModel/api/parts", values);
		values.id ? parts.updateItem(values.id,values) : parts.add(values);
	}
	editPart(values){
		// webix.ajax().put("http://localhost/myproject/NewModel/api/parts/"+values.id, values);
		values.id ? parts.updateItem(values.id,values) : parts.add(values);
	}
	getBack(){
		// $$("tbl_part").clearAll();
		const project_id = $$("project_id").getValue();
		//clear values and validation
		const form = this.getRoot();
		form.clear();
		form.clearValidation();
		
		//show grid
		
		this.show("parts.index?project="+project_id);
	}
}
