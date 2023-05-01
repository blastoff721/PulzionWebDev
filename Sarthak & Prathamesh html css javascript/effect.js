var sliders=document.getElementsByClassName('img-slider');
var index=1;

var trans=document.documentElement;


var changeslide;
const intervaltime=4000;

let hideall=()=>{
    // sliders.forEach(slide => {
    //     slide.style.display="none";
    // })
    var i=0;
    while(i<sliders.length){
        sliders[i].style.display="none";
        i++;
    }
}

let nextslide=()=>{
    hideall();
    trans.style.setProperty("--transval","3%");
    if(index==sliders.length){
        index=0;
    }
    sliders[index].style.display="block";
    console.log('next',index)
    index++;

    if(index==sliders.length){
        index=0;
    }
    clearInterval(changeslide);
    changeslide=setInterval(nextslide,intervaltime);
}


let prevslide=()=>{
    hideall();
    trans.style.setProperty("--transval","-3%");
    index-=2;
    if(index<=-1){
        index=sliders.length-1;
    }
    sliders[index].style.display="block";
    console.log('prev',index)
    index++;
    

    // if(index==-1){
    //     index=sliders.length-1;
    // }

    clearInterval(changeslide);
    changeslide=setInterval(nextslide,intervaltime);
}


const mode=document.getElementById('mode');
const model=document.getElementById('mode-l');
var bgcol=document.documentElement;

let dark=()=>{
bgcol.style.setProperty("--bgcolor","rgb(9, 8, 19");
localStorage.setItem("bgcolor","rgb(9, 8, 19");
}

let light=()=>{
    bgcol.style.setProperty("--bgcolor","white");
    localStorage.setItem("bgcolor","white");

}

let getbg=()=>{
    var bg=localStorage.getItem('bgcolor');
    bgcol.style.setProperty("--bgcolor",bg);
}

getbg();

model.addEventListener("click",light);

mode.addEventListener("click",dark);

//changeslide=setInterval(nextslide,intervaltime);


const pronext=document.getElementById('pronext');
const proprev=document.getElementById('proprev');
var products=document.getElementsByClassName('products');
var ind=0;
var ind2=2;

let hideprev=()=>{
    if(ind==0){
        proprev.style.display="none";
    }
    else{
        proprev.style.display="block";
    }
    
}
//hideprev();



let initialprod=()=>{
    var i=0;
   
    while(i<3){
        products[i].style.display="block";
        i++;
    }

    while(i<6){
        products[i].style.display="none";
        i++;
    }

}



var tr=document.documentElement;

let nextpr=()=>{
   tr.style.setProperty("--tr","5%")
  
   products[ind].style.display="none";
   var nextind=ind+3;
   if(nextind>5){
    ind=0;
    initialprod();
   }
   else{
   products[nextind].style.display="block";
   console.log('current ',ind);
   ind++;
   if(ind>5){
    ind=0;
   }
}
// hideprev();
   
}

let prevpr=()=>{
    tr.style.setProperty("--tr","-5%");
   
    if(ind>0 && ind<=3){
    var hideind=ind+2;
    
   products[hideind].style.display="none";
   //var nextind=ind2-3;
   ind--;
   products[ind].style.display="block";
   console.log('current ',ind);
   //hideprev();
}
    
   
}



proprev.addEventListener("click",prevpr);
pronext.addEventListener("click",nextpr);

var cart=document.getElementsByClassName('fa-solid');
var but=document.getElementById('cart');

let beat=()=>{
    but.innerHTML='<i class="fa-solid fa-cart-shopping fa-2xl fa-beat" style="color: #312c01;"></i>';
}
let nobeat=()=>{
    but.innerHTML='<i class="fa-solid fa-cart-shopping fa-2xl" style="color: #312c01;"></i>';
}

but.addEventListener("mouseover",beat);
cart[0].addEventListener("mouseover",beat);
but.addEventListener("mouseout",nobeat);