({
	init: function(cmp, event, helper) {
		helper.initializeStars(cmp);
	},

	onStarClicked: function(cmp, event, helper) {
		helper.setStars(cmp, event);
	}
})