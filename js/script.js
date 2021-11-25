// 원페이지 스크롤
// window.addEventListener("wheel", function(e){
//   e.preventDefault();
// },{passive : false});
// var mHtml = $("html");
// var page = 1;

// mHtml.animate({scrollTop : 0},10);

// $(window).on("wheel", function(e) {
//   if(mHtml.is(":animated")) return;
//   if(e.originalEvent.deltaY > 0) {
//       if(page == 4) return;
//       page++;
//   } else if(e.originalEvent.deltaY < 0) {
//       if(page == 1) return;
//       page--;
//   }
//   var posTop =(page-1) * $(window).height();
//   mHtml.animate({scrollTop : posTop});
//   if(page == 1){
//     $(".navbar a:nth-child("+page+")").addClass("menuActive");
//     $(".navbar a:not(:nth-child("+page+"))").removeClass("menuActive");
//   }
//   if(page == 2){
//     $(".navbar a:nth-child("+page+")").addClass("menuActive");
//     $(".navbar a:not(:nth-child("+page+"))").removeClass("menuActive");
//   }
//   if(page == 3){
//     $(".navbar a:nth-child("+page+")").addClass("menuActive");
//     $(".navbar a:not(:nth-child("+page+"))").removeClass("menuActive");
//   }
//   if(page == 4){
//     $(".navbar a:nth-child("+page+")").addClass("menuActive");
//     $(".navbar a:not(:nth-child("+page+"))").removeClass("menuActive");
//   }
// })

// 위치에 따른 현재 위치 표시
var aboutTop = $("#about").offset().top*0.8;
var skillTop = $("#skill").offset().top*0.8;
var portfolioTop = $("#portfolio").offset().top*0.8;
var contactTop = $("#contact").offset().top*0.8;
var scroll = $(window).scrollTop();
var i;
var skillLength = $("#skill .skillContent .webSkill .progress").length;
var countValue1 = 0;
var countValue2 = 0;
var countValue3 = 0;
var countFn1;
var countFn2;
var countFn3;
function counter1() {
  countValue1++
  if (countValue1 > $(".skill .skillContent .box-container .box:nth-child(1) span").text() * 1) {
    clearInterval(countFn1);
  } else {
    $(".skill .skillContent .box-container .box:nth-child(1) p").text(countValue1);
  }
}

function counter2() {
  countValue2++
  if (countValue2 > $(".skill .skillContent .box-container .box:nth-child(2) span").text() * 1) {
    clearInterval(countFn2);
  } else {
    $(".skill .skillContent .box-container .box:nth-child(2) p").text(countValue2);
  }
}

function counter3() {
  countValue3++
  if (countValue3 > $(".skill .skillContent .box-container .box:nth-child(3) span").text() * 1) {
    clearInterval(countFn3);
  } else {
    $(".skill .skillContent .box-container .box:nth-child(3) p").text(countValue3);
  }
}



if (scroll >= aboutTop && scroll < skillTop) {
  $(".navbar a:nth-child(1)").addClass("menuActive");
  $(".navbar a:not(:nth-child(1))").removeClass("menuActive");
} else if (scroll >= skillTop && scroll < portfolioTop) {
  $(".navbar a:nth-child(2)").addClass("menuActive");
  $(".navbar a:not(:nth-child(2))").removeClass("menuActive");
  for (i = 1; i <= skillLength; i++) {
    var skillPercent = $(".skill .skillContent .webSkill .progress:nth-child(" + i + ") h3 span").text() * 1
    $(".skill .skillContent .webSkill .progress:nth-child(" + i + ") .bar span").css("width",
      skillPercent + "%");
  }
  countFn1 = setInterval(counter1, 50);
  countFn2 = setInterval(counter2, 50);
  countFn3 = setInterval(counter3, 50);
} else if (scroll >= portfolioTop && scroll < contactTop) {
  $(".navbar a:nth-child(3)").addClass("menuActive");
  $(".navbar a:not(:nth-child(3))").removeClass("menuActive");
} else {
  $(".navbar a:nth-child(4)").addClass("menuActive");
  $(".navbar a:not(:nth-child(4))").removeClass("menuActive");
}

