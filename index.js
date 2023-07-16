const categoryList = document.getElementById('categoryList');
const productList = document.getElementById('productList');
const productInfo = document.getElementById('productInfo');
const productName = document.getElementById('productName');
const productsContainer = document.getElementById('products');

const productListTitle = document.createElement('h2');
productListTitle.textContent = 'Products';

const productInfoTitle = document.createElement('h2');
productInfoTitle.textContent = 'Product Details';

const buyButton = document.createElement('button');
buyButton.textContent = 'Buy';

let selectedCategory = null;

const productData = {
  'Pizza': [
    { name: 'Margarita', description: 'Savor the timeless simplicity of our Margherita Pizza...' },
    { name: 'Hawaian', description: 'Experience a taste of paradise with our Hawaiian Pizza...' },
    { name: 'Cheese', description: 'Indulge in the timeless simplicity of our Cheese Pizza...' }
  ],
  'Pasta': [
    { name: 'Carbonara', description: 'Indulge in our meticulously crafted Carbonara pasta...' },
    { name: 'Bolognese', description: 'Celebrate the essence of Italian cuisine with our Pasta Bolognese...' },
    { name: 'Mushroom', description: 'Embark on a culinary journey with our Mushroom Pasta...' }
  ],
  'Ice Cream': [
    { name: 'Vanilla', description: 'Indulge in the timeless delight of our Vanilla Ice Cream...' },
    { name: 'Chocolate', description: 'Experience the irresistible allure of our Chocolate Ice Cream...' },
    { name: 'Fruit', description: 'Delight in the refreshing essence of our Fruit Ice Cream...' }
  ]
};

const getProductDescription = (category, product) => {
  const description = productData[category].find(item => item.name === product)?.description;
  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = description;

  return descriptionElement;
};

Object.keys(productData).forEach(category => {
  const li = document.createElement('li');
  li.textContent = category;
  categoryList.append(li);
});

const displayProductList = (e) => {
  selectedCategory = e.target.textContent;
  productList.innerHTML = '';

  productData[selectedCategory].forEach(product => {
    const li = document.createElement('li');
    li.textContent = product.name;
    productsContainer.prepend(productListTitle);
    productListTitle.style.display = 'block';
    productList.append(li);
  });
};

categoryList.addEventListener('click', displayProductList);

const displayProductInfo = (e) => {
  const selectedProduct = e.target.textContent;
  const productDescription = getProductDescription(selectedCategory, selectedProduct);

  productName.textContent = selectedProduct;
  productInfo.innerHTML = ''; // Clear existing content
  productInfo.style.display = 'block';
  productInfo.prepend(productInfoTitle);
  productInfo.append(productDescription);
  productInfo.append(buyButton);
};

productList.addEventListener('click', displayProductInfo);

const resetDefaultState = () => {
  productInfo.style.display = 'none';
  productList.innerHTML = '';
  productListTitle.style.display = 'none';
};

buyButton.addEventListener('click', () => {
  alert('Product purchased!');
  resetDefaultState();
});