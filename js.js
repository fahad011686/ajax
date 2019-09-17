var topic = ["cat", "dog", "bird"];

function renderButtons() {
    $("#buttonList").empty();

    for (var i = 0; i < topic.length; i++) {
        var a = $("<button>");
        a.attr("data-name", topic[i]);
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

