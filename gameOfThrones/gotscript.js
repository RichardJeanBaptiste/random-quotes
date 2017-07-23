
$(document).ready(function(){


// Change back to main page
$("#changePage1").on("click", function(){
    window.location.href = "https://richinbk.github.io/random-quotes/main%20page/main.html";
});


//randomQuote();


function randomQuote(){
      var url = "https://got-quotes.herokuapp.com/quotes?char=";
      $.getJSON(url,function(data){
           quote = data.quote;
           //console.log(quote);
           character = data.character;
           //console.log(character);
           $("#cQuote").html(quote);
           $("#cName").html(character);
      });
  }

function getQuote(charName){
    
    var url = "https://got-quotes.herokuapp.com/quotes?char=" + charName;

     $.getJSON(url,function(data){
           quote = data.quote;
           //console.log(quote);
           character = data.character;
           //console.log(character);
           $("#cQuote").html(quote);
           $("#cName").html(character);

      });
}

//Buttons
$("#random").click(function(){
      randomQuote();
});

$("#bronnB").click(function(){
      getQuote("bronn");
});

$("#daenerysB").click(function(){
      getQuote("daenerys");
});

$("#cerseiB").click(function(){
      getQuote("cersei");
});

$("#houndB").click(function(){
      getQuote("hound");
});

$("#jaimeLannisterB").click(function(){
      getQuote("jaime");
});

$("#littleFingerB").click(function(){
      getQuote("littlefinger");
});

$("#olennaTyrellB").click(function(){
      getQuote("olenna");
});

$("#renlyBaratheonB").click(function(){
      getQuote("renly");
});

$("#tyrionB").click(function(){
      getQuote("tyrion");
});

$("#varysB").click(function(){
      getQuote("varys");
});




});
