import {JetView} from "webix-jet";
import {documents} from "models/documents";

export default class DaocumentView extends JetView{
	config(){
		return {
			type:"",
			cols:[
				{
					width:300,
					header:"<center>Category Documents</center>",
                	body:{
							view:"list", 
							type:{  height:40 },
							scroll:false,
							template:"<center><span class='info'>#name#</span></center>",
							select:true,
							url:"api/dmsCategory",
							// data:[
							// 	{ id:1, name:"Manual" },
							// 	{ id:2, name:"Procedure" },
							// 	{ id:3, name:"Work Instruction" },
							// 	{ id:4, name:"Form / Check Sheet" },
							// ],			
							on:{
								onItemClick: function(id){				
									
								}
							}
						}					
				},
				{
					url: "documents_publish",
					view: "datatable",
					id: "tbl_document",
					select: true,
					columns: [
						{ id:"no",	header:["Document No.",{ content:"serverFilter"}], sort:"server",	width:180,	 template:"<a class='link' target='_blank' href='#file#'>#no#</a>"},
						{ id:"name",  fillspace:true,	header:["Document Name",{ content:"serverFilter"}], sort:"server"},
						{ id:"no_rev",	header:["Rev."], width:50},
						{ id:"date",	header:["effective Date"], width:100},
						{ id:"department",	header:["Department",{ content:"serverFilter"}], sort:"server", width:150},
						// { id:"detail", header:"", width:70, template:"<a class='detail' href='#'>Detail</a>"}
						
					],					
					on:{
						"onresize":webix.once(function(){ 
							this.adjustRowHeight("name", true); 
						}),
						onBeforeLoad:function(){
							this.showOverlay("Loading...");
						},
						onAfterLoad:function(){
							this.hideOverlay();
						}

					},
				}
			]
		};
	}
	init(){
		// $$('tbl_document').sync(documents);
	}
}
