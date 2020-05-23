/* 

원하는 로직 
    1. DATA 값에 객체를 담은 배열을 선언한다

    2. commentElement function 으로 
     2-1. 그 객체를 담은 배열의 각 요소에 접근하여
     2-2. 내가 원하는 child tag 에 넣은 뒤 
     2-3. 그 tag 들을 감싼 parent tag 에 넣어주고
     2-4. 그 parent tag 를 return 해준다 
     
    3. 

*/


//일단은 하나의 test case 를 통과시키고자 하는 목적으로 DATA 를 '객체를 담은 배열' 에서 '객체' 로 바꾸어 줌 
/*let DATA = [
{ userName : 'testNewTweet',  createdAt : '2020-05-23 11:10:30', msg : 'testNewTweet'}
//{ userName : 'Inseob', msg : 'Bye', createdAt : '2020-05-22 14:32:30'},
//{ userName : 'codeStates', msg : 'code hard', createdAt : '2020-05-22 14:33:30'}
];*/
 

//updateTwit 함수에 들어갈 변수들을 미리 선언해 주었다 
let userName = '';
let userMsg = '';



function whenClickTwitt() {
    userName = document.getElementById("userNameInput").value;
    userMsg = document.getElementById("userMsgInput").value;


    //시간을 나타내는 변수 nowDate 은 function 안에다가 넣어서 function 을 실행할때마다 재할당 되게끔 해놨다
    let now = new Date();
    let nowDate = now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate() + ', ' + now.getHours() + ":" + now.getMinutes()  + ":" + now.getSeconds();
    userTime = String(nowDate);
    whenClickCheckNewTweet();
}


function whenClickCheckNewTweet() {
    updateTwit();
}


function updateTwit() {

    let twitPage = document.getElementById("watchingSection");

    let eachTwitContainer = document.createElement('div').classList.add()

    let tagForUserName = document.createElement('span');
    let nodeForUserName = document.createTextNode(userName);
    tagForUserName.appendChild(nodeForUserName);
    twitPage.appendChild(tagForUserName).classList.add('userID');

    let tagForTime = document.createElement('span');
    let nodeForTime = document.createTextNode(userTime);
    tagForTime.appendChild(nodeForTime);
    twitPage.appendChild(tagForTime).classList.add('time');

    let brTag = document.createElement('br');
    twitPage.appendChild(brTag);

    let tagForUserMsg = document.createElement('span');
    let nodeForUserMsg = document.createTextNode(userMsg);
    tagForUserMsg.appendChild(nodeForUserMsg);
    twitPage.appendChild(tagForUserMsg).classList.add('comments');

    let line = document.createElement('hr');
    twitPage.appendChild(line).classList.add('hr');




    /*
    //1단계 1   : watchingSection 에 userName 를 추가하기

    //1단계 1-1 : watchingSection 에 tag 를 추가하기
    let userId = document.createElement('span');
    //1단계 1-2 : createdTextNode 로 node 를 만들기 
    let nodeUserId = document.createTextNode(DATA[0].userName);
    //1단계 1-3 : userId 에 nodeUserId 를 집어넣어 span element 하나 만들기 
    userId.appendChild(nodeUserId);

    //1단계 1-4 : span element를 존재하던 element 에 자식 node 로 추가하기
    let twitPage = document.getElementById("watchingSection");
    twitPage.appendChild(userId).classList.add('userID');


    //1단계 2   : watchingSection 에 userName 를 추가하기

    //1단계 2-1 : watchingSection 에 tag 를 추가하기
    let userCreatedAt = document.createElement('span');
    //1단계 2-2 : createdTextNode 로 node 를 만들기 
    let nodeUserCreatedAt = document.createTextNode(DATA[0].createdAt);
    //1단계 2-3 : userId 에 nodeUserId 를 집어넣어 span element 하나 만들기 
    userCreatedAt.appendChild(nodeUserCreatedAt);

    //1단계 2-4 : span element를 존재하던 element 에 자식 node 로 추가하기
    twitPage.appendChild(userCreatedAt).classList.add('time');


    //1단계 3   : watchingSection 에 msg 를 추가하기

    //1단계 3-1 : watchingSection 에 tag 를 추가하기
    let userMsg = document.createElement('span');
    //1단계 3-1-추가 : 개행이 한 번 있어야 하는 구간이라 개행을 함 
    let brTag = document.createElement('br');
    //1단계 3-2 : createdTextNode 로 node 를 만들기 
    let nodeUserMsg = document.createTextNode(DATA[0].msg);
    //1단계 3-3 : userId 에 nodeUserId 를 집어넣어 span element 하나 만들기 
    userMsg.appendChild(nodeUserMsg);

    //1단계 3-4 : span element를 존재하던 element 에 자식 node 로 추가하기
    twitPage.appendChild(brTag);
    twitPage.appendChild(userMsg).classList.add('comments');
    */
}

















