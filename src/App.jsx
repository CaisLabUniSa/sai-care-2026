const topics = [
  "AI-driven diagnostic tools in healthcare",
  "Applications of AI models in personalized medicine",
  "Explainable AI in biomedical informatics",
  "Implementing AI algorithms for medical imaging analysis",
  "Natural language processing in healthcare informatics",
  "Predictive analytics for disease prevention and early detection",
  "AI-powered drug discovery and development",
  "Challenges and opportunities in integrating AI into clinical workflows",
  "The role of AI in improving healthcare delivery and patient outcomes",
  "AI for biomarker-guided drug development and precision therapeutics",
  "AI for omic sciences",
  "AI for multi-omics integration and systems biology",
];

const dates = [
  ["Submission Deadline", "Sep 20, 2026"],
  ["Notification of Acceptance", "Oct 10, 2026"],
  ["Camera-ready Deadline", "Oct 25, 2026"],
  ["Workshops", "Dec 1–4, 2026"],
];

const programChairs = [
  [
    "Huiru Zheng",
    "School of Computing, Ulster University, UK",
    "h.zheng@ulster.ac.uk",
  ],
  [
    "Fabiola De Marco",
    "University of Salerno, Italy",
    "fdemarco@unisa.it",
  ],
  [
    "Alessia Auriemma Citarella",
    "University of Salerno, Italy",
    "aauriemmacitarella@unisa.it",
  ],
];

const committee = [
  [
    "Genoveffa Tortora",
    "Computer Science Department, University of Salerno, Italy",
    "tortora@unisa.it",
  ],
  [
    "Mengyuan Wang",
    "School of Health and Life Sciences, Teesside University, UK",
    "Mengyuan.Wang@tees.ac.uk",
  ],
  [
    "Haiying Wang",
    "School of Computing, Ulster University, UK",
    "hy.wang@ulster.ac.uk",
  ],
  [
    "Luigi Di Biasi",
    "Computer Science Department, University of Salerno, Italy",
    "ldibiasi@unisa.it",
  ],
  [
    "Daniela D’Auria",
    "Universitas Mercatorum, Italy",
    "daniela.dauria@unimercatorum.it",
  ],
  [
    "Luigia Rizzo",
    "Computer Science Department, University of Salerno, Italy",
    "lrizzo@unisa.it",
  ],
  [
    "Huiru Zheng",
    "School of Computing, Ulster University, UK",
    "h.zheng@ulster.ac.uk",
  ],
  [
    "Luigi D’Arco",
    "Electrical Engineering and Information Technology Department, University of Federico II, Italy",
    "luigi.darco@unina.it",
  ],
];

const webChair = [
  "Domenico Rossi",
  "Computer Science Department, University of Salerno, Italy",
  "dorossi@unisa.it",
];

const workshopIdentificationFormUrl =
  "https://forms.gle/ejjhT2U3rdi9xMHU8";

