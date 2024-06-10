import myImage from '../assets/it-department.png';
const { log } = console;
log('Namaste Nepal');

const div = document.createElement('div');
const h1 = document.createElement('h1');
h1.innerText = `Hey there! Let's start coding...`;
const img = document.createElement('img');
img.src = myImage;

div.append(h1, img);
document.body.appendChild(div);
