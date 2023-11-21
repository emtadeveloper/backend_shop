import IUser from "src/components/users/model/IUser";
import UserHandler from "./Handler/UserHandler";
import ICoupon from "src/components/Coupon/model/ICoupon";
import ExpireHandler from "./Handler/ExpireHandler";
import LimitHandler from "./Handler/LimitHandler";

class CouponValidator {
  public handle(user: IUser, coupon: ICoupon) {
    const userHandler = new UserHandler();
    const limitHandler = new LimitHandler();
    const expireHandler = new ExpireHandler();
    UserHandler.setNext(limitHandler).setNext(expireHandler);
    return userHandler.process(user, coupon);
  }
}

export default CouponValidator;
