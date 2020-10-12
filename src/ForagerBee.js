class ForagerBee extends HoneyMakerBee {
  constructor (age, job, canFly, treasureChest) {
    super(ForagerBee);
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }

  forage(treasure) {
    this.treasureChest.push(treasure);
  }
};
