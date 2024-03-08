import "./Appp.css";
import Header from "./component/Header";
import InputFooter from "./component/InputFooter";
import MainContainer from "./component/MainContainer";
import Footer from "./component/Footer";
import CardContainer from "./component/CardContainer";


import Navigation from "./component/Navigation";

const App = () =>{
return <div className=" h-[100%] w-[100%] overflow-x-hidden">
<Header/>
<Navigation/>
<MainContainer  />
<CardContainer />
<InputFooter/>
<Footer/>
</div>

};

export default App;