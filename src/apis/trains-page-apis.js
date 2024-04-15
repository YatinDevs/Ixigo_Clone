import axiosInstance from "./axios-instance";

export const fetchTrainsListing = async (
  source,
  destination,
  day,
  sort = {},
  filter = {},
  limit = 10,
  page = 1
) => {
  try {
    const response = await axiosInstance.get(`/train`, {
      params: {
        search: JSON.stringify({ source, destination }),
        day: day,
        sort: JSON.stringify(sort),
        filter: JSON.stringify(filter),
        limit,
        page,
      },
    });

    return response?.data;
  } catch (error) {
    throw error;
  }
};
