import DS from 'ember-data';

export default DS.Model.extend({
  fs: DS.attr(),
  faa: DS.attr(),
  name: DS.attr(),
  city: DS.attr(),
  stateCode: DS.attr(),
  countryCode: DS.attr(),
  countryName: DS.attr(),
  regionName: DS.attr(),
  timeZoneRegionName: DS.attr(),
  localTime: DS.attr(),
  utcOffsetHours: DS.attr(),
  latitude: DS.attr(),
  longitude: DS.attr(),
  elevationFeet: DS.attr(),
  classification: DS.attr(),
  active: DS.attr(),
  weatherUrl: DS.attr(),
  delayIndexUrl: DS.attr()
});
