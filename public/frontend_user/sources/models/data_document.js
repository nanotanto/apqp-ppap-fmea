// export const documents = new webix.DataCollection({ data:[
// 	{ id:1, name:"Document Name",file:"file.pdf", category_id:1, part_id:1, status:"Requested", user_id:1, sent_to:2},
// 	{ id:7, name:"Document Name2",file:"file.pdf", category_id:2, part_id:1, status:"Requested", user_id:1, sent_to:2}
	
// ]});

export const documents = new webix.DataCollection({ 
    url:"api/documents"
});