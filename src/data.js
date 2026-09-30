// Update the factual details and add VERIFIED, project-specific repository URLs.
// A blank repoUrl is intentional: it prevents dead/invented links.
export const person = {
  name: 'Dibya Joy Paul',
  displayRole: 'AI Engineer · Robotics & Intelligent Systems',
  tagline: 'Building intelligent systems, from software to machines.',
  location: 'Dhaka, Bangladesh',
  email: 'dibyajoypal@gmail.com',
  github: 'https://github.com/DrChaos1999',
  linkedin: 'https://www.linkedin.com/in/dibya-joy-88343b281/',
  aiCollection: 'https://github.com/DrChaos1999/AI-Engineering-Projects',
  aiNotes: 'https://github.com/DrChaos1999/AI_Engineering_Notes',
  introduction: 'I am a Mechatronics Engineering graduate pursuing an M.Sc. in CSE, majoring in AI Engineering. I develop agentic applications, RAG and retrieval systems, intelligent software, and robotics projects grounded in physical engineering.',
  about: 'My work connects engineering fundamentals — sensing, robotics, controls and digital twins — with modern AI engineering, including tool-using agents, machine-learning experiments, APIs, evaluation and deployment. I enjoy turning an interesting problem into a system that can be measured, explained and improved.',
};

