class RetiredForagerBee extends ForagerBee {
  constructor (age, job, canFly, color) {
    super(RetiredForagerBee);
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
  }

  forage(no) {
    no = 'I am too old, let me play cards instead';
    return no;
  }

  gamble(treasure) {
    return this.treasureChest.push(treasure);
  }

};
