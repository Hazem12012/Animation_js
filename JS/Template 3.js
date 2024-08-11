let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let Ꝏcode = document.querySelector('.Ꝏcode');

window.onscroll = function(){

    let value = scrollY;
    console.log(value);
    
    stars.style.left = value + 'px';
    moon.style.top = value * 3 +'px';
    mountains3.style.top = value * 1.5 +'px';
    mountains4.style.top = value * 1.2 +'px';
    river.style.top = value + 'px';
    boat.style.top = value +-35+ 'px';
    boat.style.left = value * 3 + 'px';
    Ꝏcode.style.fontSize = value + 'px';

    if(scrollY >= 67){
        Ꝏcode.style.fontSize = 67 + 'px';
        Ꝏcode.style.position = 'fixed';

        if(scrollY >= 428){
            Ꝏcode.style.display = 'none';
        }
        else{
            Ꝏcode.style.display = 'block';
        }
        if(scrollY >=127){
            document.querySelector('.main').style.background='linear-gradient( to top,#376281 ,#10001f )';
        }
        else{
            document.querySelector('.main').style.background='linear-gradient( to top,#200016 ,transparent )';
        }
    }
}
