import { SignInButton } from "@clerk/clerk-react";
import { ArrowRight, MonitorCloud } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-primary/20 bg-base-100/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          title="Go to home"
          className="group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.03]"
        >
          <div className="relative rounded-xl bg-gradient-to-br from-primary via-secondary to-accent p-[2px] shadow-md">
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

        {/* Auth Button */}
        <SignInButton mode="modal">
          <button className="btn btn-primary btn-lg">
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </span>

            {/* subtle hover overlay */}
            <span
              aria-hidden
              className="absolute inset-0 rounded-lg bg-base-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </button>
        </SignInButton>
      </div>
    </nav>
  );
};

export default Navbar;
