export abstract class Drink {
  private description = 'Unknown drink';

  public getDescription() {
    return this.description;
  }

  public abstract getPrice(): number;
}