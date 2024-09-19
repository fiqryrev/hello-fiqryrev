"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Marquee from "@/components/magicui/marquee";
import ShineBorder from "@/components/magicui/shine-border";
import ShimmerButton from "@/components/ui/shimmer-button";

interface Company {
  name: string;
  img: string;
  url: string;
}

interface TechStack {
  name: string;
  img: string;
  url: string;
}

interface CompanyData {
  name: string;
  logo: string;
  position: string;
  duration: string;
  ratio: string;
  company_description: string;
  description: string;
  highlightProjects: string[];
  techStacks: string[];
}

const workRelatedCompanies: Company[] = [
  { name: "Paper.id", img: "/images/work_experience/paperid_logo.png", url: "https://www.paper.id" },
  { name: "Ajaib.co.id", img: "/images/work_experience/ajaib_logo.png", url: "https://www.ajaib.co.id" },
  { name: "Accenture", img: "/images/work_experience/accenture_logo_white.png", url: "https://www.accenture.com" },
  { name: "Bukalapak.com", img: "/images/work_experience/bukalapak_logo.png", url: "https://www.bukalapak.com" },
  { name: "Rakamin Academy", img: "/images/work_experience/rakamin_logo.png", url: "https://www.rakamin.com" },
  { name: "Purwadhika Digital Technology School", img: "/images/work_experience/purwadhika_logo.png", url: "https://www.purwadhika.com" },
  { name: "Packt Publishing", img: "/images/work_experience/packt_logo.png", url: "https://www.packtpub.com" },
];

const speakershipCompanies: Company[] = [
  { name: "Universitas Indonesia (UI)", img: "/images/speakership/speaker_ui_logo.png", url: "https://www.ui.ac.id" },
  { name: "Universitas Gadjah Mada (UGM)", img: "/images/speakership/speaker_ugm_logo.webp", url: "https://www.ugm.ac.id" },
  { name: "Institut Teknologi Bandung (ITB)", img: "/images/speakership/speaker_itb_logo.png", url: "https://www.itb.ac.id" },
  { name: "Universitas Padjadjaran (Unpad)", img: "/images/speakership/speaker_unpad_logo.png", url: "https://www.unpad.ac.id" },
  { name: "ITTP Telkom", img: "/images/speakership/speaker_ittp_telkom_logo.png", url: "https://www.ittelkom-pwt.ac.id" },
  { name: "Universitas Tanjungpura (Untan)", img: "/images/speakership/speaker_untan_logo.png", url: "https://www.untan.ac.id" },
  { name: "Universitas Negeri Malang (UM)", img: "/images/speakership/speaker_um_logo.png", url: "https://www.um.ac.id" },
  { name: "Universitas Multimedia Nusantara (UMN)", img: "/images/speakership/speaker_umn_logo.png", url: "https://www.umn.ac.id" },
  { name: "IFG", img: "/images/speakership/speaker_ifg_logo.png", url: "https://www.ifg.id" },
  { name: "Bank Mandiri", img: "/images/speakership/speaker_bankmandiri_logo.png", url: "https://www.bankmandiri.co.id" },
  { name: "Kemenparekraf", img: "/images/speakership/speaker_kemenparekraf_logo.png", url: "https://www.kemenparekraf.go.id" },
  { name: "Angelhacks Jakarta", img: "/images/speakership/speakership_angelhack_logo.png", url: "https://angelhack.com/hackglobal/jakarta/" },
];

