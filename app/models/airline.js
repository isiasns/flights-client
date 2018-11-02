import DS from 'ember-data';

export default DS.Model.extend({
  fs: DS.attr(),
  iata: DS.attr(),
  icao: DS.attr(),
  name: DS.attr(),
  active: DS.attr()
});
