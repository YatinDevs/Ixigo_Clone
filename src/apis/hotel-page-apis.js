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

export const fetchHotelListing = async (
  location,
  sort = {},
  filter = {},
  limit = 10,
  page = 1,
  jwtToken
) => {
  try {
    const res = await axiosInstance.get(`/hotel`, {
      params: {
        search: JSON.stringify({ location }),
        sort: JSON.stringify(sort),
        filter: JSON.stringify(filter),
        limit,
        page,
      },
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    // console.log(res?.data);
    return res?.data;
  } catch (error) {
    // console.error("There is Error", error);
    throw error;
  }
};

export const fetchHotelDetails = async (hotelId, jwtToken) => {
  try {
    const response = await axiosInstance.get(`/hotel/${hotelId}`, {
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
