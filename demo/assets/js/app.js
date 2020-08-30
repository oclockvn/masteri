class Apartment {
  constructor(data) {
    Object.keys(data).forEach(k => {
      this[k] = ko.observable(data[k]);
    });
  }
}

class FeatureViewModel {
  constructor() {
    this.apartments = ko.observableArray([
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

class News {
  constructor(data) {
    Object.keys(data).forEach(k => {
      this[k] = ko.observable(data[k]);
    });
  }
}

class NewsViewModel {
  constructor() {
    this.news = ko.observableArray([
      new News({
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum odit',
        pubDate: '28/08/2020',
        img: 'news-1.jpg',
        alt: 'news 1',
      }),
      new News({
        title: 'debitis animi praesentium magni fuga hic dicta excepturi natus dignissimos',
        pubDate: '29/08/2020',
        img: 'news-2.jpg',
        alt: 'news 1',
      }),
      new News({
        title: 'corporis, cum laboriosam illo velit! Nisi voluptatem ad veritatis?',
        pubDate: '30/08/2020',
        img: 'news-3.jpg',
        alt: 'news 1',
      }),
      new News({
        title: 'debitis animi praesentium magni fuga hic dicta excepturi natus dignissimos itaque corporis, cum laboriosam',
        pubDate: '02/09/2020',
        img: 'news-4.jpg',
        alt: 'news 1',
      })
    ]);
  }
}

(function () {
  ko.applyBindings(new FeatureViewModel(), document.getElementById('feature-for-rent'));
  ko.applyBindings(new FeatureViewModel(), document.getElementById('feature-for-buy'));

  ko.applyBindings(new NewsViewModel(), document.getElementById('latest-news'));
})();
