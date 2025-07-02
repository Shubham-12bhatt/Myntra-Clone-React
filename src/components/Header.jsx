import { FiUser } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const bag = useSelector(store => store.bag);
  return (
    <div>
      <div id="header">
        <div id="logo">
          <Link to= "/">
            <img src="./images/myntra_logo.webp" alt="" />
          </Link>
        </div>
        <a href="#" className="text">
          MEN
        </a>
        <a href="#" className="text">
          WOMEN
        </a>
        <a href="#" className="text">
          KIDS
        </a>
        <a href="#" className="text">
          HOME &LIVING
        </a>
        <a href="#" className="text">
          BEAUTY
        </a>
        <a href="#" id="studio" className="text">
          STUDIO
          <sup style={{ color: "#ff3f6c" }}>NEW</sup>
        </a>
        <div id="icon" className="text">
          <i style={{ color: "#696e79" }} className="ri-search-line"></i>
        </div>
        <input
          id="searchbar"
          placeholder="Search for products, brands and more"
        />
        <div className="action">
          <div className="action_bar">
            <FiUser style={{ fontSize: "22px", fontWeight: "lighter" }} />
            <br /> Profile
          </div>

          <div className="action_bar">
            <FaRegHeart style={{ fontSize: "19px" }} />
            <br />
            Wishlist
          </div>

          <div className="action_bar">
            <Link to="/bag" >
              <HiOutlineShoppingBag
                style={{ fontSize: "22px", fontWeight: "lighter" }}
              />
              <br /> Bag
            </Link>
            {bag.length === 0 ? "" : <span className="count" >{bag.length}</span> }   
          </div>
        </div>
      </div>
      <div id="fakeheader"></div>
    </div>
  );
};

export default Header;
