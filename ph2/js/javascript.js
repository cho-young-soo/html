$("#popup a.close").click(
  function () {
    $("#popup").hide();
    return false;
  }
);

$("#collusion .center .slide > div:first-child").addClass("show");
$("#collusion .center .list li:first-child").addClass("show");
$("#collusion .center .control button:last-child").on("click", function () {
  var current;
  $("#collusion .center .slide > div").each(function () {
    if ($(this).hasClass("show")) {
      current = $(this).index()
    }
  });
  $("#collusion .center .slide > div").removeClass("show");
  $("#collusion .center .list li").removeClass("show");
  if (current == $("#collusion .center .slide > div").length - 1) {
    current = 0;
    $("#collusion .center .slide").css({
      "left": -100 * current + "%"
    });
    $("#collusion .center .slide > div").eq(current).addClass("show")
    $("#collusion .center .list li").eq(current).addClass("show");
  } else {
    current++
    $("#collusion .center .slide").css({
      "left": -100 * current + "%"
    });
    $("#collusion .center .slide > div").eq(current).addClass("show");
    $("#collusion .center .list li").eq(current).addClass("show");
  }
});
$("#collusion .center .control button:first-child").on("click", function () {
  var current;
  $("#collusion .center .slide > div").each(function () {
    if ($(this).hasClass("show")) {
      current = $(this).index()
    }
  });
  $("#collusion .center .slide > div").removeClass("show");
  $("#collusion .center .list li").removeClass("show");
  if (current == 0) {
    current = 2;
    $("#collusion .center .slide").css({
      "left": -100 * current + "%"
    });
    $("#collusion .center .slide > div").eq(current).addClass("show")
    $("#collusion .center .list li").eq(current).addClass("show");
  } else {
    current--
    $("#collusion .center .slide").css({
      "left": -100 * current + "%"
    });
    $("#collusion .center .slide > div").eq(current).addClass("show");
    $("#collusion .center .list li").eq(current).addClass("show");
  }
});