$(window).on("scroll", function () {
  scroll = $(window).scrollTop();
  if (scroll >= aboutTop && scroll < skillTop) {
    $(".navbar a:nth-child(1)").addClass("menuActive");
    $(".navbar a:not(:nth-child(1))").removeClass("menuActive");
    for (i = 1; i <= skillLength; i++) {
      $(".skill .skillContent .webSkill .progress:nth-child(" + i + ") .bar span").css("width", 0);
    }
    countValue1 = 0;
    countValue2 = 0;
    countValue3 = 0;
    $(".skill .skillContent .box-container .box p").text(0)
  } else if (scroll >= skillTop && scroll < portfolioTop) {
    $(".navbar a:nth-child(2)").addClass("menuActive");
    $(".navbar a:not(:nth-child(2))").removeClass("menuActive");
    for (i = 1; i <= skillLength; i++) {
      var skillPercent = $(".skill .skillContent .webSkill .progress:nth-child(" + i + ") h3 span").text() * 1
      $(".skill .skillContent .webSkill .progress:nth-child(" + i + ") .bar span").css("width",
        skillPercent + "%");
    }
    countFn1 = setInterval(counter1, 30);
    countFn2 = setInterval(counter2, 30);
    countFn3 = setInterval(counter3, 30);
  } else if (scroll >= portfolioTop && scroll < contactTop) {
    $(".navbar a:nth-child(3)").addClass("menuActive");
    $(".navbar a:not(:nth-child(3))").removeClass("menuActive");
    for (i = 1; i <= skillLength; i++) {
      $(".skill .skillContent .webSkill .progress:nth-child(" + i + ") .bar span").css("width", 0);
    }
    countValue1 = 0;
    countValue2 = 0;
    countValue3 = 0;
    $(".skill .skillContent .box-container .box p").text(0)
  } else {
    $(".navbar a:nth-child(4)").addClass("menuActive");
    $(".navbar a:not(:nth-child(4))").removeClass("menuActive");
  }
});


// 메뉴버튼 클릭시 텍스트 변환
$(".navbar a").on("click", function () {
  page = $(this).index() + 1;
  $(this).addClass("menuActive");
  $(this).siblings().removeClass("menuActive");
});


// 마우스 움직임 따라 div이동
$(document).on("mousemove", function (e) {
  $(".cursor-1").css({
    "top": e.pageY,
    "left": e.pageX
  });
  $(".cursor-2").css({
    "top": e.pageY,
    "left": e.pageX
  });
});

// 메뉴 버튼 클릭시 네비게이션 바 등장
$("#menu-bars").on("click", function () {
  $(this).toggleClass("fa-times");
  $("header").toggleClass("active");
})

// a 호버시  div 디자인 변경
$("a").hover(
  function () {
    $(".cursor-1").addClass("active");
    $(".cursor-2").addClass("active");
  },
  function () {
    $(".cursor-1").removeClass("active");
    $(".cursor-2").removeClass("active");
  }
);

// 타이핑 효과
var list;
$("#about .typing .typing-txt").after("<div class='typingview'><ul></ul></div>");
for (list = 1; list <= $("#about .typing .typing-txt ul li").length; list++) {
  $(".typingview ul").append("<li></li>");
}

var typingIdx = 0;
var liIndex = 0;
var liLength = $(".typing-txt>ul>li").length;

// 타이핑될 텍스트를 가져온다 
var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
// typingTxt = typingTxt.split(""); // 한글자씩 자른다. 
var tyInt = setInterval(typing, 100); // 반복동작 

