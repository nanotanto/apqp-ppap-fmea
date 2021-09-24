import {JetView} from "webix-jet";
import DataView from "views/data";
import ProductForm from "views/forms/productform";
import {products} from "models/products";

export default class ProductsView extends JetView {
	config(){
		return {
			rows:[
				{
					view:"toolbar", css:"subbar", padding:0,
					elements:[
						{
							css:"title", height:50, borderless:true,
							template: `<div class='header'>Products</div>
								<div class='details'>( all products )</div>`
						},
						{
							view:"button", type:"form",
							label:"Add product", width:140,
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
		this.form.addExtra({ view:"text", name:"quantity", label:"Quantity", labelWidth:100 }, 3);

		this.on(this.app,"products:save", values => {
			values.id ? products.updateItem(values.id,values) : products.add(values);
		});

		this.on(this.app,"product:delete", id => products.remove(id));
	}
	ready(view){
		const grid = view.queryView({view:"datatable"});
		grid.sync(products);
	}
}
