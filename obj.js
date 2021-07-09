let obj_name = {
    name : "james",
    age : 40,
    print : function(){
        document.write("hello james <br/>")
    }
};
let Rect ={
    width : 20,
    height : 10,
    area : function(){
        return this.width * this.height
    }
}
document.write(Rect.width + "<br/>")
document.write(Rect.height + "<br/>")
document.write(Rect.area()+"<br/>") 

obj_name.print()
document.write(obj_name.name + "<br/>")
document.write(obj_name.age +"<br/>")
