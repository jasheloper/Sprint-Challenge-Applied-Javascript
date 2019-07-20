// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const head = document.querySelector('.header-container');

head.appendChild(Header());

function Header() {

    //define header
    const headX = document.createElement('div');
    headX.classList.add('header');

    // define date
    const dateX = document.createElement('span');
    dateX.classList.add('date');
    headX.appendChild(dateX);
    dateX.textContent = 'SMARCH 28, 2019';

    //define title
    const titleX = document.createElement('h1');
    headX.appendChild(titleX);
    titleX.textContent = 'Lambda Times'

    //define temperature 
    const tempX = document.createElement('h1');
    tempX.classList.add('temp');
    headX.appendChild(tempX);
    tempX.textContent = '98°';

    return headX;
}
