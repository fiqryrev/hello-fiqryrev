"use client";

import React, { useState, useEffect, useRef } from 'react';
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

interface SpeakershipData {
  university: string;
  logo: string;
  events: {
    title: string;
    date: string;
    description: string;
  }[];
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
  { name: "Policy Institute for Procurement of Goods/Services of Indonesia", img: "/images/speakership/speaker_lkpp_logo.png", url: "https://www.lkpp.go.id" },
  { name: "Ministry of Tourism and Creative Economy of Indonesia", img: "/images/speakership/speaker_kemenparekraf_logo.png", url: "https://www.kemenparekraf.go.id" },
  { name: "Glints", img: "/images/speakership/speaker_glints_logo.png", url: "https://glints.com/id" },
  { name: "Angelhacks Jakarta", img: "/images/speakership/speakership_angelhack_logo.png", url: "https://angelhack.com/hackglobal/jakarta/" },
  { name: "Yogya Group", img: "/images/speakership/speakership_yogyagroup_logo.png", url: "https://www.yogyagroup.com/" },
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

const speakershipData: SpeakershipData[] = [
  {
    university: "Universitas Indonesia (UI)",
    logo: "/images/speakership/speaker_ui_logo.png",
    events: [
      {
        title: "Compfest 14 - Mentor",
        date: "August 2022",
        description: "Assigned as a mentor for Compfest 14, guiding teams in building data-driven products and honing their presentation skills. Provided expert advice on implementing industry-standard Data Science practices, ensuring the solutions were both technically robust and strategically aligned with real-world applications."
      }
    ]
  },
  {
    university: "Institut Teknologi Bandung (ITB)",
    logo: "/images/speakership/speaker_itb_logo.png",
    events: [
      {
        title: "Business Statistics of School of Business Management ITB - Guest Lecturer",
        date: "April 2020",
        description: "Presented a guest lecture 'Statistics as Decision, Business, and Marketing Science in the Disruptive Industry'. The class was attended by 300+ SBM ITB students, with Lecture class of Mr. Meditya Wasesa, Ph.D."
      }
    ]
  },
  {
    university: "Universitas Gadjah Mada (UGM)",
    logo: "/images/speakership/speaker_ugm_logo.webp",
    events: [
      {
        title: "BukalapakKeKampus Chapter UGM - Speaker",
        date: "May 2019",
        description: "Conducted a one day workshop about Data Science short-course in industry. This event was attended by 50+ student participants of UGM."
      }
    ]
  },
  {
    university: "Universitas Padjadjaran (Unpad)",
    logo: "/images/speakership/speaker_unpad_logo.png",
    events: [
      {
        title: "Closing Webinar and Talkshow of Padjadjaran Statistics Olympiad (RASIO) 2023 - Speaker",
        date: "October 2023",
        description: "Delivered a closing seminar and talkshow about 'Harnessing the Power of Big Data and Artificial Intelligence: How Generation Z Can Contribute to Achieving SDGs', which was attended by 100+ participants in South East Asia scale."
      }
    ]
  },
  {
    university: "ITTP Telkom",
    logo: "/images/speakership/speaker_ittp_telkom_logo.png",
    events: [
      {
        title: "Dies Natalis (Anniversary) of ITTP Telkom Purwokerto - Speaker",
        date: "September 2022",
        description: "Delivered a webinar 'The Asterism Fragments of Data Science', which was attended by 100+ participants ranging from Dean, Lecturers, and students of ITTP Telkom Purwokerto."
      }
    ]
  },
  {
    university: "Universitas Tanjungpura (Untan)",
    logo: "/images/speakership/speaker_untan_logo.png",
    events: [
      {
        title: "Untan Actuary & Data Science Webinar - Speaker",
        date: "May 2021",
        description: "Delivered a webinar about 'The Role of Actuary Science and Data Science in Industry 4.0 Era', which was attended by 200+ participants."
      }
    ]
  },
  {
    university: "Universitas Negeri Malang (UM)",
    logo: "/images/speakership/speaker_um_logo.png",
    events: [
      {
        title: "Course Computational Thinking - Guest Lecturer",
        date: "December 2022",
        description: "Delivered guest lecture sessions about computational thinking for master degree students of Faculty of Mathematics and Natural Science, with class lecturer of Mr. Deny Setiawan, M.Pd."
      }
    ]
  },
  {
    university: "Universitas Multimedia Nusantara (UMN)",
    logo: "/images/speakership/speaker_umn_logo.png",
    events: [
      {
        title: "Garudahacks 2024 - Speaker",
        date: "July 2024",
        description: "Delivered a closing seminar about Paper.id engineering culture about AI and automation, which was attended by 100+ participants internationally."
      }
    ]
  },
  {
    university: "IFG",
    logo: "/images/speakership/speaker_ifg_logo.png",
    events: [
      {
        title: "Data Analytics Corporate Training - Speaker",
        date: "July 2024",
        description: "Delivered a two days offline workshop at IFG office about Data Analysis, SQL, and Dashboarding. This workshop was attended by 30+ the top employees of IFG and its subsidiary companies."
      }
    ]
  },
  {
    university: "Bank Mandiri",
    logo: "/images/speakership/speaker_bankmandiri_logo.png",
    events: [
      {
        title: "Data Analytics Corporate Training - Speaker",
        date: "August 2021",
        description: "Delivered an online workshop about introduction to data analysis with python. The workshop was attended by 30+ participants."
      }
    ]
  },
  {
    university: "Policy Institute for Procurement of Goods/Services of Indonesia",
    logo: "/images/speakership/speaker_lkpp_logo.png",
    events: [
      {
        title: "Data Analytics Corporate Training - Speaker",
        date: "June 2023",
        description: "Delivered an offline workshop about introduction to data analysis with SQL. The workshop was attended by 20+ participants."
      }
    ]
  },
  {
    university: "Ministry of Tourism and Creative Economy of Indonesia",
    logo: "/images/speakership/speaker_kemenparekraf_logo.png",
    events: [
      {
        title: "Data Analytics Corporate Training - Speaker",
        date: "September 2021",
        description: "Delivered an offline workshop about introduction to data analysis with SQL. The workshop was attended by 20+ participants."
      }
    ]
  },
  {
    university: "Glints",
    logo: "/images/speakership/speaker_glints_logo.png",
    events: [
      {
        title: "Technical Webinar - Speaker",
        date: "August 2021",
        description: "Delivered a webinar about 'Problem Solving with Data Visualization', which was attended by 10+ participants."
      }
    ]
  },
  {
    university: "Angelhacks Jakarta",
    logo: "/images/speakership/speakership_angelhack_logo.png",
    events: [
      {
        title: "Hackathon Jakarta 2024 - City Judge",
        date: "August 2024",
        description: "Served as a city judge in Indonesia, managed to review the hackathon submissions of 'Financial Inclusion' topic."
      }
    ]
  },
  {
    university: "Yogya Group",
    logo: "/images/speakership/speakership_yogyagroup_logo.png",
    events: [
      {
        title: "Technical Workshop - Speaker",
        date: "December 2019",
        description: "Delivered an offline workshop about 'Time Series and Machine Learning' at PT. Akur Pratama (Yogyagroup Headquarter Bandung), which was attended by 10+ participants."
      }
    ]
  }
];

const CompanyPopup: React.FC<{ company: CompanyData, onClose: () => void, onPrevious: () => void, onNext: () => void }> = ({ company, onClose, onPrevious, onNext }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        onPrevious();
      } else if (event.key === 'ArrowRight') {
        onNext();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose, onPrevious, onNext]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 p-4">
      <div ref={popupRef} className="relative w-full max-w-4xl mx-auto">
        <ShineBorder
          className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background shadow-xl"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <div className="text-white p-4 sm:p-8 w-full max-h-[80vh] overflow-y-auto bg-black rounded-lg">
            <button onClick={onClose} className="absolute top-2 right-2 text-2xl text-white z-10">&times;</button>
            
