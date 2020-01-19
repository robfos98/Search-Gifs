var apiKey = "Ksh96L71ifwzkL6GslsVTbpnzK3EVWe2";
var topics = ["geometry","glassblowing","fire","whirlpool","swirl","cat","cats","kitty","kitties","kittens","oops i forgot kitten","kitten","storm","spiral","laminar flow"];

function displayTopic(topic){
    $("#topics").append("<div class='topic'>" + topic + "</div>");
};
for(i in topics) {
    displayTopic(topics[i]);
};

$("#topics").on("click", ".topic", function() {
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
            var gifBox = $("<div class='gif-box'>");
            var gif = $("<img alt='" + response.data[i].title + "'>");
            $(gif).attr("still", response.data[i].images.fixed_height_still.url);
            $(gif).attr("animate", response.data[i].images.fixed_height.url);
            $(gif).attr("src", $(gif).attr("still"));

            gifBox.append(gif);
            gifBox.append($("<p>").text("Rating: " + response.data[i].rating));
            $("#gifs").prepend(gifBox);
        };
    });
});

$("#gifs").on("click", "img", function() {
    if($(this).attr("src") === $(this).attr("still")){
        $(this).attr("src", $(this).attr("animate"));
    }
    else {
        $(this).attr("src", $(this).attr("still"));
    };
});

$("#submit-topic").on("click", function(event) {
    event.preventDefault();
    var topic = $("#add-topic").val().trim();
    topics.push(topic);
    displayTopic(topic);
});
