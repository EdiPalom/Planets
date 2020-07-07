
// document.write("hello world!");
// console.log("hello world!");
//
// var planet_name = document.getElementById('planet_name').innerHtml="Hello World";


// planet_name.innerHtml = "Hello World"
// planet_name.style.color="red";
//
function planet_name(obj)
{
    // if()
    // console.log(obj.id);
    switch(obj.id)
    {
        case "planet":
            document.getElementById('planet_name').innerHTML="Bridge Planet";
            break;

        case "planet_earth":
            document.getElementById('planet_name').innerHTML="Planet Earth";
            break;

        case "planet1":
            document.getElementById('planet_name').innerHTML="Planet Columbus";
            break;

        case "planet2":
            document.getElementById('planet_name').innerHTML="Planet Oxidian";
            break;

    }
}
//
// function planet_name(obj)
// {
//     obj.innerHTML = "planet";
// }

function reset()
{
    document.getElementById('planet_name').innerHTML="Choose a planet";
}

function getRandomPosition()
{
    // var x = document.body.offsetHeight-element.clientHeight;
    // var y = document.body.offsetWidth-element.clientWidth;
    //
    console.log(window.innerWidth, window.innerHeight);

    // var x = window.innerWidth;
    // var y = window.innerHeight;
    var x = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var y = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;;

    var rand_x = Math.floor(Math.random() * x);
    var rand_y = Math.floor(Math.random() * y);

    return [rand_x,rand_y];
}

window.onload = function()
{
    let positions = [];
    
    for(i = 0; i < 500; i++)
    {
        positions.push(getRandomPosition());
    }

    positions.forEach(function(item, index, array)
    {
        // console.log(item);
        var img = document.createElement('img');
        img.setAttribute("style","position:absolute");
        img.setAttribute("src", "img/stars.png");
        img.style.top = item[1] + 'px';
        img.style.left = item[0] + 'px';
        document.body.appendChild(img);
        //
    });

    // var img = document.createElement('img');
    // img.setAttribute("style","position:absolute");
    // img.setAttribute("src", "img/stars.png");
    // img.style.top = 500 + 'px';
    // img.style.left = 300 + 'px';
    // document.body.appendChild(img);
}
