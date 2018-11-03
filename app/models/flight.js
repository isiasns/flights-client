import DS from 'ember-data';

export default DS.Model.extend({
  airline: DS.belongsTo("airline"),
  departureAirport: DS.belongsTo("airport"),
  arrivalAirport: DS.belongsTo("airport"),
  stops: DS.attr("number"),
  departureTerminal: DS.attr("string"),
  arrivalTerminal: DS.attr("string"),
  departureTime: DS.attr("date"),
  arrivalTime: DS.attr("date")
});
