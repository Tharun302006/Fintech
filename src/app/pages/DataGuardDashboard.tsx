import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Shield, FileText, Lock, AlertCircle, Check, X } from "lucide-react";

interface ConsentItem {
  id: string;
  appName: string;
  dataType: string;
  grantedDate: string;
  expiryDate: string;
  status: "active" | "revoked";
  accessCount: number;
}

interface AccessLog {
  id: string;
  appName: string;
  dataAccessed: string;
  timestamp: string;
  status: "success" | "denied";
}

export function DataGuardDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"consent" | "logs" | "permissions">("consent");

  const [consents, setConsents] = useState<ConsentItem[]>([
    {
      id: "1",
      appName: "LoanTracker Pro",
      dataType: "Loan History, Credit Score",
      grantedDate: "Jan 15, 2026",
      expiryDate: "Jan 15, 2027",
      status: "active",
      accessCount: 24,
    },
    {
      id: "2",
      appName: "BudgetWise",
      dataType: "Transaction History, Account Balance",
      grantedDate: "Dec 10, 2025",
      expiryDate: "Dec 10, 2026",
      status: "active",
      accessCount: 156,
    },
    {
      id: "3",
      appName: "TaxHelper India",
      dataType: "Income Details, PAN Information",
      grantedDate: "Nov 5, 2025",
      expiryDate: "Nov 5, 2026",
      status: "active",
      accessCount: 8,
    },
    {
      id: "4",
      appName: "InvestSmart",
      dataType: "Portfolio Data, Bank Details",
      grantedDate: "Oct 20, 2025",
      expiryDate: "Oct 20, 2026",
      status: "revoked",
      accessCount: 45,
    },
  ]);

  const accessLogs: AccessLog[] = [
    {
      id: "1",
      appName: "BudgetWise",
      dataAccessed: "Transaction History",
      timestamp: "Jan 31, 2026 - 10:45 AM",
      status: "success",
    },
    {
      id: "2",
      appName: "LoanTracker Pro",
      dataAccessed: "Credit Score",
      timestamp: "Jan 31, 2026 - 09:30 AM",
      status: "success",
    },
    {
      id: "3",
      appName: "InvestSmart",
      dataAccessed: "Bank Details",
      timestamp: "Jan 30, 2026 - 03:15 PM",
      status: "denied",
    },
    {
      id: "4",
      appName: "TaxHelper India",
      dataAccessed: "PAN Information",
      timestamp: "Jan 30, 2026 - 11:20 AM",
      status: "success",
    },
    {
      id: "5",
      appName: "BudgetWise",
      dataAccessed: "Account Balance",
      timestamp: "Jan 29, 2026 - 02:45 PM",
      status: "success",
    },
  ];

  const toggleConsent = (id: string) => {
    setConsents(
      consents.map((consent) =>
        consent.id === id
          ? { ...consent, status: consent.status === "active" ? "revoked" : "active" }
          : consent
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center text-white/90 hover:text-white mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </button>
          <div className="flex items-center py-6">
            <Shield className="w-12 h-12 mr-4" />
            <div>
              <h1 className="text-3xl mb-1">DataGuard</h1>
              <p className="text-green-100">Your Financial Data Privacy & Consent Manager</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab("consent")}
              className={`py-4 border-b-2 transition-colors ${
                activeTab === "consent"
                  ? "border-green-600 text-green-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Consent Management
            </button>
            <button
              onClick={() => setActiveTab("logs")}
              className={`py-4 border-b-2 transition-colors ${
                activeTab === "logs"
                  ? "border-green-600 text-green-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Data Access Logs
            </button>
            <button
              onClick={() => setActiveTab("permissions")}
              className={`py-4 border-b-2 transition-colors ${
                activeTab === "permissions"
                  ? "border-green-600 text-green-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Permission Controls
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Consent Management Tab */}
        {activeTab === "consent" && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl mb-2">Active Consent Requests</h2>
              <p className="text-gray-600">Manage which applications can access your financial data</p>
            </div>

            <div className="grid gap-4">
              {consents.map((consent) => (
                <div
                  key={consent.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-lg mr-3">{consent.appName}</h3>
                        <span
                          className={`text-xs px-2 py-1 rounded ${
                            consent.status === "active"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {consent.status === "active" ? "Active" : "Revoked"}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        <span className="font-medium">Data Access:</span> {consent.dataType}
                      </p>
                      <div className="flex items-center text-xs text-gray-500 space-x-4">
                        <span>Granted: {consent.grantedDate}</span>
                        <span>•</span>
                        <span>Expires: {consent.expiryDate}</span>
                        <span>•</span>
                        <span>{consent.accessCount} accesses</span>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleConsent(consent.id)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        consent.status === "active"
                          ? "bg-red-100 text-red-700 hover:bg-red-200"
                          : "bg-green-100 text-green-700 hover:bg-green-200"
                      }`}
                    >
                      {consent.status === "active" ? "Revoke Access" : "Restore Access"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Data Access Logs Tab */}
        {activeTab === "logs" && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl mb-2">Recent Data Access Activity</h2>
              <p className="text-gray-600">Monitor when and how your data is being accessed</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-6 py-3 text-sm text-gray-600">Application</th>
                    <th className="text-left px-6 py-3 text-sm text-gray-600">Data Accessed</th>
                    <th className="text-left px-6 py-3 text-sm text-gray-600">Timestamp</th>
                    <th className="text-left px-6 py-3 text-sm text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {accessLogs.map((log) => (
                    <tr key={log.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-6 py-4">{log.appName}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{log.dataAccessed}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{log.timestamp}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center text-xs px-2 py-1 rounded ${
                            log.status === "success"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {log.status === "success" ? (
                            <Check className="w-3 h-3 mr-1" />
                          ) : (
                            <X className="w-3 h-3 mr-1" />
                          )}
                          {log.status === "success" ? "Success" : "Denied"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Permission Controls Tab */}
        {activeTab === "permissions" && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl mb-2">Granular Permission Controls</h2>
              <p className="text-gray-600">Control specific data types each application can access</p>
            </div>

            <div className="space-y-6">
              {consents
                .filter((c) => c.status === "active")
                .map((consent) => (
                  <div
                    key={consent.id}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                  >
                    <h3 className="text-lg mb-4">{consent.appName}</h3>
                    <div className="space-y-3">
                      {["Account Balance", "Transaction History", "Loan Details", "Credit Score", "Personal Info"].map(
                        (permission) => (
                          <div key={permission} className="flex items-center justify-between py-2">
                            <div className="flex items-center">
                              <Lock className="w-4 h-4 mr-3 text-gray-400" />
                              <span className="text-sm">{permission}</span>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" defaultChecked />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                            </label>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
