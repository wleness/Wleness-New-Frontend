import { LOGIN } from "@data/urls";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

const ListItem = ({ name, value }) => {
  return (
    <li className="flex justify-between">
      <span className="text-slate-400">{name}</span>
      <span className="text-slate-200">{value}</span>
    </li>
  );
};

export default function OrderDetails({
  user,
  isLoggedIn,
  handleSubmit,
  session,
  handleCoupon,
  code,
  setCode,
  code_message,
}) {
  const [showCoupon, setShowCoupon] = useState(false);
  const [loader, setLoader] = useState(false);

  return (
    <div>
      <h2 className="text-white text-lg font-medium mb-2">Order Details</h2>
      <ul className="space-y-1">
        <ListItem name="Plan Name" value={session?.title} />
        <ListItem name="Plan Charges" value={session?.discount_price} />
        <ListItem
          name="SGST 9%"
          value={Math.floor(session?.discount_price * 0.09)}
        />
        <ListItem
          name="CGST 9%"
          value={Math.floor(session?.discount_price * 0.09)}
        />
      </ul>
      <div className="flex justify-between text-white py-3 border-y border-slate-500 mt-5">
        <span>Total Amount:</span>
        <span>
          Rs.{" "}
          {Math.floor(
            session?.discount_price + session?.discount_price * 0.09 * 2
          )}
        </span>
      </div>

      {!isLoggedIn ? (
        <p className="text-slate-300 text-sm py-3">
          Have a coupon code{" "}
          <Link href={LOGIN} className="text-primary-one">
            Login
          </Link>{" "}
          to Apply
        </p>
      ) : (
        <div className="grid xl:grid-cols-2">
          <p className="text-slate-300 text-xs py-3">
            Have a coupon code{" "}
            <button
              className="text-primary-one"
              onClick={() => setShowCoupon(true)}
            >
              Apply here
            </button>
          </p>
          {showCoupon && (
            <form
              onSubmit={handleCoupon}
              className="grid xl:grid-cols-[3fr_1fr] gap-x-2 py-2"
            >
              <div>
                <input
                  type="text"
                  name="coupon_code"
                  id="coupon_code"
                  placeholder="XXXXXX"
                  value={code}
                  onChange={setCode}
                  className="bg-transparent rounded-lg px-2 py-1 text-white text-sm w-full outline-none border border-slate-400"
                />
                <small className="text-slate-400">{code_message}</small>
              </div>
              <div>
                <input
                  type="submit"
                  value="Apply"
                  className="border-transparent cursor-pointer bg-primary-one text-sm font-semibold py-1 px-1.5 rounded-md"
                />
              </div>
            </form>
          )}
        </div>
      )}

      {isLoggedIn && (
        <div className="mt-4">
          <h2 className="text-white text-lg font-medium mb-2">User Details</h2>

          <ul className="space-y-1 mb-4">
            <ListItem name="User Name" value={user?.name} />
            <ListItem name="User Phone" value={user?.phone || "--"} />
            <ListItem name="User Email" value={user?.email} />
          </ul>

          <button
            type="submit"
            className="btn-2 bg-primary-one disabled:bg-slate-700 disabled:text-slate-400"
            onClick={() => {
              handleSubmit();
              setLoader(true);
            }}
          >
            {loader && (
              <FontAwesomeIcon className="animate-loader" icon={faSpinner} />
            )}
            <span> Pay Now</span>
          </button>
        </div>
      )}
    </div>
  );
}
