import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return this.store.findAll("post");
  },

  afterModel() {
    //console.log(this.model);
  }
});
