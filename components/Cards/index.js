// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


const cardsX = document.querySelector('.cards-container');
// cardsX.appendChild(component('testing')) -- test passed



// https://lambda-times-backend.herokuapp.com/articles

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then(x => {
    console.log('response', x.data.articles.bootstrap, x.data.articles.javascript, x.data.articles.jquery, x.data.articles.node, x.data.articles.technology)


    const bootstrap = x.data.articles.bootstrap;
    const javascript = x.data.articles.javascript;
    const jquery = x.data.articles.jquery;
    const node = x.data.articles.node;
    const technology = x.data.articles.technology;


    // boostrap is test dummy for the rest
    
  let bs = bootstrap.map( (x) => {
    let b =  component("BootStrap Articles: " + x);
    return b;
   });

   bs.forEach(x => {
       cardsX.appendChild(x);
   })

    // boostrap is test dummy for the rest





    javascript.forEach (x => {
        cardsX.appendChild(component("JavaScript Articles: " + x));
    })

    jquery.forEach (x => {
        cardsX.appendChild(component("jQuery Articles:  " + x));
    })

    node.forEach (x => {
        cardsX.appendChild(component("Node Articles:  " + x));
    })

    technology.forEach (x => {
        cardsX.appendChild(component("Technology Articles:  " + x));
    })


   
})
.catch(x => {
    console.log('Error, please try again later.')
})






// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>

function component(arr) {
    const cardX = document.createElement('div');
    cardX.classList.add('card');
    cardX.textContent = arr;

    const headlineX = document.createElement('div');
    headlineX.classList.add('headline');
    cardX.appendChild(headlineX);

    const name = document.createElement('div');
    name.classList.add('author');
    cardX.appendChild(name);

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    cardX.appendChild(imgContainer);

    const image = document.createElement('img');
    cardX.appendChild(image);

    const authorX = document.createElement('span');
    cardX.appendChild(authorX);


    return cardX;
}
