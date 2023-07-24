
function openNav()
{   
    document.getElementById('hamburger-menu').style.display='block';
    let div = document.querySelector('#top');
    div.classList.add('blur');

}
function closeNav()
 {  
    document.getElementById('hamburger-menu').style.display = 'none';
    let div = document.querySelector('#top');
    div.classList.remove('blur');

}


 document.querySelector(' #hamburger-menu').addEventListener('click', openNav);

 document.querySelector('#closebtn').addEventListener('click', closeNav);


//  document.getElementById('menu-bars').addEventListener('click', function() {
//     var blurDiv = document.querySelector('.blur');
//     if (!blurDiv) {
//         // If the .blur class is not applied, add it
//         var div = document.querySelector('#top > div');
//         blurDiv = document.createElement('div');
//         blurDiv.className = 'blur';
//         while (div.firstChild) {
//           blurDiv.appendChild(div.firstChild);
//         }
//         div.appendChild(blurDiv);
//       } else {
//         // If the .blur class is already applied, remove it
//         blurDiv.parentNode.removeChild(blurDiv);
//       }
// //    // blurDiv.classList.toggle('blur');
// //     if (blurDiv.style.filter === 'blur(5px)') {
// //         // If the blur effect is applied, remove it
// //         blurDiv.style.filter = 'blur(0px)';
// //         blurDiv.style.opacity = '1';
// //       } else {
// //         // If the blur effect is not applied, add it
// //         blurDiv.style.filter = 'blur(5px)';
// //         blurDiv.style.opacity = '0.8'; // Adjust the opacity for the desired level of blur
// //       }
