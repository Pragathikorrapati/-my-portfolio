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
    environment: ['C#', '.NET 8/10', 'ASP.NET Core 8 Web API', 'Blazor', 'Angular 17/18', 'TypeScript', 'Microservices', 'RESTful APIs', 'Entity Framework Core 8', 'SQL Server 2022', 'Power BI', 'Apache Kafka', 'Azure Service Bus', 'APIM', 'Azure Blob Storage', 'Azure AD', 'OAuth 2.0', 'OpenID Connect', 'JWT Authentication', 'Azure OpenAI', 'Azure AI Search', 'Semantic Kernel', 'RAG', 'Claude AI', 'GitHub Copilot', 'Docker', 'AKS', 'Azure Functions', 'Azure DevOps', 'Azure Monitor', 'Application Insights', 'xUnit', 'Postman', 'Git', 'Agile Scrum.'],
  },
  {
    company: 'Optum', sector: 'Healthcare', place: 'Eden Prairie, MN',
    dates: 'Sep 2021 – Oct 2023', role: 'Senior Full Stack .NET Developer',
    work: 'Designed .NET microservices and Angular portals for enrollment and claims. Integrated Dynamics 365, Dataverse, and Azure Functions to automate member workflows and synchronize data.',
    environment: ['C#', '.NET 5/6', 'ASP.NET Core Web API', 'Microservices', 'Onion Architecture', 'Angular 12/13/14/15/16', 'RESTful APIs', 'Entity Framework Core 6', 'LINQ', 'SQL Server 2019', 'HIPAA Compliant', 'HL7', 'FHIR', 'AHDS', 'ANSI X12 EDI', 'Microsoft Dynamics 365 CRM/CE', 'Dataverse', 'Power Apps', 'Power Automate', 'APIM', 'Azure Functions', 'Azure App Services', 'Azure Service Bus', 'Azure Key Vault', 'Azure AD', 'OAuth2', 'OpenID Connect', 'JWT Authentication', 'RabbitMQ', 'Power BI', 'xUnit', 'Karma', 'Jasmine', 'Azure DevOps CI/CD', 'SonarQube', 'Log4Net', 'Git', 'JIRA', 'Agile Scrum.'],
  },
  {
    company: 'BHG Financial', sector: 'Finance', place: 'Davie, FL',
    dates: 'Jun 2019 – Aug 2021', role: 'Full Stack .NET Developer',
    work: 'Built React interfaces and ASP.NET services for loan servicing and payments. Implemented asynchronous payment notifications and automated delivery with AWS CodePipeline.',
    environment: ['C#', '.NET Framework', 'ASP.NET MVC 5', 'ASP.NET Web API 2', 'MVC Architecture', 'ReactJS', 'Redux', 'RESTful APIs', 'Entity Framework 6', 'MongoDB', 'AWS Lambda', 'AWS API Gateway', 'Amazon S3', 'RabbitMQ', 'OAuth2', 'JWT Authentication', 'xUnit', 'AWS CodePipeline', 'AWS CodeBuild', 'Git', 'CI/CD', 'Agile Scrum.'],
  },
  {
    company: 'Starbucks', sector: 'Retail', place: 'Seattle, WA',
    dates: 'May 2017 – May 2019', role: '.NET Developer',
    work: 'Developed Angular interfaces and ASP.NET services for customer engagement and loyalty. Integrated payment gateways and optimized SQL Server for high-volume retail transactions.',
    environment: ['C#', '.NET Framework 4.6.2/4.7.2', 'ASP.NET MVC 5', 'ASP.NET Web API 2', 'Angular', 'TypeScript', 'RESTful APIs', 'SOAP Web Services', 'ADO.NET', 'SQL Server 2016', 'XML', 'JSON', 'OAuth2', 'JWT Authentication', 'Azure App Services', 'Azure API Management (APIM)', 'Azure Service Bus', 'xUnit', 'Azure DevOps CI/CD', 'Log4Net', 'Agile Scrum.'],
  },
  {
    company: 'HCLTech', sector: 'Healthcare', place: 'Chennai, India',
    dates: 'Mar 2015 – Apr 2017', role: '.NET Developer',
    work: 'Developed claims, patient onboarding, and reporting workflows using ASP.NET WebForms, SOAP, and SQL Server. The résumé reports a 20% improvement in workflow efficiency.',
    environment: ['C#', 'ASP.NET WebForms', '.NET Framework', 'SOAP Web Services', 'ADO.NET', 'SQL Server 2012/2014', 'Stored Procedures', 'Views', 'Triggers', 'XML', 'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'AJAX', 'NUnit', 'MSTest', 'SVN (Subversion)', 'JIRA', 'Waterfall SDLC.'],
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

export const clientProjects = [
  ...projects,
  {
    title: 'Retail loyalty and payment workflows', client: 'Starbucks', visual: 'retail',
    description: 'Built customer-facing applications for loyalty management, customer engagement, and retail payments.',
    stack: ['Angular', 'ASP.NET MVC 5', 'SQL Server 2016', 'Azure Service Bus'],
    outcome: 'Supported loyalty workflows and high-volume retail transactions.',
    details: 'Developed Angular interfaces and ASP.NET MVC and Web API services. Integrated payment gateways and third-party platforms via REST and SOAP, and tuned SQL Server queries and database objects.',
  },
  {
    title: 'Healthcare claims and patient onboarding', client: 'HCLTech', visual: 'claims',
    description: 'Developed applications for claims administration, patient onboarding, and operational reporting.',
    stack: ['ASP.NET WebForms', 'SOAP', 'ADO.NET', 'SQL Server'],
    outcome: 'The engagement improved workflow efficiency by 20% and reduced manual intervention.',
    details: 'Built reusable WebForms controls and integrated legacy healthcare systems through XML-based SOAP services. Used ADO.NET and SQL Server stored procedures for transactional processing and reporting.',
  },
]

export const featuredStack = [
  ['Backend', ['C#', 'ASP.NET Core Web API', 'Microservices']],
  ['Frontend', ['Angular', 'React', 'TypeScript']],
  ['Cloud & data', ['Azure', 'AWS', 'SQL Server']],
  ['AI & search', ['Azure OpenAI', 'Azure AI Search', 'RAG']],
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

export const resumeSkills = [
  ["Languages", ["C# 8/9/10/11/12 Features", "VB.NET", "JavaScript ES6+", "TypeScript", "SQL", "HTML5", "CSS3", "Python", "LINQ", "JSON", "XML"]],
  [".NET Technologies", [".NET Framework 4.8.1", ".NET Core 3.1", ".NET 5/6/7/8/10", "ASP.NET Core Web App", "ASP.NET Core Web API", "ASP.NET MVC 5", "ASP.NET Web API 2", "ASP.NET WebForms", "Blazor", "Microservices"]],
  ["Web Technologies", ["Angular 12 to 18", "AngularJS", "RxJS 7+", "NgRx 15/18", "Angular Material 18", "ReactJS 16/17", "Redux", "React Hooks", "Bootstrap 3/4/5", "jQuery", "AJAX", "Reactive Forms", "WCAG Accessibility Standards"]],
  ["Databases", ["SQL Server", "PostgreSQL", "Azure SQL", "Oracle 11g", "MongoDB", "Cosmos DB", "Redis", "Power BI", "SSRS"]],
  ["ORM Frameworks", ["ADO.NET", "Entity Framework", "Entity Framework Core 5/6/7/8", "LINQ", "Repository Pattern", "Unit of Work", "MediatR (Mediator Pattern)"]],
  ["Healthcare Technologies", ["HIPAA", "FHIR R4", "AHDS", "HL7", "ANSI X12 EDI (270/271, 276/277, 834, 835, 837)"]],
  ["Testing Frameworks", ["xUnit", "NUnit", "MSTest", "Jasmine", "Karma", "Integration Testing", "API Contract Testing", "Unit Testing"]],
  ["Web Services", ["RESTful APIs", "SOAP Web Services", "ASP.NET Web API", "Swagger/OpenAPI", "Third-Party API Integration", "Microservices APIs"]],
  ["Version Control Tools", ["Git", "GitHub", "TFS/TFVC", "SVN (Subversion)"]],
  ["DevOps & Monitoring Tools", ["Azure DevOps", "AWS CodePipeline", "AWS CodeBuild", "GitHub Actions", "Jenkins", "SonarQube", "Azure Monitor", "Application Insights", "Log4Net"]],
  ["Cloud Technologies", ["Microsoft Azure", "Azure App Services", "Azure Functions", "Azure API Management (APIM)", "Azure Data Factory", "AKS", "Azure Service Bus", "Azure Key Vault", "Azure Blob Storage", "Azure Monitor", "Application Insights", "Docker", "Kubernetes (AKS/EKS)", "Helm Charts", "AWS Lambda", "AWS EC2", "AWS API Gateway", "Amazon S3"]],
  ["AI & Generative AI Technologies", ["Azure OpenAI", "Azure AI Search", "Semantic Search", "Vector Search", "Semantic Kernel", "Claude AI", "GitHub Copilot", "LLMs", "Prompt Engineering", "Retrieval-Augmented Generation (RAG)", "Intelligent Document Processing", "AI-Assisted Automation", "Generative AI Integration"]],
  ["Architecture & messaging", ["Clean Architecture", "Apache Kafka", "RabbitMQ"]],
]
