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
      this.set("departings", this.store.query("flight", { from: this.from, to: this.to, departureYear: this.departingDate.getFullYear(), departureMonth: this.departingDate.getMonth() + 1, departureDay: this.departingDate.getDate()}));
      if (this.flightType === "round-trip") {
        this.set("returnings", this.store.query("flight", { from: this.to, to: this.from, departureYear: this.returningDate.getFullYear(), departureMonth: this.returningDate.getMonth() + 1, departureDay: this.returningDate.getDate()}));
      }
    },
    flightTypeToggled(choice) {
      this.set("flightType", choice);
    }
  }
});
