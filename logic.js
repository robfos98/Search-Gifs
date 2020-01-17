var apiKey = "Ksh96L71ifwzkL6GslsVTbpnzK3EVWe2";
var topics = ["electricity","geometry","glassblowing","fire","undertow","absurd","cat","cats","kitty","kitties","kittens","oops i forgot kitten","kitten","storm","spiral","laminar flow"];
for(i in topics) {
    $("#topics").append("<div class='topic'>" + topics[i] + "</div>");
};

$(".topic").on("click", function() {
    var q = $(this).text();
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + q + "&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET",
        Origin: "https://www.giphy.com"
    }).then(function(response) {

        i = 10;
        while(i) {
            i--;
            var gifBox = $("<div>");
            //gifBox.append("<img src='" + response.data[i].url + "' alt='" + response.data[i].title + "'>");
            $("#gifs").prepend("<img src='" + response.data[i].url + "'>");
        };
    });
});