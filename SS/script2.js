var minors = document.getElementsByName("minors")[0].value;

var adults = document.getElementsByName("adults")[0].value;

var price = minors * 12 + adults * 14;

document.getElementsByName("price")[0].innerHTML = price;


function formChanged() {
    var minors = document.getElementsByName("minors")[0].value;
    var adults = document.getElementsByName("adults")[0].value;
    var minors = parseInt(minors);
    var adults = parseInt(adults);

    price = minors * 12 + adults * 14;

    document.getElementsByName("price")[0].innerHTML = price;

    if (document.getElementByName("room")[0].value = "star") {
       price = minors * 2 + adults * 2 + price;
       document.getElementsByName("price")[0].innerHTML = price;
    }

}













