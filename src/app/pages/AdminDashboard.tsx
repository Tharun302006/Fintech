import { useNavigate } from "react-router";
import { ArrowLeft, Shield, CheckCircle, XCircle, AlertTriangle, Download, TrendingUp, Users, FileText } from "lucide-react";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export function AdminDashboard() {
  const navigate = useNavigate();

  // Mock data for charts
  const consentData = [
    { name: "Jan", approved: 145, revoked: 23 },
    { name: "Feb", approved: 168, revoked: 31 },
    { name: "Mar", approved: 192, revoked: 28 },
    { name: "Apr", approved: 156, revoked: 45 },
    { name: "May", approved: 178, revoked: 19 },
  ];

  const statusData = [
    { name: "Approved", value: 839, color: "#10b981" },
    { name: "Revoked", value: 146, color: "#ef4444" },
    { name: "Pending", value: 67, color: "#f59e0b" },
  ];

  const suspiciousActivities = [
    {
      id: "1",
      appName: "DataMiner Pro",
      issue: "Excessive data access attempts",
      severity: "high",
      timestamp: "Jan 31, 2026 - 11:23 AM",
      accesses: 456,
    },
    {
      id: "2",
      appName: "UnknownApp123",
      issue: "Access without valid consent",
      severity: "critical",
      timestamp: "Jan 31, 2026 - 09:15 AM",
      accesses: 12,
    },
    {
      id: "3",
      appName: "LegacyFinance",
      issue: "Accessing expired consent data",
      severity: "medium",
      timestamp: "Jan 30, 2026 - 04:30 PM",
      accesses: 8,
    },
  ];

  const auditLogs = [
    { id: "1", action: "Consent Granted", user: "user@example.com", app: "BudgetWise", timestamp: "Jan 31, 2026 - 10:45 AM" },
    { id: "2", action: "Consent Revoked", user: "john@example.com", app: "InvestSmart", timestamp: "Jan 31, 2026 - 09:30 AM" },
    { id: "3", action: "Data Access Denied", user: "System", app: "UnknownApp123", timestamp: "Jan 31, 2026 - 09:15 AM" },
    { id: "4", action: "Permission Modified", user: "admin@dataguard.com", app: "LoanTracker Pro", timestamp: "Jan 31, 2026 - 08:20 AM" },
    { id: "5", action: "Consent Granted", user: "sarah@example.com", app: "TaxHelper India", timestamp: "Jan 30, 2026 - 05:15 PM" },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-red-100 text-red-800 border-red-200";
      case "high":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
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
              <h1 className="text-3xl mb-1">Admin & Auditor Dashboard</h1>
              <p className="text-purple-100">Financial Data Usage Monitoring & Compliance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Total Consents</p>
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-3xl mb-1">1,052</p>
            <p className="text-xs text-green-600">+12% from last month</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Approved</p>
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-3xl mb-1">839</p>
            <p className="text-xs text-gray-600">79.7% approval rate</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Revoked</p>
              <XCircle className="w-5 h-5 text-red-600" />
            </div>
            <p className="text-3xl mb-1">146</p>
            <p className="text-xs text-red-600">+8% this month</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Suspicious Activity</p>
              <AlertTriangle className="w-5 h-5 text-orange-600" />
            </div>
            <p className="text-3xl mb-1">23</p>
            <p className="text-xs text-orange-600">Requires attention</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Bar Chart */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg mb-4">Consent Trends (Last 5 Months)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={consentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="approved" fill="#10b981" name="Approved" />
                <Bar dataKey="revoked" fill="#ef4444" name="Revoked" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg mb-4">Consent Status Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => `${entry.name}: ${entry.value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Suspicious Activities Alert */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg mb-1">Suspicious Data Access Alerts</h3>
              <p className="text-sm text-gray-600">Potential security threats and policy violations</p>
            </div>
            <AlertTriangle className="w-6 h-6 text-orange-600" />
          </div>

          <div className="space-y-4">
            {suspiciousActivities.map((activity) => (
              <div
                key={activity.id}
                className={`border rounded-lg p-4 ${getSeverityColor(activity.severity)}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h4 className="font-medium mr-3">{activity.appName}</h4>
                      <span className="text-xs px-2 py-1 bg-white/50 rounded uppercase">
                        {activity.severity}
                      </span>
                    </div>
                    <p className="text-sm mb-2">{activity.issue}</p>
                    <div className="flex items-center text-xs space-x-4">
                      <span>{activity.timestamp}</span>
                      <span>•</span>
                      <span>{activity.accesses} access attempts</span>
                    </div>
                  </div>
                  <button className="text-sm px-3 py-1 bg-white rounded hover:bg-gray-50 border">
                    Investigate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audit Logs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg mb-1">Audit Logs</h3>
              <p className="text-sm text-gray-600">Complete activity history and compliance records</p>
            </div>
            <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              <Download className="w-4 h-4 mr-2" />
              Export Logs
            </button>
          </div>

          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 text-sm text-gray-600">Action</th>
                  <th className="text-left px-4 py-3 text-sm text-gray-600">User</th>
                  <th className="text-left px-4 py-3 text-sm text-gray-600">Application</th>
                  <th className="text-left px-4 py-3 text-sm text-gray-600">Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {auditLogs.map((log) => (
                  <tr key={log.id} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">{log.action}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{log.user}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{log.app}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{log.timestamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
