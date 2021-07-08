
let Member = {
    name : "",
    age : 0,
    id : '',
    pass : ""
}

function new_member(){
    let divTable = document.getElementById("table");
    let str = "";
    Member.name = prompt("Member name ")
    Member.age = Number(prompt("Member age "))
    Member.id = prompt("Member id ")
    Member.pass = prompt("Member password ")

    str = Member.name +":"+Member.age +":"+ Member.id +":"+ Member.pass

    divTable.innerHTML = str
}