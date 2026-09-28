import { Project, SkillCategory, CertificateItem, AcademicExperience } from '../types';

export const PERSONAL_INFO = {
  name: "Serah Mukami",
  title: "Business Information Technology Student & Aspiring Tech Professional",
  institution: "Kabarak University",
  diploma: "Diploma in Business Information Technology (DBIT)",
  status: "Final Semester — 2026",
  attachmentStatus: "Open to Industrial Attachment Opportunities — 2027",
  location: "Nakuru, Kenya",
  email: "mukamiserah4@gmail.com",
  phone: "+254 7XX XXX XXX",
  linkedin: "https://linkedin.com/in/serah-mukami",
  github: "https://github.com/serahmukami",
  heroIntro: "I am a Diploma in Business Information Technology student at Kabarak University with an interest in technology, business information systems, data, and practical digital solutions. I enjoy using technology to solve real-world business problems and create useful digital experiences.",
  aboutMe: "I am currently pursuing a Diploma in Business Information Technology at Kabarak University. My studies have given me exposure to both business and information technology, allowing me to understand how technology can support organizations, improve processes, manage information, and solve business problems.\n\nI am particularly interested in business technology, databases, data analysis, software applications, networking, and digital solutions.\n\nI am looking forward to gaining practical industry experience through industrial attachment and continuing to develop my technical and professional skills.",
  attachmentIntro: "I am seeking an opportunity to gain practical industry experience where I can apply the knowledge gained through my Diploma in Business Information Technology while learning from experienced professionals.",
  cvFileName: "Serah_Mukami_DBIT_CV.pdf"
};

