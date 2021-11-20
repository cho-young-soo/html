// 헤더 위치에 따른 fix 변환
$(window).on("scroll",function(){
  if($(window).scrollTop()==0){
    $("header").css({"position":"initial"});
    $("#title").css({"padding-top":0});
  }else{
    $("header").css({"position":"fixed","width":"100%","z-index":9999,"background-color":"#fff","box-shadow":"0 5px 10px rgba(0,0,0,0.3)"});
    $("#title").css({"padding-top":"75px"});
  }        
});
// 메뉴버튼 클릭시 메뉴창 등장
$("header .w1200 .menuBtn").on("click",function(){
  $("html").css({"overflow":"hidden"});
  $("header .w1200").append("<div class='mobileMenu'></div>");
  $("header .w1200 .gnb").clone().appendTo("header .w1200 .mobileMenu");
  $("header .w1200 .mobileMenu .gnb").css({"display":"flex","position":"fixed","left":0,"right":0,"top":0,"bottom":0,"background-color":"rgba(0,0,0,0.9)","z-index":10});
  $("header .w1200 .mobileMenu").prepend("<div><button class='closeBtn'/></div>");
  // 닫기버튼 클릭시 메뉴창 사라짐
  $("header .w1200 .mobileMenu div .closeBtn").on("click",function(){
    $("html").css({"overflow":"auto"});
    $("header .w1200 .mobileMenu").remove();
  });
  // 서브메뉴
  $("header .w1200 .mobileMenu .gnb li h2").on("click",function(){
      $(this).siblings().css({"display":"block"});
      $(this).parent().siblings().children(".hide").css({"display":"none"});
      $(this).parent().addClass("clicked");
      $(this).parent().siblings().removeClass("clicked");
  });
  $(window).resize(function(){
    if($(window).width()>=1024){
      $(".mobileMenu").remove();
      $("html").css({"overflow":"auto"});
    }
  })
});
//  사이즈에 따른 세부메뉴창 등장 방식

if($("html").width()>1024){
    $("header .w1200 .gnb li").hover(function(){
      $(this).children(".hide").css({"display":"block"})
      $(this).siblings().children(".hide").css({"display":"none"})
    },
    function(){
      $(this).children(".hide").css({"display":"none"})
    }
    );
  }else{
}

// 타이틀 리스트 추가
$("#title").append("<div class='titleList'></div>");

for (i = 1; i <= $("#title ul li").length; i++) {
  $("#title .titleList").append("<div></div>");
}

// 첫 타이틀 리스트 표시
var i = 1;
var i2;
$("#title .titleList div:first-child").addClass("currentT");

//  자동으로 돌아갈때 타이틀 슬라이드 함수
function slideMove() {
  i2 = i + 1;
  if (i < $("#title ul li").length) {
    $("#title ul li:nth-child(" + i + ")").fadeOut(2000); // i번째 이미지 fadeOut
    $("#title ul li:nth-child(" + i2 + ")").fadeIn(2000); //i+1번째 이미지 fadeIn
    $("#title .titleList div:nth-child(" + i2 + ")").addClass("currentT"); // 목차 i+1번 째에 클래스를 추가해 색상을 변경
    $("#title .titleList div:nth-child(" + i2 + ")").siblings().removeClass(
      "currentT"); // 나머지 목차에서 class를 제거해서 초기화
    i++;
  } else {
    $("#title ul li:nth-child(" + i + ")").fadeOut(2000);
    i = 1;
    i2 = 1;
    $("#title ul li:nth-child(" + i + ")").fadeIn(2000);
    $("#title .titleList div:nth-child(" + i2 + ")").addClass("currentT");
    $("#title .titleList div:nth-child(" + i2 + ")").siblings().removeClass("currentT");
  }
}

// 자동으로 돌아감
// var slideTitle = setInterval(slideMove, 4000);

// 목차를 클릭했을 경우
var clickedValue;
var clickedValue2;

