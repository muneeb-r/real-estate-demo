import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { PriceHistoryPoint } from "../types";

interface PriceChartProps {
  priceHistory: PriceHistoryPoint[];
  currentPrice: number;
}

const PriceChart: React.FC<PriceChartProps> = ({
  priceHistory,
  currentPrice,
}) => {
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString + "-01");
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  const chartData = priceHistory.map((point) => ({
    ...point,
    formattedDate: formatDate(point.date),
  }));

  const minPrice = Math.min(...priceHistory.map((p) => p.price));
  const maxPrice = Math.max(...priceHistory.map((p) => p.price));
  const priceChange = currentPrice - priceHistory[0]?.price;
  const priceChangePercent = (priceChange / priceHistory[0]?.price) * 100;

  return (
    <div className="price-chart-container">
      <div className="chart-header">
        <h4>Price History</h4>
        <div className="price-stats">
          <span className="current-price">{formatPrice(currentPrice)}</span>
          <span
            className={`price-change ${
              priceChange >= 0 ? "positive" : "negative"
            }`}
          >
            {priceChange >= 0 ? "+" : ""}
            {formatPrice(priceChange)}({priceChangePercent >= 0 ? "+" : ""}
            {priceChangePercent.toFixed(1)}%)
          </span>
        </div>
      </div>

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis
              dataKey="formattedDate"
              tick={{ fontSize: 12 }}
              stroke="#718096"
            />
            <YAxis
              domain={[minPrice * 0.95, maxPrice * 1.05]}
              tickFormatter={formatPrice}
              tick={{ fontSize: 12 }}
              stroke="#718096"
            />
            <Tooltip
              formatter={(value: number) => [formatPrice(value), "Price"]}
              labelFormatter={(label) => `Date: ${label}`}
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#4299e1"
              strokeWidth={3}
              dot={{ fill: "#4299e1", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: "#4299e1", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PriceChart;
