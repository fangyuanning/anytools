define(function(require) {
	
	require("w!/UI2/anytools/menu/menulogic/appsetup.w");
	require("w!/UI2/anytools/menu/menulogic/gamesetup.w");
	require("w!/UI2/anytools/menu/menulogic/baseselfinfo.w");
	require("w!/UI2/anytools/menu/menulogic/selfaccount.w");
	require("w!/UI2/anytools/menu/menulogic/gameupload.w");
	require("w!/UI2/anytools/menu/menulogic/appupload.w");
	
	return {
		"$children" : [ {
			"$children" : [ {
				"$name" : "item",
				"$text" : "",
				"display" : "solid",
				"label" : "base_self_info",
				"psmCount" : "1",
				"url" : "/UI2/anytools/menu/menulogic/baseselfinfo.w"
			},{
				"$name" : "item",
				"$text" : "",
				"display" : "solid",
				"label" : "base_self_accountinfo",
				"psmCount" : "1",
				"url" : "/UI2/anytools/menu/menulogic/selfaccount.w"
			}],
			"$name" : "item",
			"$text" : "",
			"display" : "solid",
			"label" : "self_info"
		} ,{
			"$children" : [ {
				"$name" : "item",
				"$text" : "",
				"display" : "solid",
				"label" : "setup_game",
				"psmCount" : "1",
				"url" : "/UI2/anytools/menu/menulogic/gamesetup.w"
			},
			{
				"$name" : "item",
				"$text" : "",
				"display" : "solid",
				"label" : "setup_app",
				"psmCount" : "1",
				"url" : "/UI2/anytools/menu/menulogic/appsetup.w"
			} ],
			"$name" : "item",
			"$text" : "",
			"display" : "solid",
			"label" : "setup"
	},{
		"$children" : [ {
			"$name" : "item",
			"$text" : "",
			"display" : "solid",
			"label" : "setup",
			"psmCount" : "1",
			"url" : "/UI2/anytools/menu/menulogic/gameupload.w"
		},
		{
			"$name" : "item",
			"$text" : "",
			"display" : "solid",
			"label" : "uploaded_apps",
			"psmCount" : "1",
			"url" : "/UI2/anytools/menu/menulogic/appupload.w"
		} ],
		"$name" : "item",
		"$text" : "",
		"display" : "solid",
		"label" : "contribute"
	}
		
	]};
});