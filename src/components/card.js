import axios from 'axios';


const Card = (article) => {

  const card = document.createElement('div');
  const headline_el = document.createElement("div");
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const authorName_el = document.createElement('span');
  const authorPhoto_el = document.createElement('img');

  card.classList.add('card');
  document.querySelector('.cards-container').appendChild(card)
  headline_el.classList.add('headline');
  headline_el.textContent = article.headline;
  card.appendChild(headline_el);
  author.classList.add('author');
  card.appendChild(author);
  imgContainer.classList.add('img-container');
  author.appendChild(imgContainer);
  authorPhoto_el.src = article.authorPhoto;
  imgContainer.appendChild(authorPhoto_el);
  authorName_el.textContent = 'By ' + article.authorName;
  author.appendChild(authorName_el);



  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {

  axios.get('http://localhost:5001/api/articles')
    .then (response => {
      response.data.articles.javascript.forEach (art => {
        console.log(art.headline)
        Card(art)
      })
      
    })


  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
