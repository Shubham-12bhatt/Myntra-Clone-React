import { IoAddOutline } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";
import { AiFillDelete } from "react-icons/ai";

import { IoStar } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import bagSlice, { bagActions } from "../store/bagSlice";
import { useState } from "react";
const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector(store => store.bag);
  const elementFound = bagItems.indexOf(item.id) >=0
  const handleAddToBag = () => {
    dispatch(bagSlice.actions.addToBag(item.id))
    
  }
   const handleRemove = () => {
    dispatch(bagSlice.actions.removeFromBag(item.id))
    
  }
  return (
    <div className="item-container">
      <img className="item-image" src={item.item_image} alt="" />
      <div className="rating">
        {item.rating.star}
        <IoStar style={{ color: "rgb(25, 136, 112)", fontSize : "14px"  ,margin: "2px"}} /> |
        {item.rating.reviews}
      </div>
      <div className="home-company-name">{item.company_name}</div>
      <div className="home-item-name">{item.item_name}</div>
      <div className="price">
        <span className="currentprice">Rs. {item.current_price}</span>
        <span className="originalprice">Rs. {item.original_price}</span>
        <span className="discount">({item.discount_percent}% OFF)</span>
      </div>
      {elementFound ?<button type="button" className=" dangerbtn btn-bag" onClick={handleRemove}><AiFillDelete />Remove</button>
      :   <button className="btn-bag" onClick={handleAddToBag}><IoAddCircleOutline />
        Add to Bag
      </button>
      
      }
      </div>
     
  );
};

export default HomeItem;
