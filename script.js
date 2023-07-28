// import { div } from "prelude-ls";

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
} catch { console.log(''); }
document.querySelector('#closebtn').addEventListener('click', closeNav);

// document.querySelector('').addEventListener('click',close_popup);

/// /////////////////////////////////////////////////////////////

const arr_Mobile = [
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

function Popup(name, descr, image, technology, l1, l2) {
  document.getElementById('project-popup').style.display = 'block';

  const parentElement = document.getElementById('project-popup');
  const parent = document.createElement('section');
  parent.classList.add('works', 'info_mobile');

  const div_Close = document.createElement('div');
  div_Close.classList.add('div_Close');

  const child1 = document.createElement('h1');
  child1.textContent = name;
  div_Close.appendChild(child1);

  const close = document.createElement('img');
  close.id = 'close_button';
  // close.classList.add('close_button');
  const x = document.createElement('div');
  x.id = 'close';
  div_Close.appendChild(x);
  close.src = 'images/close_button.png';
  div_Close.appendChild(close);
  parent.appendChild(div_Close);

  const child_Img = document.createElement('img');
  child_Img.classList.add('right');
  child_Img.src = image;
  parent.appendChild(child_Img);

  const child_Desc = document.createElement('p');
  child_Desc.textContent = descr;
  child_Desc.classList.add('pg2');
  parent.appendChild(child_Desc);

  const child_ul = document.createElement('ul');
  child_ul.classList.add('stack');

  for (const tech of technology) {
    const child_Li = document.createElement('li');
    child_Li.textContent = tech;
    child_Li.classList.add('stack-elem');
    child_Ul.appendChild(child_Li);
  }
  parent.appendChild(child_Ul);

  const btns = document.createElement('div');
  btns.classList.add('buttons');

  const buttonElement1 = document.createElement('button');
  buttonElement1.classList.add('see-project');
  buttonElement1.textContent = ('See Live');
  const img_live = document.createElement('img');
  img_live.src = 'images/see-live-icon.png';
  buttonElement1.appendChild(img_live);
  btns.appendChild(buttonElement1);

  const buttonElement2 = document.createElement('button');
  buttonElement2.classList.add('see-project');
  buttonElement2.textContent = ('See Source');

  const img_source = document.createElement('img');
  img_source.src = 'images/Icon -GitHub.png';
  buttonElement2.appendChild(img_source);
  btns.appendChild(buttonElement2);
  parent.appendChild(btns);

  parentElement.appendChild(parent);
}

/// //////////////////////////////////////////////MOBILE MOBILE ///////////////////////////////////////////////////////////////////////////////////////////////

function populate_mainpage_mobile() {
  const parentElement = document.getElementById('parentElementId');

  for (let x = 0; x < arr_Mobile.length; x + 1) {
    const parent = document.createElement('section');
    parent.classList.add('works', 'info_mobile');
    const child_Img = document.createElement('img');
    child_Img.src = arr_Mobile[x].image;
    parent.appendChild(child_Img);

    const info_Div = document.createElement('div');
    info_Div.classList.add('info');
    parent.appendChild(info_Div);
    const child1 = document.createElement('h1');
    child1.textContent = arr_Mobile[x].name;

    info_Div.appendChild(child1);

    const child_ul = document.createElement('ul');
    child_ul.classList.add('stack');

    for (const tech of arr_Mobile[x].technology) {
      const child_li = document.createElement('li');
      child_li.textContent = tech;
      child_li.classList.add('stack-elem');
      child_ul.appendChild(child_li);
    }

    info_Div.appendChild(child_ul);

    const child_Desc = document.createElement('p');
    child_Desc.textContent = arr_Mobile[x].description;
    child_Desc.classList.add('pg2');
    info_Div.appendChild(child_Desc);

    const buttonElement = document.createElement('button');
    buttonElement.classList.add('see-project');

    buttonElement.textContent = ('See Project ');
    info_Div.appendChild(buttonElement);

    buttonElement.setAttribute('data-index', x);

    buttonElement.addEventListener('click', (event) => {
      const butn = event.target;
      const projectIndex = butn.getAttribute('data-index');
      const name_Project = arr_Mobile[projectIndex].name;
      const desc_Project = arr_Mobile[projectIndex].description;
      const image_Project = arr_Mobile[projectIndex].image;
      const tech_Project = arr_Mobile[projectIndex].technology;
      const link1_Project = arr_Mobile[projectIndex].link1;
      const link2_Project = arr_Mobile[projectIndex].link2;
      Popup(name_project, desc_Project, image_Project, tech_Project, link1_Project, link2_Project);
    });

    parent.appendChild(info_Div);
    parentElement.appendChild(parent);
  }
}

document.addEventListener('DOMContentLoaded', populate_mainpage_mobile);

/// //////////////////////////////////////////////////////////////POPOUP //////////////////////////////////////////////////////////////////////////////////////

function close_popup() {
  document.getElementById('project-popup').style.display = 'none';
}

// document.querySelector('x').addEventListener('click', close_popup);

const form = document.querySelector('#contact-me-form');
const email = form.querySelector('#e-mail');
const formSubmitBtn = form.querySelector('.button-form');
const showError = form.querySelector('#error-message');

function emailLowerCase() {
  const emailValue = email.value;

  if (emailValue.toLowerCase() === emailValue) {
    document.getElementById('error-message').style.display = 'none';
    return true;
  }
  document.getElementById('error-message').style.display = 'inline';
  // showError.innerText = "Your email should be in lower case!";
  // showError.classList.add("error");
  return false;
}

formSubmitBtn.addEventListener('click', (event) => {
  event.preventDefault();

  if (emailLowerCase()) {
    form.submit();
  }
});
