export const data = [
	{ id:"dashboard", icon:"mdi mdi-view-dashboard", value:"Dashboard" },
	{ id:"customers", icon:"account", value:"Customers" },
	{ id:"products", icon:"cube", value:"Products" },
	{ id:"services", icon:"settings", value:"Services"},
	{ id:"orders", icon:"checkbox-marked", value:"Orders" },
	{id: "document", icon: "mdi mdi-book", value: "Document"},
	{id: "forms", icon: "mdi mdi-pencil", value:"Form Request",  data:[
		{ id: "fp4_form", value: "FP4"},
		{ id: "lkp_form", value: "LKP"},
		{ id: "ocard_form", value: "O-Card"},
		{ id: "sasaran_form", value: "Sasaran & Program"}
	]},
	{id: "doc", icon: "mdi mdi-book", value:"Documentation", data:[		
		{ id:"document", value:"Document"},
		{ id:"draft", value:"Draft Document"},
		{ id:"flowchart", value:"Create Flowchart"}
	]},
	{id: "tables", icon: "mdi mdi-table", value:"Record", data:[
		{ id: "fp4_record", value: "FP4"}
	]},
	{id: "layouts", icon: "mdi mdi-view-column", value:"View/ Report", data:[
		{ id: "fp4_view", value: "V/R FP4"}
	]},
	{id: "quiz", icon: "mdi mdi-school", value:"Evaluation", 		
		data:[
			{ id: "test", value: "Competency Test"},
			{ id: "result", value: "Test Result"}
		]
	},
	{id: "inbox", icon: "mdi mdi-bell", value:"Inbox Notification"}
						
];
