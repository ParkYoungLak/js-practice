
let Members = []
let id = ""





function list() {
    let html = ""
    for(let i=0;i<Members.length;i++){
        id = Members[i]
        html+= (id+ "<br/>")
    }
    let divTable = document.getElementById("table");
    divTable.innerHTML = html

}

function new_member(){ 
    let member_id = prompt("member ID :")
    Members.push(member_id)
    
}
function search(){
    let member_id = prompt("Search ID ");
    let result = "";
    for(let i=0;i<Members.length;i++){
        if(member_id == Members[i]){
          result = member_id
        }
    }
    let divTable = document.getElementById("table");
    divTable.innerHTML = result;
    
}


