import {JetView} from "webix-jet";

export default class FlowchartView extends JetView{
	config(){
		return {
            type:"space",
            rows:[
            	{
            		rows:[
						// { type:"header", template:"Flowchart"},
						/*wjet::Settings*/
						{
							view:"iframe", 
							id:"frame-body", 
							src:"http://localhost/drawio/"
						}
					]
            	}

            ]			
		}
	}
}