const Header = (title, date, temp) => {

  const header_el = document.createElement('div')
  const date_el = document.createElement('span')
  const title_el = document.createElement('h1')
  const temp_el = document.createElement('span')

  header_el.classList.add('header')
  date_el.classList.add('date')
  date_el.textContent = date
  title_el.textContent = title
  temp_el.classList.add('temp')
  temp_el.textContent = temp

  header_el.appendChild(date_el)
  header_el.appendChild(title_el)
  header_el.appendChild(temp_el)

  return header_el
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {

  
  document.querySelector(selector).appendChild(Header('Bloomtech Times', 'JANUARY 6, 2021', '26°'))



  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!
}

export { Header, headerAppender }
