$(document).ready(function(){

    headMenu();
    visualSlide();
    modelSlide();
    awardSlide();

})

function headMenu(){
    var popup = $('.popup')
    var btnOpen = $('.mobile-btn')
    var btnClose = $('.mobile-btn-active')

    popup.slideUp(0)

    btnOpen.on('click', function(){
        popup.slideDown(500)
        btnOpen.css({'display' : 'none'})
        btnClose.css({'display' : 'inline-block'})
        $('body').css({'max-height' : 1064})
    })

    btnClose.on('click', function(){
        popup.slideUp(0)
        btnClose.css({'display' : 'none'})
        btnOpen.css({'display' : 'inline-block'})
    })

}

function visualSlide(){
    var visualList = $('.visual-list')
    var visualItem = visualList.children();
    var textWrap = $('.text-wrapper')
    var dotList = $('.control-wrapper').children('ul');
    var timer;
    var indexNum = 0;

    var pause = $('.bx-pause')
    var play = $('.bx-play')

    autoPlay();

    dotList.children().on('click', visualChange)
    
    function visualChange(){
        indexNum = dotList.children().index($(this));
        //console.log(indexNum)

        visualClass();
    }
    function visualClass(){
        visualItem.removeClass('active')
        visualItem.eq(indexNum).addClass('active')

        textWrap.removeClass('active')
        textWrap.eq(indexNum).addClass('active')

        dotList.children().removeClass('active')
        dotList.children().eq(indexNum).addClass('active')
    }
    function autoPlay(){
        timer = setInterval(moveAuto, 5000)
    }
    function moveAuto(){
        indexNum++
        //console.log(indexNum)
        if(indexNum >= dotList.children().size()){
            indexNum = 0
        }
        visualClass();
    }
    pause.on('click', function(){
        clearInterval(timer)
        pause.css({"display" : "none"})
        play.css({"display" : "inline-block"})
    })
    play.on('click', function(){
        autoPlay();
        play.css({"display" : "none"})
        pause.css({"display" : "inline-block"})
    })
}

function modelSlide(){
    var modelList = $('.model-list')
    var modelItem = modelList.children();
    var modelItemWidth //반응형
    var dotList = $('.dot-wrapper').find('li')
    var indexNum = 0;
    var winWidth = $(window).innerWidth()
    //console.log(winWidth)

    if(winWidth > 767){
        dotList.on('click', modelMovePC)
    }else{
        dotList.on('click', modelMoveMob)
    }

    function modelMovePC(){
        modelItemWidth = modelItem.outerWidth(true);
        indexNum = dotList.index($(this));
        //console.log(modelItemWidth)
        
        modelList.stop().animate({'margin-left' : -(modelItemWidth * indexNum) - 40*indexNum},1000)

        dotList.removeClass('active')
        dotList.eq(indexNum).addClass('active')
    }
    function modelMoveMob(){
        modelItemWidth = modelItem.outerWidth(true);
        indexNum = dotList.index($(this));
        //console.log(modelItemWidth)
        
        modelList.stop().animate({'margin-left' : -modelItemWidth * indexNum},1000)

        dotList.removeClass('active')
        dotList.eq(indexNum).addClass('active')
    }

}

function awardSlide(){
    var awardItem = $('.award-list').children();
    var awardList = $('.award-item-list').children();
    var timer;
    var indexNum = 0;

    var pauseBtn = $('.btn-wrap').children('.pause-btn')
    var playBtn = $('.btn-wrap').children('.play-btn')
    //console.log(awardList.size())

    autoPlay();

    awardList.children().on('click', awardIndex)
    
    function awardIndex(){
        indexNum = awardList.children().index($(this));
        //console.log(indexNum)
        awardClass();

        return false
    }
    function awardClass(){
        awardItem.removeClass('active')
        awardItem.eq(indexNum).addClass('active')

        //textWrap.removeClass('active')
        //textWrap.eq(indexNum).addClass('active')
        awardList.removeClass('active')
        awardList.eq(indexNum).addClass('active')

        return false
    }
    function autoPlay(){
        timer = setInterval(moveAuto, 5000)
    }
    function moveAuto(){
        indexNum++
        //console.log(indexNum)
        if(indexNum >= awardList.size()){
            indexNum=0;
        }
        awardClass();
    }
    
    pauseBtn.on('click', function(){
        clearInterval(timer)
        pauseBtn.css({'display':'none'})
        playBtn.css({'display':'inline-block'})
    })

    playBtn.on('click', function(){
        autoPlay();
        playBtn.css({'display':'none'})
        pauseBtn.css({'display':'inline-block'})
    })
}