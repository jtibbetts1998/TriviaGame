//Creating quiz questions
var quizArray = [
{
    question: "Who steals the dino DNA for profit in Jurassic Park?",
    answers: "Alan Grant, Ian Malcom, John Hammond, Dennis Nedry",
    correct: "Dennis Nedry",
},

{
    question: "What do they call a Quarter Pounder with cheese in France?",
    answers: "Le Big Mac, Kilogram, Whopper, Royale with cheese",
    correct: "Royale with cheese",
},

{
    question: "Who is the main character in Breaking Bad?",
    answers: "Walter White, Gus Fring, Saul Goodman, Hank Schrader",
    correct: "Walter White",
},

{
    question: "Who is Batman's mortal enemy?",
    answers: "Thanos, Joker, Lex Luther, Mega mind",
    correct: "Joker",
},

]
//I couldnt figure out how to loop or get the start button on and functional
//I also needed to refresh the page per question
startButton

function onclick(){

alert("Boom!");

}

setTimeout(click, 2000);
   


for loop


$( document.body ).click(function () {
    if ( $( "div:first" ).is( ":hidden" ) ) {
      $( "div" ).slideDown( "slow" );
    } else {
      $( "div" ).hide();