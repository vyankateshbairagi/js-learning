class Pencil{
    constructor(username , userid , email, role ){
    this.username=username;
    this.userid=userid;
    this.email=email;
    this.role=role;

}

write(text){
    let h1 =document.createElement("h1");
    h1.textContent=`${this.username}text`;
    document.body.appendChild(h1);

}

}

let u1 = new Pencil("vyankatesh" ,7555 , "vyankatesh@gmail.com" , "developer");
