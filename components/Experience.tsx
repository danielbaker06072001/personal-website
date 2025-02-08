"use client";

export default function WorkExperience() {
const experiences = [
    {
        title: "Software Developer",
        company: "Weallnet",
        duration: "February 2021 - August 2024",
        website: "https://www.weallnet.com/vi",
        points: [
            "Developed frontend using .NET MVC and KnockoutJS, achieving a 30% improvement in user experience.",
            "Led backend API development in Golang, enhancing scalability and maintainability by 25%.",
            "Optimized data management with Redis, CDN, and S3, improving data retrieval speed by 40%.",
            "Recruited and led a team of 3, managing frontend and backend projects, and aligning with company business goals.",
        ],
    },
    {
        title: "Software Developer Intern",
        company: "Eco Giong",
        duration: "August 2021 - September 2021",
        website: "https://www.giong.cafe/cafe-giong",
        points: [
            "Reduced workload by 20% for coffee franchiser by developing React applications for internal systems.",
            "Streamlined manual processes by replacing handwritten customer orders with automated digital workflows.",
            "Improved order accuracy by 99% and service speed by 50% through a QR-code tracking solutions.",
        ],
    },
];

  return (
    <section id="work-experience" className="relative flex flex-col items-center w-full min-h-screen py-20 bg-black text-white">
      {/* Floating Glowing Background */}
      <div className="absolute inset-0 bg-grid-blue opacity-20 pointer-events-none"></div>

      {/* Section Title */}
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-10 sm:mb-12 md:mb-14 tracking-wider text-center">
        Work Experience
      </h2>

      {/* Experience Cards */}
      <div className="w-full max-w-5xl space-y-12 z-10 px-4 sm:px-6 lg:px-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative group p-6 md:p-8 border border-gray-700 bg-gray-900/40 backdrop-blur-lg rounded-lg shadow-md transition-transform hover:-translate-y-2 duration-300"
          >
            {/* Glowing Edge Effect */}
            <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg blur-md pointer-events-none"></div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-semibold text-white">{exp.title}</h3>
                <p className="text-lg text-cyan-400">{exp.company} | {exp.duration}</p>
              </div>

              {/* View Button for Website Link */}
              <button
                onClick={() => window.open(exp.website, "_blank")}
                className="px-4 py-2 text-sm font-semibold text-cyan-400 border border-cyan-400 rounded-md hover:bg-cyan-400 hover:text-black transition-all"
              >
                [View]
              </button>
            </div>

            <ul className="mt-4 space-y-3 text-gray-300">
              {exp.points.map((point, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-cyan-300 mr-2">◉</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CSS Background Grid */}
      <style jsx>{`
        .bg-grid-blue {
          background-image: linear-gradient(rgba(0, 255, 255, 0.15) 1px, transparent 1px),
                            linear-gradient(to right, rgba(0, 255, 255, 0.15) 1px, transparent 1px);
          background-size: 80px 80px;
        }
      `}</style>
    </section>
  );
}
