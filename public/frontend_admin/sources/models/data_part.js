// export const parts = new webix.DataCollection({ data:[
// 	{ id:1, name:"Part Name ABC", no:"Part No ABC", division_id:1, project_id:1, drawing:"Drawing No", file_drawing:"file_drawing.pdf", file_rfq:"file_rfq.pdf", file_spk:"file_spk.pdf", file_pqr:"file_pqr.pdf", proto:"Need"},
// 	{ id:2, name:"Part Name ABC2", no:"Part No ABC2", division_id:2, project_id:2, drawing:"Drawing No2", file_drawing:"file_drawing.pdf", file_rfq:"file_rfq.pdf", file_spk:"file_spk.pdf", file_pqr:"file_pqr.pdf", proto:"Need"},
// 	{ id:3, name:"Part Name ABC3", no:"Part No ABC3", division_id:2, project_id:2, drawing:"Drawing No3", file_drawing:"file_drawing.pdf", file_rfq:"file_rfq.pdf", file_spk:"file_spk.pdf", file_pqr:"file_pqr.pdf", proto:"Need"}

// ]});



export const parts = new webix.DataCollection({ 
    url:"../api/parts"
});