import CountUp from 'react-countup';
import {StatisticsData} from '../constant/index';
export const AnimatedStatistics = () => {
  return (
    <div id="statistics"  className="px-5 md:px-20 xl:mt-0 mt-10">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:gap-7 gap-2">
        {StatisticsData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center bg-zinc-900 rounded-lg xl:p-10 p-2 "
          >
            <div className=" text-white-50 text-2xl xl:text-5xl font-bold mb-2">
              <CountUp end={item.value} suffix={item.suffix} />
            </div>
            <div className="text-white-50 xl:text-lg text-base overflow-ellipsis">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