export const projects = [
  {
    id: 'ecoprompt', title: 'EcoPrompt', subtitle: 'Energy-aware prompt optimization',
    category: 'AI', highlight: 'Token efficiency · Evaluation',
    summary: 'Agentic benchmark comparing prompting and rewriting strategies against response quality, tokens and modeled environmental impact.',
    details: [
      'Compared baseline, rule-based, LLM-rewritten and self-correcting tool-use strategies.',
      'Described 11 prompts × 4 models × 4 strategies (176 experiment cells).',
      'Used exact token counting, MLflow/CSV logging, Pytest and statistical tests.',
      'CV reports 13.9–28.7% offline token reduction with quality estimates from 0.92–0.99; inspect the experiment methodology before interpreting these figures.'
    ],
    tags: ['Python','Agentic AI','MLflow','Statistics','Pytest'], repoUrl: '',
  },
  {
    id: 'benvenuto', title: 'Benvenuto', subtitle: 'AI guide for international students',
    category: 'AI', highlight: 'Full-stack · Multimodal',
    summary: 'Student-assistance application combining a React interface, FastAPI services, RAG retrieval and model tool calling.',
    details: [
      'Built with FastAPI and React/Vite.',
      'Includes OpenAI function calling and server-sent event streaming.',
      'Uses ChromaDB, RSS, map data and web information services.',
      'Includes vision, Whisper and text-to-speech integrations described in the CV.'
    ],
    tags: ['FastAPI','React','OpenAI','ChromaDB','RAG'], repoUrl: '',
  },
  {
    id: 'bangla-order-agent', title: 'Bangla Order Agent', subtitle: 'Multilingual order understanding',
    category: 'AI', highlight: 'NLP · Validation',
    summary: 'Processes customer orders in Bangla, Banglish and English with structured validation and downstream operations.',
    details: [
      'Extracts and validates customer order fields.',
      'Checks inventory and pricing data.',
      'Persists structured data in SQLite and generates HTML invoices.',
      'Includes FastAPI/Streamlit interfaces, Docker, tests and CI.'
    ],
    tags: ['Python','FastAPI','Pydantic','SQLite','Docker'], repoUrl: '',
  },
  {
    id: 'semantic-search', title: 'Semantic vs. Keyword Search', subtitle: 'Retrieval comparison app',
    category: 'AI', highlight: 'Search · Embeddings',
    summary: 'A movie search demonstration contrasting keyword matching with vector similarity.',
    details: [
      'Uses OpenAI embeddings indexed with ChromaDB.',
      'Exposes the search flow through FastAPI.',
      'Compares semantic and keyword search results side by side.'
    ],
    tags: ['FastAPI','Embeddings','ChromaDB'], repoUrl: '',
  },
  {
    id: 'tool-calling-agent', title: 'Tool-Calling Agent', subtitle: 'Multi-step tool execution',
    category: 'AI', highlight: 'Agents · Guardrails',
    summary: 'A tool-selection loop providing calculation, weather and time functions with bounded execution.',
    details: [
      'Implements iterative LLM-assisted tool selection.',
      'Uses restricted-AST mathematics parsing.',
      'Records visible execution traces and enforces a six-round guard.'
    ],
    tags: ['Python','LLMs','Tool Calling'], repoUrl: '',
  },
  {
    id: 'notes', title: 'AI Engineering Notes', subtitle: 'Implementation-focused technical knowledge base',
    category: 'AI', highlight: 'Open learning resources',
    summary: 'A growing collection of technical notebooks on building and operating AI-enabled software.',
    details: [
      'Includes OpenAI APIs, asynchronous streaming and LangGraph.',
      'Covers SQL, cloud deployment and distributed-system concepts.',
      'Discusses model latency/cost, transfer learning and operational patterns.'
    ],
    tags: ['Jupyter','Python','LangGraph','SQL'], repoUrl: 'https://github.com/DrChaos1999/AI_Engineering_Notes',
  },
  {
    id: 'jetson-car', title: 'Jetson Nano Self-Driving Car', subtitle: 'Autonomous mobile robot',
    category: 'Robotics', highlight: 'Embedded robotics',
    summary: 'Undergraduate vehicle project using the NVIDIA Jetson Nano computing platform.',
    details: [
      'Worked with a Jetson Nano-based mobile platform.',
      'Explored autonomous driving and the interplay of sensing, control and computation.',
      'Hardware images, source, demonstrations and the exact implemented control pipeline can be added when verified.'
    ],
    tags: ['Jetson Nano','Robotics','Embedded'], repoUrl: '',
  },
  {
    id: 'robot-arm', title: '6-DOF Robotic Arm', subtitle: 'Mechanical robot-arm design',
    category: 'Robotics', highlight: 'CAD · Kinematics',
    summary: 'Mechanical design of a six-degree-of-freedom articulated robot arm in SolidWorks.',
    details: [
      'Produced a six-degree-of-freedom arm design in SolidWorks.',
      'Explored joint structure and mechanical assembly.',
      'CAD renders and documented kinematic models can be added if available.'
    ],
    tags: ['SolidWorks','CAD','Robotics'], repoUrl: '',
  },
  {
    id: 'pid-motor', title: 'PID DC Motor Control', subtitle: 'Feedback speed control',
    category: 'Robotics', highlight: 'Controls · Actuation',
    summary: 'Hand-built DC motor project involving speed regulation through PID feedback.',
    details: [
      'Worked on a DC motor built from scratch.',
      'Applied PID to regulate motor speed.',
      'Original response curves, hardware photographs and gain settings can be added after locating experiment records.'
    ],
    tags: ['PID','DC Motors','Control Systems'], repoUrl: '',
  },
  {
    id: 'line-following', title: 'Line-Following & Wall-Guided Robot', subtitle: 'Sensor-based mobile robotics',
    category: 'Robotics', highlight: 'Sensors · Navigation',
    summary: 'Mobile robot using IR sensor arrays and ultrasonic sensing for line following and wall guidance.',
    details: [
      'Used an infrared sensor array for line tracking.',
      'Used ultrasonic ranging for wall guidance.',
      'Designed behaviors around sensor feedback.'
    ],
    tags: ['IR Sensors','Ultrasonic','Robotics'], repoUrl: '',
  },
  {
    id: 'attendance', title: 'IoT Attendance Counter', subtitle: 'Laser, LDR and NodeMCU',
    category: 'Robotics', highlight: 'IoT · Embedded',
    summary: 'Automated attendance-counting concept using light sensing and a microcontroller.',
    details: [
      'Built around laser and LDR sensing.',
      'Used a NodeMCU-based embedded approach.',
      'Documented as an undergraduate project.'
    ],
    tags: ['IoT','NodeMCU','LDR'], repoUrl: '',
  },
  {
    id: 'gear-analysis', title: 'Spur Gear Stress Analysis', subtitle: 'Mechanical design and simulation',
    category: 'Robotics', highlight: 'Design · Mechanics',
    summary: 'CAD design and stress analysis of a spur gear for engineering applications.',
    details: [
      'Designed a spur gear in SolidWorks.',
      'Explored mechanical stress analysis.',
      'Screenshots, loads, assumptions and results can be incorporated after verification.'
    ],
    tags: ['SolidWorks','Stress Analysis','CAD'], repoUrl: '',
  },
];

