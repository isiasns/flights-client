import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr("string"),
  city: DS.attr("string"),
  countryName: DS.attr("string")
});
