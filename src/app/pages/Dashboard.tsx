import { useNavigate } from "react-router";
import { Search, CreditCard, Receipt, Grid3x3, Shield, BarChart3, Settings, Bell, Mail } from "lucide-react";
import { useState } from "react";

export function Dashboard() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    marketingEmails: false,
    loanUpdates: true,
    paymentReminders: true,
  });

  // Search data
  const searchableItems = [
    { title: "Student Loan", type: "loan", description: "For undergraduate and graduate studies", path: "/loan-selection" },
    { title: "Education Loan", type: "loan", description: "For professional courses and certifications", path: "/loan-selection" },
    { title: "Home Loan", type: "loan", description: "For purchasing or constructing property", path: "/loan-selection" },
    { title: "Personal Loan", type: "loan", description: "For personal expenses and emergencies", path: "/loan-selection" },
    { title: "Vehicle Loan", type: "loan", description: "For two-wheelers and four-wheelers", path: "/loan-selection" },
    { title: "Transaction History", type: "transaction", description: "View all your past transactions", path: "/verification/transactions" },
    { title: "Payment History", type: "transaction", description: "Check payment records", path: "/verification/transactions" },
    { title: "FinGuard Privacy", type: "service", description: "Manage your data consent and permissions", path: "/dataguard" },
    { title: "AI Risk Analysis", type: "service", description: "View AI-powered privacy risk scores", path: "/ai-risk" },
    { title: "Admin Dashboard", type: "service", description: "Access admin controls and analytics", path: "/admin" },
  ];

  const filteredResults = searchableItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const actionCards = [
    {
      title: "Loans",
      description: "View and manage your loan applications",
      icon: CreditCard,
      action: "loans",
    },
    {
      title: "Transaction Details",
      description: "Check your transaction history",
      icon: Receipt,
      action: "transactions",
    },
    {
      title: "Other Services",
      description: "Explore additional financial services",
      icon: Grid3x3,
      action: "services",
    },
  ];

  const quickLinks = [
    {
      title: "FinGuard Privacy",
      description: "Manage your data consent and permissions",
      icon: Shield,
      path: "/dataguard",
      color: "green",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Shield className="w-6 h-6 text-blue-600 mr-2" />
              <h1 className="text-xl">FinGuard</h1>
            </div>
            
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearching(e.target.value.length > 0);
                  }}
                  placeholder="Search transactions, loans, services..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                
                {/* Search Results Dropdown */}
                {isSearching && searchQuery.length > 0 && (
                  <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-50">
                    {filteredResults.length > 0 ? (
                      <div className="py-2">
                        {filteredResults.map((item, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              navigate(item.path);
                              setSearchQuery("");
                              setIsSearching(false);
                            }}
                            className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm mb-1">{item.title}</p>
                                <p className="text-xs text-gray-500">{item.description}</p>
                              </div>
                              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                                {item.type}
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="px-4 py-8 text-center text-gray-500">
                        <p className="text-sm">No results found for "{searchQuery}"</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <button 
              onClick={() => navigate("/admin")}
              className="text-gray-700 hover:text-gray-900 mr-4"
            >
              Admin
            </button>
            <button 
              onClick={() => setShowSettings(!showSettings)}
              className="text-gray-700 hover:text-gray-900 mr-4"
            >
              <Settings className="w-5 h-5" />
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              Profile
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl mb-2">Welcome back</h2>
          <p className="text-gray-600">What would you like to do today?</p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            const colorClasses = {
              green: "bg-green-100 text-green-600",
              purple: "bg-purple-100 text-purple-600",
            };
            return (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-md p-6 text-left hover:shadow-lg transition-all text-white"
              >
                <div className="flex items-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mr-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">{link.title}</h3>
                    <p className="text-sm text-blue-100">{link.description}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Action Cards */}
        <h3 className="text-lg mb-4">Main Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {actionCards.map((card) => {
            const Icon = card.icon;
            return (
              <button
                key={card.action}
                onClick={() => navigate(`/verification/${card.action}`)}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-left hover:shadow-md hover:border-blue-300 transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </button>
            );
          })}
        </div>

        {/* Settings Panel */}
        {showSettings && (
          <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Settings className="w-5 h-5 text-gray-700 mr-2" />
                <h3 className="text-lg">Notification Settings</h3>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-sm text-gray-500 uppercase">Notification Channels</h4>
                
                {/* Email Notifications */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-gray-500 mr-2" />
                    <label className="text-sm text-gray-700">Email Notifications</label>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSettings({ ...settings, emailNotifications: !settings.emailNotifications })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.emailNotifications ? "bg-blue-600" : "bg-gray-200"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.emailNotifications ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                {/* SMS Notifications */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Bell className="w-4 h-4 text-gray-500 mr-2" />
                    <label className="text-sm text-gray-700">SMS Notifications</label>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSettings({ ...settings, smsNotifications: !settings.smsNotifications })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.smsNotifications ? "bg-blue-600" : "bg-gray-200"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.smsNotifications ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                {/* Push Notifications */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Bell className="w-4 h-4 text-gray-500 mr-2" />
                    <label className="text-sm text-gray-700">Push Notifications</label>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSettings({ ...settings, pushNotifications: !settings.pushNotifications })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.pushNotifications ? "bg-blue-600" : "bg-gray-200"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.pushNotifications ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm text-gray-500 uppercase">Content Preferences</h4>
                
                {/* Loan Updates */}
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-700">Loan Updates</label>
                  <button
                    type="button"
                    onClick={() => setSettings({ ...settings, loanUpdates: !settings.loanUpdates })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.loanUpdates ? "bg-blue-600" : "bg-gray-200"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.loanUpdates ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                {/* Payment Reminders */}
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-700">Payment Reminders</label>
                  <button
                    type="button"
                    onClick={() => setSettings({ ...settings, paymentReminders: !settings.paymentReminders })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.paymentReminders ? "bg-blue-600" : "bg-gray-200"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.paymentReminders ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                {/* Marketing Emails */}
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-700">Marketing Emails</label>
                  <button
                    type="button"
                    onClick={() => setSettings({ ...settings, marketingEmails: !settings.marketingEmails })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.marketingEmails ? "bg-blue-600" : "bg-gray-200"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.marketingEmails ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 p-3 bg-blue-50 rounded-lg">
              <div className="flex items-start">
                <Shield className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />
                <p className="text-xs text-blue-700">
                  Your preferences are saved automatically and protected by FinGuard encryption
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}