/*
//그런데 parameter 가 하나인데, msg 라는 애를 넣으면 못알아 먹지 않을까요?
function commentElement(comment) {
    //parent tag 로서 기능하는 liElement 라는 이름의 변수에 li 값이라는 HTML tag 를 할당해줌 
    let liElement = document.createElement('li');
    //alert('commentElement let 실행');
    

    //userName 변환하는 부분 
    let userNameElement = document.createElement('div');
    //
        userNameElement.classList.add('userName');
        userNameElement.textContent = comment.userName;
        liElement.appendChild(userNameElement);
        //alert('commentElement userName 실행');

    //msg 변환하는 부분 
    let userMsgElement = document.createElement('div');
        userMsgElement.classList.add('msg');
        userMsgElement.textContent = comment.msg;
        liElement.appendChild(userMsgElement);
        //alert('commentElement msg 실행');

    //createdAt 변환하는 부분
    let createdAtElement = document.createElement('div');
        createdAtElement = classList.add('createdAt');
        createdAtElement.textContent = comment.createdAt;
        liElement.appendChild(createdAtElement);
        //alert('createdAt 실행');
    
    return liElement;
}



//이거는 이제 저희가 comment objecdt 를 입력받아서 '만들어 주는' 거고
//이제 붙이는 그러니까, html form 으로 쏴서 날릴 수있는 애들을 만들어줘야할듯해요


//이 함수는 그러니까 읽기 영역에 dom 을 이용해서...
function printComment(comment) {
    //이 li 가 어디에 child로 들어가냐면 
    let wSection = document.getElementById('watchingSection');
    let twitElement = commentElement(comment);
    wSection.appendChild(twitElement);
}

let checkNewTweetButton = document.querySelector('#watchingSection');


function printComments() {
    DATA.forEach(printComment);
}

    //일단은 마우스 클릭시에~ 이렇게 된다 라고 하기위해서 함수를만들었어요
    //만약에 마우스가 눌린다면?
     //printComments 함수 실행시키기 
     //한번만 더 설명해주실수있을까요?? 
        //document.querySelector 사용
        //checkNewTweet 버튼을 변수로 선언한다 (eg. newTweets)
        //변수에다가 newTweets.onClick method 를 이용하여
        //이 방법이 더욱 직관적인 거 같아요 ! 
        //이상한 bracket 이 하나가 살아있었네요... 
        //다시 한 번 해보겠습니다?

        //제발!!

if (checkNewTweetButton.onClick) {
    console.log('버튼이 눌렸어요');
} 
//printComments;


//저도 사실 이해가 잘 안가요 더 실습해 봤어야 했는데...
//주말을 활용하라는 암묵의 신호인거같아요 ㅋㅋ

//배열이요?
//배열 안에 객체가 집어넣어져 있고, 그 배열에 index 로 각 객체들에 접근한다는 말이지요?
//그렇죠 


//그러면 밑에 script tag 로 js 파일을 한 번 넣어볼까요? 
*/