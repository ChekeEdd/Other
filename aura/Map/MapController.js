({
    onPlotMapMarker: function(component, event, helper) {


        var lat = event.getParam("lat");
        var long = event.getParam("long");
        var title = event.getParam("label");
        var locationData = {

            sObjectId: event.getParam("sObjectId"),

            lat: event.getParam("lat"),

            long: event.getParam("long"),

            label: event.getParam("label")

        };
        var location = component.get("v.location");

        var markersTitle = event.getParam("label");
        var lat = event.getParam("lat");
        var long = event.getParam("long");
        var id = event.getParam("sObjectId");
        var mapMarkers = component.get("v.mapMarkers");

        var mapMarkers = [{
            location: {
                'Latitude': lat,
                'Longitude': long
            },
            title: markersTitle
        }];
        console.log(mapMarkers);
        console.log(markersTitle);

        component.set("v.mapMarkers", mapMarkers);
        component.set("v.zoomlevel", 10);
        component.set("v.markersTitle", markersTitle);
    },

    jsLoaded: function(component) {
        component.set("v.jsLoaded", true);
    }
})