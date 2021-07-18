let MemberList = []; //members 객체들을 저장하는 배열,회원정보테이블
let loginMember = "" //값이있으면 로그인 성공.

function pageload(){
    let divHeader = document.getElementById("header")
    let html = ""
    if(loginMember != ""){
        html = loginMember.name
        html += "<a href='javascript: logout_member();'>[Logout]</a>"
    }else{
        html = "<a href='javascript: login_member();'>[Login]</a>"
    }
    html += "<a href='javascript: new_member();'>[NewMember]</a>"
    divHeader.innerHTML = html
}

//회원접속관리기능
function Member(){
  this.name = ""
  this.id = ""
  this.pass = ""
  this.login = function(id,pass){
    if(this.id == id && this.pass == pass){
      return true
    }
    return false
  }
}

//새회원정보 등록.
function new_member(){
  let user = new Member()
  user.name = prompt("member name : ")
  user.id = prompt("member id : ")
  user.pass = prompt("member password : ")

  MemberList.push(user)
}

//로그인처리.성공이면 login_member에 저장
function login_member(){
  let id = prompt("id : ")
  let pass = prompt("password : ")
  let max = MemberList.length
  for(let i=0; i<max;i++){
      if(MemberList[i].login(id,pass)){
          loginMember=  MemberList[i]
          break;
      }
  }
  pageload()
}

//로그아웃처리 
function logout_member(){
  loginMember = ""
  pageload()
}

let Board = []  //게시글저장 배열, push로 게시글 추가.
//목록보기기능함수
function list(){ 
  let max = Board.length;  //게시물의 개수
  let html = ""
  for(let i=0;i<max; i++){
    html += "<a href='javascript: view("+i+");'>" 
    html += (Board[i].title+"</a> : " + Board[i].id +"<br/>")
  }
    let divTable = document.getElementById("table")
    divTable.innerHTML = html
}
//게시글작성기능 함수
function write(){
    let content = {
        title:"",
        memo:"",
        id:""
    }
    if(loginMember ==""){
        alert("Plz Login")
    }else{
        content.title = prompt("Title : ")
        content.memo = prompt("Memo : ")
        content.id = loginMember.id
        Board.push(content);
      }
    }
    

function view(idx){ 
  let html = ""
  html = "detail view <br/>"
  html +=("Title : "+ Board[idx].title+"["+Board[idx].id+"]")
  html +=("Memo :"+ Board[idx].memo)
  
  var divTable = document.getElementById("table")
  divTable.innerHTML = html


}

//화면이 새로 열리면 자동실행
pageload()
list()



