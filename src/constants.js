import specialFareSVG1 from "./assets/images/homePage/student.svg";
import specialFareSVG2 from "./assets/images/homePage/seniorCitizen.svg";
import specialFareSVG3 from "./assets/images/homePage/armedForces.svg";
export const projectID = "9h69a26iogeq";
export const FLIGHT_SEARCH_PANNEL_SPECIAL_FARES = [
  {
    logo: specialFareSVG1,
    title: "Student",
    header: { pre: `For travellers`, mid: "12 years", post: "and above" },
    body: "It is mandatory to present a valid Student ID at the time of check-in",
  },
  {
    logo: specialFareSVG2,
    title: "Senior Citizen",
    header: { pre: `For travellers`, mid: "60 years", post: "and above" },
    body: "It is mandatory to present a valid date of birth proof at the time of check-in",
  },
  {
    logo: specialFareSVG3,
    title: "Armed Forces",
    header: {
      pre: `For`,
      mid: "serving and retired personnel of Armed Forces & Paramilitary Forces",
      post: ", and their recognised dependants",
    },
    body: "It is mandatory to present a valid Armed Forces ID or a dependent card at the time of check-in",
  },
];
import locationImg1Con from "./assets/images/homePage/banner-agra-con.webp";
import locationImg1Org from "./assets/images/homePage/banner-agra-org.webp";
import locationImg2Con from "./assets/images/homePage/banner-bali-indonesia-con.webp";
import locationImg2Org from "./assets/images/homePage/banner-bali-indonesia-org.webp";
import locationImg3Con from "./assets/images/homePage/banner-kochi-con.webp";
import locationImg3Org from "./assets/images/homePage/banner-kochi-org.webp";
import locationImg4Con from "./assets/images/homePage/banner-london-unitedKingdom-con.webp";
import locationImg4Org from "./assets/images/homePage/banner-london-unitedKingdom-org.webp";
import locationImg5Con from "./assets/images/homePage/banner-udaipur-india-con.webp";
import locationImg5Org from "./assets/images/homePage/banner-udaipur-india-org.webp";
export {
  locationImg1Con,
  locationImg1Org,
  locationImg2Con,
  locationImg2Org,
  locationImg3Con,
  locationImg3Org,
  locationImg4Con,
  locationImg4Org,
  locationImg5Con,
  locationImg5Org,
};