export const STATISTICS_DATA = [
  { label: "Diploma", value: "DBIT" },
  { label: "Institution", value: "Kabarak University" },
  { label: "Field", value: "Business Information Technology" },
  { label: "Attachment", value: "Seeking 2027 Opportunity" },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Business & Productivity",
    description: "Enterprise office suites and organizational productivity tools for business reporting and administrative operations.",
    skills: [
      {
        name: "Microsoft Word",
        description: "Professional business documentation, formal reports, and standardized office correspondence.",
        level: "Proficient",
        useCase: "Business reporting & documentation"
      },
      {
        name: "Microsoft Excel",
        description: "Spreadsheets, mathematical modeling, formula automation, financial calculations, and data visualization.",
        level: "Proficient",
        useCase: "Financial worksheets & numerical modeling"
      },
      {
        name: "Microsoft PowerPoint",
        description: "Executive presentation decks, technical diagrams, and structured stakeholder slide decks.",
        level: "Proficient",
        useCase: "Corporate & academic presentations"
      },
      {
        name: "Microsoft Access",
        description: "Relational database structuring, entry forms, parameter queries, and automated reporting.",
        level: "Intermediate",
        useCase: "Small-to-medium enterprise data management"
      },
      {
        name: "Computer Applications",
        description: "Operating systems management, file systems, enterprise hardware essentials, and digital utilities.",
        level: "Proficient",
        useCase: "General IT operations & office computing"
      }
    ]
  },
  {
    category: "Programming",
    description: "Software engineering logic, desktop client programming, and procedural application design.",
    skills: [
      {
        name: "VB.NET",
        description: "Event-driven programming, GUI form construction, database connections, and business logic execution.",
        level: "Academic Core",
        useCase: "Desktop business application systems"
      },
      {
        name: "Desktop Application Programming",
        description: "Component architecture, user event handlers, validation logic, and local data persistence.",
        level: "Academic Core",
        useCase: "Internal office software & records utilities"
      },
      {
        name: "C Programming Fundamentals",
        description: "Procedural logic, control flow, data structures, pointer memory awareness, and algorithm foundations.",
        level: "Foundational",
        useCase: "Algorithmic thinking & system fundamentals"
      },
      {
        name: "Web Development Fundamentals",
        description: "HTML5 semantic markup, CSS styling rules, responsive layout design, and client interactivity.",
        level: "Foundational",
        useCase: "Web information portals & UI design"
      }
    ]
  },
  {
    category: "Databases",
    description: "Relational data modeling, schema normalization, query processing, and data integrity safeguards.",
    skills: [
      {
        name: "SQL",
        description: "Structured Query Language: SELECT queries, JOIN operations, data grouping, subqueries, and table constraints.",
        level: "Intermediate",
        useCase: "Relational database querying & data extraction"
      },
      {
        name: "Database Management",
        description: "Entity-Relationship (ER) diagramming, 1NF-3NF normalization, transactional integrity, and primary/foreign key indexing.",
        level: "Academic Core",
        useCase: "Enterprise information architecture"
      },
      {
        name: "Microsoft Access",
        description: "Table schema design, multi-table relationships, parameter queries, forms, and business reporting.",
        level: "Intermediate",
        useCase: "Rapid database design & reporting"
      }
    ]
  },
  {
    category: "Networking",
    description: "Computer communication architectures, local network infrastructure, and protocols.",
    skills: [
      {
        name: "Networking Fundamentals",
        description: "OSI 7-layer model, TCP/IP protocol suite, IPv4 addressing, subnetting basics, LAN topologies, router/switch configuration concepts, and cabling.",
        level: "Academic Core",
        useCase: "Office LAN setup, connectivity & IT support"
      }
    ]
  },
  {
    category: "Data & Analytics",
    description: "Quantitative methods, business metrics evaluation, and structured decision support.",
    skills: [
      {
        name: "Data Analysis",
        description: "Descriptive statistics, data cleaning, trend identification, pivot analysis, and chart generation for business insight.",
        level: "Intermediate",
        useCase: "Business performance evaluation & metrics"
      },
      {
        name: "Business Information Systems",
        description: "Enterprise Resource Planning (ERP) concepts, Management Information Systems (MIS), Decision Support Systems (DSS), and process modeling.",
        level: "Academic Core",
        useCase: "Strategic alignment of IT with organizational goals"
      }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "bizinfo-corner",
    title: "Bizinfo Corner",
    category: "Business Intelligence & Web",
    status: "Featured",
    description: "Bizinfo Corner is a business-focused digital platform concept designed to help people understand business growth, access useful business information, and explore technology-driven approaches to improving business performance.",
    fullDescription: "Bizinfo Corner combines Business Information Technology concepts with modern digital product development. It explores how digital dashboards and structured business knowledge repositories empower small enterprises and emerging entrepreneurs to make data-informed operational decisions.",
    tags: [
      "Business Intelligence",
      "Business Technology",
      "Web Development",
      "Digital Solutions",
      "Data"
    ],
    imageUrl: "/src/assets/images/bizinfo_corner_preview_1790609213907.jpg",
    liveUrl: "#",
    githubUrl: "#",
    businessImpact: "Addresses information fragmentation in emerging businesses by consolidating growth metrics, operational checklists, and technology integration guidelines into one accessible portal.",
    keyFeatures: [
      "Curated business information directory categorized by growth stage",
      "Interactive technology adoption framework for small and medium businesses",
      "Key performance indicator (KPI) tracking reference models",
      "Modern, responsive web layout optimized for mobile and desktop access"
    ]
  },
  {
    id: "database-management-project",
    title: "Database Management Project",
    category: "Databases & SQL",
    status: "Academic Project",
    description: "Comprehensive relational database schema and SQL implementation designed to model real-world business transactions, inventory tracking, and customer management.",
    fullDescription: "Built as part of the core Database Management coursework at Kabarak University. It emphasizes normalization (up to 3NF), entity-relationship integrity, stored queries, and transactional consistency.",
    tags: ["SQL", "Relational Database", "Data Modeling", "Normalization", "Kabarak DBIT"],
    businessImpact: "Demonstrates practical data integrity enforcement, preventing redundant entries and supporting rapid management queries.",
    keyFeatures: [
      "Entity-Relationship (ER) diagram for business entity mapping",
      "Normalized schema preventing update, deletion, and insertion anomalies",
      "Complex SQL queries featuring multi-table JOINs and aggregated reporting",
      "Indexed primary and foreign keys for optimized lookup performance"
    ]
  },
  {
    id: "vbnet-desktop-application",
    title: "VB.NET Desktop Application",
    category: "Software Development",
    status: "Academic Project",
    description: "Interactive Windows desktop application with graphical user interface (GUI) developed in VB.NET for processing organizational records and routine data entry workflows.",
    fullDescription: "Constructed during Desktop Application Programming coursework, focusing on event-driven architecture, form validation, error trapping, and data-bound controls for clerical staff.",
    tags: ["VB.NET", "Desktop Application", "GUI Design", "Event-Driven", "Business Logic"],
    businessImpact: "Streamlines manual record-keeping by providing structured input forms, automated input validation, and instant summary calculations.",
    keyFeatures: [
      "Intuitive Windows Forms user interface with accessible tab navigation",
      "Form validation ensuring proper data types before submission",
      "CRUD operations (Create, Read, Update, Delete) on operational records",
      "Error handling routines ensuring reliable user session continuity"
    ]
  },
  {
    id: "ms-access-database-project",
    title: "Microsoft Access Database Project",
    category: "Databases & Productivity",
    status: "Academic Project",
    description: "Complete business information management system built with Microsoft Access, incorporating relational tables, automated forms, parameter queries, and printable invoice reports.",
    fullDescription: "Developed to demonstrate how small business organizations can quickly deploy accessible database solutions using Microsoft Access without costly infrastructure.",
    tags: ["Microsoft Access", "Relational Tables", "Form Design", "Query Automation", "Reports"],
    businessImpact: "Provides an all-in-one desktop database solution for tracking sales, customers, and inventory with minimal training required for office personnel.",
    keyFeatures: [
      "Relational table design with enforced referential integrity",
      "User-friendly navigation dashboard with custom button macros",
      "Custom query filters for date-range and category filtering",
      "Printable management summary and invoice layout reports"
    ]
  },
  {
    id: "data-analysis-project",
    title: "Data Analysis Project",
    category: "Data & Analytics",
    status: "Coming Soon",
    description: "Quantitative analysis project focused on cleaning, examining, and visualizing business datasets using Microsoft Excel and data analytics techniques to identify operational trends.",
    fullDescription: "In active preparation for upcoming coursework, exploring descriptive statistics, pivot table syntheses, scenario modeling, and executive summary charts.",
    tags: ["Data Analysis", "Excel Modeling", "Business Intelligence", "Visualization", "Coming Soon"],
    businessImpact: "Translates raw operational records into actionable charts and metrics that illuminate revenue cycles and cost drivers.",
    keyFeatures: [
      "Raw data cleansing and categorical normalization workflows",
      "Pivot tables and dynamic pivot charts for multi-dimensional analysis",
      "Correlation and trend evaluation across key business indicators",
      "Executive summary dashboard highlighting strategic takeaways"
    ]
  },
  {
    id: "networking-project",
    title: "Networking Project",
    category: "Networking & Infrastructure",
    status: "Academic Project",
    description: "Practical computer network architecture design and subnetting plan configured for a multi-department enterprise office environment.",
    fullDescription: "Completed under Networking Fundamentals at Kabarak University. Covers IP addressing design (IPv4 subnetting), VLAN segmentation, router/switch connectivity, and basic network security measures.",
    tags: ["Networking", "Subnetting", "TCP/IP", "LAN Topology", "Infrastructure"],
    businessImpact: "Ensures secure, departmental separation of network traffic while maintaining seamless connectivity to shared printers and internal servers.",
    keyFeatures: [
      "Hierarchical network topology design (Core, Distribution, Access)",
      "Variable Length Subnet Masking (VLSM) for efficient address allocation",
      "LAN configuration documentation and topology diagrams",
      "Verification testing checklist for ping latency and routing pathways"
    ]
  }
];

