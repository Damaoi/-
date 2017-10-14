(function(){
    function w() {
        var r = document.documentElement;
        var a = r.getBoundingClientRect().width;
        if (a > 750 ){
            a = 750;
        }
        //750/w = 100/font-size
        rem = a / 7.5;
        r.style.fontSize = rem + "px"
    }
    var t;
    w();
    window.addEventListener("resize", function() {
        clearTimeout(t);
        t = setTimeout(w, 300);
    }, false);
})();


$(document).ready(function(){
    $(".circle").on("click", function () {
        $(this).find(".polik").attr("src", "../images/own/handb.png")
        $(this).find(".hand").next().text("9026")
    })

    $(".fabuimg").on("click",function(){
        $(".fabuleixing").show()
        $(".ttrpo>a").addClass("animated bounceInUp")
    })

    $(".chafoot").on("click",function(){
        $(".fabuleixing").hide()
    })
})
