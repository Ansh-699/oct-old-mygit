import CurrencyList from "@/components/currencies/CurrencyList"
import CurrencyForm from "@/components/currencies/CurrencyForm"

export default function CurrenciesPage() {
  return (
    <div className="space-y-6 p-5">
      <h1 className="text-3xl font-bold">Currencies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CurrencyList />
        <CurrencyForm />
      </div>
    </div>
  )
}

