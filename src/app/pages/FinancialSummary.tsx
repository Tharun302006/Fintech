import { useNavigate } from "react-router";
import { ArrowLeft, TrendingUp, TrendingDown, Wallet } from "lucide-react";

export function FinancialSummary() {
  const navigate = useNavigate();

  // Mock financial data
  const financialData = {
    totalLoans: 3,
    totalCredited: "₹2,45,000",
    totalDebited: "₹1,89,500",
    availableBalance: "₹55,500",
  };

  const summaryCards = [
    {
      title: "Total Loans",
      value: financialData.totalLoans,
      icon: Wallet,
      color: "blue",
      subtitle: "Active loans",
    },
    {
      title: "Total Credited",
      value: financialData.totalCredited,
      icon: TrendingUp,
      color: "green",
      subtitle: "Incoming transactions",
    },
    {
      title: "Total Debited",
      value: financialData.totalDebited,
      icon: TrendingDown,
      color: "red",
      subtitle: "Outgoing transactions",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <h1 className="text-3xl mb-2">Financial Summary</h1>
          <p className="text-gray-600">Overview of your financial activities</p>
        </div>

        {/* Available Balance Card */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg p-8 mb-8 text-white">
          <p className="text-sm opacity-90 mb-2">Available Balance</p>
          <p className="text-4xl mb-4">{financialData.availableBalance}</p>
          <p className="text-sm opacity-75">Updated as of {new Date().toLocaleDateString()}</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {summaryCards.map((card) => {
            const Icon = card.icon;
            const colorClasses = {
              blue: "bg-blue-100 text-blue-600",
              green: "bg-green-100 text-green-600",
              red: "bg-red-100 text-red-600",
            };

            return (
              <div
                key={card.title}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{card.title}</p>
                    <p className="text-2xl">{card.value}</p>
                  </div>
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${colorClasses[card.color as keyof typeof colorClasses]}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-xs text-gray-500">{card.subtitle}</p>
              </div>
            );
          })}
        </div>

        {/* Detailed List View */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl mb-6">Loan Details</h2>
          <div className="space-y-4">
            {[
              { name: "Personal Loan", amount: "₹50,000", status: "Active", date: "Jan 15, 2026" },
              { name: "Home Loan", amount: "₹1,50,000", status: "Active", date: "Dec 1, 2025" },
              { name: "Education Loan", amount: "₹45,000", status: "Active", date: "Nov 10, 2025" },
            ].map((loan, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div>
                  <p className="mb-1">{loan.name}</p>
                  <p className="text-sm text-gray-600">Started: {loan.date}</p>
                </div>
                <div className="text-right">
                  <p className="mb-1">{loan.amount}</p>
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">
                    {loan.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
