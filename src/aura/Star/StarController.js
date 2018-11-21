({
	onClick: function(cmp, event, helper) {
		if(!cmp.get("v.readOnly")) {
			helper.fireStar(cmp);
		}
	}
})