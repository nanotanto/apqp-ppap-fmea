// export const projects = new webix.DataCollection({ data:[
// 	{ id:1, name:"Project ABC", model:"Model ABC", customer:"YIMM", file:"file.pdf"},	
// 	{ id:2, name:"Project XYZ", model:"Model XYZ", customer:"YIMM", file:"file.pdf"}
// ]});

// var url = window.location.protocol +"//"+ window.location.hostname+":"+window.location.port+window.location.pathname;
export const projects = new webix.DataCollection({ 
    url:"../api/projects"
});