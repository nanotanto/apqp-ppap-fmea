import {JetView} from "webix-jet";

export default class DocumentsForm extends JetView{
	config(){
		return {
			type:"space",
			rows:[
				{	id:"documentform",
					view:"form", 
                    complexData:true,
					// paddingY:20, paddingX:30,
					elementsConfig:{ labelWidth:100, "required": true, "labelPosition": "top" },
					elements:[

						{ type:"header", template:"Document editor" },
						{
							"cols": [
								{
									"rows": [
										{ "label": "Request No.", 
											options:"fp4form_id",
											"view": "combo", "name": "fp4form_id" 
										},
										{
											"label": "Department",
											"options": "department_",
											"view": "combo",
											"id": 1610522964018,
											"labelWidth": 200,
											"name": "department_id"
										},
										{ "label": "Document No.", "view": "text", "name": "no" },
										{ "label": "Document Name", "view": "text", "name": "name" },
										{ "label": "Revision No.", "view": "text", "name": "no_rev" },
										{ "label": "Description", "view": "textarea", "name": "revisi" }
									]
								},
								// { "label": "Draft Document", "view": "textarea", "gravity": 3, "name": "isi" }
								{ "label": "Draft Document", "view": "tinymce-editor", "gravity": 3, "name": "prosedur",
									value:"",
									cdn:"public/tinymce",
									config:{
										setup: function (editor) {
						                editor.on('init change', function () {
						                    editor.save();
						                });
						            },
						            plugins: [
						                "advlist autolink lists link image charmap print preview anchor",
						                "ruler pagebreak",
						                "searchreplace visualblocks code fullscreen",
						                "insertdatetime media table contextmenu paste imagetools"
						            ],
						            toolbar: "pagebreak | insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image ",
						            pagebreak_separator: "</section><section class='sheet'>"+
"<header><table style='border-collapse: collapse; width: 100%; height: 88px;' border='1'><tbody><tr style='height: 70px;'>"+
"<td style='width: 32.0588%; text-align: center; height: 70px;'>LOGO PERUSAHAAN</td>"+
"<td style='width: 67.9412%; text-align: center; height: 70px;' colspan='3'> $document->name </td></tr><tr style='height: 18px;'>"+
"<td style='width: 32.0588%; height: 18px;'>No Dokumen:&nbsp; $document->no </td>"+
"<td style='width: 13.8235%; height: 18px;'>Revisi:&nbsp; $document->no_rev </td>"+
"<td style='width: 21.3236%; height: 18px;'>Halaman:&nbsp;</td>"+
"<td style='width: 32.7941%; height: 18px;'>Tgl Efektif:&nbsp; $document->date </td></tr>"+
"</tbody></table></header><footer></footer>",
						            image_title: true,
						            automatic_uploads: true,
						            images_upload_url: 'upload',
						            images_upload_base_path: '/',
						            file_picker_types: 'image',
						            file_picker_callback: function(cb, value, meta) {
						                var input = document.createElement('input');
						                input.setAttribute('type', 'file');
						                input.setAttribute('accept', 'image/*');
						                input.onchange = function() {
						                    var file = this.files[0];

						                    var reader = new FileReader();
						                    reader.readAsDataURL(file);
						                    reader.onload = function () {
						                        var id = 'blobid' + (new Date()).getTime();
						                        var blobCache =  tinymce.activeEditor.editorUpload.blobCache;
						                        var base64 = reader.result.split(',')[1];
						                        var blobInfo = blobCache.create(id, file, base64);
						                        blobCache.add(blobInfo);
						                        cb(blobInfo.blobUri(), { title: file.name });
						                    };
						                };
						                input.click();
						            }
									}
								}
							]
						},
						{
							margin:10,
							cols:[
								{
									view:"button", value:"<< Back", align:"center", width:120,
									click:() => this.show("draft")
								},
								{
									view:"button", value:"Save", type:"form", align:"center", width:120, css:"webix_primary",
									click:() => {
										const form = $$("documentform");
										if (form.validate()){
											var data = form.getValues();
											webix.confirm("Do you wont to save data ?").then(function(result){
												// webix.ajax().post("documents/store", data).then(() => webix.message("Saved"));
												webix.send("documents/store", data);
											});
                                        }
                                        else
                                        webix.message({ type:"error", text:"Form data is invalid" });
									}
								},
								{}
							]
						}
					],
					rules:{
						// name:webix.rules.isNotEmpty,
						// email:webix.rules.isEmail
					}
				}
			]			
		};
	}
}
