//Creating quiz questions
var quizArray = [
{
    question: "Who steals the dino DNA for profit in Jurassic Park?"
    answers: "Alan Grant, Ian Malcom, John Hammond, Dennis Nedry"
    correct: "Dennis Nedry"
},

{
    question: "What do they call a Quarter Pounder with cheese in France?"
    answers: "Le Big Mac, Kilogram, Whopper, Royale with cheese"
    correct: "Royale with cheese"
},

{
    question: "Who is the main character in Breaking Bad?"
    answers: "Walter White, Gus Fring, Saul Goodman, Hank Schrader"
    correct: "Walter White"
},

{
    question: "What is Batman's real name?"
    answers: "Clark Kent, Bruce Wayne, Peter Parker, Bruce Banner"
    correct: "Bruce Wayne"
},

]


$( document.body ).click(function () {
    if ( $( "div:first" ).is( ":hidden" ) ) {
      $( "div" ).slideDown( "slow" );
    } else {
      $( "div" ).hide();