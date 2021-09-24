import {JetView} from "webix-jet";

export default class OrdersView extends JetView{
	config(){
		return {
			template:"<p class='title'>Orders</p>", css:"draft"
		};
	}
}
