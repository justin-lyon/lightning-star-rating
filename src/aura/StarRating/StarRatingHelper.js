({
	setUrl: function(cmp) {
		var url = cmp.get("v.url");
		var rating = cmp.get("v.rating");
		var maxRating = cmp.get("v.maxRating");
		var activeColor = cmp.get("v.activeColor");
		var readOnly = cmp.get("v.readOnly");

		var params = [
			{
				key: 'rating',
				value: rating
			}, {
				key: 'maxRating',
				value: maxRating
			}, {
				key: 'activeColor',
				value: activeColor
			}, {
				key: 'readOnly',
				value: readOnly
			}];

		var paramStrings = params.map(param => param.key + '=' + param.value)
		url += '?' + paramStrings.join('&');
		cmp.set("v.url", url);
	}
})