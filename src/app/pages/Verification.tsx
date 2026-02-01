import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Shield, ArrowLeft } from "lucide-react";

export function Verification() {
  const navigate = useNavigate();
  const { action } = useParams();
  const [name, setName] = useState("");
  const [panCard, setPanCard] = useState("");
  const [aadhaar, setAadhaar] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate based on action type
    if (action === "loans") {
      navigate("/loan-selection");
    } else {
      navigate("/financial-summary");
    }
  };

  const getTitle = () => {
    switch (action) {
      case "loans":
        return "Loan Verification";
      case "transactions":
        return "Transaction Verification";
      case "services":
        return "Service Verification";
      default:
        return "Identity Verification";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate("/dashboard")}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Dashboard
            </button>
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-sm">FinGuard</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl mb-2">{getTitle()}</h1>
          <p className="text-gray-600">Please verify your identity to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 max-w-md mx-auto">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="pan" className="block text-sm mb-2 text-gray-700">
                PAN Card Number
              </label>
              <input
                id="pan"
                type="text"
                value={panCard}
                onChange={(e) => setPanCard(e.target.value.toUpperCase())}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent font-mono"
                placeholder="ABCDE1234F"
                maxLength={10}
                required
              />
              <p className="text-xs text-gray-500 mt-1">10 alphanumeric characters</p>
            </div>

            <div>
              <label htmlFor="aadhaar" className="block text-sm mb-2 text-gray-700">
                Aadhaar Number
              </label>
              <input
                id="aadhaar"
                type="text"
                value={aadhaar}
                onChange={(e) => setAadhaar(e.target.value.replace(/\D/g, ""))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent font-mono"
                placeholder="1234 5678 9012"
                maxLength={12}
                required
              />
              <p className="text-xs text-gray-500 mt-1">12 digit number</p>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Get Started
            </button>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-xs text-gray-600 text-center">
              🔒 Your information is encrypted and secure
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}