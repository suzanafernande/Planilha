const productForm = document.getElementById('productForm');
const productList = document.getElementById('productList');

productForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const productName = document.getElementById('productName').value;
  const productDescription = document.getElementById('productDescription').value;
  const productValue = parseFloat(document.getElementById('productValue').value).toFixed(2);
  const productAvailable = document.getElementById('productAvailable').value;

  const listItem = document.createElement('li');
  listItem.innerHTML = `<strong>${productName}</strong> - R$ ${productValue}`;
  productList.appendChild(listItem);

  // Reset form fields
  productForm.reset();
});

// Sort products by value (ascending)
window.addEventListener('load', function() {
  const listItems = Array.from(productList.getElementsByTagName('li'));
  listItems.sort((a, b) => {
    const valueA = parseFloat(a.textContent.match(/\d+\.\d+/)[0]);
    const valueB = parseFloat(b.textContent.match(/\d+\.\d+/)[0]);
    return valueA - valueB;
  });

  productList.innerHTML = ''; // Clear list
  listItems.forEach(item => productList.appendChild(item));
});
