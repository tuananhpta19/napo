$(document).ready(function () {
    $(".hamburger-icon").click(() => {
      $(".bg-color").addClass("side-bar-left");
    })
    $(".bg-color").click(function(){
        console.log('here')
        $(".side-bar").click(function(e){
            console.log('a')
            e.stopPropagation()
        })
        $(this).removeClass("side-bar-left");

    })

    $(".cross-btn").click(() => {
        $(".bg-color").removeClass("side-bar-left");
    })
    $(window).scroll(function(){
        let scrollNow = $(this).scrollTop()
        if(scrollNow <= 50){
            $("#header-top").removeClass("d-none")
            $(".masthead-mobile").css("top", 30)
        }
        if(scrollNow > 51){
            $("#header-top").addClass("d-none")
            $(".masthead-mobile").css("top", 0)
            $(".masthead-mobile").fadeIn(2000);
        }
    })
    // $(".nav").click(function(e) {
    //     e.stopPropagation();
    // });
  });
  