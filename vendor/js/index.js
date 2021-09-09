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



    $(".submit-btn").click(() => {
        var body = {
            name: $("#name").val(),
            email: $("#email").val(),
            message: $("#message").val(),
            phone: $("#phone").val()
        }
        $.ajax({ //Sử dụng Ajax gửi dữ liệu đi
            url: 'https://script.google.com/macros/s/AKfycbwkSEvvsPOTBCJvrm536TvTJHS__G-Eykpfj6GZKzaI4OAs-vNY/exec',
            method: 'GET',
            dataType: 'json',
            data: body,
            success: function(responseData, textStatus, jqXHR) {
                alertify.set('notifier','position', 'top-right');
                alertify.success("Điền dữ liệu thành công, bạn hãy chờ để chúng tôi liên lạc lại");
                setTimeout(() => {
                    window.location.href = '/'
                }, 1500)
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alertify.set('notifier','position', 'top-right');
                alertify.error("Điền dữ liệu thành công, bạn hãy chờ để chúng tôi liên lạc lại");
                setTimeout(() => {
                    window.location.href = '/'
                }, 1500)
            }
        });
    
    })
    // $(".nav").click(function(e) {
    //     e.stopPropagation();
    // });
  });
  