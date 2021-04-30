const pageBody = document.body;
const bodyText = document.querySelector('.text');
const navBurger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');



// Indicates active menu items by border (instead of radio buttons)
function setMenuItemActive (item) {
    function removeAllActive(item) {
        item.classList.remove('active');
    }

    // find all menu items (children of parent) and remove active-class
    let inactiveLinks = item.parentElement.children;
    Array.from(inactiveLinks).forEach(removeAllActive);

    // and make current item active-class
    item.classList.add('active');
}



// change BG based on menu text and activate selected item (and remove active-class on all others)
function changeBG(menuItem) {
    // find menu text
     let color = menuItem.innerHTML;
     pageBody.className = 'BGColor' + color;
     bodyText.innerHTML = color;

     // indicates current item as active (sort of radio button)
     setMenuItemActive(menuItem);
}



// find menu item based on mouse event
function changeByMouse(event) {
    // find menu item by mouse event
     let item = event.target;
     // change BG
     changeBG(item);
     // and hide menu again
     navMenu.classList.toggle('hide');
}



// find menu item based on keyboard event
function changeByKey(itemNum) {
    // find menu item by key code
     let item = navMenu.children[itemNum-1];  // array indexes start with 0
     // change BG
     changeBG(item);
}



// add eventlisteners to burger menu
// redundant after mouseover listeners
function toggelMenu () {
    alert("Clicking is redundant after implementing mouseover");
//     navMenu.classList.toggle('hide');
}
navBurger.addEventListener('click', toggelMenu);
// arrow function
// () => alert("Redundant after implementing mouseover");
//
// function expression (const function):
// const toggelMenu = function () {
//     alert("Redundant after implementing mouseover");
// }


// add eventlisteners to all menu items
function colorMenu(menuItem) {
    menuItem.addEventListener('click', changeByMouse);
}
Array.from(navItems).forEach(colorMenu);



// add eventlisteners for keyboard to body
function keyBoardInput (key) {
    // NumKeys start with code 49 (== 1)
    // alphabethKeys start with code 97 (== a)
    if (((key.keyCode - 48) >= 1) && ((key.keyCode - 48) <= Array.from(navItems).length)) {
        let keyNum = key.keyCode - 48;
        changeByKey(keyNum);
    } else {
        alert("Invalid key: " + "\n" +  "\n" + key.code + "\nCode: " + key.keyCode);
    }
}
pageBody.addEventListener("keypress", keyBoardInput);
navBurger.addEventListener("mouseover", () => navMenu.classList.remove('hide'));
navBurger.addEventListener("mouseout", () => navMenu.classList.add('hide'));
navMenu.addEventListener("mouseover", () => navMenu.classList.remove('hide'));
navMenu.addEventListener("mouseout", () => navMenu.classList.add('hide'));
