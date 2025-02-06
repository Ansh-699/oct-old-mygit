import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const currencies = [
  { id: 1, name: "Bitcoin", symbol: "BTC", price: 30000 },
  { id: 2, name: "Ethereum", symbol: "ETH", price: 1800 },
  { id: 3, name: "Tether", symbol: "USDT", price: 1 },
]

const CurrencyList = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Supported Currencies</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Symbol</TableHead>
              <TableHead>Price (USD)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currencies.map((currency) => (
              <TableRow key={currency.id}>
                <TableCell>{currency.name}</TableCell>
                <TableCell>{currency.symbol}</TableCell>
                <TableCell>${currency.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default CurrencyList

