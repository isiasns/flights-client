import Component from '@ember/component';

export default Component.extend({
  columns: [
    {
      name: `Departing`,
      valuePath: `departing`
    },
    {
      name: `From`,
      valuePath: `from`
    },
    {
      name: `To`,
      valuePath: `to`
    },
    {
      name: `Airline`,
      valuePath: `airline`
    }
  ],
  rows: []
});
