import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaMapMarkerAlt, FaMicrophone, FaStar, FaRupeeSign, FaChevronRight } from 'react-icons/fa';
import './Services.css';
import Footer from '../Footer/Footer';

const Services = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPersonalIndex, setCurrentPersonalIndex] = useState(0);
  const [currentMenIndex, setCurrentMenIndex] = useState(0);
  const [showAllBeautyServices, setShowAllBeautyServices] = useState(false);
  const [showAllMensServices, setShowAllMensServices] = useState(false);
  const [showAllMensChildServices, setShowAllMensChildServices] = useState(false);
  const [showAllHomeApplianceServices, setShowAllHomeApplianceServices] = useState(false);
  const [showAllHomeCleaningServices, setShowAllHomeCleaningServices] = useState(false);
  const [showAllProfessionalServices, setShowAllProfessionalServices] = useState(false);

  const toggleSeeAll = () => {setShowAll(!showAll);};
  const toggleBeautyServices = () => {setShowAllBeautyServices(!showAllBeautyServices);};
  const toggleMenServices = () => {setShowAllMensServices(!showAllMensServices);};
  const toggleMenChildServices = () => {setShowAllMensChildServices(!showAllMensChildServices);};
  const toggleHomeApplianceServices = () => {setShowAllHomeApplianceServices(!showAllHomeApplianceServices);};
  const toggleHomeCleaningServices = () => {setShowAllHomeCleaningServices(!showAllHomeCleaningServices);};
  const toggleProfessiinalServices = () => {setShowAllProfessionalServices(!showAllProfessionalServices);};
  const nextService = () => {  setCurrentIndex((prevIndex) => (prevIndex + 1) % topRatingServices.length); };

  const allServices = [
    { text: "Women Saloon & Spa", image: "assets/serviceWomen.png", link: "/women-salon-spa" },
    { text: "Men Saloon & Massage", image: "assets/serviceMen.png", link: "/men-salon-massage" },
    { text: "AC & Appliance Repair", image: "assets/serviceWomen.png", link: "/ac-appliance-repair" },
    { text: "Cleaning and Pest Control", image: "assets/serviceHome.png", link: "/cleaning-pest-control" },
    { text: "Gardening Services", image: "assets/serviceMen.png", link: "/gardening-services" },
    { text: "Home Cleaning", image: "assets/serviceHome.png", link: "/home-cleaning" },
    { text: "Plumbing Services", image: "assets/serviceHome.png", link: "/plumbing-services" },
    { text: "Electrical Repair", image: "assets/serviceHome.png", link: "/electrical-repair" },
  ];

  const topRatingServices = [
  { text: "Facial", rating: 5.0, reviews: 46, price: 400, image: "assets/services1.png", link: "/facial" },
  { text: "Massage", rating: 4.0, reviews: 52, price: 1000, image: "assets/serviceTopRating2.png", link: "/massage" },
  { text: "Hair Saloon", rating: 4.5, reviews: 510, price: 300, image: "assets/serviceTopRating3.png", link: "/hair-salon" },
  { text: "Cleaning", rating: 4.0, reviews: 52, price: 1000, image: "assets/serviceTopRating4.png", link: "/cleaning" },
  { text: "AC Service", rating: 4.0, reviews: 52, price: 1500, image: "assets/serviceHome.png", link: "/ac-services" },
];
  const personalBeautyServices = [
    { image: "assets/serviceFacial.png", text: "Facial Treatment", rating: 4.0, reviews: 100, price: 500 },
    { image: "assets/serviceMakeup.png", text: "Makeup Services", rating: 4.0, reviews: 150, price: 1000 },
    { image: "assets/serviceHair.png", text: "Hair Services", rating: 4.5, reviews: 200, price: 300 },
    { image: "assets/servicePedicure.png", text: "Manicure & Pedicure", rating: 4.0, reviews: 100, price: 1500 },
    { image: "assets/serviceWaxing.png", text: "Waxing Services", rating: 3.0, reviews: 100, price: 1000 },
  ];
  const personalMensServices = [
    { image: "assets/ServiceMen1.png", text: "Message Theraphy", rating: 4.0, reviews: 100, price: 500 },
    { image: "assets/serviceMakeup.png", text: "Makeup Services", rating: 4.0, reviews: 150, price: 1000 },
    { image: "assets/serviceHair.png", text: "Hair Services", rating: 4.5, reviews: 200, price: 300 },
    { image: "assets/servicePedicure.png", text: "Manicure & Pedicure", rating: 4.0, reviews: 100, price: 1500 },
    { image: "assets/serviceWaxing.png", text: "Waxing Services", rating: 3.0, reviews: 100, price: 1000 },
  ];
  const homeApplianceServices = [
    { image: "assets/ServiceACRepairing.png", text: "AirCondition Reapiring", rating: 4.0, reviews: 100, price: 500 },
    { image: "assets/ServiceACRepairing.png", text: "Refrigerator Repairing", rating: 4.0, reviews: 150, price: 1000 },
    { image: "assets/ServiceACRepairing.png", text: "Washing Macine Services", rating: 4.5, reviews: 200, price: 300 },
    { image: "assets/ServiceACRepairing.png", text: "MicroWave Oven Reapiring", rating: 4.0, reviews: 100, price: 1500 },
    { image: "assets/ServiceACRepairing.png", text: "Water Heater/Geyser Repairing", rating: 3.0, reviews: 100, price: 1000 },
  ];
  const homeCleaningServices = [
    { image: "assets/serviceHome1.png", text: "Full  Home Cleaning", rating: 4.0, reviews: 100, price: 500 },
    { image: "assets/serviceHome1.png", text: "Cleaning Kitchen & Bathroom", rating: 4.0, reviews: 150, price: 1000 },
    { image: "assets/serviceHome1.png", text: "Sofa & Carpet Care", rating: 4.5, reviews: 200, price: 300 },
    { image: "assets/serviceHome1.png", text: "Ant Cocaroach & Pest free living", rating: 4.0, reviews: 100, price: 1500 },
    { image: "assets/serviceHome1.png", text: "Water Heater/Geyser Repairing", rating: 3.0, reviews: 100, price: 1000 },
  ];
  const professionalServices = [
    { image: "assets/serviceHome2.png", text: "Decorative Wall panel Design", rating: 4.0, reviews: 100, price: 500 },
    { image: "assets/serviceHome3.png", text: "Vibrant Home Painting Solution", rating: 4.0, reviews: 150, price: 1000 },
    { image: "assets/serviceHome2.png", text: "Blenders & Mixers", rating: 4.5, reviews: 200, price: 300 },
    { image: "assets/serviceHome3.png", text: "Rice Cookers Steamers", rating: 4.0, reviews: 100, price: 1500 },
    { image: "assets/serviceHome2.png", text: "Furniture Assembly", rating: 3.0, reviews: 100, price: 1000 },
  ];

  return (
    <div className="services">
      <div className="servicesImageContainer">
        <img src="assets/servicetopRating4.png" alt="Service" className="servicesImage" />
        <div className="serviceOverlay">
          <div className="searchContainer">
            <div className="inputGroup">
              <FaMapMarkerAlt className="icon" />
              <input type="text" placeholder="Enter your location" className="inputField" />
            </div>
            <div className="inputGroup">
              <input type="text" placeholder="Search your services" className="inputField" />
              <FaMicrophone className="icon" />
              <FaSearch className="icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="servicesLayout">
        <div className={`servicesProvided ${showAll ? 'expanded' : 'collapsed'}`}>
          <div className="servicesHeader">
            <h3>Select Our Home Services</h3>
            <span className="seeAll" onClick={toggleSeeAll}>
              {showAll ? 'See All' : 'Hide'}
            </span>
          </div>
          <div className="serviceBoxes">
            {allServices.map((service, index) => (
              <Link to={service.link} key={index} className="serviceBoxLink">
                <div className="serviceBox">
                  <div className="serviceText">{service.text}</div>
                  <img src={service.image} alt={service.text} className="serviceImageSmall" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="topRatingServices">
        <h3>Top Rating & Fast Services</h3>
        <div className="topRatingImages">
          {topRatingServices.slice(currentIndex, currentIndex + 5).map((service, index) => (
            <Link to={service.link}className="topRatingImage" key={index}>
              <img src={service.image} alt={service.text} className="serviceTopRatingImage" />
              <div className="topRatingOverlay">
                <div className="topRatingText">{service.text}</div>
                <div className="ratingReviews">
                  <FaStar className="starIcon" />
                  <span>{service.rating}</span>
                  <span>({service.reviews} reviews)</span>
                </div>
                <div className="price">
                  <FaRupeeSign className="rupeeIcon" />
                  <span>{service.price}</span>
                </div>
              </div>
            </Link>
          ))}
          <div className="circleIcon" onClick={nextService}>
            <FaChevronRight className="changeIcon" />
          </div>
        </div>
      </div>
      <div className="gap"></div>
      <div className="professionalMakeup">
        <div className="makeupText">
          <h3 className="makeupTitle">Professional Makeup</h3>
          <p className="makeupSubtitle">Stunning Makeup Transformation at your doorstep</p>
          <Link to="/book-now" className="bookNowButton">Book Now</Link>
        </div>
        <img src="assets/serviceImage2.png" alt="Professional Makeup" className="makeupImage" />
      </div>
      <div className="personalBeautyDestination">
        <h3>Your Personal Beauty Destination</h3>
        <span className="seeAllContainer" onClick={toggleBeautyServices}>
          {showAllBeautyServices ? 'Hide' : 'See All'}
        </span>
        <div className="personalBeautyImages">
        {personalMensServices.slice(currentPersonalIndex, currentPersonalIndex + 5).map((personalService, personalIndex) => (
            <div className="personalBeautyImage" key={personalIndex}>
              <img src={personalService.image} alt={personalService.text} />
              <div className="hoverInfo">
                <div>{personalService.text}</div>
                <div className="ratingReviews">
                  <span>{personalService.rating}</span>
                  <FaStar className="starIcon" />
                  <span>({personalService.reviews} reviews)</span>
                </div>
                <div className="price">
                  <FaRupeeSign className="rupeeIcon" />
                  <span>{personalService.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="personalBeautyDestination">
        <h3>Men's Escape Spa</h3>
        <span className="seeAllContainer" onClick={toggleMenServices}>
          {showAllMensServices ? 'Hide' : 'See All'}
        </span>
        <div className="personalBeautyImages">
          {(showAllMensServices ? personalBeautyServices : personalBeautyServices.slice(0, 5)).map((service, index) => (
            <div className="personalBeautyImage" key={index}>
              <img src={service.image} alt={service.text} />
              <div className="hoverInfo">
                <div>{service.text}</div>
                <div className="ratingReviews">
                  <span>{service.rating}</span>
                  <FaStar className="starIcon" />
                  <span>({service.reviews} reviews)</span>
                </div>
                <div className="price">
                  <FaRupeeSign className="rupeeIcon" />
                  <span>{service.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="personalBeautyDestination">
        <h3>Men's Escape Spa</h3>
        <span className="seeAllContainer" onClick={toggleMenServices}>
          {showAllMensServices ? 'Hide' : 'See All'}
        </span>
        <div className="personalBeautyImages">
        {personalMensServices.slice(currentMenIndex, currentMenIndex + 5).map((service, index) => (
            <div className="personalBeautyImage" key={index}>
              <img src={service.image} alt={service.text} />
              <div className="hoverInfo">
                <div>{service.text}</div>
                <div className="ratingReviews">
                  <span>{service.rating}</span>
                  <FaStar className="starIcon" />
                  <span>({service.reviews} reviews)</span>
                </div>
                <div className="price">
                  <FaRupeeSign className="rupeeIcon" />
                  <span>{service.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="personalBeautyDestination">
        <h3>Men & Kid Grooming Studio</h3>
        <span className="seeAllContainer" onClick={toggleMenChildServices}>
          {showAllMensChildServices ? 'Hide' : 'See All'}
        </span>
        <div className="personalBeautyImages">
          {personalMensServices.slice(currentMenIndex, currentMenIndex + 5).map((service, index) => (
            <div className="personalBeautyImage" key={index}>
              <img src={service.image} alt={service.text} />
              <div className="hoverInfo">
                <div>{service.text}</div>
                <div className="ratingReviews">
                  <span>{service.rating}</span>
                  <FaStar className="starIcon" />
                  <span>({service.reviews} reviews)</span>
                </div>
                <div className="price">
                  <FaRupeeSign className="rupeeIcon" />
                  <span>{service.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="homeAppliance">
        <h3>Home Cooling & Appliance services</h3>
        <span className="seeAllContainer" onClick={toggleHomeApplianceServices}>
          {showAllMensChildServices ? 'Hide' : 'See All'}
        </span>
        <div className="personalBeautyImages">
          {(showAllMensChildServices ? homeApplianceServices : homeApplianceServices.slice(0, 5)).map((service, index) => (
            <div className="personalBeautyImage" key={index}>
              <img src={service.image} alt={service.text} />
              <div className="hoverInfo">
                <div>{service.text}</div>
                <div className="ratingReviews">
                  <span>{service.rating}</span>
                  <FaStar className="starIcon" />
                  <span>({service.reviews} reviews)</span>
                </div>
                <div className="price">
                  <FaRupeeSign className="rupeeIcon" />
                  <span>{service.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="homeCleaning">
        <h3>Home Cleaning & Pest-Free Living</h3>
        <span className="seeAllContainer" onClick={toggleHomeCleaningServices}>
          {showAllHomeCleaningServices ? 'Hide' : 'See All'}
        </span>
        <div className="personalBeautyImages">
          {(showAllHomeCleaningServices ? homeCleaningServices : homeCleaningServices.slice(0, 5)).map((service, index) => (
            <div className="personalBeautyImage" key={index}>
              <img src={service.image} alt={service.text} />
              <div className="hoverInfo">
                <div>{service.text}</div>
                <div className="ratingReviews">
                  <span>{service.rating}</span>
                  <FaStar className="starIcon" />
                  <span>({service.reviews} reviews)</span>
                </div>
                <div className="price">
                  <FaRupeeSign className="rupeeIcon" />
                  <span>{service.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="professionalSolution">
        <h3>Professional Solution for Every Need </h3>
        <span className="seeAllContainer" onClick={toggleProfessiinalServices}>
          {showAllProfessionalServices ? 'Hide' : 'See All'}
        </span>
        <div className="personalBeautyImages">
          {(showAllProfessionalServices ? professionalServices : professionalServices.slice(0, 5)).map((service, index) => (
            <div className="personalBeautyImage" key={index}>
              <img src={service.image} alt={service.text} />
              <div className="hoverInfo">
                <div>{service.text}</div>
                <div className="ratingReviews">
                  <span>{service.rating}</span>
                  <FaStar className="starIcon" />
                  <span>({service.reviews} reviews)</span>
                </div>
                <div className="price">
                  <FaRupeeSign className="rupeeIcon" />
                  <span>{service.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default Services;
