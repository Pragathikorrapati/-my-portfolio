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
    description: 'Modernized case processing and court operations with independently deployable services and accessible web applications.',
    stack: ['ASP.NET Core 8', 'Angular', 'Azure Service Bus', 'AKS'],
    outcome: 'The engagement improved response times by 35% and reduced manual processing effort by 40%.',
    details: 'Built secure APIs and responsive interfaces, with event-driven messaging for hearing reminders and case updates. Power BI dashboards reduced manual reporting effort by 50%.',
  },
  {
    title: 'Contextual search for court records', client: 'Superior Court of Los Angeles County', visual: 'search',
    description: 'Built retrieval-augmented generation for legal documents, court records, and case histories.',
    stack: ['Azure OpenAI', 'Azure AI Search', 'Semantic Kernel', 'RAG'],
    outcome: 'Enabled contextual retrieval and reduced manual research effort.',
    details: 'Combined vector search with Azure OpenAI to retrieve relevant case material. Related AI work supported case summarization and legal document analysis.',
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
