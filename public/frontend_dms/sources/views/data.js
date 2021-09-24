import {JetView} from "webix-jet";

export default class DataView extends JetView {
	config() {
		return {
			view:"datatable",
			select:true,
			scroll:"y",
			columns:[
				{ id:"edit", header:"", width:35, template:"{common.editIcon()}" },
				{ id:"delete", header:"", width:35, template:"{common.trashIcon()}" },
				{ id:"code", header:["SKU", {content:"textFilter"} ], sort:"text" },
				{ id:"name", header:["Name", {content:"textFilter"} ], sort:"text", fillspace:true, minWidth:150 },
				{ id:"price", header:"Price", sort:"int", format:webix.i18n.priceFormat },
				{ id:"quantity", header:"Quantity", sort:"int"}
			],
			onClick:{
				"wxi-trash":(e, id) => {
					webix.confirm({
						text:"The product will be deleted. <br/> Are you sure?",
						ok:"Yes", cancel:"Cancel",
						callback: res => {
							if (res)
								this.app.callEvent("product:delete",[id.row]);
						}
					});
				},
				"wxi-pencil":(e, id) => {
					//show form
					const item = this.getRoot().getItem(id);
					this.app.callEvent("form:fill", [item]);
				}
			}
		};
	}
}
