import {JetView} from "webix-jet";
import {documents} from "models/data_document";

export default class DocumentView extends JetView{
	config(){
		return {
            view:"popup",
            position:"center",
            width:500,
            height:350,
            select:true,
            body:{
                type:"wide", rows:[
                    {
                        "css": "webix_dark",
                        "view": "toolbar",
                        "height": 35,
                        "cols": [
                            { "view": "label", "label": "View Document", "align": "center" },
                        ]
                    },
                    {
                        "autoheight": false,
                        "view": "form",
                        id:"form_document_view",
                        "rows": [
                            {
                                "rows": [
                                { view:"text", id:"par_id", name:"part_id", label:"part_id", hidden:true},
                                { "label": "Name", "view": "text", "name": "name" },
                                { "label": "View Document", "view": "button", "name": "file" },  
                                { "label": "Category", "view": "text", "name": "category_id" },
                                { "label": "Status", "view": "text", "name": "status" },
                                { "label": "User_ID", "view": "text", "name": "user_id" },
                                { "label": "Sent_to", "view": "text", "name": "sent_to" },
                                
                                ]
                            },
                            {paddingY:20,
                                "cols": [
                                    { "view": "template", "role": "placeholder", "gravity": 4, "borderless": true },                                 
                                    { id:"btn_return","label": "Return", "view": "button", "css": "webix_primary", "width": 100},          
                                    { id:"btn_approve","label": "Approve", "view": "button", "css": "webix_primary", "width": 100, 
                                    click:()=>{
                                        var data = $$("form_document").getValues();  

                                        webix.confirm({
                                            text:"The data will be saved. <br/> Are you sure?",
                                            ok:"Yes", cancel:"Cancel",
                                            callback: res => { 


                                                if (res){

                                                    this.saveDocuments(data);

                                                    // webix.ajax().post("http://localhost/myproject/NewModel/api/projects", data, webix.bind(function(text, data){
                                                        
                                                    //     var project = data.json();      
                                                    //     this.show("parts?project="+project.id); 
                                                    //  }, this));

                                                    this.getRoot().hide();  
                                                };
                                                    
                                            }
                                        });

                                    }
                                    },
                                ]
                            }
                        ],

            rules:{
                name:webix.rules.isNotEmpty,
            }
                    }
                ]
            }
		}
    }
    showWindow(){
        this.getRoot().show();        
    }
    saveDocuments(values){
        values.id ? documents.updateItem(values.id,values) : documents.add(values);
    }
    

}