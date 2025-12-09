import { SignInButton } from "@clerk/clerk-react";
import { ArrowRight, CheckIcon, VideoIcon, ZapIcon } from "lucide-react";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* left content */}
        <div className="space-y-6">
          <div className="badge badge-primary badge-lg gap-2">
            <ZapIcon className="size-4" /> Real-Time Collaboration
          </div>
          <h1 className="text-5xl lg:text-7xl font-black leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Code Together,
            </span>
            <br />
            <span className="text-base-content">Learn Together</span>
          </h1>
          <p className="text-xl text-base-content/70 leading-relaxed max-w-xl">
            The ultimate platform for learning and collaborating on coding
            projects. With CodeBridge, you can learn new skills, collaborate
            with others, and stay motivated.
          </p>
          {/* feature pills */}
          <div className="flex flex-wrap gap-3">
            <div className="badge badge-lg badge-outline gap-2">
              <CheckIcon className="size-4" /> Live Video Chat
            </div>
            <div className="badge badge-lg badge-outline gap-2">
              <CheckIcon className="size-4" /> Code Editor
            </div>
            <div className="badge badge-lg badge-outline gap-2">
              <CheckIcon className="size-4" /> Multi-Language
            </div>
          </div>
          {/* CTA Button  */}
          <div className="flex gap-6">
            <SignInButton mode="modal">
              <button className="btn btn-primary btn-lg">
                Start Coding Now
                <ArrowRight className="size-5" />
              </button>
            </SignInButton>
            <button className="btn btn-outline btn-lg">
              <VideoIcon className="size-5" />
              Watch Demo
            </button>
          </div>
          {/* Stats */}
          <div className="stats stats-vertical lg:stats-horizontal bg-base-100 shadow-lg">
            <div className="stat">
              <div className="stat-value text-primary">10K+</div>
              {/* Removed redundant 'stat' class */}
              <div className="stat-title">Active Users</div>
            </div>

            <div className="stat">
              <div className="stat-value text-secondary">10K+</div>
              <div className="stat-title">Sessions</div>
            </div>

            <div className="stat">
              <div className="stat-value text-accent">99.9%</div>
              <div className="stat-title">Uptime</div>
            </div>
          </div>
        </div>

        {/* right content*/}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 backdrop-blur-sm border border-primary/20 shadow-xl" />
          <img src="/hero.png" alt="Hero Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
