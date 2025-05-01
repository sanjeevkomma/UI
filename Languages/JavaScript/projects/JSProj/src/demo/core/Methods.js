// How to add function to an Object = Method

let laptop2 = {
  cpu: 'i9',
  ram: 16,
  brand: 'HP',

  getConfig: function () {
    console.log('cpu : ' + this.cpu); // i9
  },
};

let laptop1 = {
  cpu: 'i5',
  ram: 8,
  brand: 'dell',

  getConfig: function () {
    console.log('cpu : ' + this.cpu); // i5
  },

  compare : function(other) {
    if (this.cpu > other.cpu) {
      return this;
    } else {
      return other;
    }
  }

};

laptop2.getConfig(); // i9
laptop1.getConfig(); // i5

function getFastLaptop(laptop1, laptop2) {
  if (laptop1.cpu > laptop2.cpu) {
    return laptop1;
  } else {
    return laptop2;
  }
}

console.log(getFastLaptop(laptop1, laptop2)); // { cpu: 'i9', ram: 16, brand: 'HP', getConfig: [Function: getConfig] }

console.log(laptop1.compare(laptop2)); // { cpu: 'i9', ram: 16, brand: 'HP', getConfig: [Function: getConfig] }
