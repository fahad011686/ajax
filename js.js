var topic = ["cats", "mario bros", "nic cage"];

function renderButtons() {
    $("#buttonList").empty();

    for (var i = 0; i < topic.length; i++) {
        var a = $("<button>");
        a.attr("data-name", topic[i]);
        a.addClass("button");
        a.text(topic[i]);
        $("#buttonList").append(a);
    }
}

// initial render topic to button
renderButtons();

// user can add new topic to array
$("#addButton").on("click", function (event) {
    event.preventDefault();

    var newTopic = $("#buttonInput").val().trim();
    console.log("The user has added: " + newTopic);
    topic.push(newTopic);
    console.log(topic);

    renderButtons();
});

//Reset
$("#delButton").on("click", function (event) {
    $("#buttonList").empty();
});


 // Event listener for all button elements
 $("button").on("click", function() {
    //clears gifs before displaying new ones
    $("#gifsDisplay").empty();

    var search = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      search + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
            var gifDiv = $("<div>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var gifImage = $("<img>");
            gifImage.attr("src", results[i].images.fixed_height.url);
            gifDiv.append(gifImage);
            gifDiv.append(p);
            $("#gifsDisplay").prepend(gifDiv);
          }
        }
      });
  });