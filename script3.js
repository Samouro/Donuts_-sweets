let cart = [];

function addToCart(itemName, price) {
    const item = { name: itemName, price: price };
    cart.push(item);
    displayCart();
}

function displayCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalDiv = document.getElementById('cart-total');
    cartItemsDiv.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        cartItemsDiv.innerHTML += `
            <div>
                ${item.name} - R$ ${item.price.toFixed(2)}
                <button onclick="removeFromCart(${index})">Remover</button>
            </div>
        `;
    });

    cartTotalDiv.innerHTML = `<h3>Total: R$ ${total.toFixed(2)}</h3>`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

function checkout() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    alert('Compra finalizada com sucesso!');
    cart = [];
    displayCart();
}