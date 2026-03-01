export type ProjectCategory =
  | "ai-product-engineering"
  | "data-platform-engineering"
  | "data-science-analytics";

export interface ProjectTechTag {
  label: string;
}

export interface PortfolioProject {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: ProjectCategory;
  techTags: ProjectTechTag[];
  impactMetric: string;
  impactLabel: string;
  featured: boolean;
  detailRoute: string | null;
  status: "live" | "archived" | "in-progress";
}

export interface ProjectCategoryMeta {
  id: ProjectCategory;
  label: string;
  description: string;
}

export const projectCategories: ProjectCategoryMeta[] = [
  {
    id: "ai-product-engineering",
    label: "AI Product and Engineering",
    description: "LLM systems, agentic AI, computer vision, production ML",
  },
  {
    id: "data-platform-engineering",
    label: "Data Platform and Engineering",
    description: "Data warehouses, streaming pipelines, orchestration, governance",
  },
  {
    id: "data-science-analytics",
    label: "Data Science and Analytics",
    description: "Forecasting, experimentation, BI platforms, customer analytics",
  },
];

export const portfolioProjects: PortfolioProject[] = [
  // — AI Product and Engineering —
  {
    slug: "enterprise-ocr-pipeline",
    title: "Enterprise OCR Pipeline",
    shortDescription: "Multi-modal document processing system handling 100K+ documents monthly with 95%+ accuracy.",
    fullDescription:
      "Built an end-to-end OCR pipeline using Google Document AI and custom fine-tuned models to extract structured data from invoices, receipts, and financial documents. The system processes over 100K documents monthly with 95%+ accuracy, serving 700K+ SMEs on the Paper.id platform.",
    category: "ai-product-engineering",
    techTags: [
      { label: "Document AI" },
      { label: "Cloud Run" },
      { label: "Python" },
      { label: "FastAPI" },
      { label: "BigQuery" },
    ],
    impactMetric: "100K+",
    impactLabel: "Documents / month",
    featured: true,
    detailRoute: "/solutions/data-ai-product",
    status: "live",
  },
  {
    slug: "agentic-hr-automation",
    title: "Agentic HR Automation",
    shortDescription: "LLM-powered agent that automates HR workflows — from resume screening to onboarding.",
    fullDescription:
      "Designed and deployed an agentic AI system that orchestrates multiple LLM calls to automate HR processes including resume parsing, candidate scoring, interview scheduling, and onboarding document generation. Reduced manual HR effort by 60% for mid-market companies.",
    category: "ai-product-engineering",
    techTags: [
      { label: "LangChain" },
      { label: "GPT-4" },
      { label: "ChromaDB" },
      { label: "FastAPI" },
    ],
    impactMetric: "60%",
    impactLabel: "Reduction in manual HR effort",
    featured: false,
    detailRoute: null,
    status: "live",
  },
  {
    slug: "ai-powered-cicd",
    title: "AI-Powered CI/CD",
    shortDescription: "Intelligent deployment pipeline with AI-driven test selection and rollback prediction.",
    fullDescription:
      "Implemented an AI-augmented CI/CD pipeline that uses ML models to predict deployment risk, prioritize test suites, and auto-rollback on anomaly detection. Reduced deployment time by 60% while maintaining zero critical production incidents over 6 months.",
    category: "ai-product-engineering",
    techTags: [
      { label: "Cloud Build" },
      { label: "Vertex AI" },
      { label: "Docker" },
      { label: "Kubernetes" },
    ],
    impactMetric: "60%",
    impactLabel: "Faster deployments",
    featured: false,
    detailRoute: null,
    status: "live",
  },

  // — Data Platform and Engineering —
  {
    slug: "realtime-event-streaming",
    title: "Real-time Event Streaming",
    shortDescription: "Streaming architecture processing 1M+ events daily with sub-second latency.",
    fullDescription:
      "Architected a real-time data streaming platform using Google Datastream, Pub/Sub, and Dataflow to ingest and process over 1 million events daily. Enabled real-time dashboards, fraud detection triggers, and operational alerting across the entire Paper.id product suite.",
    category: "data-platform-engineering",
    techTags: [
      { label: "Datastream" },
      { label: "Pub/Sub" },
      { label: "Dataflow" },
      { label: "BigQuery" },
    ],
    impactMetric: "1M+",
    impactLabel: "Events processed daily",
    featured: true,
    detailRoute: "/solutions/data-platform-engineering",
    status: "live",
  },
  {
    slug: "data-warehouse-migration",
    title: "Data Warehouse Migration",
    shortDescription: "Full migration from legacy MySQL to BigQuery serving 50+ business units.",
    fullDescription:
      "Led the migration of a legacy MySQL-based analytics stack to a modern BigQuery data warehouse. Designed star-schema data marts, built incremental ingestion pipelines with dbt, and onboarded 50+ business units. Query performance improved 10x with 70% cost reduction.",
    category: "data-platform-engineering",
    techTags: [
      { label: "BigQuery" },
      { label: "dbt" },
      { label: "Airflow" },
      { label: "Cloud Storage" },
    ],
    impactMetric: "10x",
    impactLabel: "Query performance improvement",
    featured: false,
    detailRoute: null,
    status: "live",
  },
  {
    slug: "etl-cost-optimization",
    title: "ETL Cost Optimization",
    shortDescription: "Re-engineered ETL pipelines reducing processing costs by 70% and runtime by 50%.",
    fullDescription:
      "Audited and re-architected legacy ETL pipelines across 200+ tables, implementing partition pruning, incremental loads, and query optimization. Reduced monthly BigQuery processing costs by 70% and average pipeline runtime by 50%, while improving data freshness from T+1 to near real-time.",
    category: "data-platform-engineering",
    techTags: [
      { label: "Airflow" },
      { label: "BigQuery" },
      { label: "dbt" },
      { label: "Python" },
    ],
    impactMetric: "70%",
    impactLabel: "Cost reduction",
    featured: false,
    detailRoute: null,
    status: "live",
  },

  // — Data Science and Analytics —
  {
    slug: "hierarchical-time-series",
    title: "Hierarchical Time Series Forecasting",
    shortDescription: "Multi-level forecasting model achieving ~70% accuracy across product hierarchies.",
    fullDescription:
      "Developed a hierarchical time series forecasting system using Prophet and custom reconciliation algorithms to produce coherent forecasts at product, category, and regional levels. Achieved ~70% forecast accuracy at Accenture, enabling optimized inventory allocation and demand planning.",
    category: "data-science-analytics",
    techTags: [
      { label: "Prophet" },
      { label: "Python" },
      { label: "BigQuery" },
      { label: "Airflow" },
    ],
    impactMetric: "~70%",
    impactLabel: "Forecast accuracy",
    featured: true,
    detailRoute: null,
    status: "live",
  },
  {
    slug: "ab-testing-framework",
    title: "A/B Testing Framework",
    shortDescription: "Experimentation platform powering 40% feature adoption increase through data-driven decisions.",
    fullDescription:
      "Built and scaled an A/B testing framework at Ajaib that standardized experiment design, sample size calculation, and statistical analysis. The framework enabled the product team to run parallel experiments confidently, resulting in a 40% increase in feature adoption through data-driven iteration.",
    category: "data-science-analytics",
    techTags: [
      { label: "Python" },
      { label: "BigQuery" },
      { label: "Looker" },
      { label: "Statistics" },
    ],
    impactMetric: "40%",
    impactLabel: "Feature adoption increase",
    featured: false,
    detailRoute: null,
    status: "live",
  },
  {
    slug: "executive-dashboard-migration",
    title: "Executive Dashboard Migration",
    shortDescription: "Migrated 400+ dashboards tracking $100M+ monthly transactions for crypto and payment teams.",
    fullDescription:
      "Led the migration of 400+ dashboards from legacy BI tools to Looker Studio and Metabase, serving crypto trading, marketing, and payment teams at Ajaib. Built executive-grade KPI dashboards tracking $100M+ in monthly transaction volume with automated alerting and anomaly detection.",
    category: "data-science-analytics",
    techTags: [
      { label: "Looker Studio" },
      { label: "Metabase" },
      { label: "BigQuery" },
      { label: "dbt" },
    ],
    impactMetric: "400+",
    impactLabel: "Dashboards migrated",
    featured: false,
    detailRoute: "/solutions/bi-analytics",
    status: "live",
  },
];
