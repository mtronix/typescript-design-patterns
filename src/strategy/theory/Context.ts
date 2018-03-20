import { Strategy } from './Strategy';

export class Context {
  private strategy: Strategy;

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  getStrategy() {
    return this.strategy;
  }

  execute() {
    this.strategy.execute();
  }
}