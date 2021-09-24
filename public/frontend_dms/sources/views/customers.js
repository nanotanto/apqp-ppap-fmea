import {JetView} from "webix-jet";
import CustomersData from "views/customersdata";
import CustomersForm from "views/forms/customerform";

export default class CustomersView extends JetView{
	config(){
		return {
			rows:[
				{
					view:"toolbar", css:"subbar", padding:0,
					elements:[
						{
							height:50, css:"title", borderless:true,
							template:`<div class='header'>Customers</div>
								<div class='details'>( info & editing )</div>`
						},
						{
							view:"button", localId:"button:add", type:"form",
							label:"Add customer", width:140,
							click:() => this.$$("multi").setValue("formView")
						}
					]
				},
				{
					animate:false,
					fitBiggest:true,
					localId:"multi",
					cells:[
						{ id:"gridView", $subview:CustomersData },
						{ id:"formView", $subview:CustomersForm }
					],
					on:{
						onViewChange:(prev)=>{
							const button = this.$$("button:add");
							(prev === "gridView") ? button.hide() : button.show();
						}
					}
				}
			]
		};
	}
	urlChange(){
		// grid-form navigation
		this.$$("multi").setValue(this.getParam("id") ? "formView" : "gridView");
	}
}
