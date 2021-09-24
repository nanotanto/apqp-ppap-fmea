import {JetView} from "webix-jet";

export default class ProductForm extends JetView{
	config(){
		return {
			view:"window", head:false, position:"center",
			modal:true, body:{
				view:"form",
				paddingY:20, paddingX:30,
				width:500,
				elementsConfig:{ labelWidth:100 },
				elements:[
					{ view:"text", name:"code", label:"Code" },
					{ view:"text", name:"name", label:"Name"},
					{ view:"text", name:"price", label:"Price" },
					{
						margin:10,
						cols:[
							{},
							{
								view:"button", value:"<< Back",
								align:"center", width:120,
								click:() => this.hideForm()
							},
							{
								view:"button", value:"Save", type:"form",
								align:"center", width:120,
								click:() => {
									if (this.form.validate()) {
										this.app.callEvent("products:save", [this.form.getValues()]);
										this.hideForm();
									}
								}
							}
						]
					}
				],
				rules:{
					$all:webix.rules.isNotEmpty
				}
			}
		};
	}
	init(view){
		this.form = view.getBody();

		this.on(this.app, "form:fill", values => {
			view.show();
			this.form.setValues(values);
		});
	}
	addExtra(extra, pos){
		this.form.addView(extra, pos);
	}
	showForm(){
		this.getRoot().show();
	}
	hideForm(){
		this.getRoot().hide();
		this.form.clear();
		this.form.clearValidation();
	}
}
