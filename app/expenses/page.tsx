"use client"; // Ensures the file runs as a Client Component

import { useState } from "react";
import { DollarSign, Plus, PieChart, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExpensesList } from "@/components/expenses-list";
import { ExpensesChart } from "@/components/expenses-chart";
import { Modal } from "@/components/modal";

export default function ExpensesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Expenses</h2>
        <div className="flex items-center space-x-2">
          <Button onClick={openModal}>
            <Plus className="mr-2 h-4 w-4" /> Generate Report
          </Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,234</div>
            <p className="text-xs text-muted-foreground">+$1,234 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Change</CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">-5.2%</div>
            <p className="text-xs text-muted-foreground">Compared to last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Categories</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Active expense categories</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Expenses Overview</CardTitle>
            <CardDescription>Monthly expenses breakdown by category</CardDescription>
          </CardHeader>
          <CardContent>
            <ExpensesChart />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Expenses</CardTitle>
            <CardDescription>Your recent expenses and their categories</CardDescription>
          </CardHeader>
          <CardContent>
            <ExpensesList />
          </CardContent>
        </Card>
      </div>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <div className="p-4">
            <h3 className="text-lg font-bold mb-4">Generate Report</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">From Date</label>
                <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">To Date</label>
                <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Document Type</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  <option>PDF</option>
                  <option>Word</option>
                </select>
              </div>
              <Button className="w-full mt-4">Download</Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
