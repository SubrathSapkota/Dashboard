import Chart from "../../components/Chart/Chart";
import Featuredinfo from "../../components/featuredInfo/Featuredinfo";
import "./Home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/widgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

const Home = () => {
  return (
    <div className="home">
      <Featuredinfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
