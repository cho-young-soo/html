    // 화면 스크롤 시 헤더 탑에 고정
    $(window).scroll(function () {
      if ($(window).scrollTop() == 0) {
        $("header").css({
          "position": "absolute",
          "background-color": "transparent"
        });
      } else {
        $("header").css({
          "position": "fixed",
          "background-color": "#f69314"
        });
      }
    });
    // 버튼 클릭시 이미지 스크롤
    $("#company .block_center .left ul li:first-child").addClass("active");
    $("#company .block_center .left span button.next").on("click", function () {
      var current_list;
      var next_list;

      var listLength = $("#company .block_center .left ul li").length;
      $("#company .block_center .left ul li").each(function () {
        if ($(this).hasClass("active")) {
          current_list = $(this).index() + 1;
        }
      });
      $("#company .block_center .left ul li").removeClass("active");
      if (current_list == listLength) {
        current_list = $("#company .block_center .left ul li:first-child").index() + 1;
        $("#company .block_center .left ul li:nth-of-type(" + current_list + ")").addClass("active");
      } else {
        current_list++;
        $("#company .block_center .left ul li:nth-of-type(" + current_list + ")").addClass("active");
      }
    });
    $("#company .block_center .left span button.prev").on("click", function () {
      var current_list;
      var next_list;

      var listLength = $("#company .block_center .left ul li").length;
      $("#company .block_center .left ul li").each(function () {
        if ($(this).hasClass("active")) {
          current_list = $(this).index() + 1;
        }
      });
      $("#company .block_center .left ul li").removeClass("active");
      if (current_list == listLength - $("#company .block_center .left ul li:last-child").index()) {
        current_list = $("#company .block_center .left ul li").length;
        $("#company .block_center .left ul li:nth-of-type(" + current_list + ")").addClass("active");
      } else {
        current_list--;
        $("#company .block_center .left ul li:nth-of-type(" + current_list + ")").addClass("active");
      }
    });

    // 메뉴 버튼 클릭시 메뉴창
    $("header .block_center > span").on("click", function () {
      $("header .block_center .gnb").addClass("mobileMenu");
      $("header .block_center .gnb").append("<li class='close'></li>")
      $(".close").on("click", function () {
        $("header .block_center .gnb").removeClass("mobileMenu");
      });
      $(window).resize(function () {
        if ($(window).outerWidth() >= 768) {
          $("header .block_center .gnb li.close").remove();
        }
      });
    });
    // 메뉴 스크롤 애니메이션
    var homeTop = $("#title").offset().top;
    var worksTop = $("#works").offset().top;
    var propertiesTop = $("#properties").offset().top;
    var companyTop = $("#company").offset().top;
    var peopleTop = $("#people").offset().top;
    var newsTop = $("#news").offset().top;
    var contactTop = $("#contact").offset().top
    $(window).resize(function () {
      homeTop = $("#title").offset().top;
      worksTop = $("#works").offset().top;
      propertiesTop = $("#properties").offset().top;
      companyTop = $("#company").offset().top;
      peopleTop = $("#people").offset().top;
      newsTop = $("#news").offset().top;
      contactTop = $("#contact").offset().top
    });
    $('.title').click(function () {
      $('html, body').animate({
        scrollTop: homeTop
      }, 1000);

      return false;
    });
    $('.works').click(function () {
      $('html, body').animate({
        scrollTop: worksTop
      }, 1000);

      return false;
    });
    $('.properties').click(function () {
      $('html, body').animate({
        scrollTop: propertiesTop
      }, 1000);

      return false;
    });
    $('.company').click(function () {
      $('html, body').animate({
        scrollTop: companyTop
      }, 1000);

      return false;
    });
    $('.about').click(function () {
      $('html, body').animate({
        scrollTop: peopleTop
      }, 1000);

      return false;
    });
    $('.news').click(function () {
      $('html, body').animate({
        scrollTop: newsTop
      }, 1000);

      return false;
    });
    $('.contact').click(function () {
      $('html, body').animate({
        scrollTop: contactTop
      }, 1000);

      return false;
    });