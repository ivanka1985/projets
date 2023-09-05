/** EXERCICE 1 */
$("#boite31").click(function() {
    $(this).hide();
});

/** EXERCICE 2 */
$(".boite320").click(function() {
    $(".boite321").toggle();    // I used .toggle() for show and hide box 1
  });

/** EXERCICE 3 */
$("#boite330").dblclick(function() {
    $("#boite331").toggleClass("highlight");
});

/** EXERCICE 4 */
$(".boite340").dblclick(function() {
    $(".boite341").toggle();
  });

/** EXERCICE 5 */
$(".boite350").mouseenter(function() {
    $(this).fadeOut(3000);
  });

/** EXERCICE 6 */
$("#boite36").mouseenter(function() {
    $(this).css("opacity", 0.5);
  }).mouseleave(function() {
    $(this).css("opacity", 1);
  });

/** EXERCICE 7 */
$("#boite37").on("click", function() {
    $("#champ37").focus();
    $(".boite37").hide();
  });

/** EXERCICE 8 */
  $("#boite38").on("focusout", function() {
    $("#champ38").hide();
  });

/** EXERCICE 9 */
$("#champ39").on("input", function() {
    $("#boite39").hide();
  });

/** EXERCICE 10 */
  $('body').keydown(function(event){
    if(event.which==72){
        $("#exercice_3_10 article div").empty();
    }
})

/** EXERCICE 11 */
    $("#exercice_3_11 article div").click(function() {
      $(this).hide();
    });


/** EXERCICE 12 */
$('body').keydown(function(event){
    if(event.which==16){
        $('#exercice_3_12 article div').click(function(){
            $(this).hide();
        })
    }
    event.which==2
})

