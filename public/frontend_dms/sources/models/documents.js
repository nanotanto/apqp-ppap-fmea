export const documents = new webix.DataCollection({
	url:"documents_publish",
	save:"documents.store"
});

export function getRecords(){ return documents; };