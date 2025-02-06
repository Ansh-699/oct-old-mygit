import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const CurrencyForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Currency</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter currency name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="symbol">Symbol</Label>
            <Input id="symbol" placeholder="Enter currency symbol" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">Price (USD)</Label>
            <Input id="price" type="number" placeholder="Enter current price" />
          </div>
          <Button type="submit">Add Currency</Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default CurrencyForm

