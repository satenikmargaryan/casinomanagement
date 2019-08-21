import { Factory } from 'ember-cli-mirage';

export default Factory.extend({

  type(i){
    return "Type" + i
  },

  image(i){
    return "https://dummyimage.com/500x300/A9A9A9/fff"
  },

  title(i){
    return "Title" + i
  },

  description(i){
    return "Description" + i
  }
});
