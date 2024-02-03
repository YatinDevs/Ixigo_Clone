import React, { useEffect, useState } from "react";
import Carousel from "../../../components/Carousel/Carousel";
import axios from "axios";
import { fetchOffersDetails } from "../../../apis/flights-page-apis";

const offers2 = [
  {
    img: "https://www.ixigo.com/vimaan/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Fupload%2Fd62f9eff1c2bdf42f7d38c4a3f5d7854-npqjp.png&w=640&q=75",
  },
  {
    img: "https://www.ixigo.com/vimaan/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Fupload%2F4f2cbd4328a4923d012b8bad9b62ec9d-qfhfg.png&w=640&q=75",
  },
  {
    img: "https://www.ixigo.com/vimaan/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2F73%2Fc0d96cc0a8c4a035ccabbe2db480cda0-lnsmq.png&w=640&q=75",
  },
  {
    img: "https://www.ixigo.com/vimaan/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Fa%2F9251863c1803cf29a4489c9644f4492e-belgv.png&w=640&q=75",
  },
  {
    img: "https://www.ixigo.com/vimaan/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Fa%2Fa9f66a9464f33313833d98588fc478f7-jazbe.png&w=640&q=75",
  },
  {
    img: "https://www.ixigo.com/vimaan/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Fa%2Fef528852d0ace334ea45a3269035bbea-hikuv.png&w=640&q=75",
  },
  {
    img: "https://www.ixigo.com/vimaan/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Fa%2F54ed78c29602f0e4e9306447bb2aca14-tpjby.png&w=640&q=75",
  },
  {
    img: "https://www.ixigo.com/vimaan/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Fa%2Fc001c659524150c90923a6dcb1f6a6c3-ghowy.png&w=640&q=75",
  },
  {
    img: "https://www.ixigo.com/vimaan/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Fupload%2F8fbbc15a2a4aada04c1cf61c7da8868e-rokjm.png&w=640&q=75",
  },
];
function FlightsOffers() {
  const [data, setData] = useState([]);
  const [offers, setOffers] = useState([]);
  const [type, setType] = useState("FLIGHTS");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Rendered Type : ", type);
    fetchOffersDetails(type).then((res) => {
      console.log("Data Received : ", res);
      setOffers(res);
      setLoading(false);
    });
  }, [type]);

  return (
    <div className="bg-[#fff] py-[30px] mt-16 ">
      <div>
        <Carousel data={offers} loading={loading} />
      </div>
    </div>
  );
}

export default FlightsOffers;
// useEffect(() => {
//   async function fetchDataFromAPI() {
//     try {
//       const response = await axios.post(
//         "https://academics.newtonschool.co/api/v1/bookingportals/airport",
//         {
//           projectID: "f104bi07c490",
//         }
//       );

//       const resData = response.data;
//       console.log(resData.offers);
//       setData(resData);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }

//   fetchDataFromAPI();
// }, []);
