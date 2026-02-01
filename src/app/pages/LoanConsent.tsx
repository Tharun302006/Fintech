import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Shield, CheckCircle, AlertCircle, FileText, Database, Users, Check, X, Clock } from "lucide-react";

interface ConsentItem {
  id: string;
  title: string;
  description: string;
  required: boolean;
  status: "waiting" | "approved" | "revoked";
}

export function LoanConsent() {
  const navigate = useNavigate();
  const { loanType } = useParams();
  const loanId = new URLSearchParams(window.location.search).get("loanId") || "LN-2026-1234-ABCD";

  const [consents, setConsents] = useState<ConsentItem[]>([
    {
      id: "data_access",
      title: "Financial Data Access",
      description: "Allow FinGuard to access your financial transaction history, account balances, and loan details to provide personalized services.",
      required: true,
      status: "waiting",
    },
    {
      id: "credit_report",
      title: "Credit Report Access",
      description: "Authorize retrieval of your credit report from credit bureaus (CIBIL, Experian, Equifax) for loan processing and risk assessment.",
      required: true,
      status: "waiting",
    },
    {
      id: "third_party_sharing",
      title: "Third-Party Data Sharing",
      description: "Consent to share your loan and financial data with approved third-party lenders, partners, and service providers for loan processing.",
      required: true,
      status: "waiting",
    },
    {
      id: "identity_verification",
      title: "Identity Verification",
      description: "Permission to verify your identity using PAN, Aadhaar, and other government-issued documents through authorized verification services.",
      required: true,
      status: "waiting",
    },
    {
      id: "communication",
      title: "Communication Consent",
      description: "Agree to receive loan updates, payment reminders, and account notifications via email, SMS, and push notifications.",
      required: false,
      status: "approved",
    },
    {
      id: "analytics",
      title: "Analytics and Insights",
      description: "Allow FinGuard to analyze your financial behavior to provide personalized loan recommendations and financial insights.",
      required: false,
      status: "waiting",
    },
  ]);

  const handleConsentApprove = (id: string) => {
    setConsents(
      consents.map((consent) =>
        consent.id === id ? { ...consent, status: "approved" } : consent
      )
    );
  };

  const handleConsentRevoke = (id: string) => {
    setConsents(
      consents.map((consent) =>
        consent.id === id ? { ...consent, status: "revoked" } : consent
      )
    );
  };

  const allRequiredConsentsGiven = consents
    .filter((c) => c.required)
    .every((c) => c.status === "approved");

  const handleSubmit = () => {
    if (allRequiredConsentsGiven) {
      navigate("/dataguard");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(`/loan-details/${loanType}?loanId=${loanId}`)}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Loan Details
            </button>
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-sm">FinGuard</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl mb-2">Data Consent & Permissions</h1>
          <p className="text-gray-600">
            Review and approve data access permissions for your loan application
          </p>
        </div>

        {/* Consent Information */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
            <div>
              <h3 className="text-sm mb-2">Why We Need Your Consent</h3>
              <p className="text-xs text-gray-700">
                Your data privacy is our priority. We require your explicit consent to access and process
                your financial information. You have full control over what data is shared and can revoke
                access at any time through the FinGuard dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* Consent Items */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center mb-6">
            <FileText className="w-5 h-5 text-gray-700 mr-2" />
            <h2 className="text-lg">Consent Items</h2>
          </div>

          <div className="space-y-6">
            {consents.map((consent) => (
              <div
                key={consent.id}
                className={`border rounded-lg p-5 transition-all ${ 
                  consent.status === "approved"
                    ? "border-green-300 bg-green-50"
                    : consent.status === "revoked"
                    ? "border-red-300 bg-red-50"
                    : "border-yellow-300 bg-yellow-50"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-sm mr-2">{consent.title}</h3>
                      {consent.required && (
                        <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">
                          Required
                        </span>
                      )}
                      {consent.status === "approved" && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded ml-2 flex items-center">
                          <Check className="w-3 h-3 mr-1" />
                          Approved
                        </span>
                      )}
                      {consent.status === "revoked" && (
                        <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded ml-2 flex items-center">
                          <X className="w-3 h-3 mr-1" />
                          Revoked
                        </span>
                      )}
                      {consent.status === "waiting" && (
                        <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded ml-2 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          Waiting
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600">{consent.description}</p>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3 mt-4">
                  {consent.status === "approved" ? (
                    <button
                      type="button"
                      onClick={() => handleConsentRevoke(consent.id)}
                      className="flex items-center justify-center px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <X className="w-4 h-4 mr-1" />
                      Revoke
                    </button>
                  ) : consent.status === "revoked" ? (
                    <button
                      type="button"
                      onClick={() => handleConsentApprove(consent.id)}
                      className="flex items-center justify-center px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <Check className="w-4 h-4 mr-1" />
                      Approve
                    </button>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() => handleConsentApprove(consent.id)}
                        className="flex items-center justify-center px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <Check className="w-4 h-4 mr-1" />
                        Approve
                      </button>
                      <button
                        type="button"
                        onClick={() => handleConsentRevoke(consent.id)}
                        className="flex items-center justify-center px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors"
                      >
                        <X className="w-4 h-4 mr-1" />
                        Revoke
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 text-center">
            <Database className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-xs text-gray-500 mb-1">Data Points</p>
            <p className="text-lg">{consents.filter((c) => c.status === "approved").length}</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 text-center">
            <Shield className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <p className="text-xs text-gray-500 mb-1">Required</p>
            <p className="text-lg">{consents.filter((c) => c.required).length}</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 text-center">
            <Users className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <p className="text-xs text-gray-500 mb-1">Optional</p>
            <p className="text-lg">{consents.filter((c) => !c.required).length}</p>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="text-sm mb-3">Important Information</h3>
          <ul className="text-xs text-gray-600 space-y-2 ml-4 list-disc">
            <li>All consents marked as "Required" must be approved to proceed with loan disbursement</li>
            <li>Optional consents enhance your experience but are not mandatory for loan processing</li>
            <li>You can modify or revoke your consent anytime from the FinGuard Privacy dashboard</li>
            <li>Your data will be encrypted and stored securely in compliance with RBI guidelines</li>
            <li>We will never share your data with unauthorized third parties</li>
          </ul>
        </div>

        {/* Validation Warning */}
        {!allRequiredConsentsGiven && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
              <p className="text-sm text-yellow-800">
                Please approve all required consents to continue
              </p>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate(`/loan-details/${loanType}?loanId=${loanId}`)}
            className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            disabled={!allRequiredConsentsGiven}
            className={`flex-1 py-3 rounded-lg transition-colors flex items-center justify-center ${
              allRequiredConsentsGiven
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {allRequiredConsentsGiven ? (
              <>
                <CheckCircle className="w-5 h-5 mr-2" />
                Submit Consent & Continue
              </>
            ) : (
              "Submit Consent & Continue"
            )}
          </button>
        </div>

        {/* Privacy Notice */}
        <div className="mt-8 p-4 bg-white border border-gray-200 rounded-lg">
          <p className="text-xs text-gray-600 text-center">
            🔒 By submitting this form, you agree to FinGuard's{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Service
            </a>
            . Your data is protected with bank-grade encryption.
          </p>
        </div>
      </div>
    </div>
  );
}