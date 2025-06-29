let hewan = {
  name: 'Monyet',
  activity: 'makan',
  food: '🍌',

  get makan() {
    return `${this.name} ${this.activity} ${this.food}`;
  },

  set makan(activity) {
    [this.name, this.activity, this.food] = activity.split(' ');
  },
};

hewan.makan = 'Tupai memakan 🥥';
console.log(hewan.name);
console.log(hewan.activity);
console.log(hewan.food);
