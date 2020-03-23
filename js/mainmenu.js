$(window).load(function(){
    var $mainMenuWrap=$("#mainmenu_wrap")
    var $mainMenu=$("#mainmenu_icon")
    var $closeBtn=$("#mainmenu_close")
    var $loginMenu=$("#loginmenu")

    $mainMenu.on("click",onMainMenuOpen)
    $closeBtn.on("click",onMainMenuClose)
    $(window).on("resize",onMenuReset)

    $mainMenuWrap.show()
    onMenuReset()

    function onMenuReset(){
        $mainMenuWrap.css({"height":$(window).innerHeight(),"right":-$mainMenuWrap.outerWidth()})
    }
    
    function onMainMenuOpen(){
        $mainMenuWrap.animate({"right":0},700,"easeOutCubic")
        $closeBtn.show()
        $mainMenu.animate({"right":-500,"opacity":0},700,"easeOutCubic")
        $loginMenu.animate({"right":-500,"opacity":0},700,"easeOutCubic")
        $("body").css({"overflow":"hidden"})
    }

    function onMainMenuClose(){
        $mainMenuWrap.animate({"right":-$mainMenuWrap.outerWidth()},700,"easeOutCubic",function(){
            $("body").css({"overflow":"visible"})
        })
        $closeBtn.hide()
        $mainMenu.animate({"right":0,"opacity":1},800,"easeOutCubic")
        $loginMenu.animate({"right":100,"opacity":1},800,"easeOutCubic")
    }
})