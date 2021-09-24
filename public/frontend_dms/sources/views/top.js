import {JetView} from "webix-jet";
import MenuView from "views/menu";

export default class TopView extends JetView {
	config(){
		return {
			rows:[
				// {
				// 	view: "toolbar", height:60,
				// 	elements:[
				// 		{ width:12 },
				// 		{ css:"logo" },
				// 		{}
				// 	]
				// },
				{
					cols:[
						MenuView, { $subview:true }
					]
				},
				{
					template:"<p class='title'>All rights reserved &copy</p>",
					height:60, css:"footer"
				}
			]
		};
	}
}
