$(".togolediv").hide()
$(".mytogole").on("click",function(e){
    e.preventDefault()
    $(".togolediv").toggle()
})

$("#goToHome").fadeOut();
window.onscroll = function(){
    if(window.scrollY>100){
        $("#goToHome").fadeIn();
    }else{
        $("#goToHome").fadeOut();
    }
}
$("#contactform").on('submit',function(e){
    e.preventDefault()
})


$(".navicon").on("click",function(){
    $("nav").slideToggle()
})