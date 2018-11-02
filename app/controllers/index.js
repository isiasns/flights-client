import Controller from '@ember/controller';
import { and, notEmpty, or, equal } from '@ember/object/computed'

export default Controller.extend({
  flightType: "one-way",
  from: "",
  to: "",
  departingDate: "",
  returningDate: "",
  isValidFrom: notEmpty("from"),
  isValidTo: notEmpty("to"),
  isValidDeparting: notEmpty("departingDate"), 
  isValidReturning: notEmpty("returningDate"),
  isValidOneWay: equal("flightType", "one-way"),
  isValidRoundTrip: equal("flightType", "round-trip"),
  isValidOneWaySearch: and("isValidFrom", "isValidTo", "isValidDeparting", "isValidOneWay"),
  isValidRoundTripSearch: and("isValidFrom", "isValidTo", "isValidDeparting", "isValidReturning", "isValidRoundTrip"),
  isValidDepartingAndRoundTrip: and("isValidDeparting", "isValidRoundTrip"),
  isValidSearch: or("isValidOneWaySearch", "isValidRoundTripSearch"),
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
    },
    flightTypeToggled(choice) {
      this.set("flightType", choice);
    }
  }
});
