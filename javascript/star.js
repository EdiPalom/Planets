function Star(args)
{
    this.x3d = args[0];
    this.y3d = args[1];


    this.sw = args[2];
    this.sh = args[3]

    this.x = this.x3d + (this.sw / 2);
    this.y = this.y3d + (this.sh / 2);

    this.z = Math.random() * 1000;
    this.FOV = 250;
    this.scale = this.FOV/(this.z + this.FOV);
    this.w = 1;
    this.h = 1;
    this.speed = 1;
    this.id = "r"+this.x+this.y;

    this.insertDOM();
}

Star.prototype.insertDOM = function(){
    let div = document.createElement("div");
    // let display = document.getElementById("field");

    div.style.position = "absolute";
    div.style.left= this.x + "px";
    div.style.top = this.y + "px";
    div.style.width = this.w + "px";
    div.style.height = this.h + "px";
    div.style.backgroundColor = "transparent";
    div.style.backgroundImage = "url('img/star.png')"
    div.style.backgroundSize = "cover";
    div.style.opacity = "0.0";

    div.id = this.id;

    document.body.appendChild(div);
    // display.appendChild(div);
}

Star.prototype.update = function()
{
    this.z -= this.speed;
    
    this.scale = this.FOV /(this.z + this.FOV);

    let x3d = this.x3d * this.scale;
    let y3d = this.y3d * this.scale;

    this.x = x3d + (this.sw / 2);
    this.y = y3d + (this.sh / 2);

    let opacity = this.scale > 1.0 ? 1.0 : this.scale;

    let m = document.getElementById(this.id);
    m.style.left = this.x + "px";
    m.style.top = this.y +"px";
    m.style.width = (4 * this.scale) + "px";
    m.style.height = (4 * this.scale) + "px";
    m.style.opacity = opacity;

    if(this.x < -this.w || this.x > (this.sw + this.w) || this.y < -this.h || this.y > (this.sh+this.h))
    {
        this.x3d = Math.random() * (this.sw * 2) - this.sw;
        this.y3d = Math.random() * 1200 - 600;
        this.z = 1000;
    }
}




