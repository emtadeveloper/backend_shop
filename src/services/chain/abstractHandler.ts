import Handler from "./handler";

abstract class AbstractHandler implements Handler {
  // از هندلر ما میاد و پیروی میکنه و  اون متد هاش رو پیاده سازی میکنه

  private nextHandler: Handler;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }
  process(request: object): object {
    if (this.nextHandler) {
      return this.nextHandler.process(request);
    }
    return {};
  }
}
export default AbstractHandler;
