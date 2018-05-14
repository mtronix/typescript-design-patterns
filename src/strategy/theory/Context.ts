import { Strategy } from './Strategy';

export class Context {
  private strategy: Strategy;

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  public getStrategy() {
    return this.strategy;
  }

  public execute() {
    this.strategy.execute();
  }
}