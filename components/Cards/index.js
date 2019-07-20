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
    const dataInfo = x.data.articles;

   dataInfo.map(    (x) => {
        cardsX.appendChild(component(x));
    })
   
})
.catch(x => {
    console.log('Error, please try again later.')
})




function component(arr) {
    const cardX = document.createElement('div');
    cardX.classList.add('card');
    cardX.textContent = arr;

    const headlineX = document.createElement('div');
    headlineX.classList.add('headline');

    const name = document.createElement('div');
    name.classList.add('author');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const image = document.createElement('img');
    imgContainer.appendChild(image);

    const authorX = document.createElement('span');


    return cardX;
}
