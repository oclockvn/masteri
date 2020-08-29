class Apartment {
  constructor(data) {
    Object.keys(data).forEach(k => {
      this[k] = ko.observable(data[k]);
    });
  }
}

class RentViewModel {
  constructor() {
    this.rents = ko.observableArray([
      new Apartment({
        name: 'A01 Lorem ipsum dolor sit amet',
        price: '5 ty 8',
        area: '80m2',
        bedroom: 2,
        toilet: 2,
        floor: 5,
      }),
      new Apartment({
        name: 'A02 Lorem ipsum dolor sit amet',
        price: '6 ty',
        area: '90m2',
        bedroom: 3,
        toilet: 3,
        floor: 8,
      }),

      new Apartment({
        name: 'A03 Minima commodi dolorum in, inventore veritatis illo',
        price: '3 ty 2',
        area: '65m2',
        bedroom: 1,
        toilet: 1,
        floor: 20,
      }),
      new Apartment({
        name: 'A04 Neque omnis corporis nobis sapiente iste dicta quod',
        price: '4 ty',
        area: '70m2',
        bedroom: 2,
        toilet: 2,
        floor: 10,
      })
    ]);
  }
}

(function () {
  ko.applyBindings(new RentViewModel(), document.getElementById('feature-for-rent'));
})();