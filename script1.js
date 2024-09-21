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

    // Gera a mensagem para o WhatsApp
    let message = 'Gostaria de finalizar o pedido com os seguintes itens:\n\n';
    let total = 0;

    cart.forEach(item => {
        message += `${item.name} - R$ ${item.price.toFixed(2)}\n`;
        total += item.price;
    });

    message += `\nTotal: R$ ${total.toFixed(2)}`;

    // Codifica a mensagem para uso na URL do WhatsApp
    const encodedMessage = encodeURIComponent(message);

    // Cria o link para o WhatsApp com a mensagem
    const whatsappLink = `https://wa.me/5511964849365?text=${encodedMessage}`;

    // Redireciona para o WhatsApp
    window.open(whatsappLink, '_blank');

    // Limpa o carrinho após o checkout
    cart = [];
    displayCart();
}