import { useNavigate } from "react-router";
import { ArrowLeft, GraduationCap, Book, Plane, Briefcase, Home, Car, Shield, Smartphone, Heart, Building2, Wallet, Factory } from "lucide-react";

export function LoanSelection() {
  const navigate = useNavigate();

  const loanTypes = [
    {
      id: "student",
      title: "Student Loan",
      description: "For undergraduate and graduate studies",
      icon: GraduationCap,
      amount: "Up to ₹10 Lakhs",
    },
    {
      id: "education",
      title: "Education Loan",
      description: "For professional courses and certifications",
      icon: Book,
      amount: "Up to ₹15 Lakhs",
    },
    {
      id: "abroad",
      title: "Abroad Studies Loan",
      description: "For international education programs",
      icon: Plane,
      amount: "Up to ₹50 Lakhs",
    },
    {
      id: "personal",
      title: "Personal Loan",
      description: "For personal expenses and emergencies",
      icon: Briefcase,
      amount: "Up to ₹5 Lakhs",
    },
    {
      id: "home",
      title: "Home Loan",
      description: "For purchasing or constructing property",
      icon: Home,
      amount: "Up to ₹1 Crore",
    },
    {
      id: "vehicle",
      title: "Vehicle Loan",
      description: "For two-wheelers and four-wheelers",
      icon: Car,
      amount: "Up to ₹20 Lakhs",
    },
    {
      id: "business",
      title: "Business Loan",
      description: "For business expansion and operations",
      icon: Building2,
      amount: "Up to ₹50 Lakhs",
    },
    {
      id: "medical",
      title: "Medical Loan",
      description: "For healthcare and medical treatments",
      icon: Heart,
      amount: "Up to ₹10 Lakhs",
    },
    {
      id: "gold",
      title: "Gold Loan",
      description: "Loan against gold ornaments",
      icon: Wallet,
      amount: "Up to ₹25 Lakhs",
    },
    {
      id: "property",
      title: "Loan Against Property",
      description: "Secured loan using property as collateral",
      icon: Building2,
      amount: "Up to ₹2 Crore",
    },
    {
      id: "agriculture",
      title: "Agriculture Loan",
      description: "For farming and agricultural needs",
      icon: Factory,
      amount: "Up to ₹15 Lakhs",
    },
    {
      id: "electronics",
      title: "Electronics Loan",
      description: "For laptops, phones, and gadgets",
      icon: Smartphone,
      amount: "Up to ₹2 Lakhs",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <h1 className="text-3xl mb-2">Select Loan Type</h1>
          <p className="text-gray-600">Choose the loan that best fits your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loanTypes.map((loan) => {
            const Icon = loan.icon;
            return (
              <button
                key={loan.id}
                onClick={() => navigate(`/loan-id/${loan.id}`)}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-left hover:shadow-md hover:border-blue-400 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                    {loan.amount}
                  </span>
                </div>
                <h3 className="text-lg mb-2">{loan.title}</h3>
                <p className="text-sm text-gray-600">{loan.description}</p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}