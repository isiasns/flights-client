import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  attrs:{
    airline: {embeded : "always"},
    departureAirport: { embeded: "always"},
    arrivalAirport: { embeded: "always"}
  },
  normalizeResponse(store, primaryModelClass, payload, id, requestType){
    payload = {
      flights: payload
    };
    payload.flights.forEach(flight => {
      flight.airline = flight.carrierFsCode;
      flight.departureAirport = flight.departureAirportFsCode;
      flight.arrivalAirport = flight.arrivalAirportFsCode;
      delete flight.carrierFsCode;
      delete flight.departureAirportFsCode;
      delete flight.arrivalAirportFsCode;
    });
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
