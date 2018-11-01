var devWidth;
var limitSize = 768;

$(function(){
	$(".gnblist ul").hide();
  
    devWidth = $("body").width();
    
    $(window).resize(function(){
    	devWidth = $("body").width();
    });

	$(".gnblist>li>a").mouseenter(function(){
		if(devWidth<limitSize){return false;}

		$(".gnblist ul").hide();
		$(this).next().show();
		$(".gnblist>li>a").css({height:29,background:"none"});

		$(this).css("height","32px")
		.css("background","url(./images/over_icon.gif) no-repeat center bottom");
	});
	
	$("#gnb").mouseleave(function(){
		if(devWidth<limitSize){return false;}
		$(".gnblist ul").hide();
		$(".gnblist>li>a").css({height:29,background:"none"});
	});

	$(".allmenu_view>a").click(function(){
		// $("#allMenu_box").slideDown();
		$(".allmenu_view").slideUp(10,function(){
			$("#allMenu_box").slideDown();
		});
	});

	$(".all_close").click(function(){
		$("#allMenu_box").slideUp(300,function(){
			$(".allmenu_view").slideDown();
		});
	});

	var bnnNum = 0;
	var prev = $(".prev");
	var next = $(".next");

	next.click(function(){
		if(bnnNum>=1)return false;
		bnnNum++;
		console.log(bnnNum);
		Movelist();

	});

	prev.click(function(){
		if(bnnNum<=0) return false;
		bnnNum--;
		Movelist();
		
	});

	function Movelist(){
		book_w = $("#recomm_book").width();
		var tl = book_w*bnnNum*-1
		$("#book_frame").stop().animate({left:tl},function(){
			$("#book_roll img").attr("src","./images/state_out.png");
			$("#book_roll img").eq(bnnNum).attr("src","./images/state_over.png")
		});
	};

});