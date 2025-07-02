import { useDispatch } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { bagActions } from "../store/bagSlice";

const BagItem = ({item}) => {
  
  const dispatch = useDispatch();
  const removeItem = () => {
    dispatch(bagActions.removeFromBag(item.id))
  }
  return (
    
      <div className="bag-item-container">
           <div className="item-left-part">
             <img className="bag-item-img" src={item.item_image}/>
           </div>
           <div className="item-right-part">
             <div className="bag-company-name">{item.company_name}</div>
             <div className="bag-item-name"> {item.item_name} </div>
             <div className="price-container">
               <span className="currentprice"> Rs. {item.current_price} </span>
               <span className="originalprice">Rs.{item.original_price}</span>
               <span className="discount">({item.discount_percent}% OFF)</span>
             </div>
             <div className="return-period">
               <span className="return-period-days"> {item.return_period} days</span> return available
             </div>
             <div className="delivery-details">
               Delivery by
               <span className="delivery-details-days">{item.delivery_date} </span>
             </div>
           </div>

           <div className="remove-from-cart" onClick={removeItem} >X</div>
         </div>
    
  );
};

export default BagItem;