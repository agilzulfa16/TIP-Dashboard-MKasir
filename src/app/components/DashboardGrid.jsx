'use client';

import { useWidgets } from './WidgetContext';
import WidgetBox from './WidgetBox';
import TopProductsChart from './TopProductChart';

const slotsConfig = [
  { col: 'col-span-12', h: 'min-h-[7rem] sm:min-h-[7rem]' },
  { col: 'col-span-12 sm:col-span-6 md:col-span-3', h: 'min-h-[7rem] sm:min-h-[7rem]' },
  { col: 'col-span-12 sm:col-span-6 md:col-span-3', h: 'min-h-[7rem] sm:min-h-[7rem]' },
  { col: 'col-span-12 sm:col-span-6 md:col-span-3', h: 'min-h-[7rem] sm:min-h-[7rem]' },
  { col: 'col-span-12 sm:col-span-6 md:col-span-3', h: 'min-h-[7rem] sm:min-h-[7rem]' },
  { col: 'col-span-12 lg:col-span-7 lg:row-span-2', h: 'min-h-[20rem] sm:min-h-[25rem]' },
  { col: 'col-span-12 md:col-span-6 lg:col-span-5', h: 'min-h-[7rem] sm:min-h-[7rem]' },
  { col: 'col-span-12 md:col-span-6 lg:col-span-5', h: 'min-h-[15rem] sm:min-h-[17rem]' },
  { col: 'col-span-12 md:col-span-6', h: 'min-h-[16rem] sm:min-h-[18rem]' },
  { col: 'col-span-12 md:col-span-6', h: 'min-h-[16rem] sm:min-h-[18rem]' },
];

const DashboardGrid = () => {
  const { widgets, removeWidget } = useWidgets();

  return (
    <div className="grid grid-cols-12 gap-3 sm:gap-4 pt-4">
      {slotsConfig.map((cfg, idx) => {
        const widget = widgets[idx];

        return (
          <div key={idx} className={`${cfg.col} ${cfg.row ?? ''}`}>
            {widget ? (
              <div className={`bg-white rounded-xl border border-green-600 p-3 sm:p-4 ${cfg.h} flex flex-col overflow-hidden`}>
                <div className="flex justify-between items-center mb-2">
                  <div className="font-bold text-xs sm:text-sm text-green-700 truncate pr-2">{widget.title}</div>
                  <button
                    onClick={() => removeWidget(idx)}
                    className="border rounded px-1.5 py-0.5 text-xs font-extrabold text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                  >
                    X
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto">
                  {widget.isChart ? (
                    <TopProductsChart />
                  ) : (
                    <div className="text-xs sm:text-sm text-gray-600">{widget.content}</div>
                  )}
                </div>
              </div>
            ) : (
              <WidgetBox slotIndex={idx} heightClass={cfg.h} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DashboardGrid;