const techStacks: TechStack[] = [
  { name: "Data Built Tool", img: "/images/tech/dbt_logo.png", url: "https://www.getdbt.com/" },
  { name: "Google BigQuery", img: "/images/tech/google-bigquery-logo-1.png", url: "https://cloud.google.com/bigquery" },
  { name: "Google Cloud Run", img: "/images/tech/google_cloud_run_logo.png", url: "https://cloud.google.com/run" },
  { name: "Google Gemini", img: "/images/tech/google_gemini_logo.png", url: "https://deepmind.google/technologies/gemini/" },
  { name: "OpenAI GPT", img: "/images/tech/openai_logo.png", url: "https://openai.com/" },
  { name: "Anthropic Claude", img: "/images/tech/anthropic_logo.png", url: "https://www.anthropic.com/" },
  { name: "ArangoDB", img: "/images/tech/arango_logo.png", url: "https://www.arangodb.com/" },
  { name: "FastAPI", img: "/images/tech/fastapi_logo.png", url: "https://fastapi.tiangolo.com/" },
  { name: "Google Cloud Build", img: "/images/tech/google_cloud_build.png", url: "https://cloud.google.com/build" },
  { name: "Google Cloud Composer", img: "/images/tech/google_cloud_composer.png", url: "https://cloud.google.com/composer" },
  { name: "Cloud Functions", img: "/images/tech/google_cloud_function_logo.png", url: "https://cloud.google.com/functions" },
  { name: "Google Datastream", img: "/images/tech/google_data_stream_logo.png", url: "https://cloud.google.com/datastream" },
  { name: "Google Document AI", img: "/images/tech/google_documentai_logo.png", url: "https://cloud.google.com/document-ai" },
  { name: "Looker Studio", img: "/images/tech/google_looker_studio_logo.png", url: "https://lookerstudio.google.com/" },
  { name: "Google Pub/Sub", img: "/images/tech/google_pubsub_logo.png", url: "https://cloud.google.com/pubsub" },
  { name: "Google Vertex AI", img: "/images/tech/google_vertex_logo.png", url: "https://cloud.google.com/vertex-ai" },
  { name: "Metabase", img: "/images/tech/metabase_logo.png", url: "https://www.metabase.com/" },
  { name: "MongoDB", img: "/images/tech/mongodb_logo.png", url: "https://www.mongodb.com/" },
  { name: "MySQL", img: "/images/tech/mysql_logo.png", url: "https://www.mysql.com/" },
  { name: "Python", img: "/images/tech/python_logo.png", url: "https://www.python.org/" },
  { name: "R", img: "/images/tech/r_logo.png", url: "https://www.r-project.org/" },
  { name: "Airflow", img: "/images/tech/airflow_logo.png", url: "https://airflow.apache.org/" },
  { name: "Google Cloud Platform", img: "/images/tech/gcp_logo.png", url: "https://cloud.google.com/" },
  { name: "GitHub", img: "/images/tech/github_logo.png", url: "https://github.com/" },
  { name: "LangChain", img: "/images/tech/langchain_logo.png", url: "https://langchain.com/" },
  { name: "LangSmith", img: "/images/tech/langsmith_logo.png", url: "https://www.langsmith.com/" },
  { name: "Mistral AI", img: "/images/tech/mistral_logo.png", url: "https://mistral.ai/" },
  { name: "Neo4j", img: "/images/tech/neo4j_logo.png", url: "https://neo4j.com/" },
  { name: "Ollama", img: "/images/tech/ollama_logo.png", url: "https://ollama.ai/" },
  { name: "PostgreSQL", img: "/images/tech/postgres_logo.png", url: "https://www.postgresql.org/" },
];

