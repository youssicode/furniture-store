//* Variables 
let slideNbr = 1;
var cntrl = true;
let updatedTotPrice = 560;
displayNewPrice(updatedTotPrice);
//* Carousel with JavaScript */ 
displaySlide (1,2,3)
function slideRight () {
  if (slideNbr == 1) {
    displaySlide (2,1,3);
    slideNbr++;
  } else if (slideNbr == 2) {
    displaySlide (3,1,2);
    slideNbr++;
  } else { // Control if is the last slide.
      displaySlide (1,3,2);
      slideNbr = 1;
    }
  }  
function slideLeft () {
  if (slideNbr == 1) {
    displaySlide (3,1,2);
    slideNbr = 3;
  } else if (slideNbr == 2) {
    displaySlide (1,3,2);
    slideNbr--;
  } else {
    displaySlide (2,1,3);
    slideNbr--;
  }
}
function displaySlide (active,dsbl1,dsbl2) {
  document.getElementById(`slideId${dsbl1}`).style.display= "none";
  document.getElementById(`slideId${dsbl2}`).style.display= "none";
  document.getElementById(`slideId${active}`).style.display= "grid";
}

//! Open and Close Popup's windows 
closePopup() //we call it on page loading to hide all popup window's elements, we can initialise this in css file if we want
function displayNav() {
  displayRightNav();
  document.getElementById("navId").style.display= "initial";
}

function displaySrchForm() {
  if (window.cntrl == true) {
    document.getElementById("srch-form").classList.add("srchFormWide");
    cntrl = false;
  } else {
    document.getElementById("srch-form").classList.remove("srchFormWide");
    cntrl = true;
  }
}
function displayCart() {
  displayRightNav();
  document.getElementById("cartId").style.display= "initial";
}
function displayUser() {
  displayRightNav();
  document.getElementById("userId").style.display= "initial";
}
function closePopup() {
  document.getElementById("rightNav").style.width= "0";
  document.getElementById("popupId").style.width= "0";
  document.getElementById("navId").style.display= "none";
  document.getElementById("cartId").style.display= "none";
  document.getElementById("userId").style.display= "none";
  document.getElementById("closerId").style.animation = "none";
}
function displayRightNav() {
  document.getElementById("popupId").style.width= "100vw";
  document.getElementById("rightNav").style= "width: 350px";
  document.getElementById("closerId").style.animation = "rotation 0.6s";
}

// Delete Items From Cart 

function displayNewPrice(updatedTotPrice) {
  document.getElementById("totPrice").innerHTML = "$" + updatedTotPrice + ".00";
}
function deleteFromCart(elementClickedOn) {
  let itemNbr = elementClickedOn.slice(-1);
document.getElementById(`cartItem${itemNbr}`).style.display= "none";
updatedTotPrice -= 140;
displayNewPrice(updatedTotPrice);
}
