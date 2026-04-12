function shippingCost() {
    let orderCost = Number(document.getElementById("totalOrder").value);
    let isPrimiun = document.getElementById("isPremium").value === "true";
    let shipping = (isPrimiun || orderCost > 20) ? document.getElementById("ShippingCost").textContent = "The shipping cost is free" : document.getElementById("ShippingCost").textContent = "The shipping cost is 2 dollars"

    try {
        if (orderCost < 0) {
            throw new Error("Negative value");
        }
    } catch (e) {
        alert("Ingrese un valor verdadero");
    }

    if(orderCost < 0){
        ShippingCost.textContent = "Not valid"
    }
}
