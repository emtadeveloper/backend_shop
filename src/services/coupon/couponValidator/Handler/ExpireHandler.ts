import ICoupon from "src/components/Coupon/model/ICoupon";
import AbstractCouponHandler from "../AbstractCouponHandler";
import IUser from "src/components/users/model/IUser";

abstract class ExpireHandler extends AbstractCouponHandler {
  public process(user: IUser, coupon: ICoupon): ICoupon | null {
    const now = new Date();
    if (now > coupon.expires_at) {
      throw new Error("این کد تخفیف در این تاریخ به پایان رسیده است");
    }
    return super.process(user, coupon);
  }
}
export default ExpireHandler;
