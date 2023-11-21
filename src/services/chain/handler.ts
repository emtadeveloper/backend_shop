interface Handler {
  //میاد و وظیفه ی اصلی هر کدوم از اون حلقه هامون رو تایین میکند
  setNext(handler: Handler): Handler;
  process(request: object): object; //  کار حلقه رو انجام میده و اگر اکی بود میفرستش به حلقه ی بعدی
}
export default Handler;
