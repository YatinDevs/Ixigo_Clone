import axiosInstance from "./axios-instance";

export const fetchOffersDetails = async (type) => {
  // console.log("fetched Details Type :", type);
  try {
    const res = await axiosInstance.get(`/offers?filter={"type":"${type}"}`);
    // console.log("Sending Fetched :", res.data);
    return res.data.data.offers;
  } catch (err) {
    // console.error("Something went wrong ", err);
    throw err;
  }
};
