const categoryList = document.getElementById('categoryList');
const productList = document.getElementById('productList');
const productInfo = document.getElementById('productInfo');
const productName = document.getElementById('productName');
const productsContainer = document.getElementById('products');
const wrapper = document.getElementById('wrapper');
const form = document.getElementById('form');
const submitButton = document.getElementById('submit-btn');
const fullName = document.getElementById('full-name').value;
const city = document.getElementById('city').value;
const postOffice = document.getElementById('post-office').value;
const postOfficeNumber = parseInt(postOffice);
const payment = document.querySelector("input[name='payment']:checked").value;
const productQuantity = document.getElementById('product-quantity').value;
const userComment = document.getElementById('user-comment').value;

form.style.display = 'none';

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
  productInfo.innerHTML = '';
  productInfo.style.display = 'block';
  productInfo.prepend(productInfoTitle);
  productInfo.append(productDescription);
  productInfo.append(buyButton);
};

productList.addEventListener('click', displayProductInfo);

// const resetDefaultState = () => {
//   productInfo.style.display = 'none';
//   productList.innerHTML = '';
//   productListTitle.style.display = 'none';
// };

const displayForm = () => {
  form.style.display = 'block';
};

const hideEverything = () => {
  // productInfo.style.display = 'none';
  // productList.innerHTML = '';
  // productListTitle.style.display = 'none';
  // form.style.display = 'none';
  wrapper.style.display = 'none';
};

const displayOrderInfo = () => {
  const orderInfoContainer = document.createElement('div');
  const orderSumHeader = document.createElement('h2');
  const orderSumName = document.createElement('p');
  const orderSumCity = document.createElement('p');
  const orderSumPostOffice = document.createElement('p');
  const orderSumPayment = document.createElement('p');
  const orderSumProductQuantity = document.createElement('p');
  const orderSumComment = document.createElement('p');

  orderSumHeader.textContent = 'Thank you for your order! Please, check the data you have provided:';
  orderSumName.textContent = `Name: ${fullName}`;
  orderSumCity.textContent = `City: ${city}`;
  orderSumPostOffice.textContent = `Nova Poshta #: ${postOffice}`;
  orderSumPayment.textContent = `Payment: ${payment}`;
  orderSumProductQuantity.textContent = `Quantity of products: ${productQuantity}`;
  orderSumComment.textContent = `Additional comment: ${userComment}`;
  document.body.append(orderInfoContainer);
  orderInfoContainer.append(orderSumHeader, orderSumName, orderSumCity, orderSumPostOffice, orderSumPayment, orderSumProductQuantity, orderSumComment);
};

buyButton.addEventListener('click', () => {
  // alert('Product purchased!');
  // resetDefaultState();
  displayForm();
});

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  if(!isNaN(postOfficeNumber)) {
    hideEverything();
    displayOrderInfo();
  } else {
    alert('Please enter Nova Poshta PO number using only numbers.');
  }
});