export const airlineData = {
  "65144a1b664a43628887c460": {
    airline_name: "IndiGo Flights",
    logo: "https://imgak.goibibo.com/flights-gi-assets/images/v2/app-img/6E.png",
  },
  "65144a1b664a43628887c45f": {
    airline_name: "Air Vistara",
    logo: "https://imgak.goibibo.com/flights-gi-assets/images/v2/app-img/UK.png",
  },
  "65144a1b664a43628887c45e": {
    airline_name: "Spice Jet",
    logo: "https://imgak.goibibo.com/flights-gi-assets/images/v2/app-img/SG.png",
  },
  "65144a1b664a43628887c461": {
    airline_name: "Air India",
    logo: "https://imgak.goibibo.com/flights-gi-assets/images/v2/app-img/AI.png",
  },
  "65144a1b664a43628887c45d": {
    airline_name: "Air India Express",
    logo: "https://imgak.goibibo.com/flights-gi-assets/images/v2/app-img/I5.png",
  },
};
export const AIRPORTS = [
  {
    name: "Rajiv Gandhi International Airport",
    city: "Hyderabad",
    country: "India",
    iata_code: "HYD",
  },
  {
    name: "Sardar Vallabhbhai Patel International Airport",
    city: "Ahmedabad",
    country: "India",
    iata_code: "AMD",
  },
  {
    name: "Goa International Airport",
    city: "Goa",
    country: "India",
    iata_code: "GOI",
  },
  {
    name: "Pune Airport",
    city: "Pune",
    country: "India",
    iata_code: "PNQ",
  },
  {
    name: "Lokpriya Gopinath Bordoloi International Airport",
    city: "Guwahati",
    country: "India",
    iata_code: "GAU",
  },
  {
    name: "Jaipur International Airport",
    city: "Jaipur",
    country: "India",
    iata_code: "JAI",
  },
  {
    name: "Dr. Babasaheb Ambedkar International Airport",
    city: "Nagpur",
    country: "India",
    iata_code: "NAG",
  },
  {
    name: "Indira Gandhi International Airport",
    city: "Delhi",
    country: "India",
    iata_code: "DEL",
  },
  {
    name: "Chhatrapati Shivaji Maharaj International Airport",
    city: "Mumbai",
    country: "India",
    iata_code: "BOM",
  },
  {
    name: "Kempegowda International Airport",
    city: "Bengaluru",
    country: "India",
    iata_code: "BLR",
  },
  {
    name: "Netaji Subhas Chandra Bose International Airport",
    city: "Kolkata",
    country: "India",
    iata_code: "CCU",
  },
  {
    name: "Chennai International Airport",
    city: "Chennai",
    country: "India",
    iata_code: "MAA",
  },
  {
    name: "Cochin International Airport",
    city: "Kochi",
    country: "India",
    iata_code: "COK",
  },
  {
    name: "Chandigarh International Airport",
    city: "Chandigarh",
    country: "India",
    iata_code: "IXC",
  },
  {
    name: "Biju Patnaik International Airport",
    city: "Bhubaneswar",
    country: "India",
    iata_code: "BBI",
  },
  {
    name: "Coimbatore International Airport",
    city: "Coimbatore",
    country: "India",
    iata_code: "CJB",
  },
  {
    name: "Lucknow International Airport",
    city: "Lucknow",
    country: "India",
    iata_code: "LKO",
  },
  {
    name: "Trivandrum International Airport",
    city: "Thiruvananthapuram",
    country: "India",
    iata_code: "TRV",
  },
  {
    name: "Mangalore International Airport",
    city: "Mangalore",
    country: "India",
    iata_code: "IXE",
  },
  {
    name: "Amritsar International Airport",
    city: "Amritsar",
    country: "India",
    iata_code: "ATQ",
  },
  {
    name: "Dehradun Airport",
    city: "Dehradun",
    country: "India",
    iata_code: "DED",
  },
  {
    name: "Vadodara Airport",
    city: "Vadodara",
    country: "India",
    iata_code: "BDQ",
  },
  {
    name: "Madurai Airport",
    city: "Madurai",
    country: "India",
    iata_code: "IXM",
  },
  {
    name: "Lok Nayak Jayaprakash Airport",
    city: "Patna",
    country: "India",
    iata_code: "PAT",
  },
  {
    name: "Kushok Bakula Rimpochee Airport",
    city: "Leh",
    country: "India",
    iata_code: "IXL",
  },
  {
    name: "Agartala Airport",
    city: "Agartala",
    country: "India",
    iata_code: "IXA",
  },
  {
    name: "Gaya Airport",
    city: "Gaya",
    country: "India",
    iata_code: "GAY",
  },
  {
    name: "Surat Airport",
    city: "Surat",
    country: "India",
    iata_code: "STV",
  },
  {
    name: "Raipur Airport",
    city: "Raipur",
    country: "India",
    iata_code: "RPR",
  },
  {
    name: "Jammu Airport",
    city: "Jammu",
    country: "India",
    iata_code: "IXJ",
  },
];
export const AIRLINES_INFO = [
  { name: "Air India", key: "AI" },
  { name: "IndiGo", key: "6E" },
  { name: "Vistara", key: "UK" },
  { name: "SpiceJet", key: "SG" },
  { name: "Go First", key: "G8" },
];

