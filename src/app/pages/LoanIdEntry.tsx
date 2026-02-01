import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft, FileText, Shield } from "lucide-react";

export function LoanIdEntry() {
  const navigate = useNavigate();
  const { loanType } = useParams();
  const [loanId, setLoanId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/loan-details/${loanType}?loanId=${loanId}`);
  };

  const getLoanTitle = () => {
    const titles: Record<string, string> = {
      student: "Student Loan",
      education: "Education Loan",
      abroad: "Abroad Studies Loan",
      personal: "Personal Loan",
      home: "Home Loan",
      vehicle: "Vehicle Loan",
      business: "Business Loan",
      medical: "Medical Loan",
      gold: "Gold Loan",
      property: "Loan Against Property",
      agriculture: "Agriculture Loan",
      electronics: "Electronics Loan",
    };
    return titles[loanType || ""] || "Loan";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate("/loan-selection")}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Loan Selection
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl mb-2">Enter Loan ID</h1>
          <p className="text-gray-600">Please provide your {getLoanTitle()} identification number</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 max-w-md mx-auto">
          <div className="space-y-6">
            <div>
              <label htmlFor="loanId" className="block text-sm mb-2 text-gray-700">
                Loan ID Number
              </label>
              <input
                id="loanId"
                type="text"
                value={loanId}
                onChange={(e) => setLoanId(e.target.value.toUpperCase())}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono"
                placeholder="LN-XXXX-XXXX-XXXX"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Enter your unique loan identification number</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-sm text-gray-700 mb-2">📋 Where to find your Loan ID:</p>
              <ul className="text-xs text-gray-600 space-y-1 ml-4 list-disc">
                <li>Check your loan approval letter</li>
                <li>Find it in your email confirmation</li>
                <li>Look in your loan agreement document</li>
              </ul>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Loan Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}