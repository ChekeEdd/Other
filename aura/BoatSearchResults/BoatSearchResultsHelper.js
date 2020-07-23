({
    onSearch: function(component) {
        var action = component.get("c.getBoats");
        var boatTypeId = component.get("v.boatTypeId");

        action.setParams({ "boatTypeId": boatTypeId });
        action.setCallback(this, function(response) {
            var status = response.getState();
            if (status === "SUCCESS") {
                if (!!response.getReturnValue()) {
                    component.set("v.boats", response.getReturnValue());
                } else {
                    component.set("v.recordError", "No boats found");
                }
            }
        });
        $A.enqueueAction(action);
    }
})