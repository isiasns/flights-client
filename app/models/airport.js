import DS from 'ember-data';

export default DS.Model.extend({
  fs: DS.attr(),
  name: DS.attr(),
  city: DS.attr()
});
