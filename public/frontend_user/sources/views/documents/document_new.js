import {JetView} from "webix-jet";
import {documents} from "models/data_document";


export default class DocumentNew extends JetView{
	config(){
		return {
            view:"popup",
            position:"center",
            width:500,
            height:250,
            select:true,
            body:{
                type:"wide", rows:[
                    {
                        "css": "webix_dark",
                        "view": "toolbar",
                        "height": 35,
                        "cols": [
                            { "view": "label", "label": "Add/ Edit Document", "align": "center" },
                        ]
                    },
                    {
                        "autoheight": false,
                        "view": "form",
                        id:"form_document",
                        "rows": [
                            {
                                "rows": [
                                { view:"text", id:"part_id", name:"part_id", label:"part_id", hidden:true},
                                { "label": "Document ID :", "view": "text", "labelPosition": "top", "name": "id", id:"doc_id", hidden:true },
                                { "label": "Category", "view": "select", "name": "category_id", options:[{id:'', value:""},{id:1, value:"Proto"},{id:2, value:"N1-N5"},{id:3, value:"FTP"},{id:4, value:"N1000"},{id:5, value:"Initial Control"}], labelWidth:120 },
                                
                                { "label": "Document Name", "view": "text", "name": "name", labelWidth:120 },
                                // { "label": "Attachment", "view": "text", "name": "file" },                                
                                {
                                    "height": 38,
                                    "cols": [
                                    { view:"label", width:120 },
                                    { 
                                        view: "uploader", id:"upl5", 
                                        autosend:true, value: 'Upload Document', name:"file",
                                        link:"doclist5",  
                                        upload:"uploadfile"
                                    },
                                    {
                                        view:"list",  id:"doclist5", type:"uploader",
                                        autoheight:true, borderless:true
                                    }

                                    // {
                                    //     view:"uploader", upload:"/uploadfile",
                                    //     id:"upl1", name:"file",
                                    //     value:"Upload Attachment", 
                                    //     link:"doclist1", autosend:true
                                    // },
                                    // { view:"list", scroll:false, id:"doclist1", type:"uploader", autoheight:true, borderless:true },

                                    ]
                                },
                                // { "label": "Status", "view": "text", "name": "status", labelWidth:120 },
                                // { "label": "Issued By", "view": "text", "name": "user_id", labelWidth:120 },
                                // { "label": "Sent_to", "view": "text", "name": "sent_to", labelWidth:120 },
                                
                                ]
                            },
                            {paddingY:20,
                                "cols": [
                                    { "view": "template", "role": "placeholder", "gravity": 4, "borderless": true },                               
                                    { id:"btn_save_document","label": "Save", "view": "button", "css": "webix_primary", "width": 100, 
                                    click:()=>{
                                        if ($$("form_document").validate()) {
                                            //save values
                                            var data = $$("form_document").getValues();  

                                            webix.confirm({
                                                text:"The data will be Send. <br/> Are you sure?",
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

                                    }
                                    },
                                ]
                            }
                        ],

            rules:{
                name:webix.rules.isNotEmpty,
                category_id:webix.rules.isNotEmpty,
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
        // values.id ? documents.updateItem(values.id,values) : documents.add(values);

        // const part_id = this.getParam("part");
        const part_id = $$('part_id').getValue();
        $$('tbl_doc').clearAll();

        const id = $$("doc_id").getValue();
        // console.log(id);

        if ( id == "" ) {
            documents.add(values);
            webix.ajax().post("documents/store", values).then(() => {
            $$('tbl_doc').load("document/"+part_id);
            });
        } else { 
            documents.updateItem(values.id,values);
            webix.ajax().headers({'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}).put("documents/"+values.id, values).then(() => {
            $$('tbl_doc').load("document/"+part_id);
            });
        }

    }
    

}