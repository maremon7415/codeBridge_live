import { Video, Code2, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Video,
      title: "HD Video Call",
      description:
        "Crystal clear video and audio for seamless communication during interviews",
      color: "from-primary/20 to-primary/5",
    },
    {
      icon: Code2,
      title: "Live Code Editor",
      description:
        "Collaborate in real-time with syntax highlighting and multiple language support",
      color: "from-secondary/20 to-secondary/5",
    },
    {
      icon: Users,
      title: "Easy Collaboration",
      description:
        "Share your screen, discuss solutions, and learn from each other in real-time",
      color: "from-accent/20 to-accent/5",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-black mb-4">
          Everything You Need to{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Succeed
          </span>
        </h2>
        <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
          Powerful features designed to make your coding interviews seamless and
          productive
        </p>
      </div>

      {/* FEATURES GRID */}
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="group relative card bg-base-100/80 backdrop-blur-sm border border-primary/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* gradient overlay on hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-br ${feature.color} blur-xl`}
                aria-hidden="true"
              />

              <div className="card-body items-center text-center relative z-10">
                {/* Icon container with gradient bg */}
                <div
                  className={`size-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-500`}
                >
                  <Icon className="size-8 text-primary" />
                </div>

                <h3 className="card-title text-xl font-bold text-base-content">
                  {feature.title}
                </h3>
                <p className="text-base-content/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
