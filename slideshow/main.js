const images = [{

    "src": "img1.jpg",

    "alt": "1 Nature"

},

{

    "src": "img2.jpg",

    "alt": "2 Fjords"

},

{

    "src": "img3.jpg",

    "alt": "3 Mountains"

},

{

    "src": "img4.jpg",

    "alt": "4 Lights"

},

];






const img = document.getElementById('slide');

const inainte = document.getElementById('inainte');

const inapoi = document.getElementById('inapoi');

const meniu = document.getElementById('meniu');

var index = 1;


for (var iterator = 0; iterator < images.length; iterator++) {

    console.log(images[iterator].src + ' ' + images[iterator].alt);
    
    }




window.onload = showImage(1);



function showImage(iterator) {
//completam imaginea cu .src respectiv cu .alt
img.src = "img/" + images[iterator].src;

img.alt = "img/" + images[iterator].alt;

img.title = images[iterator].alt;

}


//pentru a da inainte/a ajunge la urmatoarea imagine
inainte.addEventListener('click', () => {

if(index<3)

index++;

else

index=0;
showImage(index);

activ(document.querySelector("#biluta" + (index + 1)));

})


//pentru a da inapoi/a ajunge la imaginea anterioara
inapoi.addEventListener('click', () => {

if(index>0)

 index--;

else

 index=3;

showImage(index);

activ(document.querySelector("#biluta" + (index + 1)));

})



meniuBilute(images.length);


//l reprezentand numarul de imagini
function meniuBilute(l) {

for (let iterator = 0; iterator < l; iterator++) {

    let biluta = document.createElement('span');

    biluta.className = "biluta"

    biluta.id = "biluta" + (iterator + 1);



    biluta.addEventListener('click', () => {

       
        if(index<3)
        index++;
        else
        index=0;



        
        if(index>0)
        index--;
        else index=3;

        index = iterator;

        showImage(index);

        activ(document.querySelector("#biluta" + (index + 1)));

    })

    meniu.appendChild(biluta);

}



document.querySelector('#biluta2').className += " activ";

}



function activ(bil) {

let list = document.getElementsByTagName('span');

for (var iterator = 0; iterator < list.length; iterator++) {

    if(list[iterator].id !== bil.id)  
    list[iterator].className = "biluta"
    else 
    list[iterator].className = "biluta activ";

}

}