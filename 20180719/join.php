<!DOCTYPE html>
<html lang="ko">
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<meta charset="UTF-8">
	<title>문서 제목</title>
</head>
<body>
	안녕하세요.
	<?
	echo $_POST["id"];?> 님, <br>
	메일 수신 여부는 <? echo $_POST["receive"];?>이고
	관심 분야는 
	<? echo $_POST["chk1"];?>
	<? echo $_POST["chk2"];?> 
	<? echo $_POST["chk3"];?>입니다. <br>
	회원가입이 완료되었습니다.<div class="br"></div>
	감사합니다. 
</body>
</html>