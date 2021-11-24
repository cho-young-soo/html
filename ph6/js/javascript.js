        // 스크롤시 nav 배경색
        if ($(window).scrollTop() > 0) {
          $("header").css({
            "background-color": "#fff",
            "box-shadow": "0 1px 10px #eee"
          });   
          $(".toTop").removeClass("hide");        
        }
        $(window).scroll(function () {
          $("header").css({
            "background-color": "#fff",
            "box-shadow": "0 1px 10px #eee"
          });
          if ($(window).scrollTop() == 0) {
            $("header").css({
              "background-color": "transparent",
              "box-shadow": "none"
            });
            $(".toTop").addClass("hide");
          }
          if($(window).scrollTop()>=$("body").height()*0.1){
            $(".toTop").removeClass("hide");
          }
        });
        $(".toTop").on("click",function(){
            $("html, body").animate({
            scrollTop: "0"
          }, 1000);
        })
        // 타이틀 리스트 목차
        $("#title .block_center").append("<div class='titleList'><ul></ul></div>");
        var i;
        for (i = 1; i <= $("#title .block_center > ul li").length; i++) {
          $(".titleList ul").append("<li></li>");
        }
        // 타이틀리스트 첫번째 색상넣기
        $("#title .block_center .titleList ul li:first-child").addClass("currentList");
        // 타이틀 애니메이션
        var slide = 0;
        var slideList = 1;
        $("#title .block_center> ul li:nth-child(1)").clone().appendTo("#title .block_center > ul")
        $("#title .block_center > ul").css("width", "700%");

        function TitleSlide() {
          $("#title .block_center .titleList ul li:nth-child(" + slideList + ")").addClass("currentList");
          $("#title .block_center .titleList ul li:nth-child(" + slideList + ")").siblings().removeClass(
            "currentList");
          $("#title .block_center > ul").css({
            "left": -100 * slide + "%",
            "transition": "1s"
          })
          slide++;
          slideList++;
          if (slide == $("#title .block_center> ul li").length) {
            setTimeout(function () {
              $("#title .block_center>ul").css({
                "left": "0%",
                "transition": "0s"
              });
            }, 1001);
            slide = 0;
          }
          if (slideList == $("#title .block_center .titleList ul li").length + 2) {
            $("#title .block_center .titleList ul li:first-child").addClass("currentList");
            $("#title .block_center .titleList ul li:first-child").siblings().removeClass("currentList");
            slideList = 1
          }
        }

        var titleslide = setInterval(TitleSlide, 3000);

        $("#title .block_center .titleList ul li").on("click", function () {
          clearInterval(titleslide);
          slide = $(this).index();
          slideList = $(this).index() + 1;
          $("#title .block_center .titleList ul li:nth-child(" + slideList + ")").addClass("currentList");
          $("#title .block_center .titleList ul li:nth-child(" + slideList + ")").siblings().removeClass(
            "currentList");
          $("#title .block_center > ul").css({
            "left": -100 * slide + "%",
            "transition": "3s"
          })
          titleslide = setInterval(function () {
            TitleSlide();
          }, 3000);
        });

        // 메인메뉴 호버시 font 변경
        if($(window).outerWidth()>1160){
          $("header .block_center nav .gnb:not(.open)>ul> li").hover(
            function(){
              $(this).addClass("hover");
          },
            function(){
              $(this).removeClass("hover");
          });
          $("header .block_center nav .gnb:not(.open) > ul > li ul li a").hover(function(){
            $(this).addClass("hover");
          },function(){
            $(this).removeClass("hover");
          });
        }
        // 메인메뉴 hide붙이기, 클릭시 서브메뉴 화면에 보이기
        if($(window).outerWidth()<=1160){
          $("header .block_center nav .gnb").addClass("hide");
          
          $("header .block_center .menuBtn").on("click",function(){
            $("html").css({"overflow":"hidden"});
            $("header .block_center nav .gnb").addClass("open");
            $("header .block_center nav .open > ul:not(.cs) > li > a").on("click",function(){
              $(this).next().addClass("open");
              $(this).parent().siblings().children("ul").removeClass("open");
              $(this).css({"color":"#fdd445"});
              $(this).parent().siblings().children("a").css({"color":"#676d72"});
            });
          });
        }else{
          $("header .block_center nav .gnb").removeClass("hide");
          $("header .block_center nav .gnb").removeClass("open");
        }
        $(window).resize(function(){
          if($(window).outerWidth()<=1160){
            $("header .block_center nav .gnb").addClass("hide");
            $("header .block_center .menuBtn").on("click",function(){
              $("html").css({"overflow":"hidden"});
              $("header .block_center nav .gnb").addClass("open");
              $("header .block_center nav .open > ul:not(.cs) > li > a").on("click",function(){
              $(this).next().addClass("open");
              $(this).parent().siblings().children("ul").removeClass("open");
              $(this).css({"color":"#fdd445"});
              $(this).parent().siblings().children("a").css({"color":"#676d72"});
            });
            });
          }else if($(window).outerWidth()>1160){
            $("html").css({"overflow":"initial"});
            $("header .block_center nav .gnb").removeClass("hide");
            $("header .block_center nav .gnb").removeClass("open");
            $("header .block_center nav .gnb > ul > li ul").removeClass("open");
            $("header .block_center nav .gnb > ul:not(.cs) > li > a").on("click",function(){
              $(this).next().removeClass("open");
            });
            $("header .block_center nav .gnb>ul> li").hover(
            function(){
              console.log("Test");
              $(this).addClass("hover");
          },
            function(){
              $(this).removeClass("hover");
          });
          $("header .block_center nav .gnb > ul > li ul li a").hover(function(){
            $(this).addClass("hover");
          },function(){
            $(this).removeClass("hover");
          });
          }
        });
        // 메뉴닫기
        $("header .block_center nav .gnb .close .closeBtn").on("click",function(){
          $("html").css({"overflow":"initial"});
          $("header .block_center nav .gnb").removeClass("open");
        });
        
        // footer inform 나타나기
        var clickCount=1;
        $("footer .block_center .footer_menu li:nth-of-type(1)").on("click",function(){
          if(clickCount==1){
            $(this).addClass("down");
            $("footer .block_center .footer_inform").removeClass("hide");
            clickCount=0;
          }else{
            $(this).removeClass("down");
            $("footer .block_center .footer_inform").addClass("hide");
            clickCount=1;
          }
        });