import { useSelector } from "react-redux";

const BagSummary = () => {
  const bagitem = useSelector(state => state.bag)
const items = useSelector(state => state.items)
  const finalItems = items.filter((item) => bagitem.includes(item.id))
  let totalItem = bagitem.length
   let totalMRP = 0;
    let totalDiscount = 0;
    finalItems.forEach(bagItem => {
        totalMRP += bagItem.original_price;
        totalDiscount += bagItem.original_price - bagItem.current_price;
    })
    let totalAmount = totalMRP - totalDiscount + 99;
  return (
    <div className="bag-summary">
          
    <div className="bag-details-container">
            <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
            <div className="price-item">
              <span className="price-item-tag">Total MRP</span>
              <span className="price-item-value">Rs.{totalMRP}</span>
            </div>
            <div className="price-item">
              <span className="price-item-tag">Discount on MRP</span>
              <span className="price-item-value priceDetail-base-discount">-Rs.{totalDiscount}</span>
            </div>
            <div className="price-item">
              <span className="price-item-tag">Convenience Fee</span>
              <span className="price-item-value">Rs 99</span>
            </div>
            <hr/>
            <div className="price-footer">
              <span className="price-item-tag">Total Amount</span>
              <span className="price-item-value">Rs. {totalAmount }</span>
            </div>
          </div>
          <button className="btn-place-order">
            <div className="css-place">PLACE ORDER</div>
      </button>
      </div>
  );
};

export default BagSummary;