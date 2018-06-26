//define functions here

$(document).ready(function(){
  getIt();
  frameIt();
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
  $
}