import CountUp from 'react-countup';
import {StatisticsData} from '../constant/index';
export const AnimatedStatistics = () => {
  return (
    <div id="statistics"  className="px-5 md:px-20 xl:mt-0 mt-32">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
        {StatisticsData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center bg-zinc-900 rounded-lg p-10 "
          >
            <div className=" text-white-50 text-5xl font-bold mb-2">
              <CountUp end={item.value} suffix={item.suffix} />
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
