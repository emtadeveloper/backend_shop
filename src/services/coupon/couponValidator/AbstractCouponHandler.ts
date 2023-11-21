import IUser from "src/components/users/model/IUser";
import CouponHandler from "./CouponHandler";
import ICoupon from "src/components/Coupon/model/ICoupon";

abstract class AbstractCouponHandler implements CouponHandler{
  private nextHandler: CouponHandler;
  public setNext(handler: CouponHandler): CouponHandler {
    this.nextHandler = handler;
    return handler;
  }
  public process(user: IUser, coupon: ICoupon): ICoupon | null {
    if (this.nextHandler) {
      return this.nextHandler.process(user, coupon);
    }
    return null;
  }
}
export default AbstractCouponHandler;
