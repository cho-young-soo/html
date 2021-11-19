      // reddot클릭시
      $(".reddot img").on("click",function(){
        $("html").css({"overflow-y":"hidden"});
        $(".modalHide").css({"display":"block"});
      });
      // reddot 닫기버튼
      $(".closeBtn").on("click",function(){
        $("html").css({"overflow-y":"initial"});
        $(".modalHide").css({"display":"none"});
      });