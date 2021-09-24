import {JetView} from "webix-jet";

export default class QuizView extends JetView{
	config(){
		return {
            type:"space",
            rows:[
            	{
            		rows:[
						{ type:"header", template:"Evaluation"},
						/*wjet::Settings*/
						{
							view:"iframe", 
							id:"frame-body", 
							src:"http://127.0.0.1:8080"
						}
					]
            	}

            ]			
		}
	}
}