            {/* Company popup content */}
            <div className="flex flex-col items-center mb-4 sm:mb-6">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={150}
                height={56}
                objectFit="contain"
              />
              <div className="text-center mt-4">
                <h2 className="text-xl sm:text-2xl font-bold">{company.position}</h2>
                <p className="text-gray-400 mt-2 text-sm sm:text-base">{company.duration}</p>
                <p className="text-blue-500 font-semibold mt-1 text-sm sm:text-base">{company.ratio}</p>
              </div>
            </div>

            <div className="mb-4 sm:mb-6 text-sm sm:text-base">
              <p>{company.company_description}</p>
            </div>

            <div className="mb-4 sm:mb-6 text-sm sm:text-base">
              <p>{company.description}</p>
            </div>

            <div className="border-t border-gray-600 pt-4 sm:pt-6">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-center">Highlight Projects</h3>
              <Marquee className="[--duration:30s]" pauseOnHover={true} gradient={false}>
                {company.highlightProjects.map((project: string, index: number) => (
                  <div key={index} className="mx-2 sm:mx-4 bg-gray-800 p-2 sm:p-3 rounded">
                    <p className="text-xs sm:text-sm font-semibold">{project}</p>
                  </div>
                ))}
              </Marquee>
            </div>

            <div className="flex justify-between mt-4 sm:mt-6">
              <ShimmerButton onClick={onPrevious} className="px-3 py-1 sm:px-4 sm:py-2 text-sm">
                &larr; Previous
              </ShimmerButton>
              <ShimmerButton onClick={onNext} className="px-3 py-1 sm:px-4 sm:py-2 text-sm">
                Next &rarr;
              </ShimmerButton>
            </div>
          </div>
        </ShineBorder>
      </div>
    </div>
  );
};

