
function planet_name(obj)
{
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

function reset()
{
    document.getElementById('planet_name').innerHTML="Choose a planet";
}

function getRandomPosition()
{
    var x = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var y = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;;

    var rand_x = Math.floor(Math.random() * (x*2) - x);
    var rand_y = Math.floor(Math.random() * 1200 - 600);

    return [rand_x,rand_y,x,y];
}

window.onload = function()
{
    let stars = [];
    let num_stars = 500;
    
    for(let i = 0; i < num_stars; i++)
    {
        stars.push(new Star(getRandomPosition()));
    }

    function update(){
        for(let i = 0; i < num_stars; i++)
            stars[i].update();

        pid = window.requestAnimationFrame(update);
    }

    pid = window.requestAnimationFrame(update);

    // positions.forEach(function(item, index, array)
    // {
    //     var img = document.createElement('img');
    //     img.setAttribute("style","position:absolute");
    //     img.setAttribute("src", "img/stars.png");
    //     img.style.top = item[1] + 'px';
    //     img.style.left = item[0] + 'px';
    //     document.body.appendChild(img);
    // });
    //
        
}
