async function deleteProduct(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
    console.log(id);
    const response = await fetch(`/api/product/${id}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        alert('Product deleted successfully')
        document.location.replace('/')
    } else {
        alert(response.statusText)
    }
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteProduct)