export const EDUCATION_DATA = {
  institution: "Kabarak University",
  location: "Nakuru, Kenya",
  program: "Diploma in Business Information Technology (DBIT)",
  status: "Final Semester — 2026",
  period: "2024 – 2026",
  description: "A dual-discipline program bridging business administration, management principles, and modern information technology infrastructure. Cultivates skills in organizational systems, software development, data management, and business analytics.",
  areasOfStudy: [
    "Database Management",
    "Desktop Application Programming",
    "Quantitative Techniques",
    "Business Law",
    "Principles of Marketing",
    "Business Management",
    "Networking",
    "Computer Applications",
    "Data-related subjects"
  ],
  secondaryEducation: {
    institution: "Secondary Education (Kenya)",
    qualification: "Kenya Certificate of Secondary Education (KCSE)",
    status: "Completed",
    period: "Pre-University",
    description: "Strong academic foundation in sciences, mathematics, languages, and humanities providing the basis for Business Information Technology studies."
  }
};

export const ATTACHMENT_DATA = {
  title: "Industrial Attachment",
  statusBadge: "Seeking Industrial Attachment Opportunity — 2027",
  quote: "I am seeking an opportunity to gain practical industry experience where I can apply the knowledge gained through my Diploma in Business Information Technology while learning from experienced professionals.",
  availability: "Available from: 2027 Academic Attachment Window",
  targetDuration: "8 – 12 Weeks (Full-time)",
  targetDepartments: [
    "Information Technology / ICT Support",
    "Database Administration & Data Management",
    "Business Systems & ERP Operations",
    "Network Infrastructure & Helpdesk",
    "Digital Business Operations & Administration"
  ],
  futureFields: [
    { label: "Organization", placeholder: "To be updated upon placement" },
    { label: "Department", placeholder: "ICT / Business Information Systems" },
    { label: "Attachment Period", placeholder: "2027 Attachment Window" },
    { label: "Supervisor", placeholder: "Industry Attachment Mentor" },
    { label: "Responsibilities", placeholder: "Hands-on IT tasks, systems support & database tasks" },
    { label: "Skills Acquired", placeholder: "Enterprise IT workflows, team collaboration, systems troubleshooting" },
    { label: "Projects Completed", placeholder: "Workplace technical contributions and attachment portfolio report" }
  ]
};

