'use strict';
fetch('../data/mkh/products.json')
  .then(response => response.json())
  .then(data => {
    const mkhProducts = document.querySelector('section');
    mkhProducts.innerHTML = data
      .map(product => {
        return `<span>
          <img src="../image/mkh_products/花菇主图04.jpg" alt="#script" />
          <ul>
            <li>名称: ${product.name}</li>
            <li>价格: ${product.price}</li>
            <li>编码: ${product.code}</li>
            <li>条码: ${product.barcode}</li>
            <li>重量: ${product.weight}g</li>
          </ul>
        </span>`;
      })
      .join('');
  })
  .catch(Error => {
    console.log(`${Error}`);
  });
