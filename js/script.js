(function(){
	
	//Temporary replacement for an external JSON file
	var jsontext = '{"featured_items":[{"name": "Hazelnut Cappuccino","image": "images/cappuccino.jpg","description": "A warm, soothing cappuccino with a touch of hazelnut to warm you as the weather turns."},{"name": "Chocolate Cake","image": "images/choc-cake.jpg","description": "Our chocolate cake is rich, moist, and dark. More chocolate to love."}]}';
	
	//Parse temporary file
	var jsonObj = JSON.parse(jsontext);
	
	//build and insert html into featured items div
	var insert = $('#featured-items');
	for(var i = 0; i < jsonObj.featured_items.length; i++)
	{
		var ln1 = "<h3>" + jsonObj.featured_items[i].name + "</h3>";
		var ln2 = "<img src='" + jsonObj.featured_items[i].image + "'>";
		var ln3 = "<p>" + jsonObj.featured_items[i].description + "</p>";
		insert.append(ln1, ln2, ln3);
	}
	
	//make featured items visible by removing "hide" class
	$("aside").removeAttr('class');
	
})();
