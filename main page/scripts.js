
$(document).ready(function(){


getQuote();


function getQuote(){
      var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
      $.getJSON(url,function(data){
           quote = data.quoteText;
           console.log(quote);
           author = data.quoteAuthor;
           author1 = author.replace(/ /g,"_"); // author name with underscore
     
     $("#mainQ").html(quote);
     $("#mainA").append("<a href =" + "https://en.wikipedia.org/wiki/" + author1 + ">" + author + "</a>");

      });
  }


  $("#newQuote").on("click", function(){
      getQuote();
      $("a").remove();
  });

  $("#tweetIt").on("click", function(){
     window.open("https://twitter.com/intent/tweet?text=" + quote + " - " + author); 
  });

$("#changePage").on("click", function(){
    window.location.href = "https://richinbk.github.io/random-quotes/gameOfThrones/gameofthrones.html";
});


});

 