export const TRAIN_STATION_NAMES = [
  "Delhi Junction",
  "Salem Junction",
  "Dhanbad Junction",
  "Hubli Junction",
  "Lucknow Charbhagh",
  "Vijayawada Junction",
  "Surat",
  "Udaipur City",
  "Thiruvananthapuram Central",
  "Coimbatore Junction",
  "Kanpur Central",
  "Kharagpur Junction",
  "Manmad Junction",
  "Mughal Sarai Junction",
  "Chandigarh",
  "Gorakhpur Junction",
  "Gwalior Junction",
  "Ghaziabad Junction",
  "Agra Cantonment",
  "Allahabad Junction",
  "Kiul Junction",
  "Bhubaneshwar",
  "Ambala Cantonment",
  "Warangal",
  "Bhusaval Junction",
  "Howrah Junction",
  "Thrissur",
  "Yesvantpur Junction",
  "Khurda Road Junction",
  "Nagpur Junction",
  "Ahmedabad Junction",
  "Visakhapatnam Junction",
  "Barddhaman Junction",
  "Mysuru Junction",
  "Bengaluru City Junction",
  "Amritsar Junction",
  "Kalyan Junction",
  "Pune Junction",
  "Raipur Junction",
  "Erode Junction",
  "New Delhi",
  "Jhansi Junction",
  "Jodhpur Junction",
  "Varanasi Junction",
  "Vadodara Junction",
  "Asansol Junction",
  "Katpadi Junction",
  "Indore Junction",
  "Itarsi Junction",
  "Moradabad Junction",
  "Anand Junction",
  "Kollam Junction",
  "Ludhiana Junction",
  "Bengaluru Cantt.",
  "Hazrat Nizamuddin",
  "Mangalore Central",
  "Bhopal Junction",
  "Kota Junction",
  "Secunderabad Junction",
  "Nadiad Junction",
  "Mathura Junction",
  "Chennai Central",
  "Vellore Katpadi",
  "Patna Junction",
  "Guwahati",
  "Jaipur Junction",
];

export const BUS_STATION_NAMES = [
  "Mumbai, Maharashtra",
  "Delhi, National Capital Territory of Delhi",
  "Bangalore, Karnataka",
  "Kolkata, West Bengal",
  "Chennai, Tamil Nadu",
  "Hyderabad, Telangana",
  "Pune, Maharashtra",
  "Ahmedabad, Gujarat",
  "Surat, Gujarat",
  "Jaipur, Rajasthan",
  "Lucknow, Uttar Pradesh",
  "Kanpur, Uttar Pradesh",
  "Nagpur, Maharashtra",
  "Indore, Madhya Pradesh",
  "Thane, Maharashtra",
  "Bhopal, Madhya Pradesh",
  "Visakhapatnam, Andhra Pradesh",
  "Pimpri-Chinchwad, Maharashtra",
  "Patna, Bihar",
  "Vadodara, Gujarat",
  "Ghaziabad, Uttar Pradesh",
  "Ludhiana, Punjab",
  "Agra, Uttar Pradesh",
  "Nashik, Maharashtra",
  "Faridabad, Haryana",
  "Meerut, Uttar Pradesh",
  "Rajkot, Gujarat",
  "Kalyan-Dombivali, Maharashtra",
  "Vasai-Virar, Maharashtra",
  "Varanasi, Uttar Pradesh",
  "Srinagar, Jammu and Kashmir",
  "Dhanbad, Jharkhand",
  "Jodhpur, Rajasthan",
  "Amritsar, Punjab",
  "Raipur, Chhattisgarh",
  "Allahabad, Uttar Pradesh",
  "Coimbatore, Tamil Nadu",
  "Jabalpur, Madhya Pradesh",
  "Gwalior, Madhya Pradesh",
  "Vijayawada, Andhra Pradesh",
];

import offerImg1 from "./assets/images/busoffers/1.webp";
import offerImg2 from "./assets/images/busoffers/2.webp";
import offerImg3 from "./assets/images/busoffers/3.jpeg";
import offerImg4 from "./assets/images/busoffers/4.webp";
import offerImg5 from "./assets/images/busoffers/5.webp";
import offerImg6 from "./assets/images/busoffers/6.webp";
import offerImg7 from "./assets/images/busoffers/7.webp";
import offerImg8 from "./assets/images/busoffers/8.webp";
import offerImg9 from "./assets/images/busoffers/9.webp";
import offerImg10 from "./assets/images/busoffers/10.webp";
import offerImg11 from "./assets/images/busoffers/11.jpg";
import offerImg12 from "./assets/images/busoffers/12.webp";
import offerImg13 from "./assets/images/busoffers/13.webp";
import offerImg14 from "./assets/images/busoffers/14.webp";

export const BUS_OFFERS = [
  { src: offerImg1 },
  { src: offerImg2 },
  { src: offerImg3 },
  { src: offerImg4 },
  { src: offerImg5 },
  { src: offerImg6 },
  { src: offerImg7 },
  { src: offerImg8 },
  { src: offerImg9 },
  { src: offerImg10 },
  { src: offerImg11 },
  { src: offerImg12 },
  { src: offerImg13 },
  { src: offerImg14 },
];
