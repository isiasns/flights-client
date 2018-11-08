import DS from 'ember-data';
import { computed } from '@ember/object'

export default DS.Model.extend({
  name: DS.attr("string"),
  city: DS.attr("string"),
  countryName: DS.attr("string"),
  full: computed("id", "name", "city", function () {
    return `${this.city}, ${this.name} (${this.id})`;
  })
});
