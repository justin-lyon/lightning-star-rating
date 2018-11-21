({
	initializeStars: function(cmp) {
		var maxRating = cmp.get("v.maxRating");
		var rating = cmp.get("v.rating");

		var stars = [];
		for(var i = 1; i < maxRating + 1; i++) {
			var isActive = i <= rating;
			var star = {
				id: i,
				isActive: isActive
			}
			stars.push(star);
		}
		cmp.set("v.stars", stars);
	},

	setStars: function(cmp, event) {
		var clickedStar = event.getParams().data;
		var stars = cmp.get("v.stars");

		var newStars = stars.map(function(star) {
			star.isActive = star.id <= clickedStar.id;
			return star;
		});

		cmp.set("v.stars", stars);
		cmp.set("v.rating", clickedStar.id);
	}
})