import {JetView, plugins} from "webix-jet";
import {data} from "models/menu";

export default class MenuView extends JetView {
	config() {
		return {
			width:200,
			view:"sidebar",
			layout:"y",
			select:true,
			data:data,
			on:{
				onBeforeSelect:function(id){
					if(this.getItem(id).$count){
						//debugger;
						return false;
					}
				},
				onAfterSelect:function(id){
					this.$scope.show("./"+id);
				}
			}
		};
	}
	init(view) {
		view.parse(data);
		// this.use(plugins.Menu, view);
	}
}
