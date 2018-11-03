import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  attrs:{
    carrierFsCode: {embeded : "always"},
    departureAirportFsCode: { embeded: "always"},
    arrivalAirportFsCode: { embeded: "always"}
  },
  normalizeResponse(store, primaryModelClass, payload, id, requestType){
    payload = {
      flights: payload
    }
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
