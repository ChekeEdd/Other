({

    init: function(component, event, helper) {
        component.set("v.enableFullDetails", $A.get("e.force:navigateToSObject"));
    },
    onFullDetails: function(component, event, helper) {
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": component.get("v.boat.Id")
        });
        navEvt.fire();
    },
    onBoatSelected: function(component, event, helper) {
        var boatSelected = event.getParam("boat");
        component.set("v.id", boatSelected.Id);
        var service = component.find("service");
        service.reloadRecord();


    },

    onRecordUpdated: function(component, event, helper) {
        var boat = component.get("v.boat");
        console.log("onRecordUpdated called | boat: " + boat.Id);

        //invoke a refresh on the reviews tab, calling public method refresh
        var BoatReviews = component.find("boatReviewCmp");
        console.log("BoatReviews: " + BoatReviews);
        if (typeof BoatReviews != 'undefined') {
            BoatReviews.refresh();
        }
    },

    onBoatReviewAdded: function(component, event, helper) {

        component.find("tabs").set("v.selectedTabId", "boatreviewtab");
        var BoatReviews = component.find("boatReviewCmp");
        BoatReviews.refresh();



    }

})