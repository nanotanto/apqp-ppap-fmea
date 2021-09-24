import {JetView} from "webix-jet";

export default class DashboardView extends JetView{
	config(){
		return {
			type:"",
			rows:[
				{
					rows:[
						{ type:"header", template:"Dashboard"},
						/*wjet::Settings*/
						{ type:"form",
					"rows": [
						{ "view": "chart", "type": "spline", "xAxis": { "template": "#value#", "lines": false },
							"yAxis": {},
							"data": [
								{ "id": 1, "value": 20, "label": "06", "color": "#ee4339", "month": "Jan" },
								{ "id": 2, "value": 55, "label": "07", "color": "#ee9336", "month": "Feb" },
								{ "id": 3, "value": 40, "label": "08", "color": "#eed236", "month": "Mar" },
								{ "id": 4, "value": 78, "label": "09", "color": "#d3ee36", "month": "Apr" },
								{ "id": 5, "value": 61, "label": "10", "color": "#a7ee70", "month": "May" },
								{ "id": 6, "value": 35, "label": "11", "color": "#58dccd", "month": "Jun" },
								{ "id": 7, "value": 80, "label": "12", "color": "#36abee", "month": "Jul" },
								{ "id": 8, "value": 50, "label": "13", "color": "#476cee", "month": "Aug" },
								{ "id": 9, "value": 65, "label": "14", "color": "#a244ea", "month": "Sep" },
								{ "id": 10, "value": 59, "label": "15", "color": "#e33fc7", "month": "Oct" }
							]
						},
						{
							"cols": [
								{ "view": "chart", "pieInnerText": "#value#", "label": "#month#", "data": [
									{ "id": 1, "value": 20, "label": "06", "color": "#ee4339", "month": "Jan" },
									{ "id": 2, "value": 55, "label": "07", "color": "#ee9336", "month": "Feb" },
									{ "id": 3, "value": 40, "label": "08", "color": "#eed236", "month": "Mar" },
									{ "id": 4, "value": 78, "label": "09", "color": "#d3ee36", "month": "Apr" },
									{ "id": 5, "value": 61, "label": "10", "color": "#a7ee70", "month": "May" },
									{ "id": 6, "value": 35, "label": "11", "color": "#58dccd", "month": "Jun" },
									{ "id": 7, "value": 80, "label": "12", "color": "#36abee", "month": "Jul" },
									{ "id": 8, "value": 50, "label": "13", "color": "#476cee", "month": "Aug" },
									{ "id": 9, "value": 65, "label": "14", "color": "#a244ea", "month": "Sep" },
									{ "id": 10, "value": 59, "label": "15", "color": "#e33fc7", "month": "Oct" }
								] },
								{ "view": "chart", "type": "barH", "yAxis": { "template": "#value#" },
									"xAxis": {},
									"color": "#color#",
									"data": [
										{ "id": 1, "value": 20, "label": "06", "color": "#ee4339", "month": "Jan" },
										{ "id": 2, "value": 55, "label": "07", "color": "#ee9336", "month": "Feb" },
										{ "id": 3, "value": 40, "label": "08", "color": "#eed236", "month": "Mar" },
										{ "id": 4, "value": 78, "label": "09", "color": "#d3ee36", "month": "Apr" },
										{ "id": 5, "value": 61, "label": "10", "color": "#a7ee70", "month": "May" },
										{ "id": 6, "value": 35, "label": "11", "color": "#58dccd", "month": "Jun" },
										{ "id": 7, "value": 80, "label": "12", "color": "#36abee", "month": "Jul" },
										{ "id": 8, "value": 50, "label": "13", "color": "#476cee", "month": "Aug" },
										{ "id": 9, "value": 65, "label": "14", "color": "#a244ea", "month": "Sep" },
										{ "id": 10, "value": 59, "label": "15", "color": "#e33fc7", "month": "Oct" }
									]
								}
							]
						},
						{
							"view": "datatable",
							"columns": [
								{ "id": "title", "header": "Title", "fillspace": true, "sort": "string" },
								{ "id": "year", "header": "Year", "sort": "string" },
								{ "id": "votes", "header": "Votes", "sort": "string" },
								{ "id": "rating", "header": "Rating", "sort": "string" },
								{ "id": "rank", "header": "Rank", "sort": "string" },
								{ "id": "category", "header": "Category", "sort": "string" }
							],
							data:[
								{
									"id": 1,
									"title": "The Shawshank Redemption",
									"year": 1994,
									"votes": 678790,
									"rating": 9.2,
									"rank": 1,
									"category": "Thriller"
								},
								{
									"id": 2,
									"title": "The Godfather",
									"year": 1972,
									"votes": 511495,
									"rating": 9.2,
									"rank": 2,
									"category": "Crime"
								},
								{
									"id": 3,
									"title": "The Godfather: Part II",
									"year": 1974,
									"votes": 319352,
									"rating": 9,
									"rank": 3,
									"category": "Crime"
								},
								{
									"id": 4,
									"title": "The Good, the Bad and the Ugly",
									"year": 1966,
									"votes": 213030,
									"rating": 8.9,
									"rank": 4,
									"category": "Western"
								},
								{
									"id": 5,
									"title": "Pulp fiction",
									"year": 1994,
									"votes": 533848,
									"rating": 8.9,
									"rank": 5,
									"category": "Crime"
								},
								{
									"id": 6,
									"title": "12 Angry Men",
									"year": 1957,
									"votes": 164558,
									"rating": 8.9,
									"rank": 6,
									"category": "Western"
								}
							]
						}
					]
				}
					]
				}
			]			
		}
	}
}
