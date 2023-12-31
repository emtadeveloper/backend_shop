import ICoupon from "src/components/Coupon/model/ICoupon";
import AbstractCouponHandler from "../AbstractCouponHandler";
import IUser from "src/components/users/model/IUser";

abstract class UserHandler extends AbstractCouponHandler {
  public process(user: IUser, coupon: ICoupon): ICoupon | null {
    const { userConstraint } = coupon.constraints;
    if (user.id !== userConstraint.id) {
      throw new Error("این کد تخفیف برای کاربری شما صادر شده است");
    }
    return super.process(user, coupon);
  }
}
export default UserHandler;
