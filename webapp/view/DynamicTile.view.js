// Copyright (c) 2009-2014 SAP SE, All Rights Reserved

(function () {
    "use strict";
    /*global jQuery, sap */
    /*jslint nomen: true */

    sap.ui.jsview("view.DynamicTile", {
        getControllerName: function () {
            return "view.DynamicTile";
        },
        createContent: function (oController) {
            this.setHeight('100%');
            this.setWidth('100%');
        },
        getTileControl: function() {
            jQuery.sap.require('sap.m.GenericTile');
            var oController = this.getController();

            return new sap.m.GenericTile({
                header: '{/data/display_title_text}',
                subheader: '{/data/display_subtitle_text}',
                size: "Auto",
                tileContent: [new sap.m.TileContent({
                    size: "Auto",
                    footer: '{/data/display_info_text}',
                    unit: '{/data/display_number_unit}',
                    //We'll utilize NumericContent for the "Dynamic" content.
                    // content: [new sap.m.NumericContent({
                    //     scale: '{/data/display_number_factor}',
                    //     value: '{/data/display_number_value}',
                    //     truncateValueTo: 5,//Otherwise, The default value is 4.
                    //     indicator: '{/data/display_state_arrow}',
                    //     valueColor: '{/data/display_number_state}',
                    //     icon: '{/data/display_icon_url}',
                    //     width: '100%'
                    // })]
                    content: [new sap.m.ImageContent({
                        src: '{/data/display_icon_url}'
                    })]                    
                })],
                press : [ oController.onPress, oController ]
            });
        },
        getLinkControl: function() {
            jQuery.sap.require('sap.m.Link');

            return new sap.m.Link({
                text: "{/config/display_title_text}",
                href: "{/nav/navigation_target_url}",
                //set target formatter so external links would be opened in a new tab
                target: {
                    path: "/nav/navigation_target_url",
                    formatter: function(sUrl){
                        if (sUrl && sUrl[0] !== '#'){
                            return "_blank";
                        }
                    }
                }
            });
        }
    });
}());