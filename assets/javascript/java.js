/* ---------- Variables ---------- */
var animals = ['horse', 'dog', 'cat', 'wolf', 'giraffe', 'whale', 'tiger', 'elephant', 'rabbit', 'monkey'];
var queryTerm = "";

/* ---------- Functions ---------- */
function displayAnimals() {

    var queryURL = "https://www.giphy.com/?t=" + animal + "&apikey=p6ZQy2Z694sls6dGCsQcONAUIiXv8IKA";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {});
};

/* ---------- Process ---------- */
$('#add-animal').on('click', function() {
    queryTerm = $('#animal-input').val().trim();
})