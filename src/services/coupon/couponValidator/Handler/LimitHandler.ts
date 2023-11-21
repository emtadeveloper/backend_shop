import ICoupon from "src/components/Coupon/model/ICoupon";
import IUser from "src/components/users/model/IUser";
import AbstractCouponHandler from "../AbstractCouponHandler";

abstract class LimitHandler extends AbstractCouponHandler {
  public process(user: IUser, coupon: ICoupon): ICoupon | null {
    if (coupon.used >= coupon.limit) {
      throw new Error("این کد تخفیف دیگر اعتبار ندارد");
    }
    return super.process(user, coupon);
  }
}
export default LimitHandler;
