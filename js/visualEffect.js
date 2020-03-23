$(window).load(function(){
    var $visualImgLi=$("#visual_list li")
    var $visualTextLi=$("#visual_tbox_list li")
    var $visualDotLi=$("#visual_dot_list li")
    var visualDotClickNum=0
    var visualImgNum=$visualImgLi.size()
    var timer

    onPlay()

    $visualImgLi.eq(0).css({"opacity":1})
    $visualTextLi.eq(0).show()
    $visualTextLi.eq(0).css({"left":0,"opacity":1})
    $visualDotLi.eq(0).addClass("selected")

    $visualDotLi.on("click",onVisualDotClick)
    $visualDotLi.on("mouseenter",onStop)
    $visualDotLi.on("mouseleave",onPlay)

    function onVisualDotClick(){
        visualDotClickNum=$visualDotLi.index($(this))
        onVisualSlide(visualDotClickNum)
    }

    function onVisualSlide(selectNum){
        $visualImgLi.css({"opacity":0})
        $visualImgLi.eq(selectNum).animate({"opacity":1},1500,"easeOutCubic")

        $visualTextLi.animate({"opacity":0},300,"easeOutCubic",function(){
            $visualTextLi.css({"left":500})
        })
        $visualTextLi.eq(selectNum).show()
        $visualTextLi.eq(selectNum).animate({"left":0,"opacity":1},500,"easeOutCubic")

        $visualDotLi.removeClass("selected")
        $visualDotLi.eq(selectNum).addClass("selected")
    }

    function onPlay(){
        timer=setInterval(onVisualNext,2000)
    }

    function onStop(){
        clearInterval(timer)
    }

    function onVisualNext(){
        visualDotClickNum++       
        if(visualDotClickNum>=visualImgNum){
            visualDotClickNum=0
        }
        onVisualSlide(visualDotClickNum)
    }
})