// 목차를 클릭했을 때 타이틀 슬라이드 함수
function slideMove2() {
  clickedValue2 = clickedValue + 1;
  if (clickedValue < $("#title ul li").length) {
    $("#title ul li:nth-child(" + clickedValue + ")").fadeOut(2000); // 클릭한 이미지 fadeOut
    $("#title ul li:nth-child(" + clickedValue2 + ")").fadeIn(2000); // 클릭한 다음 순번 이미지 fadeIn
    $("#title .titleList div:nth-child(" + clickedValue2 + ")").addClass(
    "currentT"); // 클락한 목차+1번 째에 클래스를 추가해 색상을 변경
    $("#title .titleList div:nth-child(" + clickedValue2 + ")").siblings().removeClass("currentT"); // 나머지 목차에서 class를 제거해서 초기화
    clickedValue++;
  } else {
    $("#title ul li:nth-child(" + clickedValue + ")").fadeOut(2000);
    clickedValue = 1;
    clickedValue2 = 1;
    $("#title ul li:nth-child(" + clickedValue + ")").fadeIn(2000);
    $("#title .titleList div:nth-child(" + clickedValue2 + ")").addClass("currentT");
    $("#title .titleList div:nth-child(" + clickedValue2 + ")").siblings().removeClass("currentT");
  }
}

// 목차를 클릭했을 때 함수 작동
var clickcount=1;
var slideTitle2;
$("#title .titleList div").on("click", function () {
  if(clickcount<=1){
    clickedValue = $(this).index() + 1;
    clearInterval(slideTitle);
    $("#title ul li:nth-child(" + i + ")").fadeOut(2000);
    $("#title ul li:nth-child(" + clickedValue + ")").fadeIn(2000);
    $("#title .titleList div:nth-child(" + clickedValue + ")").addClass("currentT");
    $("#title .titleList div:nth-child(" + clickedValue + ")").siblings().removeClass("currentT");
    slideTitle2 = setInterval(function () {
      slideMove2();
    }, 4000);
    clickcount++;
  }else{
    i=clickedValue;
    clickedValue = $(this).index() + 1;
    clearInterval(slideTitle2);
    $("#title ul li:nth-child(" + i + ")").fadeOut(2000);
    $("#title ul li:nth-child(" + clickedValue + ")").fadeIn(2000);
    $("#title .titleList div:nth-child(" + clickedValue + ")").addClass("currentT");
    $("#title .titleList div:nth-child(" + clickedValue + ")").siblings().removeClass("currentT");
    slideTitle2 = setInterval(function () {
      slideMove2();
    }, 4000);
  }
});

// 호버시 자세히 보러가기  생성
  function listMoreAdd() {
    $(this).append("<div class='listMore'>자세히 보러가기 ><div>");
    $(".listMore").css({"width":$(this).width()});
  };

  function listMoreRemove() {
    $(".listMore").remove();
  };
  if($(window).outerWidth()>1023){
    $("section:not(#showroom) .w1200 ul li a").hover(listMoreAdd, listMoreRemove);
    $(window).on("resize",function(){
      if($(window).outerWidth()<=1023){
        $("section:not(#showroom) .w1200 ul li a").off("mouseenter");
      }else{
        $("section:not(#showroom) .w1200 ul li a").hover(listMoreAdd, listMoreRemove);
      }
    });
  }else{
    $(window).on("resize",function(){
      if($(window).outerWidth()>1023){
        $("section:not(#showroom) .w1200 ul li a").hover(listMoreAdd, listMoreRemove);
      }else{
        $("section:not(#showroom) .w1200 ul li a").off("mouseenter");
      }
    }
  );
  }
  // 2번


  // 쇼룸 리스트 클릭시 해당 이미지 보이기
  $("#showroom .w1200 ul li:nth-child(1)").addClass("select");
  $("#showroom .w1200 ul li:not(:last-child)").click(function () {
    $(this).addClass("select");
    $(this).siblings().removeClass("select")
    var image_index = $(this).index() + 1
    $("#showroom img").attr("src", "img/showroom/04_shoroom_" + image_index + ".jpg")
  });

// 스크롤 투  탑
$(".toTop span").on("click", function () {
  $("html, body").animate({
    scrollTop: "0"
  }, 1000);
});

// 사이드 바 생성
$(".sideBar").on("click", function(){
    $(".sideBar h2 span").toggleClass("clicked");
    $(".sideBar ul").fadeToggle();
});
