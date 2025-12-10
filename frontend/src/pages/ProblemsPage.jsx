import { Link } from "react-router";
import Navbar from "../components/Navbar";
import { PROBLEMS } from "../data/problems";
import {
  ChevronRightIcon,
  Code2Icon,
  Brain,
  Trophy,
  Target,
  Zap,
} from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";

function ProblemsPage() {
  const problems = Object.values(PROBLEMS);

  const easyProblemsCount = problems.filter(
    (p) => p.difficulty === "Easy"
  ).length;
  const mediumProblemsCount = problems.filter(
    (p) => p.difficulty === "Medium"
  ).length;
  const hardProblemsCount = problems.filter(
    (p) => p.difficulty === "Hard"
  ).length;

  return (
    <div className="min-h-screen bg-base-200 selection:bg-primary selection:text-primary-content">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* HEADER SECTION */}
        <div className="text-center mb-10 space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Practice Problems
          </h1>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Sharpen your algorithmic thinking and coding skills with our curated
            collection of challenges.
          </p>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {/* Total */}
          <div className="card bg-base-100 shadow-md border-b-4 border-primary">
            <div className="card-body p-4 flex flex-row items-center justify-between gap-2">
              <div>
                <div className="text-xs font-bold text-base-content/50 uppercase tracking-wider">
                  Total
                </div>
                <div className="text-2xl font-black">{problems.length}</div>
              </div>
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Brain className="size-6" />
              </div>
            </div>
          </div>

          {/* Easy */}
          <div className="card bg-base-100 shadow-md border-b-4 border-success">
            <div className="card-body p-4 flex flex-row items-center justify-between gap-2">
              <div>
                <div className="text-xs font-bold text-base-content/50 uppercase tracking-wider">
                  Easy
                </div>
                <div className="text-2xl font-black">{easyProblemsCount}</div>
              </div>
              <div className="p-2 bg-success/10 rounded-lg text-success">
                <Zap className="size-6" />
              </div>
            </div>
          </div>

          {/* Medium */}
          <div className="card bg-base-100 shadow-md border-b-4 border-warning">
            <div className="card-body p-4 flex flex-row items-center justify-between gap-2">
              <div>
                <div className="text-xs font-bold text-base-content/50 uppercase tracking-wider">
                  Medium
                </div>
                <div className="text-2xl font-black">{mediumProblemsCount}</div>
              </div>
              <div className="p-2 bg-warning/10 rounded-lg text-warning">
                <Target className="size-6" />
              </div>
            </div>
          </div>

          {/* Hard */}
          <div className="card bg-base-100 shadow-md border-b-4 border-error">
            <div className="card-body p-4 flex flex-row items-center justify-between gap-2">
              <div>
                <div className="text-xs font-bold text-base-content/50 uppercase tracking-wider">
                  Hard
                </div>
                <div className="text-2xl font-black">{hardProblemsCount}</div>
              </div>
              <div className="p-2 bg-error/10 rounded-lg text-error">
                <Trophy className="size-6" />
              </div>
            </div>
          </div>
        </div>

        {/* PROBLEMS LIST */}
        <div className="space-y-4">
          {problems.map((problem) => (
            <Link
              key={problem.id}
              to={`/problem/${problem.id}`}
              className="group block"
            >
              <div className="card bg-base-100 border border-base-300 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/40 hover:-translate-y-1">
                <div className="card-body p-6">
                  <div className="flex items-start md:items-center justify-between gap-6">
                    {/* Left: Icon & Info */}
                    <div className="flex flex-1 items-start gap-5">
                      <div className="hidden sm:flex size-14 rounded-2xl bg-base-200 items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        <Code2Icon className="size-7 opacity-70 group-hover:opacity-100" />
                      </div>

                      <div className="space-y-2 flex-1">
                        <div className="flex items-center flex-wrap gap-2">
                          <h2 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {problem.title}
                          </h2>
                          <span
                            className={`badge badge-sm font-medium ${getDifficultyBadgeClass(
                              problem.difficulty
                            )}`}
                          >
                            {problem.difficulty}
                          </span>
                          <span className="text-xs text-base-content/40 font-mono">
                            • {problem.category}
                          </span>
                        </div>
                        <p className="text-sm text-base-content/70 line-clamp-2 leading-relaxed">
                          {problem.description.text}
                        </p>
                      </div>
                    </div>

                    {/* Right: Action Button */}
                    <div className="flex items-center self-center">
                      <button className="btn btn-ghost btn-circle group-hover:bg-primary/10 group-hover:text-primary transition-all">
                        <ChevronRightIcon className="size-6 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProblemsPage;
