({
	fireStar: function(cmp) {
		var starClicked = cmp.getEvent('clicked');
		var star = cmp.get("v.star");
		starClicked.setParams({
			data: star
		}).fire();
	}
})