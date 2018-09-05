document.onreadystatechange = function () {
  if (document.readyState == 'interactive') {
    const body = document.getElementsByTagName('body')[0];
    const h2 = document.createElement('h2');
    h2.innerHTML = 'hoge';
    body.appendChild(h2);
  }
};
