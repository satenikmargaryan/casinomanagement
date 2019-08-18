import { Factory } from 'ember-cli-mirage';

export default Factory.extend({

  type(i){
    return "Type" + i
  },

  image(i){
    return "https://dummyimage.com/300/09f/fff.png"
  },

  title(i){
    return "Title" + i
  }
});