const conferenceRegistrationUrl =
  "https://www3.cs.stonybrook.edu/~bibm2026/";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-slate-900 text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold tracking-tight">SAI-CARE 2026</span>

          <div className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#overview" className="hover:text-white">
              Overview
            </a>
            <a href="#topics" className="hover:text-white">
              Topics
            </a>
            <a href="#cfp" className="hover:text-white">
              Call for Papers
            </a>
            <a href="#dates" className="hover:text-white">
              Dates
            </a>
            <a href="#committee" className="hover:text-white">
              Committee
            </a>
            <a href="#previous" className="hover:text-white">
              Previous
            </a>
            <a
              href={conferenceRegistrationUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              Registration
            </a>
            <a href="#identification-form" className="hover:text-white">
              Workshop Form
            </a>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden pt-32 pb-28 px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.35),transparent_45%)]" />
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          <div className="mx-auto mb-10 max-w-4xl rounded-[2rem] border border-cyan-400/40 bg-black/60 p-5 shadow-2xl shadow-cyan-950/60 backdrop-blur-sm">
            <img
              src="/logo1.png"
              alt="SAI-CARE 2026 logo"
              className="block w-full h-auto rounded-[1.5rem] border border-white/10"
            />
          </div>

          <div className="inline-flex mb-6 px-4 py-2 rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-200 text-sm">
            The 2nd International Workshop on Symbiotic AI in Biomedical Informatics
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            SAI-CARE 2026
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8">
            Integrating Symbiotic AI in Biomedical Informatics: a Workshop on
            Advanced SAI-based Applications in Healthcare.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#cfp"
              className="px-8 py-4 rounded-xl border border-white/15 hover:bg-white/10 transition font-semibold"
            >
              Call for Papers
            </a>

            <a
              href={conferenceRegistrationUrl}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-700 transition font-semibold shadow-lg shadow-violet-900/40"
            >
              Registration
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6 pb-24">
        {[
          ["Conference", "IEEE BIBM 2026"],
          ["Location", "Dallas, Texas"],
          ["Dates", "Dec 1–4, 2026"],
          ["Style", "Hybrid"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center shadow-xl"
          >
            <p className="text-slate-400">{label}</p>
            <h3 className="text-xl font-semibold mt-2">{value}</h3>
          </div>
        ))}
      </section>

      <section
        id="overview"
        className="max-w-5xl mx-auto px-6 py-20 text-center"
      >
        <h2 className="text-4xl font-bold mb-8">Workshop Overview</h2>

        <div className="space-y-5 text-slate-300 text-lg leading-relaxed">
          <p>
            The integration of Artificial Intelligence into the biomedical field
            represents a groundbreaking frontier in both research and the
            practical application of medicine. With the exponential growth of
            biomedical data, AI has emerged as a crucial tool for analyzing vast
            amounts of information, uncovering complex hidden patterns, and
            supporting critical clinical decisions.
          </p>

          <p>
            Symbiotic AI explores the synergistic relationship between
            artificial intelligence systems and human users, aiming to enhance
            collaboration and coexistence between the two entities. This
            symbiotic relationship empowers healthcare professionals with
            advanced analytical capabilities, supporting more accurate
            diagnoses, personalized treatment plans, and optimized patient care
            pathways.
          </p>

          <p>
            The second edition of SAI-CARE aims to explore the synergy between
            Symbiotic AI and biomedical informatics, emphasizing the integration
            of AI technologies into reliable Symbiotic Computer-Aided Diagnosis
            systems.
          </p>

          <p>
            The goal of the workshop is to bring together researchers
            specializing in AI for bioinformatics, biomedicine, and healthcare
            informatics to share and discuss the latest advancements in
            methodologies and applications.
          </p>
        </div>
      </section>

      <section id="topics" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-10">
          Topics of Interest
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {topics.map((topic) => (
            <div
              key={topic}
              className="rounded-2xl bg-slate-900/80 border border-white/10 p-5 hover:border-violet-400/50 transition"
            >
              {topic}
            </div>
          ))}
        </div>
      </section>

      <section id="cfp" className="max-w-5xl mx-auto px-6 py-20">
        <div className="rounded-3xl bg-violet-600/10 border border-violet-400/30 p-8 md:p-12">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-center mb-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
                Call for Papers
              </h2>

              <div className="inline-flex mb-4 px-4 py-2 rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-200 text-sm">
                In conjunction with
              </div>

              <p className="text-violet-200 text-lg md:text-xl leading-relaxed">
                IEEE International Conference on Bioinformatics and Biomedicine
                (BIBM)
              </p>
            </div>

            <a
              href={conferenceRegistrationUrl}
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl bg-white p-5 shadow-2xl shadow-black/30 hover:scale-[1.02] transition"
            >
              <img
                src="/IEEEBIBM-logo2026.jpg"
                alt="IEEE BIBM 2026 logo"
                className="block w-full h-auto"
              />
            </a>
          </div>

          <div className="space-y-5 text-slate-300 text-lg leading-relaxed">
            <p>
              SAI-CARE 2026 invites original contributions on the integration of
              Artificial Intelligence into healthcare and biomedical informatics,
              with a particular focus on Symbiotic AI systems and advanced
              SAI-based applications in healthcare.
            </p>

            <p>
              The workshop welcomes contributions on reliable and explainable
              AI, Symbiotic Computer-Aided Diagnosis systems, clinical decision
              support, medical imaging, natural language processing, predictive
              analytics, personalized medicine, drug discovery, omic sciences,
              multi-omics integration, and precision therapeutics.
            </p>

            <p>
              Participants will explore how Symbiotic Computer-Aided Diagnosis
              systems can enhance diagnostic accuracy, treatment planning, and
              patient care pathways within the biomedical informatics landscape.
            </p>

            <p>
              Papers should follow the official IEEE Computer Society
              Proceedings Manuscript Formatting Guidelines. Further submission
              instructions will be provided according to the host conference
              requirements.
            </p>
          </div>
        </div>
      </section>

      <section id="dates" className="max-w-6xl mx-auto px-6 py-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-violet-400/40 bg-gradient-to-br from-violet-700/25 via-slate-950 to-black p-8 md:p-12 shadow-2xl shadow-violet-950/60">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.35),transparent_35%)]" />
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <div className="inline-flex mb-5 px-4 py-2 rounded-full border border-violet-400/40 bg-violet-500/15 text-violet-100 text-sm">
                  Key deadlines
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                  Important Dates
                </h2>

                <p className="text-slate-300 mt-4 max-w-2xl text-lg leading-relaxed">
                  Please pay special attention to the full paper submission
                  deadline. All workshop deadlines are listed below.
                </p>
              </div>

              <a
                href="#cfp"
                className="inline-flex justify-center px-6 py-3 rounded-xl border border-violet-400/40 text-violet-100 hover:bg-violet-500/10 transition font-semibold"
              >
                View Call for Papers
              </a>
            </div>

            <div className="grid lg:grid-cols-4 gap-5">
              <div className="lg:col-span-2 rounded-3xl bg-violet-600/20 border border-violet-300/40 p-8 shadow-xl shadow-violet-950/40">
                <div className="inline-flex mb-5 px-3 py-1 rounded-full bg-violet-400/20 border border-violet-300/30 text-violet-100 text-sm">
                  Main deadline
                </div>

                <p className="text-slate-300 text-lg">
                  Submission Deadline
                </p>

                <p className="text-4xl md:text-5xl font-extrabold mt-3">
                  Sep 20, 2026
                </p>

                <p className="text-slate-400 mt-5 leading-relaxed">
                  Due date for full workshop paper submission.
                </p>
              </div>

              <div className="rounded-3xl bg-black/35 border border-white/10 p-6 hover:border-violet-400/50 transition">
                <p className="text-slate-400 text-sm">
                  Notification of Acceptance
                </p>
                <p className="text-2xl font-bold mt-3">Oct 10, 2026</p>
              </div>

              <div className="rounded-3xl bg-black/35 border border-white/10 p-6 hover:border-violet-400/50 transition">
                <p className="text-slate-400 text-sm">
                  Camera-ready Deadline
                </p>
                <p className="text-2xl font-bold mt-3">Oct 25, 2026</p>
              </div>

              <div className="lg:col-span-4 rounded-3xl bg-white/5 border border-white/10 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-slate-400 text-sm">Workshop Dates</p>
                  <p className="text-3xl font-bold mt-2">Dec 1–4, 2026</p>
                </div>

                <div className="text-slate-300 md:text-right">
                  <p className="font-semibold">IEEE BIBM 2026</p>
                  <p className="text-slate-400">
                    Dallas, Texas · Hybrid format
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="committee" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-10">
          Program Chairs
        </h2>

        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {programChairs.map(([name, affiliation, email]) => (
            <div
              key={name}
              className="rounded-2xl bg-slate-900 border border-white/10 p-6 text-center"
            >
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-slate-400 mt-2">{affiliation}</p>
              <a
                href={`mailto:${email}`}
                className="text-violet-300 text-sm mt-3 inline-block hover:text-violet-200"
              >
                {email}
              </a>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mb-8">
          Program Committee
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {committee.map(([name, affiliation, email]) => (
            <div
              key={name}
              className="rounded-xl bg-white/5 border border-white/10 p-5"
            >
              <div className="font-semibold">{name}</div>
              <div className="text-slate-400 mt-1">{affiliation}</div>

              {email && (
                <a
                  href={`mailto:${email}`}
                  className="text-violet-300 text-sm mt-2 inline-block hover:text-violet-200"
                >
                  {email}
                </a>
              )}
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mb-8">Web Chair</h2>

        <div className="max-w-xl mx-auto rounded-2xl bg-violet-600/10 border border-violet-400/30 p-6 text-center">
          <h3 className="text-xl font-semibold">{webChair[0]}</h3>
          <p className="text-slate-400 mt-2">{webChair[1]}</p>
          <a
            href={`mailto:${webChair[2]}`}
            className="text-violet-300 text-sm mt-3 inline-block hover:text-violet-200"
          >
            {webChair[2]}
          </a>
        </div>
      </section>

      <section id="previous" className="max-w-5xl mx-auto px-6 py-20">
        <div className="rounded-3xl bg-white/5 border border-white/10 p-8 md:p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Previous Workshop</h2>

          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            The first SAI-CARE workshop was held in conjunction with IEEE BIBM
            2024 in Lisbon, Portugal.
          </p>

          <a
            href="https://caislab.di.unisa.it/sai-care-2024/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex px-6 py-3 rounded-xl border border-violet-400/40 text-violet-200 hover:bg-violet-500/10 transition font-semibold"
          >
            Visit SAI-CARE 2024
          </a>
        </div>
      </section>

      <section id="identification-form" className="max-w-3xl mx-auto px-6 py-20">
        <div className="rounded-3xl bg-slate-900 border border-white/10 p-8 md:p-12 text-center shadow-2xl">
          <div className="inline-flex mb-5 px-4 py-2 rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-200 text-sm">
            Workshop internal form
          </div>

          <h2 className="text-4xl font-bold mb-6">
            Workshop Identification Form
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            This form is intended for internal workshop organization purposes.
            It is not the official conference registration form. Participants
            should use the official conference registration page when it becomes
            available.
          </p>

          <a
            href={workshopIdentificationFormUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-700 transition font-semibold shadow-lg shadow-violet-900/40"
          >
            Open Workshop Identification Form
          </a>

          <p className="text-slate-500 mt-6 text-sm">
            The official conference registration is managed by IEEE BIBM 2026.
          </p>
        </div>
      </section>

      <section id="conference-registration" className="max-w-3xl mx-auto px-6 py-20">
        <div className="rounded-3xl bg-white/5 border border-white/10 p-8 md:p-12 text-center">
          <div className="inline-flex mb-5 px-4 py-2 rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-200 text-sm">
            Conference registration
          </div>

          <h2 className="text-4xl font-bold mb-6">
            Official Registration
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Official registration for SAI-CARE 2026 participants will be handled
            through the IEEE BIBM 2026 conference website. Since the dedicated
            registration section is not yet available, the button currently
            redirects to the main BIBM 2026 website.
          </p>

          <a
            href={conferenceRegistrationUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex px-8 py-4 rounded-xl border border-violet-400/40 text-violet-200 hover:bg-violet-500/10 transition font-semibold"
          >
            Go to IEEE BIBM 2026 Website
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-slate-500">
        <p>
          For inquiries:{" "}
          <a
            href="mailto:biomedical.saicare@gmail.com"
            className="text-violet-300 hover:text-violet-200"
          >
            biomedical.saicare@gmail.com
          </a>
          {" · "}
          <a
            href="mailto:fdemarco@unisa.it"
            className="text-violet-300 hover:text-violet-200"
          >
            fdemarco@unisa.it
          </a>
        </p>

        <p className="mt-2">© 2026 SAI-CARE Workshop</p>
      </footer>
    </div>
  );
}