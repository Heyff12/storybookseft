// import { configure } from '@storybook/react';

// function loadStories() {
//   require('../stories/index.js');
//   // You can require as many stories as you need.
// }

// configure(loadStories, module);


import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
console.log('------------------.storybook------config.js-------req-------------------')
console.log(req)
console.log(req.keys)
function loadStories() {
  //req.keys().forEach(filename => req(filename));
  req.keys().forEach((filename)=>{
      console.log('------------------.storybook------config.js-------filename-------------------')
      console.log(filename)
      console.log(req(filename))
      return req(filename)
  })
}

configure(loadStories, module);