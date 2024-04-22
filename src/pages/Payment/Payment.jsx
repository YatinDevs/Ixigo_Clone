import React, { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";
import inputCard from "../../assets/images/payment/jp_default_card.png";
import { usePaymentContext } from "../../context/PaymentProvider";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import { useNavigate, useParams } from "react-router-dom";
import UpiTab from "./UpiTab";
import CardTab from "./CardTab";
import { Upi, UpiActive } from "./Upi";
import { Card, CardActive } from "./Card";

function CustomTabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <div className="p-3">{children}</div>}
    </div>
  );
}
export default function Payment() {
  const navigate = useNavigate();
  console.log(useParams());
  const { searchQuery, bookingInfo, priceDetails } = useParams();
  const { bookingFunction, paymentIsPending, setPaymentisPending, amount } =
    usePaymentContext();

  const extractedEncodedpriceDetails = priceDetails.replace("payment--", "");
  console.log(extractedEncodedpriceDetails);
  const decodedpriceDetails = atob(extractedEncodedpriceDetails);
  console.log(decodedpriceDetails);

  const [time, setTime] = useState(300);

  useEffect(() => {
    const id = setInterval(() => {
      setTime((prev) => (prev === 0 ? 0 : prev - 1));
    }, 1000);
    return () => {
      clearInterval(id);
      unLoad();
    };
  }, []);

  const unLoad = () => {
    setPaymentisPending(false);
  };

  const mins = ("" + Math.floor(time / 60)).padStart(2, "0");
  const secs = ("" + (time % 60)).padStart(2, "0");

  const [tab, setTab] = useState(0);
  const handleTabSwitch = (newValue) => {
    setTab(newValue);
  };
  return (
    <div className=" mx-auto mt-36 md:mt-20 ">
      <ContentWrapper>
        <div className="flex flex-col gap-2 md:flex-row items-center justify-between border rounded-lg p-2 md:p-5 bg-white mx-5">
          <div className="flex w-gu md:flex-0 items-center bg-[#fbded3] rounded-full px-4 py-1">
            <FaRegClock size={14} color="#ec5b24" />
            <span className="font-semibold text-xs md:text-lg ml-1">
              {mins} : {secs}
            </span>
            <span className="text-xs md:text-lg ml-2">
              left to complete the booking
            </span>
          </div>
          <div className="flex flex-row items-center justify-between gap-24 md:flex-row ">
            <div className="text-gray-500 text-xs md:text-lg font-semibold p-1 md:p-2">
              AMOUNT TO PAY
            </div>
            <div className="text-black text-xs md:text-lg font-semibold p-1 md:p-2">
              <span>&#x20B9;</span>
              {decodedpriceDetails}
            </div>
          </div>
        </div>

        <div className=" bg-white mx-5 border  rounded-lg my-10  flex flex-row border-slate-100 shadow-lg  ">
          <div className="flex flex-col h-[200px] ">
            <div
              onClick={() => handleTabSwitch(0)}
              className={`flex-1  p-10 md:p-6 flex gap-2 text-xs md:text-lg text-center items-center justify-center  border-l-4 ${
                tab === 0
                  ? "border-orange-600 text-orange-600  "
                  : "text-slate-500"
              } cursor-pointer`}
            >
              <p className="text-center inline-block">
                {tab === 0 ? <UpiActive /> : <Upi />}
              </p>
              <p className="text-center inline-block"> UPI</p>
            </div>
            <div
              onClick={() => handleTabSwitch(1)}
              className={`flex-1 p-10 md:p-6 flex gap-2 text-xs md:text-lg text-center items-center justify-center  border-l-4 ${
                tab === 1
                  ? "border-orange-600 bg-orange-50 text-orange-600"
                  : "text-slate-500"
              } cursor-pointer`}
            >
              <p className="text-center inline-block">
                {tab === 1 ? <CardActive /> : <Card />}
              </p>
              <p className="text-center inline-block">Credit/Debit Card</p>
            </div>
          </div>
          <CustomTabPanel value={tab} index={0}>
            <UpiTab />
          </CustomTabPanel>
          <CustomTabPanel value={tab} index={1}>
            <CardTab />
          </CustomTabPanel>
        </div>
      </ContentWrapper>
    </div>
  );
}
