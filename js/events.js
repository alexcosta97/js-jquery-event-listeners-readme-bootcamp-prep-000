//define functions here

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
});

function frameIt()
  {
    $('img').on('load', function(){
      $('img').addClass('tasty');
    });
  }
  
  function getIt()
  {
    $('p').on('click', function(){
      alert('Hey!');
    })
  }

function pressIt()
{
  $('form input:first-child').on('keydown', function(key){
    if(key.which === 71)
    {
      alert("You've pressed the G key");
    }
  })
}