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
  div.classList.remove('blur');
}

;
try{
document.querySelector('#openMenuBtn').addEventListener('click', openNav);
}
catch {}
document.querySelector('#closebtn').addEventListener('click', closeNav);

//document.querySelector('').addEventListener('click',close_popup);

///////////////////////////////////////////////////////////////////////////////////////////////////////

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
   
  
/////////////////////////////////////////////////MOBILE MOBILE ///////////////////////////////////////////////////////////////////////////////////////////////

function populate_mainpage_mobile(){

  let parentElement = document.getElementById('parentElementId');

  for(let x=0; x< arr_mobile.length; x++)
  {
     
     let parent=document.createElement('section');
     parent.classList.add('works','info_mobile');                    
    let child_img =document.createElement('img');   
    child_img.src=arr_mobile[x].image; 
    parent.appendChild(child_img);

   
    let info_div=document.createElement('div');
    info_div.classList.add('info');
    parent.appendChild(info_div);
    let child1=document.createElement('h1');     
    child1.textContent=arr_mobile[x].name;
    


    info_div.appendChild(child1);  

    let child_ul=document.createElement('ul');
    child_ul.classList.add("stack");
    
   
   for (let tech of arr_mobile[x].technology) {
    let child_li = document.createElement('li');
    child_li.textContent = tech;
    child_li.classList.add('stack-elem');
    child_ul.appendChild(child_li);
  }
    
   
    info_div.appendChild(child_ul);
   
    
    let child_desc=document.createElement('p');
    child_desc.textContent=arr_mobile[x].description;
    child_desc.classList.add('pg2');
    info_div.appendChild(child_desc);
   

   
   let buttonElement = document.createElement('button');
   buttonElement.classList.add('see-project');
   
   buttonElement.textContent = ("See Project "); 
   info_div.appendChild(buttonElement);

   buttonElement.setAttribute('data-index', x);

   buttonElement.addEventListener('click', function(event) {
    const butn =event.target;
    let projectIndex=butn.getAttribute('data-index');
    const name_project =arr_mobile[projectIndex].name;
    const desc_project=arr_mobile[projectIndex].description;
    const image_project=arr_mobile[projectIndex].image;
    const tech_project=arr_mobile[projectIndex].technology;
    const link1_project=arr_mobile[projectIndex].link1;
    const link2_project=arr_mobile[projectIndex].link2;
    Popup(name_project, desc_project, image_project, tech_project, link1_project, link2_project);
     
   });
  
   parent.appendChild(info_div);
    parentElement.appendChild(parent);

 }

}


  document.addEventListener("DOMContentLoaded", populate_mainpage_mobile);



function Popup(name, descr, image, technology, l1, l2) {
   
  document.getElementById('project-popup').style.display= 'block';
  
  let parentElement = document.getElementById('project-popup');
  let parent=document.createElement('section');
  parent.classList.add('works','info_mobile');  

  let div_close=document.createElement('div');
  div_close.classList.add('div_close');

  let child1=document.createElement('h1');   
  console.log('value of name' + name);
  child1.textContent=name; 
  div_close.appendChild(child1);  

 let close=document.createElement('img');
 close.classList.add('close_button');
 close.src="images/close_button.png";    
 div_close.appendChild(close); 
 parent.appendChild(div_close);

 let child_img =document.createElement('img');  
 child_img.classList.add('right'); 
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

let btns =document.createElement('div');
btns.classList.add('buttons');




 let buttonElement1 = document.createElement('button');
 buttonElement1.classList.add('see-project');
 buttonElement1.textContent = ("See Live"); 
 let img_live =document.createElement('img');   
 img_live.src="images/see-live-icon.png" 
 buttonElement1.appendChild(img_live);
 btns.appendChild(buttonElement1);
 


let  buttonElement2 = document.createElement('button');
 buttonElement2.classList.add('see-project');
 buttonElement2.textContent=("See Source");

 let img_source =document.createElement('img');   
 img_source.src="images/Icon -GitHub.png" 
 buttonElement2.appendChild(img_source)
 btns.appendChild(buttonElement2);
 parent.appendChild(btns);
 


 
parentElement.appendChild(parent);
}

function close_popup()
{
 document.getElementsById('project-popup').style.display='none';

}

document.querySelector('.close_button').addEventListener('click', close_popup);


