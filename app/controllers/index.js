import Controller from '@ember/controller';
import { and, notEmpty } from '@ember/object/computed'

export default Controller.extend({
  from: "",
  to: "",
  departingDate: "",
  returningDate: "",
  isValidFrom: notEmpty("from"),
  isValidTo: notEmpty("to"),
  isValidDeparting: notEmpty("departing"),
  isValidReturning: notEmpty("returning"),
  isValid: and("isValidFrom", "isValidTo", "isValidDeparting", "isValidReturning"),
  actions: {
    searchFlights() {
      console.log(this.isValidFrom, this.isValidTo, this.isValidDeparting, this.isValidReturning)
    }
  }
});
