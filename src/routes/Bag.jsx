import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";


const Bag = () => {
  const bagitem = useSelector(state => state.bag)
  const items = useSelector(state => state.items)
  const finalItems = items.filter((item) => bagitem.includes(item.id))
 
  return (
    
    
      
      <main>
        <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map(item=> <BagItem key={item.id} item = {item} ></BagItem>)}
         
          </div>
          <BagSummary></BagSummary>
        
        </div>
      </main>
    
    
  );
};

export default Bag;
