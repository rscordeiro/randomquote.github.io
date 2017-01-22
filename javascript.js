$(document).ready(function(){
  var apiURL = "https://andruxnet-random-famous-quotes.p.mashape.com/";
  var headers = {
    'X-Mashape-Key': 'fay8QJYkcImshMSU66UsVIwvm5Xep1kupLtjsn2PMS5KQ0eSoi',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  };
  var myJSON = function() {
    $.ajax({
      type: 'GET',
      url: apiURL,
      headers: headers,
      success: function(response) {
        response = JSON.parse(response);
        getQuote(response);
      },
      error: function(response) {
        alert("API not responding");
      }
    });
  }
  var getQuote = function(myQuotes) {
    var quote = "<p id='quote-p'>" + myQuotes.quote + "</p> <br> <footer id='author-text'><cite> - " + myQuotes.author + "</cite></footer>";
    $("#quote-div").html(quote);
  };
    myJSON();
  $("#quote-btn").click(function() {
    myJSON();
  });

  function tweet () {
    var quoteTweet = $("#quote-p").text();
    if(quoteTweet.length > 140) {
      quoteTweet = quoteTweet.slice(0, 140 -3).concat("...");
    }
    window.open("https://twitter.com/intent/tweet?text=" + quoteTweet);
  }
  $("#tweet-button").click(function(){
    tweet();
  });

});
