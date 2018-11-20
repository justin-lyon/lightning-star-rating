({
	init: function(cmp, event, helper) {

		helper.setUrl(cmp);
	},

	onMessage: function(cmp, event, helper) {
		var payload = event.getParams().payload;
		if(payload.channel === 'rating') {
			cmp.set("v.rating", payload.rating);
		}
	},

	onError: function(cmp, event, helper) {
		var payload = event.getParams();
		console.error('Error Communicating to StarRating component.', JSON.parse(JSON.stringify(payload)));
	}
})