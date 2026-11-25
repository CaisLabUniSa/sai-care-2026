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
    "Fabiola De Marco",
    "Computer Science Department, University of Salerno, Italy",
    "fdemarco@unisa.it",
  ],
  [
    "Huiru Zheng",
    "School of Computing, Ulster University, UK",
    "h.zheng@ulster.ac.uk",
  ],
  [
    "Alessia Auriemma Citarella",
    "Computer Science Department, University of Salerno, Italy",
    "aauriemmacitarella@unisa.it",
  ],
];

const committee = [
  [
    "Genoveffa Tortora",
    "Pharmacy Department, University of Salerno, Italy",
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
    "Engineering and Sciences Department, Universitas Mercatorum, Italy",
    "daniela.dauria@unimercatorum.it",
  ],
  [
    "Luigia Rizzo",
    "Computer Science Department, University of Salerno, Italy",
    "lrizzo@unisa.it",
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
  "https://web.cvent.com/event/73d40c21-f8e3-4333-bc96-765e49bbf02a/summary/";

const bibmWebsiteUrl =
  "https://www3.cs.stonybrook.edu/~bibm2026/";


const workshopMeetUrl = "https://meet.google.com/kzn-zfey-vrc";
const workshopProgramPdfUrl = "/SAI-CARE-program.pdf";

const workshopProgram = [
  ["09:00 – 09:15", "Opening", ""],
  ["09:15 – 09:35", "Bounded Expert Review in Neuro-Symbolic Melanoma Diagnosis: Selective Concept Correction Under a Fixed Diagnostic Rule", "Semanto Mondal, Antonino Ferraro, Martina Iammarino, Angelo Lorusso, Fabiano Pecorelli, and Giuseppe De Pietro"],
  ["09:35 – 09:55", "ThoughtLens: A Voice-Based Large Language Model for the Preliminary Assessment of Thought and Language Disorders", "Rita Francese and Genoveffa Tortora"],
  ["09:55 – 10:15", "Combining Language Models and Classifiers for Reliable Routing of Clinical Notes", "Giulio Leone and Daniela D'Auria"],
  ["10:15 – 10:35", "Safe Retraining of Brain Tumour MRI Classifiers with LLM Proposals and Statistical Gating", "Giulio Leone and Daniela D'Auria"],
  ["10:35 – 10:50", "Coffee Break", ""],
  ["10:50 – 11:10", "From Prompt to Policy: Controlling LLM Transformations in Healthcare Communication", "Madalina Georgeta Ciobanu and Fausto Fasano"],
  ["11:10 – 11:30", "Same Risk, Different Explanations: Auditing Cross-Model XAI Consistency in Cardiovascular Prediction", "Anna Maria De Roberto, Domenico Rossi, Luigia Rizzo, and Genoveffa Tortora"],
  ["11:30 – 11:50", "Protein Classification via Graph Neural Networks on PPI Networks of Neurodegenerative Diseases", "Emanuele Falanga, Alessia Auriemma Citarella, Fabiola De Marco, and Genoveffa Tortora"],
  ["11:50 – 12:00", "Closing Remarks", ""],
];

const personImageFileNames = {
  "Daniela D’Auria": "Daniela Dauria.png",
  "Luigi D’Arco": "Luigi Darco.png",
};

const getPersonImagePath = (name) => {
  const fileName = personImageFileNames[name] ?? `${name}.png`;

  return `/img_png_workshop/${encodeURIComponent(fileName)}`;
};

const getInitials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