const companyData: CompanyData[] = [
  {
    name: "Paper.id",
    logo: "/images/work_experience/paperid_logo.png",
    position: "Data Science and Engineering Lead",
    duration: "July 2023 onwards",
    ratio: "75% Managerial : 25% Individual Contributor",
    company_description: `Paper.id is a leading B2B invoicing, payment, and procurement platform in Indonesia. It supports over 200,000 businesses, providing them with integrated solutions for managing financial processes efficiently. Recognized for driving digital transformation in the SME sector, Paper.id empowers businesses with tools to streamline operations and improve cash flow, helping to strengthen Indonesia's digital economy.`,
    description: `Managed the two departments: AI Product and Enablement and Data Platform and
    Engineering, which consist of AI Engineer, Data Scientist, MLOps Engineer, and Data
    Engineer (7 members in total). Direct report to the Chief Product Officer and Head of Data
    Science from Investor Group.
    
    Serve as an AI missionary and forefront AI innovation for Paper.id ecosystem, including the
    cross-collaboration of verticals and horizontals (business units and divisions), driving
    emphatic AI product adoption, and architecting the backbone of a secure and reliable data
    intelligence platform.`,
    highlightProjects: [
      "AI-powered Chatbot",
      "AI-powered CI/CD",
      "AI-powered Data Warehouse and Documentation",
      "Data Governance and Metrics Dictionary",
      "Data Security Standardization",
      "Cloud Cost Optimization",
      "Optical Character Recognition (OCR)"
    ],
    techStacks: ["Google Cloud Platform", "BigQuery", "Cloud Run", "Cloud Functions", "Pub/Sub", "Vertex AI", "Gemini", "LangChain", "FastAPI", "Python", "dbt", "GitHub"]
  },
  {
    name: "Ajaib",
    logo: "/images/work_experience/ajaib_logo.png",
    position: "Senior Data Scientist",
    duration: "March 2022 - June 2023",
    ratio: "90% Individual Contributor : 10% Managerial",
    company_description: `Ajaib.co.id is one of the biggest investment platforms in Indonesia for stocks and mutual funds, which achieved its unicorn status in less than 3 years by serving 1 million active investors in 2021.`,
    description: ` Reported directly to the VP of Engineering and Head of Data, collaborating closely with Analytics Engineers, Data Engineers, and cross-functional teams across product, design, and tech. Led the migration of over 400 visualizations for key business units (crypto, marketing, and payment), streamlining workflows for the BI Analytics team. Developed advanced dashboards in Looker and Metabase, delivering cohort analysis, customer journey insights, and demographic data, and implemented A/B testing strategies that boosted product adoption and user engagement.

Automated regulatory reporting for the Treasury team, reducing manual data requests by 80%. Represented Ajaib at industry events, leading workshops on Data Science applications in finance and presenting to over 100 professionals, highlighting the impact of data-driven strategies in the industry.
    `,
    highlightProjects: [
      "AB Testing",
      "Data Warehouse and Data Governance",
      "Actionable Insight and Workflow Automation",
      "Metrics Dictionary"
    ],
    techStacks: ["Google Cloud Platform", "BigQuery", "Looker Studio", "Metabase", "Python", "R", "dbt", "Airflow", "GitHub"]
  },
  {
    name: "Accenture",
    logo: "/images/work_experience/accenture_logo_white.png",
    position: "Data Science Analyst",
    duration: "May 2021 - March 2022",
    ratio: "100% Individual Contributor",
    company_description: `Accenture is a major division of global consulting firm Accenture, and the Applied Intelligence Division in Indonesia combines artificial intelligence with extensive industry experience. This section is critical in guiding companies and the nation into the digital era by spearheading data-driven innovations.`,
    description: `Collaborated on service migration and data quality management projects for a leading telecommunications company in Indonesia. Spearheaded the development of a CI/CD pipeline with automated Postman Newman tests, covering 200+ API endpoints and documenting over 50 services in just five weeks. Fast-tracked a Root Cause Analysis feature, reducing a three-month task to four weeks, and created time series forecasting models using Hierarchical Time Series (HTS) with ~70% accuracy.
    Automated model training with Airflow and served predictions via MLFlow API to the front-end UI. Actively contributed to the data science community by speaking at Glints.com's webinar on data visualization and serving as a guest lecturer at Universitas Tanjungpura, where I highlighted the integration of data science with business management theories.`,
    highlightProjects: ["Data Quality Management", "Hierarchical Time Series", "Data Lineage with Neo4j", "CI/CD Automation"],
    techStacks: [
      "python", 
      "airflow", 
      "mlflow", 
      "structured query language (sql)", 
      "cypher query language (cql)", 
      "pyspark", 
      "postman newman", 
      "docker", 
      "jenkins", 
      "gitlab ci", 
      "neo4j"
  ]
  },
  {
    name: "Bukalapak",
    logo: "/images/work_experience/bukalapak_logo.png",
    position: "Data Scientist",
    duration: "September 2018 - December 2020",
    ratio: "100% Individual Contributor",
    company_description: `Bukalapak.com is one of Indonesia's largest e-commerce platforms, with over 4.5 million SME vendors, over 70 million monthly active customers, 1.9 million warung partners, and a $6 billion IPO. `,
    description: `Collaborated closely with the Chief Operating Officer, business leaders, and product managers to drive data-driven insights for customer acquisition and chat platform improvements. Played a key role in minimizing fraud and enhancing user experiences through the creation of business dashboards and strategic recommendations. Leveraged a diverse tech stack, including Python, Airflow, BigQuery, and Looker, to streamline processes within the Bukalapak ecosystem.
    Contributed to the broader data science community by serving as a guest lecturer at the School of Business Management, Bandung Institute of Technology, and as a speaker at seminars, including one on time series analysis with Facebook Prophet. These engagements demonstrated the practical application of data science in business, reaching audiences of over 300 participants.
    `,
    highlightProjects: ["Actionable Insights", "Analytics Dashboard", "AB Testing", "NLP and Timeseries Research"],
    techStacks: ["Python","Airflow","R","Redash","Google BigQuery", "Looker"]
  },
  {
    name: "Rakamin Academy",
    logo: "/images/work_experience/rakamin_logo.png",
    position: "Data Science Tutor (Part Time)",
    duration: "September 2020 onwards",
    ratio: "100% Individual Contributor",
    company_description: `Rakamin Academy is an innovative Edutech firm dedicated to offering comprehensive educational services.Their purpose includes a wide range of training and job preparedness programs designed to prepare individuals for the demands of the modern workforce.`,
    description: `Served as a specialized Data Science Tutor at Rakamin Academy, teaching critical programming and data processing skills to over 3,000 students across 50+ cohorts. Consistently achieved high satisfaction ratings, with an average CSAT score of 95%. Represented Rakamin in external events, including "Digifest," where I mentored aspiring data scientists, engaging over 200 live participants and 3,500 YouTube viewers.
    Led corporate training programs for notable clients such as IFG, Bank Mandiri, LKPP Indonesia, and Studi Independen Bersertifikat (SIB), delivering data science and analytics training tailored to industry needs.`,
    highlightProjects: ["BUMN Corporate Trainer", "MSIB Trainer", "Data Science Trainer", "Mentorship"],
    techStacks: ["Python","SQL"]
  },
  {
    name: "Purwadhika",
    logo: "/images/work_experience/purwadhika_logo.png",
    position: "RnD Data Science Manager (Contract)",
    duration: "January 2021 - March 2021",
    ratio: "50% Managerial : 50% Individual Contributor",
    company_description: `Purwadhika Digital Technology School is a prestigious Indonesian institution that offers cutting-edge courses in technology and digital fields. Its extensive curriculum, which combines academic knowledge and practical abilities, has made it a popular choice among students seeking to work in the digital technology field.`,
    description: `Led the development of cutting-edge, industry-aligned data science curricula at Purwadhika, covering topics such as AI ethics, machine learning for business, and advanced analytics techniques like cohort analysis and data storytelling. Managed and trained a team of data science educators, ensuring course content met industry standards and best practices.
    Additionally, served as a corporate consultant and trainer, delivering tailored data science training to clients across banking, real estate, and technology sectors. Successfully secured corporate training contracts, including one with a global technology leader, by providing expert insights and customized solutions for high-level management teams.`,
    highlightProjects: ["Human-centered AI Development (Ethics, Governance, and Design Thinking)", "Mentorship", "Corporate Trainer"],
    techStacks: ["Python"]
  },
  {
    name: "Packt Publishing",
    logo: "/images/work_experience/packt_logo.png",
    position: "Technical Content Reviewer (Part-time)",
    duration: "March 2019 - August 2019",
    ratio: "100% Individual Contributor",
    company_description: `Packt Publishing is a well-known multinational publishing house that specializes in creating cutting-edge technology books and courses for developers and IT professionals. Packt's portfolio of over 4,000 titles has enabled countless learners worldwide to upskill in the ever-changing IT market.`,
    description: `Served as a key member of the technical content review team at Packt Publishing, specializing in time series analytics. Collaborated with the book’s author, a senior Data Scientist from Apple, Inc., to ensure the accuracy and quality of a comprehensive guide on time series analysis using R. Distinguished as one of three elite reviewers, working alongside two PhDs with professional backgrounds in leading organizations such as JP Morgan.
    Contributed to the overall excellence of the publication by providing strategic advice and leveraging expertise in time series analytics, ensuring the material was both technically sound and relevant to the field.`,
    highlightProjects: [
      "Hands-on Time Series Analysis with R, Rami Krispin"
    ],
    techStacks: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"]
  }
];

