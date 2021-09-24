import {JetView} from "webix-jet";
import {customers} from "models/customers";

export default class CustomersData extends JetView{
	config(){
		return {
			view:"datatable",
			select:true,
			scroll:"y",
			columns:[
				{ id:"edit", header:"", width:35, template:"{common.editIcon()}" },
				{ id:"delete", header:"", width:35, template:"{common.trashIcon()}" },
				{ id:"name", header:["Name", {content:"textFilter"} ], sort:"text", fillspace:true, minWidth:150 },
				{ id:"email", header:"Email", sort:"text", adjust:"data" },
				{ id:"phone", header:"Phone", sort:"text", width:120 },
				{ id:"address", header:"Address", sort:"text", width:200 },
				{ id:"status", header:"Status", sort:"text", width:100 }
			],
			onClick:{
				"wxi-trash":(e, id) => {
					webix.confirm({
						text:"The customer will be deleted. <br/> Are you sure?",
						ok:"Yes", cancel:"Cancel",
						callback: res => {
							if (res)
								customers.remove(id.row);
						}
					});
				},
				"wxi-pencil":(e, id) => this.show("customers?id="+id.row)
			}
		};
	}
	init(view){
		view.sync(customers);
	}
}
