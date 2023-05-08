import PageLayout from "../../Layout/PageLayout";
import {
  circularData,
  ColorWidgetData,
  rightIconsData,
} from "../../assets/data/widgetData";
import ColorWidget from "../../components/Widgets/ColorWidget";
import CurcularCard from "../../components/Widgets/CurcularCard";
import RightIconFill from "../../components/Widgets/RightIconFill";
import RightIconFillTwo from "../../components/Widgets/RightIconFillTwo";
import RightIconOutline from "../../components/Widgets/RightIconOutline";
import RightIconOutlineTwo from "../../components/Widgets/RightIconOutlineTwo";
const StaticWidgets = () => {
  return (
    <>
      <PageLayout title="widgets" name="static widgets">
        <div className="mt-4">
          {/* ================== circular widgets start ================== */}
          <div>
            <h2 className="uppercase font-[600] text-[#5c6269] text-[16px] border-b pb-3 border-b-gray-light">
              circular icon widgets
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[30px] py-6">
              <CurcularCard />
            </div>
          </div>
          {/* ================== circular widgets end ================== */}
          {/* ================== color icon widgets start ================== */}
          <div>
            <h2 className="uppercase font-[600] text-[#5c6269] text-[16px] border-b pb-3 border-b-gray-light">
              color icon widgets
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[30px] py-6">
              <ColorWidget />
            </div>
          </div>
          {/* ================== color icon widgets end ================== */}
          {/* ================== right icon widgets start ================== */}
          <div>
            <h2 className="uppercase font-[600] text-[#5c6269] text-[16px] border-b pb-3 border-b-gray-light">
              right icon widgets
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-[30px] py-6">
              <RightIconOutline />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-[30px] py-6">
              <RightIconOutlineTwo />
            </div>
          </div>
          {/* ================== right icons widgets end ================== */}
          {/* ================== color fill right icon widgets start ================== */}
          <div>
            <h2 className="uppercase font-[600] text-[#5c6269] text-[16px] border-b pb-3 border-b-gray-light">
              color icon widgets
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-4 gap-[30px] py-6">
              <RightIconFill />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-4 gap-[30px] py-6">
              <RightIconFillTwo />
            </div>
          </div>
          {/* ================== color fill right icons widgets end ================== */}
        </div>
      </PageLayout>
    </>
  );
};

export default StaticWidgets;
