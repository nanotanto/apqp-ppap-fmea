// export const status = new webix.DataCollection({ data:[
// 	{ id:1, name:"Status Name", document_id:1, value:"Requested", details:"by User Requester", date:"2021-04-05"},
// 	{ "id": 2, document_id:1, "value": "Taken", "details": "by Malcolm Merlyn", "date": "2017-04-10" }
// ]});


export const status = new webix.DataCollection({ 
    url:"api/status"
});