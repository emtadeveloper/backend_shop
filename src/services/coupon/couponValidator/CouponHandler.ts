import ICoupon from "src/components/Coupon/model/ICoupon";
import IUser from "src/components/users/model/IUser";

interface CouponHandler {
  setNext(handler: CouponHandler): CouponHandler;
  process(user: IUser, coupon: ICoupon): ICoupon | null;
}
export default CouponHandler;
