import React, { useState } from 'react';
import { FaMapMarkerAlt, FaMicrophone, FaSearch, FaCheckCircle, FaStar, FaEnvelope, FaShareAlt, FaEdit, FaHeart } from 'react-icons/fa';
import './LaundryBooking.css';
import { useNavigate } from 'react-router-dom';

const LaundryBooking = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [uploadedPhotos, setUploadedPhotos] = useState([]);
  const [activeTab, setActiveTab] = useState('overview');
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [enquiryDetails, setEnquiryDetails] = useState({
    name: '',
    email: '',
    country: '',
    mobile: '',
    location: '',
    query: ''
  });
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  if (recognition) {
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchText(transcript);
      setIsListening(false);
    };
    recognition.onerror = () => {
      setIsListening(false);
    };
  }

  const handleMicrophoneClick = () => {
    if (recognition) {
      if (isListening) {
        recognition.stop();
        setIsListening(false);
      } else {
        recognition.start();
        setIsListening(true);
      }
    } else {
      alert('Speech recognition not supported in this browser.');
    }
  };

  const handleUploadClick = () => {document.getElementById('uploadPhoto').click();};

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const newPhotos = files.map((file) => URL.createObjectURL(file));
    setUploadedPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
  };

  const handleStarClick = (rating) => {setReviewRating(rating);};
  const handleTabClick = (tab) => {setActiveTab(tab);};
  const handleWriteReviewClick = () => {setShowReviewModal(true);};

  const handleEnquiryChange = (e) => {
    const { name, value } = e.target;
    setEnquiryDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };
  const handleSendEnquiryClick = () => {setShowEnquiryModal(true);};

  const handleSubmitEnquiry = () => {
    console.log(enquiryDetails);
    setShowEnquiryModal(false);
    setShowSuccessModal(true); // Show success modal after submission
  };
  const handleExploreServices = () => {
    setShowSuccessModal(false); // Close the success modal
    navigate('/laundry'); // Redirect to the laundry page using useNavigate
  };
  return (
    <div className="laundryBooking">
      <div className="laundryBookingPage">
        <img src="assets/busBooking2.png" alt="laundryBooking" className="laundryBookingTopImage" />
        {/* <div className="laundryBookingSearchOverlay">
          <div className="laundryBookinglocationInputContainer">
            <input type="text" placeholder="Enter your location" className="laundryBookinglocationInput" />
            <FaMapMarkerAlt className="locationIcon" />
          </div>
          <div className="laundryBookingsearchInputContainer">
            <input
              type="text"
              placeholder="Search laundry services"
              className="laundryBookingsearchInput"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <FaMicrophone className="microphoneIcon" onClick={handleMicrophoneClick} />
            <FaSearch className="searchIcon" />
          </div>
        </div> */}
        <div className="clientInfoBox">
          <div className="clientInfoHeader">
            <h2 className="clientTitle">Recent Client</h2>
            <FaCheckCircle className="verifiedIcon" />
            <span className="verifiedText">Verified</span>
          </div>
          <div className="clientRating">
            <span className="ratingScore">5.0</span>
            <FaStar className="starIcon" />
            <span className="reviewCount">46 reviews</span>
          </div>
          <p className="clientLocation">Sector 15 Nit Faridabad</p>
          <p className="clientDescription">
            Providing top talent through expert recruitment and efficient staffing solutions.
          </p>
          <div className="contactActions">
            <FaEnvelope className="contactIcon" />
            <button className="enquiryButton" onClick={handleSendEnquiryClick}>Send Enquiry</button>
            <FaShareAlt className="iconButton" />
            <FaEdit className="iconButton" />
            <FaHeart className="iconButton" />
          </div>
          <hr className="dividerLine" />
          <div className="actionButtons">
            <button className={`overviewButton ${activeTab === 'overview' ? 'active' : ''}`}onClick={() => handleTabClick('overview')}>
              Overview
            </button>
            <button className={`reviewButton ${activeTab === 'review' ? 'active' : ''}`}onClick={() => handleTabClick('review')}>
              Review
            </button>
          </div>
          {activeTab === 'overview' && (
            <div className="expertSection">
              <h3>Expert Recruitment and Staffing Solutions</h3>
              <p>Our team of experienced professionals provides comprehensive staffing solutions to help you find the right talent for your needs.</p>
            </div>
          )}
          {activeTab === 'review' && (
            <div className="reviewSection">
              <h2 className="reviewTitle">Reviews and Ratings of Recent Clients</h2>
              <button className="writeReviewButton" onClick={handleWriteReviewClick}>
                Write Review
              </button>
              <div className="customerReviews">
                <div className="customerReview">
                  <img src="assets/customerPhoto.png" alt="Customer" className="customerPhoto" />
                  <div className="reviewContent">
                    <h4 className="customerName">John Doe</h4>
                    <p className="reviewDate">Oct 20, 2024</p>
                    <div className="customerRating">
                      {[...Array(5)].map((_, index) => (
                        <FaStar key={index} className="starIcon" color={index < 4 ? 'gold' : 'gray'} />
                      ))}
                    </div>
                    <p className="reviewText">Excellent service, highly recommend!</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {showReviewModal && (
            <div className="reviewModal">
              <div className="modalContent">
                <h3>We Value Your Feedback</h3>
                <p>Rate this service here with your satisfaction level</p>
                <div className="ratingStars">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index}onClick={() => handleStarClick(index + 1)}
                      className="starIcon"color={index < reviewRating ? 'yellow' : 'gray'}
                    />
                  ))}
                </div>
                <p>Write your review</p>
                <textarea className="reviewInput"value={reviewText}onChange={(e) => setReviewText(e.target.value)}placeholder="Type your review here"/>
                <button className="submitReviewButton" onClick={() => setShowReviewModal(false)}>Submit Review</button>
              </div>
            </div>
          )}
          {showEnquiryModal && (
            <div className="enquiryModal">
              <div className="modalContent">
                <h3>Send Your Enquiry</h3>
                <p>Enter your details to receive communications from Regent Crescent</p>
                <div className="enquiryDetails">
                  <input type="text" name="name" placeholder="Write your name" value={enquiryDetails.name} onChange={handleEnquiryChange} />
                  <input type="email" name="email" placeholder="Enter your email address" value={enquiryDetails.email} onChange={handleEnquiryChange} />
                  <input type="text" name="country" placeholder="Country Name" value={enquiryDetails.country} onChange={handleEnquiryChange} />
                  <input type="text" name="mobile" placeholder="Mobile Number" value={enquiryDetails.mobile} onChange={handleEnquiryChange} />
                  <input type="text" name="location" placeholder="Enter your location" value={enquiryDetails.location} onChange={handleEnquiryChange} />
                  <textarea name="query" placeholder="Write your query here" value={enquiryDetails.query} onChange={handleEnquiryChange} className="queryInput" />
                  <button className="submitEnquiryButton" onClick={handleSubmitEnquiry}>Submit Your Query</button>
                </div>
              </div>
            </div>
          )}
          {showSuccessModal && (
            <div className="successModal">
              <div className="modalContent">
                <h3>Enquiry Submitted Successfully!</h3>
                <p>Your enquiry has been sent. We will get back to you soon!</p>
                <button className="exploreServicesButton" onClick={handleExploreServices}>Explore Laundry Services</button>
              </div>
            </div>
          )}
          <hr className="dividerLine" />
          <div className="uploadSection">
            <h4 className="leftTitle">Experienced Photo</h4>
            <button className="uploadButton" onClick={handleUploadClick}>Upload Photo</button>
            <input type="file" id="uploadPhoto" style={{ display: 'none' }} onChange={handleFileChange} multiple accept="image/*" />
          </div>
          <div className="photoGallery">
            {uploadedPhotos.map((photo, index) => (
              <img src={photo} alt={`Uploaded ${index + 1}`} key={index} className="galleryPhoto" />
            ))}
          </div>
          <div className="photoGallery">
            <img src="assets/laundryPic8.png" alt="Photo 1" className="galleryPhoto" />
            <img src="assets/laundryPic8.png" alt="Photo 2" className="galleryPhoto" />
            <img src="assets/laundryPic8.png" alt="Photo 3" className="galleryPhoto" />
            <img src="assets/laundryPic8.png" alt="Photo 4" className="galleryPhoto" />
            <img src="assets/laundryPic8.png" alt="Photo 5" className="galleryPhoto" />
            <img src="assets/laundryPic8.png" alt="Photo 6" className="galleryPhoto" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LaundryBooking;