export const research = [
  { title: 'Digital Twin-Assisted Fault Detection & Isolation', period: '2022–2023', type: 'Undergraduate thesis', detail: 'An approach for predictive maintenance and fault detection/isolation in pneumatic systems using a digital twin.', tags: ['Digital Twins','Pneumatics','Predictive Maintenance'] },
  { title: 'Industry 5.0: Human–Robot Interaction', period: '2022', type: 'Research case study', detail: 'Review of next-generation human–robot collaboration, enabling technologies and technical challenges.', tags: ['HRI','Industry 5.0','Robotics'] },
  { title: 'Beyond Softmax: Cattle Disease Detection', period: '2025', type: 'ML benchmark', detail: 'Benchmarking CNN and Vision Transformer representations with neural, SVM and XGBoost classifiers.', tags: ['Computer Vision','Transfer Learning','XGBoost'] },
  { title: 'Climate-Related Respiratory Disease Risk', period: '2025', type: 'Data analysis', detail: 'Logistic regression research on climate-related risk thresholds and cross-income model transferability.', tags: ['Logistic Regression','Research','Data Analysis'] },
];

export const experience = [
  {title: 'GRE Quantitative & Verbal Tutor',organization: 'Graduate Resource Enhancing Centre (GREC)',period: 'Jun 2024 – Jul 2025',description:'Delivered five classes per week, developed lecture materials and practice sheets, conducted mock tests and evaluated students.'},
  {title: 'Industrial Trainee',organization: 'Gas Transmission Company Limited',period: 'Undergraduate industrial training',description:'Industrial training listed in the Mechatronics CV. Exact dates, duties and documentation should be added after confirmation.'},
];

export const education = [
  {degree: 'M.Sc. in Computer Science & Engineering',focus: 'Major: AI Engineering',institution: 'United International University',period: 'May 2025 – Present',location:'Dhaka, Bangladesh'},
  {degree: 'B.Sc. in Mechatronics Engineering',focus: 'Robotics · Automation · Control · Embedded Systems',institution: 'Rajshahi University of Engineering & Technology (RUET)',period: 'Jan 2018 – Oct 2023',location:'Rajshahi, Bangladesh'},
];

export const skills = [
  {area:'Programming & Data',items:['Python','C/C++','JavaScript','HTML/CSS','SQL','NumPy','Pandas','SciPy','Matplotlib']},
  {area:'AI / Machine Learning',items:['LLMs','NLP','Agentic AI','PyTorch','TensorFlow','Keras','Computer Vision','SVM','XGBoost','Transfer Learning']},
  {area:'AI Application Engineering',items:['LangGraph','RAG','Embeddings','OpenAI API','FastAPI','Pydantic','ChromaDB','Function Calling','SQLAlchemy']},
  {area:'Software / MLOps',items:['Docker','MLflow','Pytest','Git','GitHub Actions','PostgreSQL','SQLite','REST APIs','Observability']},
  {area:'Robotics / Hardware',items:['PID & Control','Jetson Nano','Arduino','STM32','NodeMCU','Sensors','SolidWorks','MATLAB','Proteus']},
];
