import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Data dummy untuk chart (perbandingan 3 tahun)
const data = [
  { month: "Jan", y2020: 80, y2021: 90, y2022: 90 },
  { month: "Feb", y2020: 30, y2021: 70, y2022: 80 },
  { month: "Mar", y2020: 40, y2021: 40, y2022: 30 },
  { month: "Apr", y2020: 70, y2021: 80, y2022: 40 },
  { month: "May", y2020: 30, y2021: 40, y2022: 50 },
  { month: "Jun", y2020: 90, y2021: 70, y2022: 90 },
  { month: "Jul", y2020: 60, y2021: 50, y2022: 80 },
  { month: "Aug", y2020: 70, y2021: 60, y2022: 40 },
  { month: "Sept", y2020: 90, y2021: 40, y2022: 90 },
  { month: "Oct", y2020: 80, y2021: 50, y2022: 20 },
  { month: "Nov", y2020: 100, y2021: 20, y2022: 70 },
  { month: "Dec", y2020: 50, y2021: 10, y2022: 100 },
];

const TopProductsChart = () => {
  return (
    // Container chart dengan tinggi tetap
    <div className="w-full h-64">
      {/* ResponsiveContainer membuat chart responsive */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, left: -20, bottom: 5 }} // Margin chart
        >
          {/* Grid background dengan garis putus-putus */}
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />

          {/* X-axis untuk bulan */}
          <XAxis
            dataKey="month"
            fontSize={10}
            tick={{ fill: "#6b7280" }} // Warna text abu-abu
          />

          {/* Y-axis dengan domain 0-100 */}
          <YAxis domain={[0, 100]} fontSize={10} tick={{ fill: "#6b7280" }} />

          {/* Tooltip yang muncul saat hover */}
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "0.5rem",
              borderColor: "#e5e7eb",
            }}
            labelStyle={{ color: "#1f2937", fontWeight: "bold" }}
            itemStyle={{ fontSize: "0.8rem" }}
          />

          {/* Legend di bawah chart */}
          <Legend wrapperStyle={{ fontSize: "0.75rem", paddingTop: "10px" }} />

          {/* Line untuk tahun 2020 (ungu) */}
          <Line
            type="monotone"
            dataKey="y2020"
            stroke="#A78BFA"
            strokeWidth={2}
            activeDot={{ r: 5, strokeWidth: 0 }} // Dot saat hover
            dot={{ r: 2 }} // Dot normal
          />

          {/* Line untuk tahun 2021 (merah) */}
          <Line
            type="monotone"
            dataKey="y2021"
            stroke="#F87171"
            strokeWidth={2}
            activeDot={{ r: 5, strokeWidth: 0 }}
            dot={{ r: 2 }}
          />

          {/* Line untuk tahun 2022 (cyan) */}
          <Line
            type="monotone"
            dataKey="y2022"
            stroke="#22D3EE"
            strokeWidth={2}
            activeDot={{ r: 5, strokeWidth: 0 }}
            dot={{ r: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopProductsChart;
