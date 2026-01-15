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

const link = document.querySelector('a');
    console.log(link.getAttribute('href'));

    link.setAttribute('href', 'https://us04web.zoom.us/my/https://zoom.us/j/96074682344?pwd=b0xnY2?from=join');
    link.innerHTML = 'new link is active'; 