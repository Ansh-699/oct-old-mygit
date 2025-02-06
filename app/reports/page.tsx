import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ReportsPage() {
  return (
    <div className="space-y-6 p-5">
      <h1 className="text-3xl font-bold">Reports</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Balance Sheet</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">View your company&apos;s assets, liabilities, and equity.</p>
            <Button className="transform transition-transform duration-200 hover:scale-105">Generate Report</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Profit &amp; Loss Statement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Analyze your revenue, costs, and expenses over a period.</p>
            <Button className="transform transition-transform duration-200 hover:scale-105">Generate Report</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Cash Flow Statement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Track the inflow and outflow of cash in your business.</p>
            <Button className="transform transition-transform duration-200 hover:scale-105">Generate Report</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
