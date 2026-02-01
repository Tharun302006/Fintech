import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Brain, AlertTriangle, CheckCircle, TrendingUp, Shield, Sparkles } from "lucide-react";

interface AppRiskProfile {
  id: string;
  appName: string;
  riskScore: number;
  accessFrequency: string;
  dataSensitivity: "high" | "medium" | "low";
  lastAccess: string;
  totalAccesses: number;
  unusualActivity: boolean;
}

export function AIRiskDashboard() {
  const navigate = useNavigate();

  const [apps, setApps] = useState<AppRiskProfile[]>([
    {
      id: "1",
      appName: "BudgetWise",
      riskScore: 85,
      accessFrequency: "Very High - 156 accesses/month",
      dataSensitivity: "high",
      lastAccess: "2 hours ago",
      totalAccesses: 156,
      unusualActivity: true,
    },
    {
      id: "2",
      appName: "DataMiner Pro",
      riskScore: 92,
      accessFrequency: "Critical - 456 accesses/month",
      dataSensitivity: "high",
      lastAccess: "15 minutes ago",
      totalAccesses: 456,
      unusualActivity: true,
    },
    {
      id: "3",
      appName: "LoanTracker Pro",
      riskScore: 45,
      accessFrequency: "Normal - 24 accesses/month",
      dataSensitivity: "medium",
      lastAccess: "1 day ago",
      totalAccesses: 24,
      unusualActivity: false,
    },
    {
      id: "4",
      appName: "TaxHelper India",
      riskScore: 28,
      accessFrequency: "Low - 8 accesses/month",
      dataSensitivity: "medium",
      lastAccess: "3 days ago",
      totalAccesses: 8,
      unusualActivity: false,
    },
    {
      id: "5",
      appName: "InvestSmart",
      riskScore: 15,
      accessFrequency: "Minimal - 2 accesses/month",
      dataSensitivity: "low",
      lastAccess: "1 week ago",
      totalAccesses: 2,
      unusualActivity: false,
    },
  ]);

  const aiRecommendations = [
    {
      id: "1",
      type: "critical",
      title: "Revoke access from DataMiner Pro",
      description: "This app has accessed your data 456 times this month, which is 280% above normal patterns for similar apps.",
      action: "Revoke Now",
      impact: "High Risk Reduction",
    },
    {
      id: "2",
      type: "warning",
      title: "Reduce permissions for BudgetWise",
      description: "Access frequency has increased by 45% in the last week. Consider limiting data scope to essential information only.",
      action: "Review Permissions",
      impact: "Medium Risk Reduction",
    },
    {
      id: "3",
      type: "info",
      title: "Consent renewal recommended",
      description: "3 apps have consent expiring in the next 30 days. Review and renew to maintain uninterrupted service.",
      action: "Review Consents",
      impact: "Prevent Service Disruption",
    },
    {
      id: "4",
      type: "info",
      title: "Enable multi-factor authentication",
      description: "Add an extra layer of security for high-risk applications accessing sensitive financial data.",
      action: "Enable MFA",
      impact: "Enhanced Security",
    },
  ];

  const getRiskColor = (score: number) => {
    if (score >= 80) return "text-red-600";
    if (score >= 60) return "text-orange-600";
    if (score >= 40) return "text-yellow-600";
    return "text-green-600";
  };

  const getRiskBgColor = (score: number) => {
    if (score >= 80) return "bg-red-100";
    if (score >= 60) return "bg-orange-100";
    if (score >= 40) return "bg-yellow-100";
    return "bg-green-100";
  };

  const getRiskLabel = (score: number) => {
    if (score >= 80) return "Critical Risk";
    if (score >= 60) return "High Risk";
    if (score >= 40) return "Medium Risk";
    return "Low Risk";
  };

  const getRecommendationStyle = (type: string) => {
    switch (type) {
      case "critical":
        return "border-red-200 bg-red-50";
      case "warning":
        return "border-orange-200 bg-orange-50";
      default:
        return "border-blue-200 bg-blue-50";
    }
  };

  const getRecommendationIcon = (type: string) => {
    switch (type) {
      case "critical":
        return <AlertTriangle className="w-5 h-5 text-red-600" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-orange-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center text-white/90 hover:text-white mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </button>
          <div className="flex items-center py-6">
            <Brain className="w-12 h-12 mr-4" />
            <div>
              <h1 className="text-3xl mb-1">AI-Powered Risk Analysis</h1>
              <p className="text-purple-100">Advanced privacy risk scoring and intelligent recommendations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overall Risk Score */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg p-8 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90 mb-2">Your Overall Privacy Risk Score</p>
              <p className="text-5xl mb-2">67/100</p>
              <p className="text-sm opacity-75">Medium Risk - Action recommended</p>
            </div>
            <div className="text-right">
              <Shield className="w-16 h-16 opacity-50 mb-2 ml-auto" />
              <p className="text-sm">Based on AI analysis of</p>
              <p className="text-sm">5 connected applications</p>
            </div>
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <Sparkles className="w-6 h-6 mr-2 text-purple-600" />
            <h2 className="text-2xl">AI Recommendations</h2>
          </div>

          <div className="grid gap-4">
            {aiRecommendations.map((rec) => (
              <div
                key={rec.id}
                className={`border rounded-lg p-6 ${getRecommendationStyle(rec.type)}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      {getRecommendationIcon(rec.type)}
                      <h3 className="text-lg ml-2">{rec.title}</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">{rec.description}</p>
                    <div className="flex items-center space-x-4">
                      <button
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          rec.type === "critical"
                            ? "bg-red-600 text-white hover:bg-red-700"
                            : rec.type === "warning"
                            ? "bg-orange-600 text-white hover:bg-orange-700"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                      >
                        {rec.action}
                      </button>
                      <span className="text-xs text-gray-600">Impact: {rec.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* App Risk Profiles */}
        <div>
          <div className="mb-6">
            <h2 className="text-2xl mb-2">Application Risk Profiles</h2>
            <p className="text-gray-600">AI-generated privacy risk scores for each connected application</p>
          </div>

          <div className="space-y-4">
            {apps
              .sort((a, b) => b.riskScore - a.riskScore)
              .map((app) => (
                <div key={app.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-lg mr-3">{app.appName}</h3>
                        {app.unusualActivity && (
                          <span className="flex items-center text-xs px-2 py-1 bg-red-100 text-red-700 rounded">
                            <AlertTriangle className="w-3 h-3 mr-1" />
                            Unusual Activity
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{app.accessFrequency}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>Last access: {app.lastAccess}</span>
                        <span>•</span>
                        <span>Total: {app.totalAccesses} accesses</span>
                        <span>•</span>
                        <span className="capitalize">
                          Data sensitivity: {app.dataSensitivity}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${getRiskBgColor(app.riskScore)} mb-2`}>
                        <span className={`text-2xl ${getRiskColor(app.riskScore)}`}>
                          {app.riskScore}
                        </span>
                      </div>
                      <p className={`text-xs ${getRiskColor(app.riskScore)}`}>
                        {getRiskLabel(app.riskScore)}
                      </p>
                    </div>
                  </div>

                  {/* Risk Score Bar */}
                  <div className="mb-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all ${
                          app.riskScore >= 80
                            ? "bg-red-600"
                            : app.riskScore >= 60
                            ? "bg-orange-600"
                            : app.riskScore >= 40
                            ? "bg-yellow-600"
                            : "bg-green-600"
                        }`}
                        style={{ width: `${app.riskScore}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* AI Insights */}
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                    <div className="flex items-start">
                      <Brain className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-gray-700">
                        <span className="font-medium">AI Insight:</span>{" "}
                        {app.riskScore >= 80
                          ? "This app shows critical risk patterns. Immediate action recommended."
                          : app.riskScore >= 60
                          ? "High access frequency detected. Consider reviewing permissions."
                          : app.riskScore >= 40
                          ? "Normal usage patterns with moderate data sensitivity."
                          : "Low risk profile. This app follows secure access patterns."}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
