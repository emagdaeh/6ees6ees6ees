class HoneyMakerBee extends Bee {
  constructor(age, job, honeyPot) {
    super(HoneyMakerBee);
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }

  makeHoney() {
    this.honeyPot++;
  }

  giveHoney() {
    this.honeyPot--;
  }
};
