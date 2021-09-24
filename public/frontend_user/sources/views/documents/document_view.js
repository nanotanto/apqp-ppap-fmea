import {JetView} from "webix-jet";
// import {documents} from "models/data_document";


export default class DocumentView extends JetView{
	config(){

		return {
            view:"popup",
            position:"center",
            width:500,
            height:350,
            // select:true,
            body:{ 
                view:"iframe", id:"frame-body" 
                // src:"http://localhost/myproject/SysDur/documents/"+id
            }
		}
    }
    showWindow(){
        this.getRoot().show();        
    }
    saveDocuments(values){
        // values.id ? documents.updateItem(values.id,values) : documents.add(values);
    }
    

}