function typing() {
  $(".typingview ul li").removeClass("on");
  $(".typingview ul li").eq(liIndex).addClass("on");
  if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복 
    $(".typingview ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
    typingIdx++;
  } else {
    if (liIndex < liLength - 1) {
      //다음문장으로  가기위해 인덱스를 1증가
      liIndex++;
      //다음문장을 타이핑하기위한 셋팅
      typingIdx = 0;
      typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();

      //다음문장 타이핑전 1초 쉰다
      clearInterval(tyInt);
      //타이핑종료

      setTimeout(function () {
        //1초후에 다시 타이핑 반복 시작
        tyInt = setInterval(typing, 100);
      }, 1000);
    } else if (liIndex == liLength - 1) {

      //마지막 문장까지 써지면 반복종료
      clearInterval(tyInt);
    }
  }
}


// progress bar width값, count 값
// $(window).on("scroll",function(){
//   var i;
//   var skillLength = $("#skill .skillContent .webSkill .progress").length;

//   if(page == 2){
//     for (i = 1; i <= skillLength; i++) {
//       var skillPercent = $(".skill .skillContent .webSkill .progress:nth-child(" + i + ") h3 span").text() * 1
//       $(".skill .skillContent .webSkill .progress:nth-child(" + i + ") .bar span").css("width",
//         skillPercent + "%");
//     }
//   }else{

//   }
//   if($(window).scrollTop() == $("#skill").offset().top){
//     var countValue1 = 0;
//     var countValue2 = 0;
//     var countValue3 = 0;

//     function counter1() {
//       countValue1++
//       if (countValue1 > $(".skill .skillContent .box-container .box:nth-child(1) span").text() * 1) {
//         clearInterval(countFn1);
//       } else {
//         $(".skill .skillContent .box-container .box:nth-child(1) p").text(countValue1);
//       }
//     }
//     function counter2() {
//       countValue2++
//       if (countValue2 > $(".skill .skillContent .box-container .box:nth-child(2) span").text() * 1) {
//         clearInterval(countFn2);
//       } else {
//         $(".skill .skillContent .box-container .box:nth-child(2) p").text(countValue2);
//       }
//     }
//     function counter3() {
//       countValue3++
//       if (countValue3 > $(".skill .skillContent .box-container .box:nth-child(3) span").text() * 1) {
//         clearInterval(countFn3);
//       } else {
//         $(".skill .skillContent .box-container .box:nth-child(3) p").text(countValue3);
//       }
//     }

//     var countFn1 = setInterval(counter1, 30);
//     var countFn2 = setInterval(counter2, 30);
//     var countFn3 = setInterval(counter3, 30);
//   }
// });


// skill 클릭시 옆의 부가 설명 창
$(".skill .skillContent .webSkill .progress").on("click", function () {
  var fairinform = $(this).index() + 1;
  $(this).children("h3").addClass("skillActive");
  $(".skill .skillContent .skillinform div:nth-child(" + fairinform + ")").addClass("skillShow");
  $(this).siblings().children("h3").removeClass("skillActive");
  $(".skill .skillContent .skillinform div:not(:nth-child(" + fairinform + "))").removeClass("skillShow");
});

$(".contact .row form .btn").on("click", function () {
  alert("전송완료시 작성내용이 사라집니다(1~2초 정도 소요). 감사합니다.")
});

if($(window).outerWidth()>991){
  $(".portfolio .box-container .box").hover(
    function(){
    $(this).addClass("hover");
  },
    function(){
    $(this).removeClass("hover");
    }
  );
}else{
  $(".portfolio .box-container .box").on("click",function(){
    console.log("클릭");
    $(this).addClass("click");
    $(this).siblings().removeClass("click");
  })
}
$(window).resize(function(){
  if($(window).outerWidth()>991){
    $(".portfolio .box-container .box").hover(
      function(){
      $(this).addClass("hover");
    },
      function(){
      $(this).removeClass("hover");
      }
    );
  }else{
    $(".portfolio .box-container .box").on("click",function(){
      console.log("클릭");
      $(this).addClass("click");
      $(this).siblings().removeClass("click");
    })
  }
});