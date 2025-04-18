'use client';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function TotalSales({ 
  totalSales = 234456.6,
  topStoreSales = 134346,
  topStoreTrend = 19,
  topProductSales = 134346,
  topProductTrend = 19,
  storesPerformance = 65,
  storesPerformanceTrend = -6,
  timeRange = "Last 7 days",
  timeRangeOptions = ["Last 7 days", "Last 30 days", "Last 90 days"],
  onTimeRangeChange = () => {},
  message = "Sales have been booming lately, and it's exciting to see how our strategies are paying off!"
}) {
    // Function to format numbers with commas
    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm w-[65%] max-w-4xl">
            {/* Header section */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-lg text-[#003049]">Total Sale</h2>
                <div className="relative inline-block">
                    <select 
                        className="appearance-none bg-transparent pr-8 text-gray-400 text-sm focus:outline-none"
                        value={timeRange}
                        onChange={(e) => onTimeRangeChange(e.target.value)}
                    >
                        {timeRangeOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Total sales figure */}
            <div className="mb-4">
                <h1 className="text-3xl font-bold text-[#003049]">{formatNumber(totalSales)} DA</h1>
                <p className="text-sm text-gray-600 mt-2">{message}</p>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {/* Top Store Sales */}
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-[#003049] mb-2">Top Store Sales</h3>
                    <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-[#003049]">{formatNumber(topStoreSales)} DA</span>
                        <div className={`flex items-center ${topStoreTrend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {topStoreTrend >= 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                            <span className="text-sm ml-1">{topStoreTrend >= 0 ? '+' : ''}{topStoreTrend} %</span>
                        </div>
                    </div>
                </div>

                {/* Top Product Sales */}
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-[#003049] mb-2">Top Product Sales</h3>
                    <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-[#003049]">{formatNumber(topProductSales)} DA</span>
                        <div className={`flex items-center ${topProductTrend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {topProductTrend >= 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                            <span className="text-sm ml-1">{topProductTrend >= 0 ? '+' : ''}{topProductTrend} %</span>
                        </div>
                    </div>
                </div>

                {/* Stores Performance */}
                <div className="bg-amber-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-[#003049] mb-2">Stores Performant</h3>
                    <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-[#003049]">{storesPerformance} %</span>
                        <div className={`flex items-center ${storesPerformanceTrend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {storesPerformanceTrend >= 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                            <span className="text-sm ml-1">{storesPerformanceTrend >= 0 ? '+' : ''}{storesPerformanceTrend} %</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}