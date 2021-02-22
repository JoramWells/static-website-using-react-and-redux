import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Header0 from "./components/Header0";
import CarouselView from "./components/CarouselView";
import AchievmentView from "./components/index_view/AchievmentView";
import ActivitiesViews from "./components/index_view/ActivitiesViews";
import JoinView from "./components/index_view/JoinView";
import DonateView from "./components/index_view/DonateView";

function App() {
  return (
    <>
    <Header />
    <CarouselView />
    <AchievmentView />
    <ActivitiesViews />
    <JoinView />
    <DonateView />

    </>
  );
}

export default App;
