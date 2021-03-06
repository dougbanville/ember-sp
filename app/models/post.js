import DS from "ember-data";
const { Model, attr } = DS;

export default Model.extend({
  title: attr("string"),
  description: attr("string"),
  picture: attr("string"),
  comments: attr("number"),
  dateCreated: attr("date")
});
