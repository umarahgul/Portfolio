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

try {
  document.querySelector('#openMenuBtn').addEventListener('click', openNav);
} catch { console.log('error handled'); }
document.querySelector('#closebtn').addEventListener('click', closeNav);

const arrMobile = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    image: 'images/Snapshoot Portfolio (1).png',
    technology: ['HTML', 'CSS', 'Javascript'],
    'link-live-version': '#',
    'link-to-source': '#',

  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required',
    image: 'images/Snapshoot Portfolio2.png',
    technology: ['HTML', 'CSS', 'Javascript'],
    'link-live-version': '#',
    'link-to-source': '#',

  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    image: 'images/Snapshoot Portfolio3.png',
    technology: ['HTML', 'CSS', 'Javascript'],
    'link-live-version': '#',
    'link-to-source': '#',

  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    image: 'images/Snapshoot Portfolio4.png',
    technology: ['HTML', 'CSS', 'Javascript'],
    'link-live-version': '#',
    'link-to-source': '#',
  }];


let isPopopen=false;


function closePopup() {
  document.getElementById('project-popup').style.display = 'none';
  const popupContainer = document.getElementById('project-popup');
      if (popupContainer) {
        popupContainer.innerHTML = ''; // Clear the popup content
      }
  
}

  function Popup(name, descr, image, technology, l1, l2) {

  if (isPopopen) {
    closePopup();
  }

  document.getElementById('project-popup').style.display = 'block';



  const parentElement = document.getElementById('project-popup');
  parentElement.classList.add('overlay');
  const parent = document.createElement('section');
  parent.classList.add( 'info_mobile');
  parent.setAttribute('id', 'popup-layout');

  const container=document.createElement('div');
  container.classList.add('container2');
  
  const divClose = document.createElement('div');
  divClose.classList.add('div_close');
 
  const child1 = document.createElement('h1');
  child1.classList.add('tonic');
  child1.textContent = name;
  divClose.appendChild(child1);

  const close = document.createElement('img');
  close.id = 'closeButton';
  close.src = 'images/close_button.png';
  divClose.appendChild(close);
  
  container.appendChild(divClose);


  const childImg = document.createElement('img');
  //childImg.classList.add('left');
  childImg.src = image;
  container.appendChild(childImg);
  parent.appendChild(container);

  
  const bigContainer=document.createElement('div');
   bigContainer.classList.add('bigContainer');

  const childDesc = document.createElement('p');
  childDesc.textContent = descr;
  childDesc.classList.add('pg2',); 

  bigContainer.appendChild(childDesc);


  const infoDiv=document.createElement('div');
  infoDiv.classList.add('info');

  const childUl = document.createElement('ul');
  childUl.classList.add('stack');

  for (let y = 0; y < technology.length; y += 1) {
    const childLi = document.createElement('li');
    childLi.textContent = technology[y];
    childLi.classList.add('stack-elem');
    childUl.appendChild(childLi);
  }
  
 
  infoDiv.appendChild(childUl);
  
  

  const btns = document.createElement('div');
  

  const buttonElement1 = document.createElement('button');
  buttonElement1.classList.add('see-project');
  buttonElement1.innerHTML = `<a href ="${l1}"></a>`;
  buttonElement1.textContent = ('See Live');

  const imgLive = document.createElement('img');
  imgLive.src = 'images/see-live-icon.png';
  buttonElement1.appendChild(imgLive);
  btns.appendChild(buttonElement1);
 
  const buttonElement2 = document.createElement('button');
  buttonElement2.classList.add('see-project');
  buttonElement2.innerHTML = `<a href ="${l2}"></a>`;
  buttonElement2.textContent = ('See Source');

  const imgSource = document.createElement('img');
  imgSource.src = 'images/Icon -GitHub.png';
  buttonElement2.appendChild(imgSource);
  btns.appendChild(buttonElement2);
  infoDiv.appendChild(btns);

  bigContainer.appendChild(infoDiv);
  parent.appendChild(bigContainer);
  parentElement.appendChild(parent);

  
 
     

  document.getElementById('closeButton').addEventListener('click', closePopup);

  
}


//cloze.addEventListener('click', closePopup);


function populateMainpage() {
  const parentElement = document.getElementById('parentElementId');

  for (let x = 0; x < arrMobile.length; x += 1) {
    const parent = document.createElement('section');
    parent.classList.add('works', 'info_mobile');
    parent.setAttribute('id', 'jump-to-works-section');
    const childImg = document.createElement('img');
    childImg.src = arrMobile[x].image;
    parent.appendChild(childImg);

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info');
    parent.appendChild(infoDiv);
    const child1 = document.createElement('h1');
    child1.classList.add('tonic');
    child1.textContent = arrMobile[x].name;

    infoDiv.appendChild(child1);

    const childUl = document.createElement('ul');
    childUl.classList.add('stack');

    for (let y = 0; y < arrMobile[x].technology.length; y += 1) {
      const childLi = document.createElement('li');
      childLi.textContent = arrMobile[x].technology[y];
      childLi.classList.add('stack-elem');
      childUl.appendChild(childLi);
    }

    infoDiv.appendChild(childUl);

    const childDesc = document.createElement('p');
    childDesc.textContent = arrMobile[x].description;
    childDesc.classList.add('pg2');
    infoDiv.appendChild(childDesc);

    const buttonElement = document.createElement('button');
    buttonElement.classList.add('see-project');

    buttonElement.textContent = ('See Project ');
    infoDiv.appendChild(buttonElement);

    buttonElement.setAttribute('data-index', x);

    buttonElement.addEventListener('click', (event) => {
      const butn = event.target;
      const projectIndex = butn.getAttribute('data-index');
      const nameProject = arrMobile[projectIndex].name;
      const descProject = arrMobile[projectIndex].description;
      const imageProject = arrMobile[projectIndex].image;
      const techProject = arrMobile[projectIndex].technology;
      const link1Project = arrMobile[projectIndex].link1;
      const link2Project = arrMobile[projectIndex].link2;
      Popup(nameProject, descProject, imageProject, techProject, link1Project, link2Project);
    });

    parent.appendChild(infoDiv);
    parentElement.appendChild(parent);
  }
}

document.addEventListener('DOMContentLoaded', populateMainpage);
