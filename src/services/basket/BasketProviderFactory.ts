import IBasket from "./contract/IBasket";
import BasketMemoryProvider from "./providers/BasketMemoryProvider";
import BasketRedisProvider from "./providers/BasketRedisProvider";

class BasketProviderFactory {
  //
  private providers: Map<string, IBasket> = new Map<string, IBasket>();

  constructor() {
    this.providers.set("memory", new BasketMemoryProvider());
    this.providers.set("memory", new BasketRedisProvider());
  }

  public registerProvider(name: string, provider: IBasket) {
    if (!this.has(name)) {
      this.providers.set(name, provider);
    }
  }

  public getProvider(name: string): IBasket {
    if (!this.has(name)) {
      throw new Error(`provider ${name} does not exit ! `);
    }
    return this.providers.get(name) as IBasket;
  }

  private has(name: string): boolean {
    return this.providers.has(name);
  }
}
export default BasketProviderFactory;
