/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/



  const menu = data => {
  const first = document.createElement('div');
  const list = document.createElement('ul');

  first.classList.add('menu');  
  first.appendChild(list);

  const menuFirst = data.map(point => {
    const initialItem = document.createElement('li')
    initialItem.textContent = point;
    return initialItem
  })

  for (let menuItem of menuFirst) {
    list.appendChild(menuItem);
  }

  document.querySelector('.menu-button').addEventListener('click', () => {
    first.classList.toggle('menu--open')
  })

  return first
  }

document.querySelector('.header').appendChild(menu(menuItems))


// function createMenu(arr) {
//   const menu1 = document.createElement('div');
//   const list = document.createElement('ul');



//    listItem = [];
//   for (i = 0; i < array.length; i++){
//     listItem.push(document.createElement('li'))
//   }

//   item1 = document.createElement('li');
//   item2 = document.createElement('li');
//   item3 = document.createElement('li');
//   item4 = document.createElement('li');
//   item5 = document.createElement('li');
//   item6 = document.createElement('li');

//   list.appendChild(item1)
//   list.appendChild(item2)
//   list.appendChild(item3)
//   list.appendChild(item4)
//   list.appendChild(item5)
//   list.appendChild(item6)

//   item1.textContent = arr[0]
//   item1.textContent = arr[1]
//   item1.textContent = arr[2]
//   item1.textContent = arr[3]
//   item1.textContent = arr[4]
//   item1.textContent = arr[5]

//   menu1.appendChild(list);

//   menu1.classList.add('menu');

//   const button = document.querySelector('.menu-button')
//   button.addEventListener('click', (event) => {
//     menu1.classList.toggle('menu--open');
//   });
//   return menu1;
// }
// const menuButton = document.querySelector('.menu-button')
// menuButton.append(createMenu(menuItems));