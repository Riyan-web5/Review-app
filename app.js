const reviews = [
    {
        id: 1,
        name: "Skyla ",
        title: "Graphic Designer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
           "Suspendisse potenti. Vivamus efficitur augue at malesuada vestibulum. Quisque fringilla nec justo nec porttitor. Donec vehicula velit in justo convallis, vitae accumsan velit ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer finibus libero vel velit pretium convallis."

    },
    {
        id: 2,
        name: "Maddison",
        title: "UX Designer",
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        text:
        "Curabitur id magna vel purus tristique tempor. Ut ac sapien ac erat porttitor egestas. Etiam suscipit sem eu pulvinar dapibus. Mauris vitae nunc nec eros gravida dignissim non nec neque. Praesent sit amet tellus id nisi tempus rhoncus. Sed non massa sit amet odio dictum mattis."
    },
    {
        id: 3,
        name: "Yatin",
        title: "Programmer",
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        text:
        "Morbi ultrices lorem ut felis fermentum, vitae commodo lorem fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Vestibulum sodales, ipsum et cursus finibus, elit nunc cursus ligula, et posuere nunc arcu nec mi. Vivamus at risus vitae eros pharetra dictum."
    },
    {
        id: 4,
        name: "Hassan",
        title: "Artist",
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        text:
        "Nam nec feugiat mi. In lacinia nisl nec tellus luctus finibus. Cras lobortis diam a dolor luctus, nec dictum velit scelerisque. Pellentesque iaculis, justo at viverra ultricies, ex dolor facilisis nisi, nec volutpat augue ante ac velit. In hac habitasse platea dictumst."
    }
]

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("info");

const prevbtn = document.querySelector(".prev-btn");
const nextbtn = document.querySelector(".next-btn");
const randombtn = document.querySelector(".random-btn");
//initializing a review number (0 - 3)
let reviewNumber = 0;

//function on loading the page
window.addEventListener("DOMContentLoaded", function(){
  const item = reviews[reviewNumber];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.title;
  text.textContent = item.text;
});

//showing the person
function showperson(person){
   const item = reviews[person];
   img.src = item.img;
   author.textContent = item.name;
   job.textContent = item.title;
   text.textContent = item.text;
}

//prev review profile
prevbtn.addEventListener("click", function(){
   reviewNumber--;
   if(reviewNumber < 0){
    reviewNumber = reviews.length - 1;
   }
   showperson(reviewNumber);
});

//next review profile
nextbtn.addEventListener("click", function(){
reviewNumber++;
 if(reviewNumber > reviews.length - 1){
    reviewNumber = 0;
 }
 showperson(reviewNumber);
});


//suprise me btn
randombtn.addEventListener("click", function () {
     reviewNumber = Math.floor(Math.random() * reviews.length);
 showperson(reviewNumber);
 console.log(reviewNumber);
});