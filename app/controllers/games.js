import Controller from '@ember/controller';
import { sort, alias, filterBy } from '@ember/object/computed';
export default Controller.extend({

  actions: {
    open(game){
      this.set("aliasInput", game.get('type'));
      this.set("description", game.get('description'));
      this.set("pageTitleInput", game.get('title'));
      this.set("currentId", game.get('id'))
      this.store.findRecord('game', game.id);
    },

    save (){
      this.store.findRecord('game', this.currentId).then((game) => {
        game.set("type", this.aliasInput);
        game.set("title", this.pageTitleInput);
        game.set("description", this.description);
        game.save();
      });

    }
  }



});
