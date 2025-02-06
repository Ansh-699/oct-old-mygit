import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

interface CurrencyChartData {
  time: string
  BTC: number
  ETH: number
}

const CurrencyChart: React.FC<{ data: CurrencyChartData[] }> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="time" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip />
        <Line type="monotone" dataKey="BTC" stroke="#8884d8" strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="ETH" stroke="#82ca9d" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default CurrencyChart

