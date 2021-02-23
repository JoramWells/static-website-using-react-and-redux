import "./App.css";
import Footer from "./components/index_view/Footer";
import Header from "./components/index_view/Header";
import CarouselView from "./components/index_view/CarouselView";
import AchievmentView from "./components/index_view/AchievmentView";
import ActivitiesViews from "./components/index_view/ActivitiesViews";
import JoinView from "./components/index_view/JoinView";
import DonateView from "./components/index_view/DonateView";
import TrendingViews from "./components/index_view/TrendingViews";

function App() {
  return (
    <>
    <Header />
    <CarouselView />
    <AchievmentView />
    <ActivitiesViews />
    <JoinView />
    <DonateView />
    <TrendingViews />
    <Footer />

    </>
  );
}

export default App;
