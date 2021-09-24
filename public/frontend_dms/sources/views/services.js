import {JetView} from "webix-jet";
import DataView from "views/data";
import ProductForm from "views/forms/productform";
import {services} from "models/services";

export default class ServiceView extends JetView{
	config(){
		return {
			rows:[
				{
					view:"toolbar", css:"subbar", padding:0,
					elements:[
						{
							css:"title", height:50, borderless:true,
							template:`<div class='header'>Services</div>
								<div class='details'>( all services )</div>`
						},
						{},
						{
							view:"button", type:"form",
							label:"Add service", width:140,
							click:() => this.form.showForm()
						}
					]
				},
				{ $subview:DataView }
			]
		};
	}
	init(){
		this.form = this.ui(ProductForm);

		this.on(this.app,"products:save", values => {
			values.id ? services.updateItem(values.id,values) : services.add(values);
		});

		this.on(this.app,"product:delete", id => services.remove(id));
	}
	ready(view){
		const grid = view.queryView({view:"datatable"});
		grid.hideColumn("quantity");
		grid.sync(services);
	}
}
