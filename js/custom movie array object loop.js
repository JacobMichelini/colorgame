var movies = [
	{title: "movie1",
	rating: "3 stars",
	seen: true
	},
	{title: "movie2",
	rating: "1 stars",
	seen: false
	}
]

movies.forEach(function(movie){
	var result = "You have ";
	if (movie.seen) {
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating;
	console.log(result)
});
