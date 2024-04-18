import React from "react";
import { ExeclametryIcon, FalseIcon, TrueIcon } from "../../../assets/svgs";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";

const HotelPolicies = ({ houseRules, childAndExtraBedPolicy }) => {
  console.log(childAndExtraBedPolicy);
  return (
    <div
      className=" mx-2 md:mx-auto text-xs md:text-lg my-8"
      id="policiesSection"
    >
      <ContentWrapper>
        <div className=" bg-white md:w-9/12 mx-auto rounded-lg border shadow-md ">
          <div className="flex gap-6 p-4  items-center border-b-2">
            <h1 className="font-semibold text-md md:text-xl text-nowrap  ">
              Property Policies
            </h1>
            {}
          </div>

          <div className="ml-4 my-2">
            <div className="rounded-full text-left text-xs flex flex-col px-4 py-1 md:flex-col gap-2 md:text-base">
              {" "}
              <p className="font-bold">
                Check-in Time:{" "}
                <span className="mx-10">
                  From
                  <strong className="text-center mx-2">12 PM</strong>{" "}
                </span>
              </p>{" "}
              <p className="font-bold">
                Check-out Time:{" "}
                <span className="mx-7">
                  From
                  <strong className="text-center mx-2">10 AM</strong>{" "}
                </span>
              </p>{" "}
            </div>
            <div className="restrictions ">
              <h1 className="font-semibold md:text-lg py-1 text-slate-700">
                Restrictions
              </h1>

              <ul className="ml-2 flex flex-col gap-2">
                <li className="flex gap-3 text-slate-700">
                  <ExeclametryIcon className="inline-block w-4 basis-[15px] shrink-0" />{" "}
                  Guests below 18 years of age are not allowed at the property.
                </li>
                <li className="flex gap-3 text-slate-700">
                  <FalseIcon className="inline-block w-4 basis-[15px] shrink-0" />{" "}
                  Aadhar, Passport, Driving License and Govt. ID are accepted as
                  ID proof(s)
                </li>

                {!houseRules?.restrictions?.petsAllowed ? (
                  <li className="flex gap-3 text-slate-700">
                    <FalseIcon className="inline-block w-4 basis-[15px] shrink-0" />{" "}
                    Pets are not allowed
                  </li>
                ) : (
                  <li className="flex gap-3 text-slate-700">
                    <TrueIcon className="inline-block w-4 basis-[15px] shrink-0" />{" "}
                    You can carry your pets too
                  </li>
                )}

                {!houseRules?.restrictions?.smokingAllowed ? (
                  <li className="flex gap-3 text-slate-700">
                    <FalseIcon className="inline-block w-4 basis-[15px] shrink-0" />{" "}
                    Smoking within the premises is not allowed
                  </li>
                ) : (
                  <li className="flex gap-3 text-slate-700">
                    <TrueIcon className="inline-block w-4 basis-[15px] shrink-0" />{" "}
                    Smoking within the premises is allowed
                  </li>
                )}
              </ul>
            </div>

            <div className="guestProfile py-2">
              <h1 className="font-semibold md:text-lg py-1 text-slate-700">
                Guest Profile
              </h1>

              <ul className="ml-2 flex flex-col gap-2">
                {!houseRules?.guestProfile?.unmarriedCouplesAllowed ? (
                  <li className="flex gap-3 text-slate-700">
                    <FalseIcon className="inline-block w-4 basis-[15px] shrink-0" />{" "}
                    Unmarried couples are not allowed
                  </li>
                ) : (
                  <li className="flex gap-3 text-slate-700">
                    <TrueIcon className="inline-block w-4 basis-[15px] shrink-0" />{" "}
                    Unmarried couples are allowed
                  </li>
                )}
                <li className="flex gap-3 text-slate-700">
                  <FalseIcon className="inline-block w-4 basis-[15px] shrink-0" />{" "}
                  Guests below 18 years of age are not allowed wihtout parents
                  at the property.
                </li>

                {!houseRules?.idProofRelated?.localIdsAllowed ? (
                  <li className="flex gap-3 text-slate-700">
                    <FalseIcon className="inline-block w-4 basis-[15px] shrink-0" />{" "}
                    Local ids are not acceptable
                  </li>
                ) : (
                  <li className="flex gap-3 text-slate-700">
                    <TrueIcon className="inline-block w-4 basis-[15px] shrink-0" />{" "}
                    Local ids are accepted
                  </li>
                )}
              </ul>
            </div>

            <div className="childAndExtraBedPolicy py-2">
              <h1 className="font-semibold md:text-lg py-1 text-slate-700">
                Child & Extra Bed Policy
              </h1>

              <ul className="ml-2 flex flex-col gap-2">
                {childAndExtraBedPolicy?.extraBedProvidedForChild ? (
                  <li className="flex gap-3 text-slate-700">
                    <FalseIcon className="inline-block w-4 basis-[15px] shrink-0" />{" "}
                    No extra bed will be provided to accommodate any child
                    included in the booking.
                  </li>
                ) : (
                  <li className="flex gap-3 text-slate-700">
                    <TrueIcon className="inline-block w-4 basis-[15px] shrink-0" />{" "}
                    Extra bed can be provided to accommodate any child included
                    in the booking.
                  </li>
                )}
                {childAndExtraBedPolicy?.extraBedForAdditionalGuest ? (
                  <li className="flex gap-3 text-slate-700">
                    <ExeclametryIcon className="inline-block w-4 basis-[15px] shrink-0" />{" "}
                    An extra bed will be provided to accommodate any additional
                    guest included in the booking for a charge mentioned below.
                  </li>
                ) : (
                  <li className="flex gap-3 text-slate-700">
                    <TrueIcon className="inline-block w-4 basis-[15px] shrink-0" />{" "}
                    An extra bed will be provided to accommodate any additional
                    guest included in the booking without any charge.
                  </li>
                )}

                <li className="flex gap-3 text-slate-700">
                  <ExeclametryIcon className="inline-block w-4 basis-[15px] shrink-0" />{" "}
                  {`INR ${childAndExtraBedPolicy?.extraBedCharge} will be charged for an extra mattress per guest. (To be paid at the property)`}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HotelPolicies;
