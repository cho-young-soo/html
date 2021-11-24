  // 현재날짜
  var nowDate = new Date();
  var year = nowDate.getFullYear();
  var month = nowDate.getMonth() + 1;
  var date = nowDate.getDate();
  $(".dateC").text(year + "-" + month + "-" + date);
