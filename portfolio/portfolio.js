const scroll = new LocomotiveScroll({
    el: document.querySelector('#header'),
    smooth: true
});

var a=document.querySelector('#viewcode')
var b=document.querySelector('#viewwebsite')
var c=document.querySelector('#knowmore')
var d=document.querySelector('.box1')
var e=document.querySelector('.box2')

d.addEventListener('mouseenter',function(){
    a.style.opacity=1;
    b.style.opacity=1;
    c.style.opacity=1;
    d.style.backgroundColor = 'black';
    
})
d.addEventListener('mouseleave',function(){
    a.style.opacity=0;
    b.style.opacity=0;
    c.style.opacity=0;
    d.backgroundColor='none';
})
e.addEventListener('mouseenter',function(){
    a.style.opacity=0;
    b.style.opacity=0;
    c.style.opacity=0;
    d.style.backgroundColor = 'black';
})

var a1=document.querySelector('.block1')
var b1=document.querySelector('.information_of_block1')

a1.addEventListener('mouseenter',function(){
    console.log("sanket")
    b1.style.display    ='block';
})
a1.addEventListener('mouseleave',function(){
    b1.style.display='none';
})

var a3=document.querySelector('.block3')
console.log(a3);
var b3=document.querySelector('.information_of_block3')

a3.addEventListener('mouseenter',function(){
    console.log("sanket");
    b3.style.display='block';
})
a3.addEventListener('mouseleave',function(){
    b3.style.display='none';
})


var a2=document.querySelector('.block2')
console.log(a2);
var b2=document.querySelector('.information_of_block2')

a2.addEventListener('mouseenter',function(){
    console.log("sanket");
    b2.style.display='block';
})
a2.addEventListener('mouseleave',function(){
    b2.style.display='none';
})

