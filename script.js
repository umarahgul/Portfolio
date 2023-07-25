function openNav() {
  document.getElementById('hamburger-menu').style.display = 'block';
  //const div = document.querySelector('#top');
  div.classList.add('blur');
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('mobile') === -1 && userAgent.indexOf('tablet') === -1) {
    div.classList.remove('blur');
  }
}
function closeNav() {
  document.getElementById('hamburger-menu').style.display = 'none';
  const div = document.querySelector('#top');
  div.classList.remove('blur');
}
function Popup() {
  
  document.getElementById('project-popup').style.display= 'block';
  
  //const div =document.querySelector('.works-section');
}
document.querySelector('#parentElementId').addEventListener('click', populate_mainpage_mobile);

document.querySelector('#hamburger-menu').addEventListener('click', openNav);

document.querySelector('#closebtn').addEventListener('click', closeNav);

//document.querySelector('#project-popup').addEventListener('click',Popup);

function populate_mainpage_mobile(){

  const arr_mobile= [
    {
      "name": 'Tonic',
      "description":'A daily selection of privately personalized reads; no accounts or sign-ups required',
      "image":'./images/Snapshoot Portfolio (1).png"',
      "technology":'HTML, CSS, Javascript',
      "link-live-version":'#', 
      "link-to-source":'#'
    
    },
  {
    "name": 'Multi-Post Stories',
    "description":'A daily selection of privately personalized reads no accounts or sign-ups required',
    "image" : '/images/Snapshoot Portfolio2.png',
    "technology" : 'HTML, CSS Javascript',
    "link-live-version" : '#', 
    "link-to-source" : '#'
  
  },
  {
    "name": 'Tonic',
    "description":'A daily selection of privately personalized reads; no accounts or sign-ups required',
    "image":'/images/Snapshoot Portfolio3.png',
    "technology":'HTML, CSS, Javascript',
    "link-live-version":'#', 
    "link-to-source":'#'
  
  },
  {
    "name": 'Tonic',
    "description":'A daily selection of privately personalized reads; no accounts or sign-ups required',
    "image":'',
    "technology":'HTML, CSS, Javascript',
    "link-live-version":'#', 
    "link-to-source":'#'
  }];

  // create for loop to access all objects of the array
  
  let parentElement = document.getElementById('parentElementId');

  for(let x=0; x< arr_mobile.length; x++)
  {
    let parent=document.createElement('section');
    let child1=document.createElement('h1');
    child1.textContent=arr_mobile[x].name;
    parent.appendChild(child1);
    parentElement.appendChild(parent);
    let child_img =document.createElement('img');   
    child_img.src=arr_mobile[x].image; 
    parent.appendChild(child_img);


   
  }
  
  }

function populate_mainpage_desktop(){}







const arr_desktop = [
  {"name": 'Tonic',
  "description":'A daily selection of privately personalized reads; no accounts or sign-ups required',
  "featured-image":'images/image-works-1-desktop.png',
  "technology":'HTML, CSS, Javascript',
  "link-live-version":'#', 
  "link-to-source":'#'},

  {"name": 'Multi-Post stories',
  "description":'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  "featured-image":'images/image-works-2-desktop.png.png',
  "technology":'HTML, CSS, Javascript, Ruby-on-Rails',
  "link-live-version":'#', 
  "link-to-source":'#'},

  {"name": 'Facebook 360',
  "description":'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
  "featured-image":'images/image-works-3-desktop.png',
  "technology":'HTML, CSS, Javascript,Ruby on rails',
  "link-live-version":'#', 
  "link-to-source":'#'},

  {"name": 'Uber Navigation',
  "description":'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
  "featured-image":'images/image-works-4-desktop.png',
  "technology":'HTML, CSS, Javascript,Ruby on rails',
  "link-live-version":'#', 
  "link-to-source":'#'}

];


