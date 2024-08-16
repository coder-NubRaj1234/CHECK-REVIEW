// import some reviw data from revier file......
import {review} from "./review.js";

//select some elements form html files.......

const img = document.getElementById("client-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const rendom = document.querySelector("#rendom");

//set starting items.............
let currentItems = 0;

//event  for rendom number ,,,,,,,,,\
rendom.addEventListener("click" ,function(){
    currentItems = Math.floor(Math.random() * review.length);
    showPerson();
})
//load inital items..............
window.addEventListener("DOMContentLoaded" , function(){
    showPerson(currentItems);
});

//function for show items ........
function showPerson(){
    let items = review[currentItems];
    img.src = items.img;
    author.textContent = items.name;
    job.textContent = items.job;
    info.textContent = items.text;
};

//chane items by click button ,,,,,,,,,,,,
nextBtn.addEventListener("click" ,function(){
    currentItems++;
    if(currentItems >= review.length){
        currentItems = 0;
    }
    showPerson();
});
prevBtn.addEventListener("click" ,function(){
    currentItems--;
    if(currentItems < 0){
        currentItems = review.length -1;
    }
    showPerson();
});