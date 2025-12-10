import { SignInButton, useUser, UserButton } from "@clerk/clerk-react";
import { ArrowRight, MonitorCloud, LayoutDashboard, Code2 } from "lucide-react";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const { pathname } = useLocation();
  const { isSignedIn } = useUser();

  return (
    <nav className="sticky top-0 z-50 border-b border-base-300/50 bg-base-100/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to={isSignedIn ? "/dashboard" : "/"}
          title="Go to home"
          className="group flex items-center gap-3 transition-all duration-300 hover:opacity-90"
        >
          <div className="relative rounded-xl bg-gradient-to-br from-primary via-secondary to-accent p-[2px] shadow-lg shadow-primary/20">
            <div className="rounded-lg bg-base-100 p-2">
              <MonitorCloud className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
            </div>
          </div>

          <div className="flex flex-col leading-tight">
            <span className="font-extrabold text-xl tracking-wide text-base-content font-mono">
              CodeBridge
            </span>
            <span className="text-sm font-medium text-base-content/60">
              Code together
            </span>
          </div>
        </Link>

        {/* Conditional Buttons */}
        <div className="flex items-center gap-4">
          {pathname === "/" ? (
            <SignInButton mode="modal">
              <button className="btn btn-primary btn-md gap-2 shadow-lg shadow-primary/30 group transition-all hover:scale-[1.02]">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </SignInButton>
          ) : (
            <>
              {isSignedIn && (
                <div className="flex items-center gap-3">
                  <Link
                    to="/problems"
                    className={`btn font-medium gap-2 text-primary bg-base-200/50 ${
                      pathname === "/problems" ? "btn-accent" : ""
                    }`}
                  >
                    <Code2 className="w-4 h-4" />
                    Problems
                  </Link>

                  <Link
                    to="/dashboard"
                    className={`btn font-medium gap-2 text-primary bg-base-200/50 ${
                      pathname === "/dashboard" ? "btn-accent" : ""
                    }`}
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    Dashboard
                  </Link>

                  <div className="pl-2 border-l border-base-300">
                    <UserButton
                      appearance={{
                        elements: {
                          avatarBox: "w-9 h-9 border border-base-300",
                        },
                      }}
                    />
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
