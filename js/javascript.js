window.onload = function(){

    visual();
    pausePlay();
    modelSlide();
    award();

    function visual(){
    var dotList = document.querySelector('.dot-list').children
    var imgList = document.querySelector('.visual-list').children
    var textWrap = document.querySelectorAll('.text-wrapper')
    //console.log(textWrap.length)

    var itemNum = 0;

    for(let i = 0; i < dotList.length; i++){
        dotList[i].addEventListener('click', function(){
            //console.log(i)
            itemNum = i
            pageAction();
        })
    }

    function pageAction(){
        for(var i = 0; i < dotList.length; i++){
            if(itemNum == i){
                imgList[i].classList.add('active')
                textWrap[i].classList.add('active')
                dotList[i].classList.add('active')
            }else{
                imgList[i].classList.remove('active')
                textWrap[i].classList.remove('active')
                dotList[i].classList.remove('active');
            }
        }
    }
}
    function pausePlay(){
        var pause = document.querySelector('.bx-pause')
        var play = document.querySelector('.bx-play')

        pause.addEventListener('click', function(){
            pause.style.display = "none"
            play.style.display = "inline-block"
        })
        play.addEventListener('click', function(){
            play.style.display = "none"
            pause.style.display = "inline-block"
        })
    }

    function modelSlide(){
        var modelList = document.querySelector('.model-list')

        //modelLi
    }
    
    function award(){
        var awardList = document.querySelector('.award-item-list').children
        var time = 0;
        var timer

        awardTimer();

        function awardTimer(){
            timer = setInterval(awardAction,1000)
        }
        function awardAction(){
            time++
            console.log(time-1)

            awardAction();

            function awardAction(){
                awardList.classList.remove('active')
                awardList[time-1].classList.add('active')
            }

            if(time >= awardList.length){
                time = 0;
            }
            }
        }        
    }
