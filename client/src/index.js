import io from 'socket.io-client';

document.onreadystatechange = () => {
  if (document.readyState == 'interactive') {
    const body = document.getElementsByTagName('body')[0];
    const h2 = document.createElement('h2');
    h2.innerHTML = 'hoge';
    body.appendChild(h2);

    const socket = io('http://192.168.99.100:8080');

    socket.on('connect', () => {
      console.log('connect')
    });
  }
};