const CompanyPopup: React.FC<{ company: CompanyData, onClose: () => void, onPrevious: () => void, onNext: () => void }> = ({ company, onClose, onPrevious, onNext }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="relative w-full max-w-4xl mx-4 flex items-center">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full">
          <ShimmerButton onClick={onPrevious} className="px-10 py-4">
            &larr; Previous
          </ShimmerButton>
        </div>
        <div className="relative w-full">
          <button onClick={onClose} className="absolute top-2 right-2 text-2xl text-white z-10">&times;</button>
          <ShineBorder
            className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <div className="text-white p-8 w-full max-h-[80vh] overflow-y-auto bg-black rounded-lg">
              <div className="flex flex-col items-center mb-6">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={200}
                  height={75}
                  objectFit="contain"
                />
                <div className="text-center mt-4">
                  <h2 className="text-2xl font-bold">{company.position}</h2>
                  <p className="text-gray-400 mt-2">{company.duration}</p>
                  <p className="text-blue-500 font-semibold mt-1">{company.ratio}</p>
                </div>
              </div>

              <div className="mb-6">
                <p>{company.company_description}</p>
              </div>

              <div className="mb-6">
                <p>{company.description}</p>
              </div>

              <div className="border-t border-gray-600 pt-6">
                <h3 className="text-xl font-bold mb-4 text-center">Highlight Projects</h3>
                <Marquee className="[--duration:30s]" pauseOnHover={true} gradient={false}>
                  {company.highlightProjects.map((project: string, index: number) => (
                    <div key={index} className="mx-4 bg-gray-800 p-3 rounded">
                      <p className="text-sm font-semibold">{project}</p>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </ShineBorder>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full">
          <ShimmerButton onClick={onNext} className="px-10 py-3">
            Next &rarr; 
          </ShimmerButton>
        </div>
      </div>
    </div>
  );
};

const WorkExperience: React.FC = () => {
  const [showCompanyPopup, setShowCompanyPopup] = useState(false);
  const [selectedCompanyIndex, setSelectedCompanyIndex] = useState(0);

  const handleCompanyClick = (index: number) => {
    setSelectedCompanyIndex(index);
    setShowCompanyPopup(true);
  };

  const handlePrevious = () => {
    setSelectedCompanyIndex((prevIndex) => (prevIndex === 0 ? companyData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setSelectedCompanyIndex((prevIndex) => (prevIndex + 1) % companyData.length);
  };

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-500">Work Experience</h2>
        <h3 className="text-2xl font-bold mb-4 text-center">Employment History</h3>
        <div className="flex justify-center items-center flex-wrap mb-12">
          {workRelatedCompanies.map((company: Company, index: number) => (
            <div key={index} className="w-1/3 sm:w-1/4 md:w-1/4 p-2">
              <div onClick={() => handleCompanyClick(index)} className="cursor-pointer">
                <Image
                  src={company.img}
                  alt={`${company.name} logo`}
                  width={300}
                  height={20}
                  objectFit="contain"
                />
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-4 text-center">Speakership & Workshop</h3>
        <div className="flex justify-center items-center flex-wrap mb-16">
          {speakershipCompanies.map((company: Company, index: number) => (
            <div key={index} className="w-1/3 sm:w-1/4 md:w-1/5 p-2">
              <a href={company.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={company.img}
                  alt={`${company.name} logo`}
                  width={150}
                  height={20}
                  objectFit="contain"
                />
              </a>
            </div>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-center">Technical Stacks</h3>
        <div className="relative mt-6 overflow-hidden">
          <Marquee
            className="[--duration:60s]"
            pauseOnHover={true}
            gradient={false}
          >
            {techStacks.concat(techStacks).map((tech: TechStack, index: number) => (
              <a
                key={index}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-6 flex flex-col items-center"
              >
                <img
                  src={tech.img}
                  alt={`${tech.name} logo`}
                  className="h-16 w-16 object-contain"
                />
                <p className="mt-2 text-center text-sm">{tech.name}</p>
              </a>
            ))}
          </Marquee>
        </div>
      </div>
      {showCompanyPopup && (
        <CompanyPopup
          company={companyData[selectedCompanyIndex]}
          onClose={() => setShowCompanyPopup(false)}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
    </section>
  );
};

export default WorkExperience;