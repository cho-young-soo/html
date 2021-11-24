      // 스크롤 시 메뉴바 탑 고정
      $(window).on("scroll", function () {
        if ($(window).scrollTop() == 0) {
          $("header").css({
            "position": "initial"
          });
          $(".title").css({
            "padding-top": 0
          });
        } else {
          $("header").css({
            "position": "fixed",
            "background-color": "#fff",
            "z-index": 1
          });
          $(".title").css({
            "padding-top": "60px"
          });
        }
      });
      // 메뉴클릭시 메뉴창 등장
      $("header .container .menu").on("click",function(){
        $("html").css({"overflow":"hidden"});
        $(".gnb").css({"display":"block"});
      });
      // 닫기 클릭시 메뉴창 종료
      $(".gnb .container .menuRight .close button").on("click",function(){
        $("html").css({"overflow":"initial"});
        $(".gnb").css({"display":"none"});
      });
      // 마우스 위치에 따른  메뉴 색상 변경
      $(".gnb .container .menuLeft ul.menuList li").mouseover(function(){
        $(this).siblings().children().addClass("othermenu");
      });
      $(".gnb .container .menuLeft ul.menuList li").mouseleave(function(){
        $(this).siblings().children().removeClass("othermenu");
      });

      // 기타메뉴 마우스위치에 따른 색상 변경
      $(".gnb .container .menuLeft ul.menuEtc li").mouseover(function(){
        $(this).children().css({"color":"#fff"});
      });
      $(".gnb .container .menuLeft ul.menuEtc li").mouseleave(function(){
        $(this).children().css({"color":"#7a7a7a"});
      });

    // searchButton 클릭시 검색창
    $(".searchButton").on("click", function(){
      $("html").css({"overflow":"hidden"});
      $(".search").css({"display":"block"});  
    });
    // search의 닫기 버튼 클릭시
    $(".search .searchbox .container div .closeBtn").on("click", function(){
      $("html").css({"overflow":"initial"});
      $(".search").css({"display":"none"});  
    });
      // 위쪽으로 슬라이드
      // 현재위치에서 슬라이드
      // 타이틀 
      var slideUp={"opacity":"1","transform":"translateY(0)"};
      $(".title .container div").css(slideUp);
      $(".title .container figure").css(slideUp);
      var scrollValue = $(document).scrollTop();

      // 브랜드
      if (scrollValue >= $(document).height() * 0.1) {
        $("#brand .container .comment").css(slideUp);
        $("#brand .container .img").css(slideUp);
      }
      // 단지정보
      if (scrollValue >= $(document).height() * 0.2) {
        $("#inform .container div").css(slideUp);
        $("#inform .container .informList li").css(slideUp);
      }
      // 디자인 스토리
      if (scrollValue >= $(document).height() * 0.45) {
        $("#design .container .comment").css(slideUp);
        $("#design .container .img").css(slideUp);
      }
      // 갤러리
      if (scrollValue >= $(document).height() * 0.58) {
        $("#gallery .container>div").css(slideUp);
        $("#gallery .container figure").css(slideUp);
      }
        
      // 스크롤 시 밑에 위로 슬라이드
      $(window).scroll(function () {
        scrollValue = $(document).scrollTop();
        // 브랜드 부분
        if (scrollValue >= $(document).height() * 0.1) {
          $("#brand .container .comment").css(slideUp);
          $("#brand .container .img").css(slideUp);
        }
        // 단지정보
        if (scrollValue >= $(document).height() * 0.2) {
          $("#inform .container div").css(slideUp);
          $("#inform .container .informList li").css(slideUp);
        }
        // 디자인 스토리
        if (scrollValue >= $(document).height() * 0.45) {
          $("#design .container .comment").css(slideUp);
          $("#design .container .img").css(slideUp);
        }
        // 갤러리
        if (scrollValue >= $(document).height() * 0.58) {
          $("#gallery .container>div").css(slideUp);
          $("#gallery .container figure").css(slideUp);
        }
      });
      // 이미지 리스트 생성
      // 브랜드 이미지 
      $("#brand .container .img").append("<div class='list'></div>");
      for (Bi = 1; Bi <= $("#brand .container .img .imgList li").length; Bi++) {
        $("#brand .container .img .list").append("<div></div>");
      }
      // 디자인 스토리
      $("#design .container .img").append("<div class='list'></div>");
      for (Di = 1; Di <= $("#design .container .img .imgList li").length; Di++) {
        $("#design .container .img .list").append("<div></div>");
      }
      
      // 첫 타이틀 리스트 표시
      var Bi2;
      var Di2;
      $("#brand .container .img .list div:first-child").addClass("currentImg");
      $("#design .container .img .list div:first-child").addClass("currentImg");
      
      // 이미지 슬라이드 효과
      // 브랜드
      function brandSlideMove() {
        Bi2 = Bi + 1;
        if (Bi < $("#brand .container .img .imgList li").length) {
          $("#brand .container .img .imgList li:nth-child(" + Bi + ")").fadeOut(2000); // i번째 이미지 fadeOut
          $("#brand .container .img .imgList li:nth-child(" + Bi2 + ")").fadeIn(2000); //i+1번째 이미지 fadeIn
          $("#brand .container .img .list div:nth-child(" + Bi2 + ")").addClass("currentImg"); // 목차 i+1번 째에 클래스를 추가해 색상을 변경
          $("#brand .container .img .list div:nth-child(" + Bi2 + ")").siblings().removeClass(
            "currentImg"); // 나머지 목차에서 class를 제거해서 초기화
          Bi++;
        } else {
          $("#brand .container .img .imgList li:nth-child(" + Bi + ")").fadeOut(2000);
          Bi = 1;
          Bi2 = 1;
          $("#brand .container .img .imgList li:nth-child(" + Bi + ")").fadeIn(2000);
          $("#brand .container .img .list div:nth-child(" + Bi2 + ")").addClass("currentImg");
          $("#brand .container .img .list div:nth-child(" + Bi2 + ")").siblings().removeClass("currentImg");
        }
      }

      // 자동으로 돌아감
      var brandSlide = setInterval(brandSlideMove, 4000);

      // 목차를 클릭했을 경우
      var BclickedValue;
      var BclickedValue2;
      // 목차를 클릭했을 때 타이틀 슬라이드 함수
      function brandSlideMove2() {
        BclickedValue2 = BclickedValue + 1;
        if (BclickedValue < $("#brand .container .img .imgList li").length) {
          $("#brand .container .img .imgList li:nth-child(" + BclickedValue + ")").fadeOut(2000); // 클릭한 이미지 fadeOut
          $("#brand .container .img .imgList li:nth-child(" + BclickedValue2 + ")").fadeIn(2000); // 클릭한 다음 순번 이미지 fadeIn
          $("#brand .container .img .list div:nth-child(" + BclickedValue2 + ")").addClass(
          "currentImg"); // 클락한 목차+1번 째에 클래스를 추가해 색상을 변경
          $("#brand .container .img .list div:nth-child(" + BclickedValue2 + ")").siblings().removeClass("currentImg"); // 나머지 목차에서 class를 제거해서 초기화
          BclickedValue++;
        } else {
          $("#brand .container .img .imgList li:nth-child(" + BclickedValue + ")").fadeOut(2000);
          BclickedValue = 1;
          BclickedValue2 = 1;
          $("#brand .container .img .imgList li:nth-child(" + BclickedValue + ")").fadeIn(2000);
          $("#brand .container .img .list div:nth-child(" + BclickedValue2 + ")").addClass("currentImg");
          $("#brand .container .img .list div:nth-child(" + BclickedValue2 + ")").siblings().removeClass("currentImg");
        }
      }

      // 목차를 클릭했을 때 함수 작동
      var Bclickcount=1;
      var brandSlide2;
      $("#brand .container .img .list div").on("click", function () {
        if(Bclickcount<=1){
          BclickedValue = $(this).index() + 1;
          clearInterval(brandSlide);
          $("#brand .container .img .imgList li:nth-child(" + Bi + ")").fadeOut(2000);
          $("#brand .container .img .imgList li:nth-child(" + BclickedValue + ")").fadeIn(2000);
          $("#brand .container .img .list div:nth-child(" + BclickedValue + ")").addClass("currentImg");
          $("#brand .container .img .list div:nth-child(" + BclickedValue + ")").siblings().removeClass("currentImg");
          brandSlide2 = setInterval(function () {
            brandSlideMove2();
          }, 4000);
          Bclickcount++;
        }else{
          Bi=BclickedValue;
          BclickedValue = $(this).index() + 1;
          clearInterval(brandSlide2);
          $("#brand .container .img .imgList li:nth-child(" + Bi + ")").fadeOut(2000);
          $("#brand .container .img .imgList li:nth-child(" + BclickedValue + ")").fadeIn(2000);
          $("#brand .container .img .list div:nth-child(" + BclickedValue + ")").addClass("currentImg");
          $("#brand .container .img .list div:nth-child(" + BclickedValue + ")").siblings().removeClass("currentImg");
          brandSlide2= setInterval(function () {
            brandSlideMove2();
          }, 4000);
        }
      });
      // 디자인스토리
      function designSlideMove() {
        Di2 = Di + 1;
        if (Di < $("#design .container .img .imgList li").length) {
          $("#design .container .img .imgList li:nth-child(" + Di + ")").fadeOut(2000); // i번째 이미지 fadeOut
          $("#design .container .img .imgList li:nth-child(" + Di2 + ")").fadeIn(2000); //i+1번째 이미지 fadeIn
          $("#design .container .img .list div:nth-child(" + Di2 + ")").addClass("currentImg"); // 목차 i+1번 째에 클래스를 추가해 색상을 변경
          $("#design .container .img .list div:nth-child(" + Di2 + ")").siblings().removeClass(
            "currentImg"); // 나머지 목차에서 class를 제거해서 초기화
          Di++;
        } else {
          $("#design .container .img .imgList li:nth-child(" + Di + ")").fadeOut(2000);
          Di = 1;
          Di2 = 1;
          $("#design .container .img .imgList li:nth-child(" + Di + ")").fadeIn(2000);
          $("#design .container .img .list div:nth-child(" + Di2 + ")").addClass("currentImg");
          $("#design .container .img .list div:nth-child(" + Di2 + ")").siblings().removeClass("currentImg");
        }
      }

      // 자동으로 돌아감
      var designSlide = setInterval(designSlideMove, 4000);

      // 목차를 클릭했을 경우
      var DclickedValue;
      var DclickedValue2;
      // 목차를 클릭했을 때 타이틀 슬라이드 함수
      function designSlideMove2() {
        DclickedValue2 = DclickedValue + 1;
        if (DclickedValue < $("#design .container .img .imgList li").length) {
          $("#design .container .img .imgList li:nth-child(" + DclickedValue + ")").fadeOut(2000); // 클릭한 이미지 fadeOut
          $("#design .container .img .imgList li:nth-child(" + DclickedValue2 + ")").fadeIn(2000); // 클릭한 다음 순번 이미지 fadeIn
          $("#design .container .img .list div:nth-child(" + DclickedValue2 + ")").addClass(
          "currentImg"); // 클락한 목차+1번 째에 클래스를 추가해 색상을 변경
          $("#design .container .img .list div:nth-child(" + DclickedValue2 + ")").siblings().removeClass("currentImg"); // 나머지 목차에서 class를 제거해서 초기화
          DclickedValue++;
        } else {
          $("#design .container .img .imgList li:nth-child(" + DclickedValue + ")").fadeOut(2000);
          DclickedValue = 1;
          DclickedValue2 = 1;
          $("#design .container .img .imgList li:nth-child(" + DclickedValue + ")").fadeIn(2000);
          $("#design .container .img .list div:nth-child(" + DclickedValue2 + ")").addClass("currentImg");
          $("#design .container .img .list div:nth-child(" + DclickedValue2 + ")").siblings().removeClass("currentImg");
        }
      }

      // 목차를 클릭했을 때 함수 작동
      var Dclickcount=1;
      var brandSlide2;
      $("#design .container .img .list div").on("click", function () {
        if(Dclickcount<=1){
          DclickedValue = $(this).index() + 1;
          clearInterval(designSlide);
          $("#design .container .img .imgList li:nth-child(" + Di + ")").fadeOut(2000);
          $("#design .container .img .imgList li:nth-child(" + DclickedValue + ")").fadeIn(2000);
          $("#design .container .img .list div:nth-child(" + DclickedValue + ")").addClass("currentImg");
          $("#design .container .img .list div:nth-child(" + DclickedValue + ")").siblings().removeClass("currentImg");
          designSlide2 = setInterval(function () {
            designSlideMove2();
          }, 4000);
          Dclickcount++;
        }else{
          Di=DclickedValue;
          DclickedValue = $(this).index() + 1;
          clearInterval(designSlide2);
          $("#design .container .img .imgList li:nth-child(" + Di + ")").fadeOut(2000);
          $("#design .container .img .imgList li:nth-child(" + DclickedValue + ")").fadeIn(2000);
          $("#design .container .img .list div:nth-child(" + DclickedValue + ")").addClass("currentImg");
          $("#design .container .img .list div:nth-child(" + DclickedValue + ")").siblings().removeClass("currentImg");
          designSlide2= setInterval(function () {
            designSlideMove2();
          }, 4000);
        }
      });
      

      // 단지정보 바로가기 클릭시 이미지 확대
      $("#inform .container .informList li .more").hover(function(){
        $(this).siblings("figure").children().css({"scale":"1.2"});
      },function(){
        $(this).siblings("figure").children().css({"scale":"initial"});
      });