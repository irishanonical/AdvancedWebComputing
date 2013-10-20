
$(document).ready(function(){

	$('#search').keypress(function(event) {
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '13') {
			var movie_title =  $("#search").val();
			searchMovies(movie_title);
				if (search.value == ""){
					alert("You didn't search a Movie Title.");
				}
		$('#search').val('');
		}
	});

	$("#submit").click(function(){
		var movie_title =  $("#search").val();
		searchMovies(movie_title);
		$('#search_result').empty();

	});
	
	function searchMovies(movie_title){
		console.log(movie_title)
		var server = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json'
		$.ajax({
			url: server,
			dataType: 'jsonp',
			data:{
				q: movie_title,
				apiKey: 'hcrurhsttexasrgfm2y6yahm'
			},
			success:showMovies
		});	
	}

	function showMovies(response){
		
		console.log('response', response);
		$('#search_result').empty();
        var movies = response.movies;
		for(var i = 0; i < movies.length; i++){
			var movie = movies[i];
			var marky = "";
			var template = $('#movie').html();
			var $template = Handlebars.compile(template);
			var markup = $template(movie);
				 $('#search_result').append(markup);
			}

	}
	
	$('#top_10').click(function(){   
        $.ajax({
        url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json',
        dataType: 'jsonp',
        data: {
            apiKey: 'hcrurhsttexasrgfm2y6yahm'
        },
        success: showTopTen
    	});
	}); 


	function showTopTen(response){
		
		console.log('response', response);
		$('#search_result').empty();
        var movies = response.movies;
		for(var i = 0; i < movies.length; i++){
			var movie = movies[i];
			var marky = "";
			var template = $('#movie').html();
			var $template = Handlebars.compile(template);
			var markup = $template(movie);
				 $('#search_result').append(markup);
			}

	} 


	$('#latest').click(function(){   
        $.ajax({
        url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/opening.json',
        dataType: 'jsonp',
        data: {
            apiKey: 'hcrurhsttexasrgfm2y6yahm'
        },
        success: showLatest
    	});
	});
	function showLatest(response){
		
		console.log('response', response);
		$('#search_result').empty();
        var movies = response.movies;
		for(var i = 0; i < movies.length; i++){
			var movie = movies[i];
			var marky = "";
			var template = $('#movie').html();
			var $template = Handlebars.compile(template);
			var markup = $template(movie);
				 $('#search_result').append(markup);
			}

	} 


	$('#up_coming').click(function(){   
        $.ajax({
        url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json',
        dataType: 'jsonp',
        data: {
            apiKey: 'hcrurhsttexasrgfm2y6yahm'
        },
        success: showUpComing
    	});
	});
	function showUpComing(response){
		
		console.log('response', response);
		$('#search_result').empty();
        var movies = response.movies;
		for(var i = 0; i < movies.length; i++){
			var movie = movies[i];
			var marky = "";
			var template = $('#movie').html();
			var $template = Handlebars.compile(template);
			var markup = $template(movie);
				 $('#search_result').append(markup);
			}

	}


	$('#in_theater').click(function(){   
        $.ajax({
        url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json',
        dataType: 'jsonp',
        data: {
            apiKey: 'hcrurhsttexasrgfm2y6yahm'
        },
        success: showInTheater
    	});
    	
	});	
	function showInTheater(response){
		
		console.log('response', response);
		$('#search_result').empty();
        var movies = response.movies;
		for(var i = 0; i < movies.length; i++){
			var movie = movies[i];
			var marky = "";
			var template = $('#movie').html();
			var $template = Handlebars.compile(template);
			var markup = $template(movie);
				 $('#search_result').append(markup);
			}

	}
	



});