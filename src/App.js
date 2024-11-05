
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Page/Home/Home';
import Login from './Components/Login/Login';
import Grocery from './Components/Grocery/Grocery';
import Medicine from './Components/Medicine/Medicine';
import FoodDelivery from './Components/FoodDelivery/FoodDelivery';
import Laundry from './Components/Laundry/Laundry';
import DairyEggs from './Components/Grocery/DairyEggs';
import AmulProducts from './Components/Grocery/AmulProducts';
import MotherDairy from './Components/Grocery/MotherDairy';
import Prescsription from './Components/Medicine/Prescsription';
import WholeMilk from './Components/Grocery/WholeMilk';
import Amul2 from './Components/Grocery/ProductDescription.jsx/Amul2';
import ShippingDetail from './Components/Grocery/BuyNow/ShippingDetails/ShippingDetail';
import PaymentPage from './Components/Grocery/BuyNow/PaymentPage/PaymentPage';
import MedicineDescription from './Components/Medicine/Description/MedicineDescription';
import BuyNow from './BuyNow/BuyNow/BuyNow';
import Mcdonalds from './Components/FoodDelivery/Mcdonalds/Mcdonalds';
import FruitsVegetables from './Components/Grocery/KitchenEssential/FruitsVegetables';
import KitchenEssentials from './Components/Grocery/KitchenEssentials/KitchenEssentials';
import HouseHoldEssential from './Components/Grocery/HouseholdEssential/HouseHoldEssential';
import MeatFish from './Components/Grocery/MeatFish/MeatFish';
import BabyCare from './Components/Grocery/BabyCare/BabyCare';
import PetSupplies from './Components/Grocery/PetSupplies/PetSupplies';
import Bakery from './Components/Grocery/Bakery/Bakery';
import HealthBeauty from './Components/Grocery/HealthBeauty/HealthBeauty';
import Beverage from './Components/Grocery/Beverage/Beverage';
import Snacks from './Components/Grocery/Snacks/Snacks';
import Breakfast from './Components/Grocery/Breakfast/Breakfast';
import Frozen from './Components/Grocery/FrozenProduct/Frozen';
import International from './Components/Grocery/International/International';
import Organic from './Components/Grocery/OrganicDiet/OrganicDiet';
import OverTheCounter from './Components/Medicine/OverTheCounter/OverTheCounter';
import Vitamin from './Components/Medicine/Vitamin/Vitamin';
import PersonalCare from './Components/Medicine/PersonalCare/PersonalCare';
import HealthEquipment from './Components/Medicine/HealthDeviceEquipment/HealthEquipment';
import BabyHealth from './Components/Medicine/BabyHealth/BabyHealth';
import SexualHealth from './Components/Medicine/SexualHealth/SexualHealth';
import WeightManagment from './Components/Medicine/WeightManagment/WeightManagment';
import HomeoPathic from './Components/Medicine/HomeoPathic/HomeoPathic';
import PetMedication from './Components/Medicine/PetMedication/PetMedication';
import TrainBooking from './Components/Bookings/TrainBooking/TrainBooking';
import TrainDetails from './Components/Bookings/TrainDetails/TrainDetails';
import BookNow from './BookNow/BookNow';
import Payment from './BookNow/Payment/Payment';
import BookingConfirmation from './BookNow/BookingConfirmation/BookingConfirmation';
import FlightBooking from './Components/Bookings/FlightBooking/FlightBooking';
import FlightDetails from './Components/Bookings/FlightBooking/FlightDetails/FlightDetails';
import BusBooking from './Components/Bookings/BusBooking/BusBooking';
import BusDetail from './Components/Bookings/BusBooking/BusDetail/BusDetail';
import Hotel from './Components/Bookings/Hotel/Hotel';
import HotelDetails from './Components/Bookings/Hotel/HotelDetails/HotelDetails';
import HolidayPackages from './Components/Bookings/HolidayPackages/HolidayPackages';
import ReviewBooking from './Components/Bookings/FlightBooking/FlightDetails/ReviewBooking/ReviewBooking';
import Services from './Components/Services/Services';
import DigitalShowroom from './Components/DigitalShowroom/DigitalShowroom';
import BecomeASeller from './Components/BecomeASeller/BecomeASeller';
import MachineSewing from './Components/Laundry/LaundryPages/MachineSewing/LaundryClean';
import LaundryClean from './Components/Laundry/LaundryPages/MachineSewing/LaundryClean';
import LaundryBooking from './Components/Laundry/LaundryPages/LaundryBooking/LaundryBooking';
import SellerLoginPage from './Components/BecomeASeller/SellerLogin/SellerLoginPage';
import ACServicesProvided from './Components/Services/ServicesPeovided/ACServicesProvided/ACServicesProvided';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/home' Component={Home} />
        <Route path='/login' Component={Login} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/medicine" element={<Medicine />} />
        <Route path="/food-delivery" element={<FoodDelivery />} />
        <Route path="/booking" element={<FlightBooking />} />
        <Route path="/dairy-eggs" element={<DairyEggs />} />
        <Route path="/laundry" element={<Laundry />} />
        <Route path="/amul-products" element={<AmulProducts />} />
        <Route path="/mother-dairy" element={<MotherDairy />} />
        <Route path="/prescription" element={<Prescsription />} />
        <Route path="/whole-milk" element={<WholeMilk />} />
        <Route path="/amul2-product-description" element={<Amul2 />} />
        <Route path="/buy-now" element={<BuyNow />} />
        <Route path="/fruits-vegetables" element={<FruitsVegetables />} />
        <Route path="/kitchen-essentials" element={<KitchenEssentials />} />
        <Route path="/household-essentials" element={<HouseHoldEssential />} />
        <Route path="/meat-essentials" element={<MeatFish />} />
        <Route path="/baby-care" element={<BabyCare />} />
        <Route path="/pet-care" element={<PetSupplies />} />
        <Route path="/bakery" element={<Bakery />} />
        <Route path="/health-beauty-product" element={<HealthBeauty />} />
        <Route path="/beverage-product" element={<Beverage />} />
        <Route path="/snacks" element={<Snacks />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/frozen-product" element={<Frozen />} />
        <Route path="/international-product" element={<International />} />
        <Route path="/organic-product" element={<Organic />} />
        <Route path="/over-the-counter" element={<OverTheCounter />} />
        <Route path="/vitamins-suppliments" element={<Vitamin />} />
        <Route path="/personal-hygine" element={<PersonalCare />} />
        <Route path="/health-device-equipments" element={<HealthEquipment />} />
        <Route path="/baby-health-medication" element={<BabyHealth />} />
        <Route path="/sexual-medication" element={<SexualHealth />} />
        <Route path="/weight-loss-medication" element={<WeightManagment />} />
        <Route path="/home-medication" element={<HomeoPathic />} />
        <Route path="/pet-medication" element={<PetMedication />} />
        <Route path="/shipping-details" element={<ShippingDetail />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/medicine1-description" element={<MedicineDescription />} />
        <Route path="/mcdonalds" element={<Mcdonalds />} />
        <Route path="/train-booking" element={<TrainBooking />} />
        <Route path="/train-details" element={<TrainDetails />} />
        <Route path="/book-Now" element={<BookNow />} />
        <Route path="/flight-details" element={<FlightDetails />} />
        <Route path="/bus" element={<BusBooking />} />
        <Route path="/bus-details" element={<BusDetail />} />
        <Route path="/hotels" element={<Hotel />} />
        <Route path="/hotel-details" element={<HotelDetails />} />
        <Route path="/holiday-packages" element={<HolidayPackages />} />
        <Route path="/passenger-details" element={<ReviewBooking />} />
        <Route path="/services" element={<Services />} />
        <Route path="/digital-showroom" element={<DigitalShowroom />} />
        <Route path="/become-a-seller" element={<BecomeASeller />} />
        <Route path="/laundry-services" element={<LaundryClean />} />
        <Route path="/laundry-booking" element={<LaundryBooking />} />
        <Route path="/seller-log-in" element={<SellerLoginPage />} />
        <Route path="/ac-services" element={<ACServicesProvided />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
