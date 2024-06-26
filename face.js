// 전역 변수 선언
var canvas;
var context;
var img;

// load 이벤트 리스너 등록. 웹페이지가 로딩된 후 실행 
window.addEventListener("load", function() {
	canvas = document.getElementById("canvasCam");
	context = canvas.getContext("2d");

	img = new Image();
	img.onload = function () {
		context.drawImage(img, 0, 20); // (0,0) 위치에 img의 크기로 그리기
	}
});

// drawImage()는 "image' 토픽이 도착하였을 때 onMessageArrived()에 의해 호출된다.
function drawImage(imgUrl) { // imgUrl은 이미지의 url
	img.src = imgUrl; // img.onload에 등록된 코드에 의해 그려짐
}

var isImageSubscribed = false;
function recognize() {
        if(!isImageSubscribed) {
                subscribe('image'); // 토픽 image 등록
                isImageSubscribed = true;
        }
        publish('facerecognition', 'action'); // 토픽: facerecognition, action 메시지 전송
}

