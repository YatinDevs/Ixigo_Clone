import React, { useState } from "react";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <footer className="bg-[#3a1248] text-white  text-opacity-80 w-full">
      <div className="">
        <div className="w-full max-w-[1280px] mx-auto my-0 px-4 py-8  ">
          <h1 className="text-md md:text-xl my-2 font-bold">About ixigo</h1>
          <p className={`text-xs md:text-lg `}>
            About ixigo Launched in 2007, ixigo is a technology company focused
            on empowering Indian travellers to plan, book and manage their trips
            across rail, air, buses and hotels. We assist travellers in making
            smarter travel decisions by leveraging artificial intelligence,
            machine learning, and data science led innovations on our OTA
            platforms, comprising our websites and mobile applications. Our
            vision is to become the most customer-centric travel company, by
            offering the best customer experience to our users. Our focus on
            travel utility and customer experience for travellers in the 'next
            billion user' segment is driven by technology, cost-efficiency and
            our culture of innovation has made us India's leading travel
            ecosystem for the 'next billion users'.
          </p>
          {!expanded && (
            <p
              onClick={toggleExpansion}
              className=" my-2 text-xs md:text-lg text-blue-400 block w-fit xl:cursor-pointer"
            >
              Read more
            </p>
          )}
          {expanded && (
            <p
              onClick={toggleExpansion}
              className="text-xs md:text-lg my-2  text-blue-400 block w-fit xl:cursor-pointer"
            >
              Read less
            </p>
          )}
          <div className={` ${expanded ? "block" : "hidden"}`}>
            <p
              className={`text-xs md:text-lg ${expanded ? "block" : "hidden"}`}
            >
              Our OTA platforms allow travellers to book train tickets, flight
              tickets, bus tickets, hotels and cabs, while providing travel
              utility tools and services developed using in-house proprietary
              algorithms and crowd-sourced information, including train PNR
              status and confirmation predictions, train seat availability
              alerts, train running status updates and delay predictions, flight
              status updates, bus running status, pricing and availability
              alerts, deal discovery, destination content, personalized
              recommendations, instant fare alerts, and automated customer
              support services. Read our travel stories where we cover
              everything – flight news, latest travel news, Indian Railways
              reservation updates, COVID-19 travel guidelines and restrictions
              and more. Let us help you plan your next vacation. Explore our
              website today.
            </p>

            <h1 className="text-md md:text-xl my-2 font-bold">
              Here's how we can help you:{" "}
            </h1>
            <table className="border text-xs md:text-lg border-collapse w-full">
              <tbody>
                <tr className="border">
                  <td className="border p-4">Flights</td>
                  <td className="border p-4">
                    Book domestic as well as international flights on ixigo.
                    Check Flight Status for domestic or international flights
                  </td>
                </tr>
                <tr className="border">
                  <td className="border p-4">Trains</td>
                  <td className="border p-4">
                    Search and book train tickets. Check PNR status & Train
                    running status.
                  </td>
                </tr>
                <tr className="border">
                  <td className="border p-4">Bus Booking</td>
                  <td className="border p-4">
                    Choose from different types of buses. From state buses to
                    luxury volvos, book them all on ixigo.
                  </td>
                </tr>
                <tr className="border">
                  <td className="border p-4">Hotels</td>
                  <td className="border p-4">
                    Find thousands of cheap hotels on ixigo. We have something
                    for every budget.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="bg-[#2e013d] text-xs md:text-lg p-4 w-full">
        <ul className="menuItems text-center text-xs md:text-lg ">
          <li className="menuItem text-xs md:text-lg">Privacy-Policy</li>
          <li className="menuItem text-xs md:text-lg">Term of Use</li>
          <li className="menuItem text-xs md:text-lg">Career</li>
          <li className="menuItem text-xs md:text-lg">Customer Service</li>
        </ul>
        <p className="w-full text-center max-w-[1280px] mx-auto my-2 py-2  text-xs lg:text-lg font-bold">
          {" "}
          © 2024 Le Travenues Technology Ltd. India. All brands are trademarks
          of their respective owners.
        </p>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
