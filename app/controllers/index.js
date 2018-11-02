import Controller from '@ember/controller';
import { and, notEmpty } from '@ember/object/computed'

export default Controller.extend({
  from: "",
  to: "",
  departing: "",
  returning: "",
  isValidFrom: notEmpty("from"),
  isValidTo: notEmpty("to"),
  isValidDeparting: notEmpty("departing"),
  isValidReturning: notEmpty("returning"),
  isValidForm: and("isValidFrom", "isValidTo", "isValidDeparting", "isValidReturning"),
  airlines: [],
  airports: [],
  departings: [],
  returnings: [],
  searchAirlines: function () {
    this.airlines = this.store.findAll("airline");
  }.on("init"),
  searchAirports: function () {
    this.airports = this.store.findAll("airport");
  }.on("init"),
  actions: {
    searchFlights() {
    }
  }
});
