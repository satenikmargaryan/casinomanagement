import Controller from '@ember/controller';

export default Controller.extend({

  init() {
    this._super(...arguments);
    this.get("games");
  },
  pageNumber: 1,
  actions: {
    open(game){
      this.set("aliasInput", game.get('type'));
      this.set("pageTitleInput", game.get('title'));
      this.set("currentId", game.get('id'))
      this.store.findRecord('game', game.id);
    },

    save (){
      this.store.findRecord('game', this.currentId).then((game) => {
        game.set("type", this.aliasInput);
        game.set("image", "https://dummyimage.com/300/09f/fff.png");
        game.set("title", this.pageTitleInput);
        game.save();
      });

    }
  }



});
