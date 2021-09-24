import {JetView} from "webix-jet";
import {customers} from "models/customers";

export default class CustomersForm extends JetView{
	config(){
		return {
			view:"form", paddingY:20, paddingX:30,
			elementsConfig:{ labelWidth:100 },
			elements:[
				{ type:"header", height:45, template:"Customers' info editor" },
				{ view:"text", name:"name", label:"Name" },
				{ view:"text", name:"email", label:"Email" },
				{ view:"text", name:"phone", label:"Phone" },
				{ view:"text", name:"address", label:"Address" },
				{ view:"combo", name:"status", label:"Status", options:["Standard", "Silver", "Gold", "Platinum"] },
				{
					margin:10,
					cols:[
						{
							view:"button", value:"<< Back", align:"center", width:120,
							click:() => this.getBack()
						},
						{
							view:"button", value:"Save", type:"form", align:"center", width:120,
							click:() => {
								const form = this.getRoot();
								if (form.validate()) {
									//save values
									this.saveCustomer(form.getValues());
									this.getBack();
								}
							}
						},
						{}
					]
				}
			],
			rules:{
				name:webix.rules.isNotEmpty,
				email:webix.rules.isEmail
			}
		};
	}
	urlChange(form){
		customers.waitData.then(()=>{
			const id = this.getParam("id");
			
			if (id && customers.exists(id)){
				form.setValues(customers.getItem(id));
			}
		});
	}
	saveCustomer(values){
		values.id ? customers.updateItem(values.id,values) : customers.add(values);
	}
	getBack(){
		//clear values and validation
		const form = this.getRoot();
		form.clear();
		form.clearValidation();
		
		//show grid
		this.show("customers");
	}
}
