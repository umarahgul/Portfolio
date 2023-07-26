function openNav() {
  document.getElementById('hamburger-menu').style.display = 'block';
  const div = document.querySelector('#top');
  div.classList.add('blur');

  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('mobile') === -1 && userAgent.indexOf('tablet') === -1) {
    div.classList.remove('blur');
  }
}
function closeNav() {
  document.getElementById('hamburger-menu').style.display = 'none';
  const div = document.querySelector('#top');
  console.log("called" );
  div.classList.remove('blur');
}



//document.querySelector('#parentElementId').addEventListener('click', populate_mainpage_mobile);

document.querySelector('#hamburger-menu').addEventListener('click', openNav);

document.querySelector('#closebtn').addEventListener('click', closeNav);

//document.querySelector('#unique').addEventListener('click',Popup);




const arr_mobile= [
    {
      "name": 'Tonic',
      "description":'A daily selection of privately personalized reads; no accounts or sign-ups required',
      "image":'images/Snapshoot Portfolio (1).png',
      "technology":['HTML', 'CSS', 'Javascript'],
      "link-live-version":'#', 
      "link-to-source":'#'
    
    },
  {
    "name": 'Multi-Post Stories',
    "description":'A daily selection of privately personalized reads no accounts or sign-ups required',
    "image" : 'images/Snapshoot Portfolio2.png',
    "technology" : ['HTML', 'CSS', 'Javascript'],
    "link-live-version" : '#', 
    "link-to-source" : '#'
  
  },
  {
    "name": 'Tonic',
    "description":'A daily selection of privately personalized reads; no accounts or sign-ups required',
    "image":'images/Snapshoot Portfolio3.png',
    "technology":['HTML', 'CSS', 'Javascript'],
    "link-live-version":'#', 
    "link-to-source":'#'
  
  },
  {
    "name": 'Tonic',
    "description":'A daily selection of privately personalized reads; no accounts or sign-ups required',
    "image":'images/Snapshoot Portfolio4.png',
    "technology": ['HTML', 'CSS', 'Javascript'],
    "link-live-version":'#', 
    "link-to-source":'#'
  }];

function populate_mainpage_mobile(){

  let parentElement = document.getElementById('parentElementId');
  
  for(let x=0; x< arr_mobile.length; x++)
  {
    
     let parent=document.createElement('section');
     parent.classList.add('works');   
    //parentElement.classList.add('mobile_display')    // added class works
    let child1=document.createElement('h1');      // added h1
    child1.textContent=arr_mobile[x].name;        // used the array element
    parent.appendChild(child1);                   // apended
    
    let child_img =document.createElement('img');   
    child_img.src=arr_mobile[x].image; 
    parent.appendChild(child_img);
    
    let child_desc=document.createElement('p');
    child_desc.textContent=arr_mobile[x].description;
    child_desc.classList.add('pg2');
    parent.appendChild(child_desc);
   

   let child_ul=document.createElement('ul');
   child_ul.classList.add("stack");

   
   for (let tech of arr_mobile[x].technology) {
    let child_li = document.createElement('li');
    child_li.textContent = tech;
    child_li.classList.add('stack-elem');
    child_ul.appendChild(child_li);
  }
  
   parent.appendChild(child_ul);

   let buttonElement = document.createElement('button');
   buttonElement.classList.add('see-project');
   
   buttonElement.textContent = ("See Project "); 
   buttonElement.setAttribute('data-index', x);
   buttonElement.addEventListener('click', function(event) {
    const button =event.target;
    let projectIndex=button.getAttribute('data-index');
    
    const name_project =arr_mobile[projectIndex].name;
    const desc_project=arr_mobile[projectIndex].description;
    const image_project=arr_mobile[projectIndex].image;
    const tech_project=arr_mobile[projectIndex].technology;
    const link1_project=arr_mobile[projectIndex].link1;
    const link2_project=arr_mobile[projectIndex].link2;
    Popup(name_project, desc_project, image_project, tech_project, link1_project, link2_project);
     
   });

   //buttonElement.id='unique';
   //parent.appendChild(buttonElement);
  parent.appendChild(buttonElement);
   parentElement.appendChild(parent);
 }
}
  
  document.addEventListener("DOMContentLoaded", populate_mainpage_mobile);


function Popup(name, descr, image, technology, l1, l2) {
   
  document.getElementById('project-popup').style.display= 'block';
  
  let parentElement = document.getElementById('project-popup');
  let parent=document.createElement('section');
  parent.classList.add('works');   
 let child1=document.createElement('h1');      // added h1
 child1.textContent=name;       // used the array element
 parent.appendChild(child1);                   // apended
 
 let child_img =document.createElement('img');   
 child_img.src=image; 
 parent.appendChild(child_img);
 
 let child_desc=document.createElement('p');
 child_desc.textContent=descr;
 child_desc.classList.add('pg2');
 parent.appendChild(child_desc);


let child_ul=document.createElement('ul');
child_ul.classList.add("stack");


for (let tech of technology) {
 let child_li = document.createElement('li');
 child_li.textContent = tech;
 child_li.classList.add('stack-elem');
 child_ul.appendChild(child_li);
}

parent.appendChild(child_ul);

 let buttonElement1 = document.createElement('button');
 buttonElement1.classList.add('see-project');
 buttonElement1.textContent = ("See Live"); 
 parent.appendChild(buttonElement1);
//  let img_live =document.createElement('img');   
//   img_live.src=image; 
//   parent.appendChild(img_live);


// let buttonElement = document.createElement('button');
// buttonElement.classList.add('see-project');
// buttonElement.textContent = ("See Source"); 
// parent.appendChild(buttonElement);



parentElement.appendChild(parent);

 
}















// const arr_desktop = [
//   {"name": 'Tonic',
//   "description":'A daily selection of privately personalized reads; no accounts or sign-ups required',
//   "featured-image":'images/image-works-1-desktop.png',
//   "technology":['HTML', 'CSS', 'Javascript'],
//   "link-live-version":'#', 
//   "link-to-source":'#'},

//   {"name": 'Multi-Post stories',
//   "description":'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
//   "featured-image":'images/image-works-2-desktop.png.png',
//   "technology":['HTML', 'CSS', 'Javascript'],
//   "link-live-version":'#', 
//   "link-to-source":'#'},

//   {"name": 'Facebook 360',
//   "description":'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
//   "featured-image":'images/image-works-3-desktop.png',
//   "technology":['HTML', 'CSS', 'Javascript'],
//   "link-live-version":'#', 
//   "link-to-source":'#'},

//   {"name": 'Uber Navigation',
//   "description":'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
//   "featured-image":'images/image-works-4-desktop.png',
//   "technology":['HTML', 'CSS', 'Javascript'],
//   "link-live-version":'#', 
//   "link-to-source":'#'}

// // ];