export const ACADEMIC_EXPERIENCE_DATA: AcademicExperience[] = [
  {
    id: "business-tech-projects",
    title: "Business Technology Projects",
    focusArea: "Information Systems & Digital Strategy",
    institution: "Kabarak University",
    period: "2024 – 2026",
    description: "Evaluated how organizations leverage technology architectures to optimize customer engagement, streamline supply chain tracking, and automate clerical tasks.",
    outcomes: [
      "Analyzed workflow bottlenecks and proposed digital system enhancements",
      "Researched technology adoption strategies for Kenyan micro and small enterprises",
      "Developed business case proposals demonstrating return on IT investment"
    ]
  },
  {
    id: "database-sql-practice",
    title: "Database & SQL Practice",
    focusArea: "Relational Modeling & Querying",
    institution: "Kabarak University Lab Exercises",
    period: "2024 – 2026",
    description: "Hands-on database laboratory sessions creating schemas, normalizing tables to 3NF, establishing primary and foreign key constraints, and executing complex SQL queries.",
    outcomes: [
      "Constructed entity-relationship diagrams (ERDs) for enterprise scenarios",
      "Authored multi-table SELECT, JOIN, GROUP BY, and HAVING queries",
      "Ensured data consistency through integrity checks and transaction concepts"
    ]
  },
  {
    id: "desktop-app-dev",
    title: "Desktop Application Development",
    focusArea: "Software Programming & GUI Construction",
    institution: "Kabarak University Coursework",
    period: "2024 – 2026",
    description: "Engineered desktop-based records management software using VB.NET. Focused on component layout, user validation algorithms, and event-driven logic.",
    outcomes: [
      "Implemented modular forms with structured tab sequences and input masks",
      "Constructed input sanitization algorithms to prevent runtime application crashes",
      "Bridged desktop frontend user interfaces with structured file/database records"
    ]
  },
  {
    id: "ms-office-business-apps",
    title: "Microsoft Office & Business Applications",
    focusArea: "Office Automation & Administrative Computing",
    institution: "Kabarak University",
    period: "2024 – 2026",
    description: "Applied Microsoft Office Suite (Word, Excel, PowerPoint, Access) to simulated corporate scenarios, mastering advanced formulas, mail merges, and slide decks.",
    outcomes: [
      "Engineered automated Excel worksheets utilizing VLOOKUP, INDEX/MATCH, and pivot tables",
      "Drafted standardized formal business documents, letters, and executive reports in Word",
      "Constructed complete relational inventory databases with forms and reports in Access"
    ]
  },
  {
    id: "networking-fundamentals",
    title: "Networking Fundamentals",
    focusArea: "Network Architecture & Infrastructure",
    institution: "Kabarak University Network Lab",
    period: "2024 – 2026",
    description: "Studied the fundamental mechanics of computer data exchange across local area networks (LANs), packet structures, IP addressing, and physical media cabling.",
    outcomes: [
      "Calculated classful and classless IPv4 subnets for departmental IP partitioning",
      "Mapped OSI 7-layer and TCP/IP protocols to practical network diagnostics",
      "Practiced basic switch/router port verification and troubleshooting methodologies"
    ]
  }
];

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: "cert-1",
    title: "Certificate / Course 1",
    issuer: "Professional Certification Placeholder",
    date: "Planned / In Progress",
    status: "Placeholder",
    category: "Business Information Systems",
  },
  {
    id: "cert-2",
    title: "Certificate / Course 2",
    issuer: "Technical Skills Certification Placeholder",
    date: "Planned / In Progress",
    status: "Placeholder",
    category: "Database & SQL Management",
  },
  {
    id: "cert-3",
    title: "Certificate / Course 3",
    issuer: "Industry Credential Placeholder",
    date: "Planned / In Progress",
    status: "Placeholder",
    category: "IT Support & Networking",
  },
  {
    id: "workshop-1",
    title: "Workshop / Training",
    issuer: "Kabarak University / Industry Seminar",
    date: "2025 – 2026",
    status: "Placeholder",
    category: "Professional Development & Tech Workshops",
  }
];
