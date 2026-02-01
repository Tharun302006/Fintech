import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Shield, User, Mail, Phone, MapPin, Calendar, IndianRupee, FileText, CheckCircle, UserCheck } from "lucide-react";

export function LoanDetails() {
  const navigate = useNavigate();
  const { loanType } = useParams();
  const loanId = new URLSearchParams(window.location.search).get("loanId") || "LN-2026-1234-ABCD";

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

  // Mock user and loan data
  const userData = {
    name: "Rajesh Kumar",
    email: "rajesh.kumar@example.com",
    phone: "+91 98765 43210",
    address: "123, MG Road, Bangalore, Karnataka - 560001",
    panCard: "ABCDE1234F",
    aadhaar: "1234 5678 9012",
  };

  const loanData = {
    loanId: loanId,
    loanType: getLoanTitle(),
    appliedDate: "January 15, 2026",
    amount: "₹5,00,000",
    tenure: "5 Years",
    interestRate: "8.5% p.a.",
    monthlyEMI: "₹10,234",
    status: "Approved",
    disbursementDate: "February 1, 2026",
    purpose: loanType === "student" ? "Higher Education" : loanType === "home" ? "Property Purchase" : "Personal Use",
  };

  // Surety/Guarantor information
  const suretyData = {
    name: "Priya Sharma",
    relationship: "Mother",
    email: "priya.sharma@example.com",
    phone: "+91 98765 12345",
    panCard: "XYZPQ5678M",
    aadhaar: "9876 5432 1098",
    address: "456, Koramangala, Bangalore, Karnataka - 560034",
    occupation: "Government Employee",
    monthlyIncome: "₹75,000",
  };

  const handleContinue = () => {
    navigate(`/loan-consent/${loanType}?loanId=${loanId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(`/loan-id/${loanType}`)}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </button>
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-sm">FinGuard</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Status Banner */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
          <div className="flex items-center">
            <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
            <div>
              <p className="text-sm text-green-800">
                <span className="font-medium">Loan Application {loanData.status}</span>
              </p>
              <p className="text-xs text-green-600 mt-1">
                Your {loanData.loanType} application has been successfully approved
              </p>
            </div>
          </div>
        </div>

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Loan Details</h1>
          <p className="text-gray-600">Review your loan information and applicant details</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-6">
              <User className="w-5 h-5 text-blue-600 mr-2" />
              <h2 className="text-lg">Personal Information</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-500 uppercase">Full Name</label>
                <p className="text-sm text-gray-900 mt-1">{userData.name}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-500 uppercase">PAN Card</label>
                  <p className="text-sm text-gray-900 mt-1 font-mono">{userData.panCard}</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase">Aadhaar</label>
                  <p className="text-sm text-gray-900 mt-1 font-mono">{userData.aadhaar}</p>
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500 uppercase flex items-center">
                  <Mail className="w-3 h-3 mr-1" /> Email
                </label>
                <p className="text-sm text-gray-900 mt-1">{userData.email}</p>
              </div>

              <div>
                <label className="text-xs text-gray-500 uppercase flex items-center">
                  <Phone className="w-3 h-3 mr-1" /> Phone
                </label>
                <p className="text-sm text-gray-900 mt-1">{userData.phone}</p>
              </div>

              <div>
                <label className="text-xs text-gray-500 uppercase flex items-center">
                  <MapPin className="w-3 h-3 mr-1" /> Address
                </label>
                <p className="text-sm text-gray-900 mt-1">{userData.address}</p>
              </div>
            </div>
          </div>

          {/* Loan Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-6">
              <FileText className="w-5 h-5 text-blue-600 mr-2" />
              <h2 className="text-lg">Loan Information</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-500 uppercase">Loan ID</label>
                <p className="text-sm text-gray-900 mt-1 font-mono">{loanData.loanId}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-500 uppercase">Loan Type</label>
                  <p className="text-sm text-gray-900 mt-1">{loanData.loanType}</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase">Purpose</label>
                  <p className="text-sm text-gray-900 mt-1">{loanData.purpose}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-500 uppercase flex items-center">
                    <IndianRupee className="w-3 h-3 mr-1" /> Loan Amount
                  </label>
                  <p className="text-lg text-blue-600 mt-1">{loanData.amount}</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase">Monthly EMI</label>
                  <p className="text-lg text-blue-600 mt-1">{loanData.monthlyEMI}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-500 uppercase">Tenure</label>
                  <p className="text-sm text-gray-900 mt-1">{loanData.tenure}</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase">Interest Rate</label>
                  <p className="text-sm text-gray-900 mt-1">{loanData.interestRate}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-500 uppercase flex items-center">
                    <Calendar className="w-3 h-3 mr-1" /> Applied Date
                  </label>
                  <p className="text-sm text-gray-900 mt-1">{loanData.appliedDate}</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase flex items-center">
                    <Calendar className="w-3 h-3 mr-1" /> Disbursement Date
                  </label>
                  <p className="text-sm text-gray-900 mt-1">{loanData.disbursementDate}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <label className="text-xs text-gray-500 uppercase">Status</label>
                  <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                    {loanData.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Surety/Guarantor Information */}
        <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-6">
            <UserCheck className="w-5 h-5 text-purple-600 mr-2" />
            <h2 className="text-lg">Surety / Guarantor Details</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-500 uppercase">Full Name</label>
                <p className="text-sm text-gray-900 mt-1">{suretyData.name}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-500 uppercase">Relationship</label>
                  <p className="text-sm text-gray-900 mt-1">{suretyData.relationship}</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase">Occupation</label>
                  <p className="text-sm text-gray-900 mt-1">{suretyData.occupation}</p>
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500 uppercase flex items-center">
                  <Mail className="w-3 h-3 mr-1" /> Email
                </label>
                <p className="text-sm text-gray-900 mt-1">{suretyData.email}</p>
              </div>

              <div>
                <label className="text-xs text-gray-500 uppercase flex items-center">
                  <Phone className="w-3 h-3 mr-1" /> Phone
                </label>
                <p className="text-sm text-gray-900 mt-1">{suretyData.phone}</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-500 uppercase">PAN Card</label>
                  <p className="text-sm text-gray-900 mt-1 font-mono">{suretyData.panCard}</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase">Aadhaar</label>
                  <p className="text-sm text-gray-900 mt-1 font-mono">{suretyData.aadhaar}</p>
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500 uppercase flex items-center">
                  <IndianRupee className="w-3 h-3 mr-1" /> Monthly Income
                </label>
                <p className="text-sm text-gray-900 mt-1">{suretyData.monthlyIncome}</p>
              </div>

              <div>
                <label className="text-xs text-gray-500 uppercase flex items-center">
                  <MapPin className="w-3 h-3 mr-1" /> Address
                </label>
                <p className="text-sm text-gray-900 mt-1">{suretyData.address}</p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-xs text-green-700">Verified Guarantor</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-sm mb-3 flex items-center">
            <Shield className="w-4 h-4 text-blue-600 mr-2" />
            Data Consent Required
          </h3>
          <p className="text-sm text-gray-700 mb-4">
            To proceed with your loan disbursement, you need to provide consent for data sharing and access permissions. This ensures transparent management of your financial data.
          </p>
          <ul className="text-xs text-gray-600 space-y-1 ml-4 list-disc">
            <li>Review and approve data access permissions</li>
            <li>Manage consent for third-party applications</li>
            <li>Control your financial data privacy</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4">
          <button
            onClick={() => navigate(`/loan-id/${loanType}`)}
            className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
          <button
            onClick={handleContinue}
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Continue to Data Consent
          </button>
        </div>
      </div>
    </div>
  );
}