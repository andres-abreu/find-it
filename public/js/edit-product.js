async function editProdut(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="product-name"]').value.trim();
    const description = document.querySelector('input[name="product-description"]').value.trim();
    const price = document.querySelector('input[name="product-price"]').value.trim();
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
    const response = await fetch(`/api/product/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            name,
            description,
            price
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        alert('Product updated successfully!!')
        document.location.replace('/')
    } else {
        alert(response.statusText)
    }
}

document.querySelector('.edit-product-form').addEventListener('submit',editProdut)