const SpeakershipPopup: React.FC<{
  data: SpeakershipData;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}> = ({ data, onClose, onPrevious, onNext }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        onPrevious();
      } else if (event.key === 'ArrowRight') {
        onNext();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose, onPrevious, onNext]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 p-4">
      <div ref={popupRef} className="relative w-full max-w-4xl mx-auto">
        <ShineBorder
          className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background shadow-xl"
          color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
        >
          <div className="text-white p-4 sm:p-8 w-full max-h-[80vh] overflow-y-auto bg-black rounded-lg">
            <button onClick={onClose} className="absolute top-2 right-2 text-2xl text-white z-10">
              &times;
            </button>
            
            {/* Speakership popup content */}
            <div className="flex flex-col items-center mb-4 sm:mb-6">
              <Image
                src={data.logo}
                alt={`${data.university} logo`}
                width={150}
                height={56}
                objectFit="contain"
              />
              <h2 className="text-xl sm:text-2xl font-bold mt-4">{data.university}</h2>
            </div>
            {data.events.map((event, index) => (
              <div key={index} className="mb-4 sm:mb-6 border-t border-gray-600 pt-4">
                <h3 className="text-lg sm:text-xl font-semibold">{event.title}</h3>
                <p className="text-gray-400 mt-1 text-sm sm:text-base">{event.date}</p>
                <p className="mt-2 text-sm sm:text-base">{event.description}</p>
              </div>
            ))}

            <div className="flex justify-between mt-4 sm:mt-6">
              <ShimmerButton onClick={onPrevious} className="px-3 py-1 sm:px-4 sm:py-2 text-sm">
                &larr; Previous
              </ShimmerButton>
              <ShimmerButton onClick={onNext} className="px-3 py-1 sm:px-4 sm:py-2 text-sm">
                Next &rarr;
              </ShimmerButton>
            </div>
          </div>
        </ShineBorder>
      </div>
    </div>
  );
};

const WorkExperience: React.FC = () => {
  const [showCompanyPopup, setShowCompanyPopup] = useState(false);
  const [selectedCompanyIndex, setSelectedCompanyIndex] = useState(0);
  const [showSpeakershipPopup, setShowSpeakershipPopup] = useState(false);
  const [selectedSpeakershipIndex, setSelectedSpeakershipIndex] = useState(0);

  const handleCompanyClick = (index: number) => {
    setSelectedCompanyIndex(index);
    setShowCompanyPopup(true);
  };

  const handleSpeakershipClick = (index: number) => {
    const speakershipDataIndex = speakershipData.findIndex(
      (data) => data.university === speakershipCompanies[index].name
    );
    if (speakershipDataIndex !== -1) {
      setSelectedSpeakershipIndex(speakershipDataIndex);
      setShowSpeakershipPopup(true);
    }
  };

  const handlePrevious = () => {
    setSelectedCompanyIndex((prevIndex) => (prevIndex === 0 ? companyData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setSelectedCompanyIndex((prevIndex) => (prevIndex + 1) % companyData.length);
  };

  const handleSpeakershipPrevious = () => {
    setSelectedSpeakershipIndex((prevIndex) =>
      prevIndex === 0 ? speakershipData.length - 1 : prevIndex - 1
    );
  };

  const handleSpeakershipNext = () => {
    setSelectedSpeakershipIndex((prevIndex) => (prevIndex + 1) % speakershipData.length);
  };

  return (
    <section className="py-8 sm:py-16 bg-black text-white"> 
      <div className="container mx-auto px-4">
        <h4 className="text-base sm:text-lg font-medium mb-2 sm:mb-4 text-center text-gray-400 font-lato">Explore more by selecting the logo</h4>
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8 text-center text-blue-500 font-lato">Professional Experience</h2>
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center font-lato">Career Highlights</h3>
        <div className="flex justify-center items-center flex-wrap mb-8 sm:mb-12">
          {workRelatedCompanies.map((company: Company, index: number) => (
            <div key={index} className="w-1/3 sm:w-1/4 md:w-1/4 p-2">
              <div onClick={() => handleCompanyClick(index)} className="cursor-pointer">
                <Image
                  src={company.img}
                  alt={`${company.name} logo`}
                  width={150}
                  height={38}
                  objectFit="contain"
                />
              </div>
            </div>
          ))}
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center font-lato">Speakership and Mentorship</h3>
        <div className="flex justify-center items-center flex-wrap mb-8 sm:mb-16">
          {speakershipCompanies.map((company: Company, index: number) => (
            <div key={index} className="w-1/3 sm:w-1/4 md:w-1/5 p-2">
              <div onClick={() => handleSpeakershipClick(index)} className="cursor-pointer">
                <Image
                  src={company.img}
                  alt={`${company.name} logo`}
                  width={75}
                  height={25}
                  objectFit="contain"
                />
              </div>
            </div>
          ))}
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center font-lato">Technical Competencies</h3>
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
                className="mx-3 sm:mx-6 flex flex-col items-center"
              >
                <Image
                  src={tech.img}
                  alt={`${tech.name} logo`}
                  width={32}
                  height={32}
                  objectFit="contain"
                />
                <p className="mt-2 text-center text-xs sm:text-sm">{tech.name}</p>
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
      {showSpeakershipPopup && (
        <SpeakershipPopup
          data={speakershipData[selectedSpeakershipIndex]}
          onClose={() => setShowSpeakershipPopup(false)}
          onPrevious={handleSpeakershipPrevious}
          onNext={handleSpeakershipNext}
        />
      )}
    </section>
  );
};

export default WorkExperience;