export const contact = {
  email: 'korrapatipragathi2709@gmail.com',
  linkedin: 'https://www.linkedin.com/in/pragathi-k27/',
  github: 'https://github.com/Pragathikorrapati',
}

export const skills = [
  ['.NET & architecture', 'C#, .NET 5–10, ASP.NET Core Web API, MVC, WebForms, Blazor, Entity Framework Core, Microservices, Clean Architecture'],
  ['Frontend engineering', 'Angular, TypeScript, RxJS, NgRx, React, Redux, HTML, CSS, WCAG'],
  ['Cloud & delivery', 'Azure, AKS, Docker, Kubernetes, Azure API Management, Azure Functions, AWS Lambda, Azure DevOps, AWS CodePipeline'],
  ['Data & messaging', 'SQL Server, PostgreSQL, MongoDB, Cosmos DB, Redis, Power BI, Apache Kafka, RabbitMQ, Azure Service Bus'],
  ['AI & search', 'Azure OpenAI, Azure AI Search, Semantic Kernel, Vector Search, Retrieval-Augmented Generation (RAG)'],
  ['Integration & quality', 'REST, SOAP, OpenAPI, OAuth 2.0, OpenID Connect, JWT, FHIR R4, HL7, ANSI X12 EDI, xUnit, NUnit, Jest'],
]

export const engagements = [
  {
    company: 'Superior Court of Los Angeles County', sector: 'Government', place: 'Los Angeles, CA',
    dates: 'Nov 2023 – Present', role: 'Senior Full Stack .NET Developer',
    work: 'Built judicial microservices and accessible applications for case processing, document management, and court operations. Automated deployments with Azure DevOps and supported production with Azure Monitor and Application Insights.',
  },
  {
    company: 'Optum', sector: 'Healthcare', place: 'Eden Prairie, MN',
    dates: 'Sep 2021 – Oct 2023', role: 'Senior Full Stack .NET Developer',
    work: 'Designed .NET microservices and Angular portals for enrollment and claims. Integrated Dynamics 365, Dataverse, and Azure Functions to automate member workflows and synchronize data.',
  },
  {
    company: 'BHG Financial', sector: 'Finance', place: 'Davie, FL',
    dates: 'Jun 2019 – Aug 2021', role: 'Full Stack .NET Developer',
    work: 'Built React interfaces and ASP.NET services for loan servicing and payments. Implemented asynchronous payment notifications and automated delivery with AWS CodePipeline.',
  },
  {
    company: 'Starbucks', sector: 'Retail', place: 'Seattle, WA',
    dates: 'May 2017 – May 2019', role: '.NET Developer',
    work: 'Developed Angular interfaces and ASP.NET services for customer engagement and loyalty. Integrated payment gateways and optimized SQL Server for high-volume retail transactions.',
  },
  {
    company: 'HCLTech', sector: 'Healthcare', place: 'Chennai, India',
    dates: 'Mar 2015 – Apr 2017', role: '.NET Developer',
    work: 'Developed claims, patient onboarding, and reporting workflows using ASP.NET WebForms, SOAP, and SQL Server. The résumé reports a 20% improvement in workflow efficiency.',
  },
]

export const projects = [
  {
    title: 'Judicial workflow modernization', client: 'Superior Court of Los Angeles County', visual: 'court',
    description: 'Modernized court operations with accessible case-processing applications, independently deployable services, and contextual search for court records.',
    stack: ['ASP.NET Core 8', 'Angular', 'Azure Service Bus', 'AKS', 'Azure AI Search', 'Azure OpenAI', 'Semantic Kernel', 'RAG'],
    outcome: 'The engagement improved response times by 35% and reduced manual processing effort by 40%. Contextual records retrieval also reduced manual research effort.',
    details: 'Built secure APIs and responsive interfaces, with event-driven messaging for hearing reminders and case updates. Power BI dashboards reduced manual reporting effort by 50%. For contextual search, combined vector search with Azure OpenAI to retrieve relevant court records, legal documents, and case histories. Related AI work supported case summarization and legal document analysis.',
  },
  {
    title: 'Healthcare data exchange', client: 'Optum', visual: 'health',
    description: 'Connected provider systems, member portals, and claims platforms using healthcare interoperability standards.',
    stack: ['.NET 6', 'FHIR', 'HL7', 'ANSI X12 EDI'],
    outcome: 'Streamlined eligibility verification, enrollment, claims adjudication, and reimbursement workflows.',
    details: 'Built secure APIs with Azure API Management and integrated transactions for eligibility, claims status, enrollment, claims submission, and remittance.',
  },
  {
    title: 'Digital loan servicing and payments', client: 'BHG Financial', visual: 'finance',
    description: 'Built customer-facing financial interfaces and integrated payment workflows with serverless services.',
    stack: ['React', 'ASP.NET Web API 2', 'AWS Lambda', 'RabbitMQ'],
    outcome: 'Supported asynchronous payment notifications and distributed financial processing.',
    details: 'Used React and Redux for interactive interfaces, AWS API Gateway and Lambda for serverless processing, and RabbitMQ for messaging and retries.',
  },
]

export const profile = {
  name: 'Pragathi Korrapati',
  initials: 'PK',
  title: 'Senior Full Stack .NET Developer',
  headline: 'Engineering systems that scale.',
  introduction: 'I build enterprise applications, secure APIs, and cloud integrations for complex workflows.',
  experience: '11+ years',
  sectors: 'Government, healthcare, finance, retail',
  background: 'I work across the stack, from Angular, React, and Blazor interfaces to ASP.NET Core APIs, database optimization, and deployment on Azure and AWS. My recent work includes retrieval-augmented search for legal records and event-driven services for court workflows.',
  education: [{ degree: 'Bachelor of Technology in Computer Science', institution: 'KL University' }],
  specialization: '.NET',
  sceneSkills: [
    { label: 'C#', category: 0 }, { label: 'Azure', category: 2 },
    { label: 'Web APIs', category: 5 }, { label: 'Angular', category: 1 },
  ],
}

export const innovation = [
  { label: 'Ask a question', title: 'Start with a research question', detail: 'A question supplies the context for finding relevant court records, legal documents, or case histories.' },
  { label: 'Retrieve', title: 'Find relevant records', detail: 'Azure AI Search and vector search identify source material related to the question.' },
  { label: 'Summarize', title: 'Generate a contextual summary', detail: 'Azure OpenAI uses the retrieved material as context for a summary. This walkthrough describes the architecture without using client records or calling a model.' },
]

export const skillContext = [
  'Judicial microservices and record management',
  'Healthcare portals and customer-facing financial interfaces',
  'Azure delivery for judicial systems and AWS delivery for financial workflows',
  'Case reporting, notifications, and payment processing',
  'Contextual search for legal documents and case histories',
  'Healthcare interoperability and secure enterprise APIs',
]
