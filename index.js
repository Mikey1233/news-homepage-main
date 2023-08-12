'use strict';
const menu = document.querySelector('.menu');
const listItem = document.querySelector('.list-item');
const backGround = document.querySelector('.opa');
const body = document.querySelector('body');
const logo = document.querySelector('.logo')
const bar = document.querySelectorAll('.bar')
console.log(bar)
logo.addEventListener(
    'click',()=>{
        body.classList.toggle('darkmode');
        for (let x of bar) x.classList.toggle('darkmode')
    }
)
menu.addEventListener(
    'click', ()=>{
        menu.classList.toggle('active')
        listItem.classList.toggle('active')
        body.classList.toggle('active')
        backGround.classList.toggle('active')
    }
)
listItem.addEventListener(
    'click',(e)=>{
        menu.classList.remove('active')
        listItem.classList.remove('active')
        body.classList.remove('active')
        backGround.classList.remove('active')
    if(e.target.matches('li')) {
         menu.classList.remove('active')
        listItem.classList.remove('active')
        body.classList.remove('active')
        backGround.classList.remove('active')
        }
    }
)
