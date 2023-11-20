import Handler from "./handler";

abstract class AbstractHandler implements Handler {
  //
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
