addToCartBtn = document.getElementsByClassName('addToCartBtn');
cartContainer = document.getElementsByClassName('cartContainer')[0];

for (var i = 0; i < addToCartBtn.length; i++) {
    addToCartBtn[i].addEventListener('click', updateCartContainer)
}

function updateCartContainer(e) {
    addToCartBtn = e.target;
    productContainer = addToCartBtn.parentElement;
    productTitle = productContainer.getElementsByClassName('productTitle')[0].innerText;
    productPrice = productContainer.getElementsByClassName('productPrice')[0].innerText;
    productimg = productContainer.getElementsByClassName('img')[0].src;


    AddRowInCart(productTitle, productPrice, productimg);
}

function AddRowInCart(productTitle, productPrice, productimg) {


    div = document.createElement('div');
    div.classList.add('row');
    insideDiv = `<div  class="col-3 cartImage"> <img src="${productimg}"></div>
<div  class="col-3 cartTitle"> ${productTitle} </div>
<div class="col-3 cartPrice"> ${productPrice}</div>
 <div class="col-3 removeButton btn btn-danger"> Remove</div>`;
    div.innerHTML = insideDiv
    cartContainer.appendChild(div);
    totalPrice = 0;
    cartPrice = cartContainer.getElementsByClassName('cartPrice');
    for (var i = 0; i < cartPrice.length; i++) {
        priceFormatedNumb = cartPrice[i].innerText.replace('₹', '').replace(',', '');
        totalPrice = totalPrice + parseInt((priceFormatedNumb));
    }
    document.getElementsByClassName('cartTotalPrice')[0].innerText = new Number(totalPrice).toLocaleString('en');;



    removeButton = document.getElementsByClassName('removeButton');
    for (var i = 0; i < removeButton.length; i++) {
        removeButton[i].addEventListener('click', removeFromCart)
    }
}

function removeFromCart(e) {
    e.target.parentElement.remove();
    updatePriceAfterRemove();
}

function updatePriceAfterRemove() {
    totalPrice = 0;
    cartPrice = cartContainer.getElementsByClassName('cartPrice');
    for (var i = 0; i < cartPrice.length; i++) {
        priceFormatedNumb = cartPrice[i].innerText.replace('₹', '').replace(',', '');
        totalPrice = totalPrice + parseInt((priceFormatedNumb));
    }
    document.getElementsByClassName('cartTotalPrice')[0].innerText = new Number(totalPrice).toLocaleString('en');


}