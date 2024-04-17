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

export async function fetchHotelCities(cityName, jwtToken) {
  try {
    const response = await axiosInstance.get(
      `city?search={"cityState": "${cityName}"}`,

      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
