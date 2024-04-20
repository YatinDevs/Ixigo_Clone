import axiosInstance from "./axios-instance";

/*
  References : 
  https://academics.newtonschool.co/api/v1/bookingportals/offers?filter={"type":"add_any_of_the_above_type"}
  
*/
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

export const fetchFlightDetails = async (
  source,
  destination,
  day,
  sort = {},
  filter = {},
  limit = 10,
  page = 1
) => {
  try {
    const resData = await axiosInstance.get(`/flight`, {
      params: {
        search: JSON.stringify({ source, destination }),
        day: day,
        sort: JSON.stringify(sort),
        filter: JSON.stringify(filter),
        limit,
        page,
      },
    });
    // console.log(`fetchFlightsDetails`, resData?.data);
    return resData?.data;
  } catch (err) {
    throw err;
  }
};

export const fetchBookedFlightDetails = async (flightId, jwtToken) => {
  try {
    const response = await axiosInstance.get(`/flight/${flightId}`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
