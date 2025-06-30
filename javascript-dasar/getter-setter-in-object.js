let hewan = {
  name: 'Monyet',
  activity: 'makan',
  food: '🍌',

  get makan() {
    return `${this.name} ${this.activity} ${this.food}`;
  },

  set makan(activity) {
    this.name = activity.name;
    this.activity = activity.activity;
    this.food = activity.food;
    // [this.name, this.activity, this.food] = activity.split(' ');
  },
};

hewan.makan = { name: 'Tupai', activity: 'memakan', food: '🥥' }; //["Tupai", "memakan", "🥥"]
// console.log(hewan.name);
// console.log(hewan.activity);
// console.log(hewan.food);
console.log(`${hewan.name} ${hewan.activity} ${hewan.food}`);
