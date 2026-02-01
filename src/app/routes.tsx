import { createMemoryRouter } from "react-router";
import { Login } from "@/app/pages/Login";
import { Dashboard } from "@/app/pages/Dashboard";
import { Verification } from "@/app/pages/Verification";
import { LoanSelection } from "@/app/pages/LoanSelection";
import { LoanIdEntry } from "@/app/pages/LoanIdEntry";
import { LoanDetails } from "@/app/pages/LoanDetails";
import { LoanConsent } from "@/app/pages/LoanConsent";
import { DataGuardDashboard } from "@/app/pages/DataGuardDashboard";
import { AdminDashboard } from "@/app/pages/AdminDashboard";
import { AIRiskDashboard } from "@/app/pages/AIRiskDashboard";
import { FinancialSummary } from "@/app/pages/FinancialSummary";

export const router = createMemoryRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/verification/:action",
    element: <Verification />,
  },
  {
    path: "/loan-selection",
    element: <LoanSelection />,
  },
  {
    path: "/loan-id/:loanType",
    element: <LoanIdEntry />,
  },
  {
    path: "/loan-details/:loanType",
    element: <LoanDetails />,
  },
  {
    path: "/loan-consent/:loanType",
    element: <LoanConsent />,
  },
  {
    path: "/dataguard",
    element: <DataGuardDashboard />,
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
  },
  {
    path: "/ai-risk",
    element: <AIRiskDashboard />,
  },
  {
    path: "/financial-summary",
    element: <FinancialSummary />,
  },
]);