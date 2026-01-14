import { useState } from 'react';
import { DollarSign, Receipt, TrendingDown, Calendar } from 'lucide-react';
import { Header } from '@/components/Header';
import { ReceiptUploader } from '@/components/ReceiptUploader';
import { ExpenseCard } from '@/components/ExpenseCard';
import { StatCard } from '@/components/StatCard';
import { SpendingChart } from '@/components/SpendingChart';
import { CategoryBreakdown } from '@/components/CategoryBreakdown';
import { AlertsPanel } from '@/components/AlertsPanel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const recentExpenses = [
  { category: 'Food', merchant: 'Whole Foods Market', amount: 67.85, date: 'Today', status: 'processed' as const },
  { category: 'Transport', merchant: 'Shell Gas Station', amount: 45.20, date: 'Today', status: 'processed' as const },
  { category: 'Shopping', merchant: 'Amazon', amount: 129.99, date: 'Yesterday', status: 'pending' as const },
  { category: 'Food', merchant: 'Starbucks', amount: 8.45, date: 'Yesterday', status: 'processed' as const },
  { category: 'Utilities', merchant: 'Electric Company', amount: 142.30, date: '2 days ago', status: 'processed' as const },
];

const Index = () => {
  const [, setUploadedFile] = useState<File | null>(null);

  const handleUpload = (file: File) => {
    setUploadedFile(file);
    console.log('Uploaded:', file.name);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">
            Welcome back, John
          </h1>
          <p className="text-muted-foreground">
            Here's your expense summary for January 2025
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            title="Total Spent"
            value="$1,499.00"
            change={-12}
            icon={DollarSign}
            trend="down"
          />
          <StatCard
            title="Receipts Scanned"
            value="24"
            change={8}
            icon={Receipt}
            trend="up"
          />
          <StatCard
            title="Avg. Daily Spend"
            value="$53.54"
            change={-5}
            icon={TrendingDown}
            trend="down"
          />
          <StatCard
            title="Days Tracked"
            value="28"
            icon={Calendar}
          />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <ReceiptUploader onUpload={handleUpload} />
            
            <SpendingChart />
            
            <Card variant="elevated">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Recent Expenses</CardTitle>
                  <button className="text-sm text-primary font-medium hover:underline">
                    View All
                  </button>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentExpenses.map((expense, index) => (
                  <ExpenseCard key={index} {...expense} />
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <CategoryBreakdown />
            <AlertsPanel />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
