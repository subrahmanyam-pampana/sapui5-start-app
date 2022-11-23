sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/m/MessageToast'
], function (Controller,MessageToast) {
	"use strict";

	return Controller.extend("app.controller.App", {
		onOpenDialog:function(){
			MessageToast.show("controller is linked!")
		}
	});

});