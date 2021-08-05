

var feed = [];
function addFeedback(){
    feed.push(document.getElementById("feedback").value);
   document.getElementById("result").innerHTML = "<h2>" + "Feedback Details " + "</h2>"+"<br>" +"Successfully Added Feedback Details!";
    document.getElementById("feedback").value = "";
}

function displayFeedback(){
    var i = 1;
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").innerHTML += "<h2>" + "Feedback Details " + "</h2>";
    for (var element in feed) {
        document.getElementById("result").innerHTML += "Feedback " + i++ + "<br>" + feed[element] + "<br>";
    }
    feed = [];
}
