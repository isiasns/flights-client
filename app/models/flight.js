import DS from 'ember-data';

export default DS.Model.extend({
  carrierFsCode: DS.belongsTo("airline"),
  departureAirportFsCode: DS.belongsTo("airport"),
  arrivalAirportFsCode: DS.belongsTo("airport"),
  stops: DS.attr("number"),
  departureTerminal: DS.attr("string"),
  arrivalTerminal: DS.attr("string"),
  departureTime: DS.attr("date"),
  arrivalTime: DS.attr("date")
});
