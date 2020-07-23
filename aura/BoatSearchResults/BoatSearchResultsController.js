({
    doSearch: function(component, event, helper) {

        helper.onSearch(component); //calling helper method
    },
    search: function(component, event, helper) {
        var params = event.getParam('arguments');
        component.set("v.boatTypeId", params.boatTypeId); //<---here I am getting undefined
        helper.onSearch(component);
    }
})