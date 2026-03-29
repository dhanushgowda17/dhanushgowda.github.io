export const resumeData = {
  basics: {
    name: "Dhanush Gowda RL",
    title: "Data Engineer",
    summary: "Data Engineer with strong Python skills and hands-on experience building scalable AI/ML systems on Azure using Spark, Databricks, and Delta Lake. Skilled in developing production-grade data pipelines for ML workflows and LLM-driven applications. Combines data engineering and ML expertise to deliver end-to-end, high-impact AI solutions.",
    location: "Bengaluru, India",
    email: "dhanush.rangaswamy1@gmail.com",
    phone: "+91 9606772482",
    links: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/dhanush"
      }
    ]
  },
  experience: [
    {
      company: "IBM India Pvt Ltd (Client: Heineken)",
      role: "Data Engineer",
      dates: "Feb 2024 – Present",
      location: "Bengaluru, India",
      bullets: [
        "Designed and optimized end-to-end data pipelines using Azure Data Factory to ingest, transform, and orchestrate structured and unstructured datasets across global business units.",
        "Developed distributed data processing workflows using Databricks + Apache Spark (PySpark) for large-scale analytical workloads.",
        "Implemented Delta Lake based multi-layered data lake architecture (Bronze, Silver, Gold), improving data reliability, governance, and query efficiency.",
        "Automated data validation, monitoring, and error-handling frameworks, reducing manual intervention and improving data quality for analytics and AI model consumption.",
        "Collaborated with data scientists to operationalize ML models by delivering inference-ready datasets and supporting experimentation pipelines in Databricks environments.",
        "Collaborated with cross-functional teams and contributed to CI/CD workflows through Azure DevOps and version-controlled deployments."
      ]
    },
    {
      company: "Hexaware Technologies",
      role: "Associate System Engineer",
      dates: "September 2023 - February 2024",
      location: "Bengaluru, Karnataka, India",
      bullets: [
        "Worked on basic Java and Spring Boot application development",
        "Assisted in creating simple REST APIs and database interactions",
        "Developed basic UI components using HTML, CSS, and JavaScript",
        "Tested features and fixed issues during Project Delivery"
      ]
    },
    {
      company: "Inflow Technologies",
      role: "AI/ML Intern",
      dates: "Jan 2023 – Dec 2023",
      location: "Bengaluru, India",
      bullets: [
        "Built predictive models using XGBoost and Linear Regression to estimate calorie expenditure.",
        "Performed feature engineering and data preprocessing for model training and evaluation.",
        "Gained practical exposure to machine learning workflows, dataset preparation, and performance tuning."
      ]
    }
  ],
  achievements: [],
  projects: [
    {
      title: "Real-Time Data Lakehouse Pipeline on Azure",
      stack: "Azure Data Factory, Databricks, PySpark, Delta Lake, ADLS",
      bullets: [
        "Designed a scalable data ingestion and transformation pipeline to process raw sales data from external source systems into Azure Data Lake Storage (ADLS).",
        "Developed distributed processing notebooks in Databricks (PySpark) for cleansing, deduplication, and business rule transformations.",
        "Implemented a Delta Lake-based Bronze → Silver → Gold layer architecture to support analytics and reporting workloads.",
        "Scheduled workflows and dependency orchestration using Azure Data Factory, enabling fully automated daily refresh."
      ],
      links: []
    },
    {
      title: "Built Custom AI assistants for Specific BAU Use Cases",
      stack: "WatsonX AI, IBM Consulting Advantage",
      bullets: [
        "Built Data Model Auto Draft that transforms Software Design Document(SDD) to Logical Data Model which has saved almost saved 2 sprints worth of time.",
        "Optimized DRS Operation helper which is used for troubleshooting the pipeline error, Databricks workflows.",
        "Built User Manual Generator for PowerBI Reports, which has saved hours of manual work to BI specialists and accelerating project delivery timeline."
      ],
      links: []
    }
  ],
  skills: [
    {
      category: "Programming & Query Languages",
      items: ["Python", "SQL"]
    },
    {
      category: "Big Data & Distributed Processing",
      items: ["Apache Spark (PySpark)", "Databricks", "Delta Lake"]
    },
    {
      category: "Cloud & Storage Platforms",
      items: ["Azure Data Factory", "Azure Databricks", "Azure Data Lake Storage", "Blob Storage"]
    },
    {
      category: "Data Engineering & Pipelines",
      items: ["ETL/ELT Workflows", "Data Lakehouse Architecture", "Data Modeling", "Data Quality Validation", "Data Orchestration"]
    },
    {
      category: "DevOps & CI/CD",
      items: ["Git", "Azure DevOps", "Version Control", "Automated Deployments"]
    },
    {
      category: "Collaboration & Productivity",
      items: ["Jira", "Confluence", "Microsoft Teams", "SharePoint"]
    }
  ],
  education: [
    {
      institution: "SJC Institute of Technology (VTU)",
      degree: "B.E. Computer Science & Engineering | CGPA: 8.3/10",
      dates: "2019 – 2023",
      location: "Bengaluru, India"
    }
  ],
  certifications: [
    "Databricks Certified Data Engineer Associate (2025)",
    "Databricks Certified Associate Developer – Apache Spark (2024)",
    "Microsoft Certified: Azure Data Fundamentals (DP-900) (2024)",
    "Prompt Engineering Certification – IBM Developer Skills Network (2025)"
  ],
  awards: [],
  extra: []
};
