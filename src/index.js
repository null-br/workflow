import _ from 'lodash';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}
function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

if (module.hot) {
  // module.hot.accep()
}
