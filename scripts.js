
$(document).ready(function(){


getQuote();


function getQuote(){
      var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
      $.getJSON(url,function(data){
           quote = data.quoteText;
           console.log(quote);
           author = data.quoteAuthor;
     
     $("#mainQ").html(quote);
     $("#mainA").html(author);


      });
  }

  $("#newQuote").on("click", function(){
      getQuote();
  });

  $("#tweetIt").on("click", function(){
     window.open("https://twitter.com/intent/tweet?text=" + quote + " - " + author); 
  });
 
});

 