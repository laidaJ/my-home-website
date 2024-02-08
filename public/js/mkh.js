'use strict';
const ulAddress = document.querySelector('.address ul');

fetch('data/mkh/address.json')
  .then(response => response.json())
  .then(data => {
    const addresses = data.addresses;
    addresses.forEach(({ store, name, tel, address }) => {
      const info = `收件人:${name}; 电话:${tel}; 地址:${address}`;
      const li = document.createElement('li');
      li.textContent = store;
      li.addEventListener('click', () => {
        //复制到粘贴板
        navigator.clipboard
          .writeText(info)
          .then(() => floatMessage('地址已经复制到粘贴板中'))
          .catch(err => floatMessage(`复制失败${err}`));
      });

      li.addEventListener('mouseover', e => {
        showFloatInfo(e.clientX, e.clientY, info);
      });

      li.addEventListener('mouseout', () => {
        hideFloatInfo();
      });

      ulAddress.appendChild(li);
    });
  });

function floatMessage(message) {
  const floatMessage = document.createElement('div');
  floatMessage.textContent = message;
  floatMessage.classList.add('float-message');
  document.body.appendChild(floatMessage);
  setTimeout(() => {
    floatMessage.remove();
  }, 2000);
}

function showFloatInfo(x, y, info) {
  const showFloatInfo = document.createElement('div');
  showFloatInfo.textContent = info;
  showFloatInfo.classList.add('float-info');
  showFloatInfo.style.top = y + 'px';
  showFloatInfo.style.left = x + 'px';
  document.body.appendChild(showFloatInfo);
}

function hideFloatInfo() {
  const showFloatInfo = document.querySelector('.float-info');
  if (showFloatInfo) {
    showFloatInfo.remove();
  }
}
