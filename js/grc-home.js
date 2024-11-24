$(document).ready(function(){
    $(window).on("load resize scroll", function (){
        if (setTimeout($(window).width() > 1175, 10)){ // delay to allow css to fully load
            $(".landing-media img, .major-title > *").css({"opacity" : 1})

            if($(window).height() - $(".header-container").height() < $(".hero").height()){
                // $(".hero .landing-media img").css({"height" : $(window).height() - $(".major-title").height()})
                $(".major-title").css({"top" : $(window).height() - $(".major-title").height() - 40})
            }
            else{
                $(".major-title").css({"top" : $(".hero .landing-media img").height()})
                $(".hero .landing-media img").css({"height" : "auto"})
                
            }
        }
        else $(".hero .landing-media img").css({"height" : "auto"})
    })
})