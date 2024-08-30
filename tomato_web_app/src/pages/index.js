import React, {useState} from "react" ;
import Header from "../components/common/header";
import TabOptions from "../components/common/tabOptions";
import Footer from "../components/common/footer";
import NightLife from "../components/common/nightLife";
import DiningOut from "../components/common/diningOut";
import Delivery from "../components/common/delivery";


const HomePage = () => {
  const {activeTab, setActiveTab} = useState("Delivery")

  return (
    <div>
      <Header />
      {/* <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/> */}
      {getCorrectScreen(activeTab)}
      <Footer/>
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch(tab){
    case "Delivery":
      return <div><Delivery/></div>
    case "Dining Out":
      return <div><DiningOut/></div>
    case "Nightlife":
      return <div><NightLife/></div>
      default:
        return <div><Delivery/></div>
  }

}

export default HomePage;
