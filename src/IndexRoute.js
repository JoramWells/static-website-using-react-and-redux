import React from "react";
import CarouselView from "./components/index_view/CarouselView";
import AchievmentView from "./components/index_view/AchievmentView";
import ActivitiesViews from "./components/index_view/ActivitiesViews";
import JoinView from "./components/index_view/JoinView";
import DonateView from "./components/index_view/DonateView";
import TrendingViews from "./components/index_view/TrendingViews";

const title = "Achievements"

export default function IndexRoute() {
  return (
    <>
      <CarouselView />
      <AchievmentView title={title} />
      <ActivitiesViews />
      <JoinView />
      <DonateView />
      <TrendingViews />
    </>
  );
}
