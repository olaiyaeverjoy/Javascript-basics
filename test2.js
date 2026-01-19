// const para =  document.querySelectorAll('p');
// para.forEach(p => {
//     console.log(p.innerText);
// //     p.innerText += ' new Text';
// });

//how to change html class or element

// const content = document.querySelector('.content');
//     console.log(content.innerHTML);
//     // content.innerHTML = '<h2>This is a new Text</h2>'; 

// const names = ['shaun', 'mario', 'david'];
//     names.forEach(person => {
//         content.innerHTML += `<p>${person}</p>`     // += used to add to the value of content class 
//     });

// const link = document.querySelector('a');
//     console.log(link.getAttribute('href'));

//     link.setAttribute('href', 'https://us04web.zoom.us/my/https://zoom.us/j/96074682344?pwd=b0xnY2?from=join');
//     link.innerHTML = 'new link is active'; 


// creating a close (x) button 
const myNodeList = document.getElementsByTagName('LI'); 
let i;             // i = each li tag
for (i = 0 ; i < myNodeList.length; i++) {
    let btn = document.createElement("BUTTON");
    btn.textContent = "\u00D7"; // var txt = document.createTextNode("\u00D7"); can use textContent 
    btn.className = "close";       // give x a class name 
    btn.type = "button";
    myNodeList[i].appendChild(btn);
}

// cicking on the (x) button and not displaying after clicking.
const close = document.getElementsByClassName("close");

for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){     // onclick     
        let form = this.parentElement;
        form.style.display = "none";        // hides the parent li when clicked 
    }
}

//create a new list when clicking on the submit button
const form = document.getElementById('addForm')     //create a var for the id of the form
const itemList = document.getElementById('items')       //create a var for the id of the ul

form.addEventListener('submit',addItem);     //element.addEvent Listener('event', function)
function newElement() {
    
    let inputValue =  document.getElementById("myInput").value;     //gets whatever the user typed into the box with id #myInput and store it in the var inputValue
    let li = document.createElement("li");      //create a var for the li element
    li.className = 'list-group-item'        
    li.appendChild(document.createTextNode(inputValue));    //add to the list element after inputing whatever inside the inputValue
    itemList.appendChild(li);       //adds it on the DOM
    
    
    if (inputValue === '') {     
        alert("You must write something");
    } else{
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = '';
    let btn = document.createElement("BUTTON");
    btn.textContent = "\u00D7"; // var txt = document.createTextNode("\u00D7"); can use textContent 
    btn.className = "close";       // give x a class name 
    btn.type = "button";
    li.appendChild(btn);

    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    let  = this.parentElement;
    form.style.display = "none";
    }

}
}