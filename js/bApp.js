// let projectData;

// fetch('../_data/project-data.json')
//   .then((res) => res.json())
//   .then((data) => {
//     getData(data);
//   });

// getData = (data) => {
//   projectData = data;
//   console.log(projectData);
//   console.log(projectData[0].firstName);
// };
// HOMEWORK 2
// ---------------------------------------------------------------------------
// // TASK 1
// // Diplay current date
// var currentdate = new Date()
// console.log(currentdate)

// // Use the setdate method to display a "special date". I chose D-day.
// // The following is copied and manipulated from: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_setdate3 

// const Operationdday = new Date("June 6, 1944 11:00:00");
// Operationdday.setDate(15,3);
// document.getElementById("demo").innerHTML = Operationdday;

// // The following is copied and manipulated from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC

// const utcDate1 = new Date(Date.UTC(44, 5, 6, 11, 11,11));
// const utcDate2 = new Date(Date.UTC(0, 0, 0, 0, 0, 0));

// console.log(utcDate1.toUTCString());
// // expected output: Tue, 06 Jun 1944 11:11:11 GMT

// console.log(utcDate2.toUTCString());
// // expected output: Sun, 31 Dec 1899 00:00:00 GMT

// // console.log("demo")

// ---------------------------------------------------------------------------

// // TASK 2
// // Create a prompt that asks for a color to set the background of the webpage i.e. target the body tag


// // Defining a variable thats input prompts the user for a background color
// var choosecolor = prompt("please enter the background color here");

// // console.log(choosecolor)
// // // The following changes the background color of the html <body> element to the above input

// styleback = () => {
//     document.getElementById("bod").style.backgroundColor = choosecolor;
// }
// console.log(choosecolor)
// // document.querySelector("bod")
// // stylecolor = document.body.style.backgroundColor.choosecolor;
// console.log(styleback)

// // This only seems to work when I add an element to the page, i.e. a button?
// document.getElementById("bod").addEventListener("click", styleback)
// // document.body.style.backgroundColor.blue

 // ---------------------------------------------------------------------------

// TASK 3 - this works but the image loading is not the best and I have again had to incorporate a button to or command to execute.
// I did not get around to coding in a caption as the button suggests but this was not part of the instruction it would be nice to have :)
// I spent a long time styling attributes of the images with CSS just to get the images to display side by side but felt this is something I needed to practice anyways.
// Some people may find it useful if we had a homework boilerplate with the images available with basic css styling if they didn't have the time


var whichpic = prompt("which pic would you like to see? Choose between 1, 2 or 3")

// console.log((typeof(whichpic)))
console.log(typeof(displayfunction))
displayfunction = () => {

    // var whichpic = prompt("which pic would you like to see? Choose between 1, 2 or 3")
    var dispic = document.getElementsByTagName(Image[whichpic])

    if (whichpic == "1") {
        document.getElementById("pic1").style.display = "block" ;
        document.getElementById("pic2").style.display = "none" ;
        document.getElementById("pic3").style.display = "none" ;
    } 
    else if (whichpic == "2") {
        document.getElementById("pic1").style.display = "none" ;
        document.getElementById("pic2").style.display = "block" ;
        document.getElementById("pic3").style.display = "none" ;
    }
    else if (whichpic == "3") {
    document.getElementById("pic1").style.display = "none" ;
    document.getElementById("pic2").style.display = "none" ;
    document.getElementById("pic3").style.display = "block" ;
    }
    else  {
    document.getElementById("pic1").style.display = "none" ;
    document.getElementById("pic2").style.display = "none" ;
    document.getElementById("pic3").style.display = "none" ;
}
}