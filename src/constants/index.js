import {mobile,backend,creator,web,javascript,typescript,html,css,reactjs,redux,tailwind,nodejs,mongodb,git,figma,docker,augustmortgage,situsamc,sls,clayton,jciii,easybay,pizzatime,speedymeals,threejs} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "CRE Compliance Underwriter (Remote)",
    company_name: "SitusAMC",
    icon: situsamc,
    iconBg: "#383E56",
    date: "April 2016 - April 2024",
    points: [
      "Reviewed accuracy average quality 99.8% for AUS/LPA, DU Findings including manual underwrites: QM, TRID, Credit, Compliance, Jumbo, HARP, Fix and Flips, Servicing, Modification, Bankruptcy, and Default.",
      "Audited Commercial and Residential Products: FNMA, FHLMC, FHA, VA, USDA, Non-QM, and HECM for adverse findings.",
      "Performed Risk Monitoring Audits of accounts payable and accounts receivable documentation to verify appropriate use of business funds.",
      "Calculated complex income: 1040’s, 1120’s, 1065’s as well as standard income and asset depletion to search for fraudulent activity to ensure safe lending using critical thinking skills.",
      "Managed, monitored, and reported on the performance of a $100B+ portfolio of largely transitional commercial real estate loans.",
    ],
  },
  {
    title: "Foreclosure Associate",
    company_name: "Specialized Loan Servicing, LLC",
    icon: sls,
    iconBg: "#E6DEDD",
    date: "August 2011 - July 2013",
    points: [
      "Review defaulted, modification workouts, payment histories, and servicing loans to validate income documentation supporting file to program guidelines while report findings back to client and OCC using Appian software.",
      "Audited for robo signing while on Consent Order Judicial and Non-Judicial foreclosures, modifications, and Bankruptcies independently meeting team goals and expectations.",
      "Orchestrated excellent PC skills, including Fidelity, Foreclosure Processing Systems, LPS Desktop, VendorScape, MERS to validate proper mortgage assignments.",
    ],
  },
  {
    title: "QC Default Foreclosure Analyst",
    company_name: "Clayton Holdings, LLC",
    icon: clayton,
    iconBg: "#E6DEDD",
    date: "August 2011 - July 2013",
    points: [
      "Review defaulted, modification workouts, payment histories, and servicing loans to validate income documentation supporting file to program guidelines while report findings back to client and OCC using Appian software.",
      "Audited for robo signing while on Consent Order Judicial and Non-Judicial foreclosures, modifications, and Bankruptcies independently meeting team goals and expectations.",
      "Orchestrated excellent PC skills, including Fidelity, Foreclosure Processing Systems, LPS Desktop, VendorScape, MERS to validate proper mortgage assignments.",
    ],
  },
  {
    title: "Foreclosure Associate",
    company_name: "JC III & Associates",
    icon: jciii,
    iconBg: "#383E56",
    date: "March 2010 - April 2011",
    points: [
      "Gather all collateral documents and ensure they complied and send to client for further review.",
    ],
  },
  {
    title: "Loan Processor",
    company_name: "August Mortgage Corporation",
    icon: augustmortgage,
    iconBg: "#E6DEDD",
    date: "Jan 2000 - Jan 2006",
    points: [
      "Accurately input and update critical data, preparing transactions for smooth closing by coordinating payoffs and collecting third-party fees from closing agents.",
      "Review and verify credit reports, analyzing FICO scores, payment histories, and validating debts, ensuring alignment with 1003 mortgage application details.",
      "Streamline loan processing, closing, and funding, ensuring efficient execution of all necessary steps for a successful transaction.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "This looks fantastic!",
    name: "Kimberly August",
    designation: "Former Owner",
    company: "August Mortgage Corporation",
    image: "noname.jpg",
  },
  {
    testimonial:
      "Example",
    name: "Example",
    designation: "Example ",
    company: "Example",
    image: "https://noname.jpg",
  },
  {
    testimonial:
      "Example 2",
    name: "Example  Wang",
    designation: "Example ",
    company: "Example",
    image: "https://noname/6.jpg",
  },
];

const projects = [
  {
    name: "Plant Store",
    description:
      "Store where individuals may purchase succulent plants. Developed application implementing mouse over picture using CSS, to see different plants to purchase. Created pop-up for user to accept cookies to retain user data.",

    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Web-Fundamentals",
        color: "green-text-gradient",
      },
      {
        name: "Cookies",
        color: "pink-text-gradient",
      },
    ],
    image: easybay,
    source_code_link:
      "https://github.com/CrystalW11/Crystal-s-Technical-Projects/blob/main/EasyBay.zip",
  },
  {
    name: "Pizza Time",
    description:
      "(Group Project) A place where people can create their own pizza to order and have it delivered or carry-out. Created and implemented login registration using foreign key and many-to-many relationship database tables using Bootstrap, Bcrypt, MySQL, Flask, HTTPS methods. Implemented GPS API, hidden input, and form, modularize using models & controllers, Jinja, and Emmet for delivery location.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: pizzatime,
    source_code_link: "https://github.com/DriftingShade/Pizza-Time",
  },
  {
    name: "Speedy Meals",
    description:
      "Social platform for fast meals made in under 30 minutes to share with others. Developed application implementing CRUD, Atlas MongoDB, Mongoose cluster to store meal collections using Bootstrap, form, modularizing using models & controllers, Axios API, Express, React Library and Node.js.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap & CSS",
        color: "pink-text-gradient",
      },
    ],
    image: speedymeals,
    source_code_link:
      "https://github.com/CrystalW11/Crystal-s-Technical-Projects/blob/main/speedy-meals.zip",
  },
];

export { services, technologies, experiences, testimonials, projects };
