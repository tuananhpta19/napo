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

    $("img.lazy").lazyload();


    $(".submit-btn").click(function(){
        var body = {
            name: $("#name").val(),
            email: $("#email").val(),
            message: $("#message").val(),
            phone: $("#phone").val()
        }
        let that = this;
        $.ajax({ //Sử dụng Ajax gửi dữ liệu đi
            url: 'https://script.google.com/macros/s/AKfycbwkSEvvsPOTBCJvrm536TvTJHS__G-Eykpfj6GZKzaI4OAs-vNY/exec',
            method: 'GET',
            dataType: 'json',
            data: body,
            success: function(responseData, textStatus, jqXHR) {
                alertify.set('notifier','position', 'top-right');
                alertify.success("Điền dữ liệu thành công, bạn hãy chờ để chúng tôi liên lạc lại");
                window.jQuery(that).trigger('reset');
                setTimeout(() => {
                    window.location.href = '/cam-on'
                }, 1500)
            }, 
            error: function(jqXHR, textStatus, errorThrown) {
                alertify.set('notifier','position', 'top-right');
                alertify.error("Điền dữ liệu thành công, bạn hãy chờ để chúng tôi liên lạc lại");
                window.jQuery(that).trigger('reset');

                setTimeout(() => {
                    window.location.href = '/cam-on'
                }, 1500)
            }
        });
    
    })
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 5,
        loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items: 2
            },
            1199:{
                items:3
            },
            1400:{
                items:5
            },

        }
    });
  });
  