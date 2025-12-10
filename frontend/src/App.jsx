import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ProblemsPage from "./pages/ProblemsPage";
import { SignedIn, useUser } from "@clerk/clerk-react";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/DashboardPage";
import LoadingSkeletonEffect from "./components/LoadingSkeletonEffect";

const App = () => {
  const { isSignedIn, isLoaded } = useUser();

  // Show loading state with flickering effect
  if (!isLoaded) {
    return <LoadingSkeletonEffect />;
  }

  return (
    <>
      <Routes>
        {/* Home - public page */}
        <Route
          path="/"
          element={!isSignedIn ? <HomePage /> : <Navigate to="/dashboard" />}
        />

        {/* Dashboard - protected (signed-in users only) */}
        <Route
          path="/dashboard"
          element={isSignedIn ? <Dashboard /> : <Navigate to="/" />}
        />

        {/* Problems - protected (signed-in users only) */}
        <Route
          path="/problems"
          element={isSignedIn ? <ProblemsPage /> : <Navigate to="/" />}
        />

        {/* Catch all - redirect to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
