import Card from './components/Card'

function App() {
  const jobOpenings = [
  {
    logo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    jobTitle: "Frontend Developer",
    pay: "$80,000 - $110,000",
    tag1: "Junior Level",
    tag2: "Full Time",
    posts: 3,
    datePosted: "2026-09-05",
    location: "Bangalore, India"
  },
  {
    logo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    jobTitle: "Software Engineer",
    pay: "$90,000 - $125,000",
    tag1: "Senior Level",
    tag2: "Full Time",
    posts: 2,
    datePosted: "2026-09-04",
    location: "Hyderabad, India"
  },
  {
    logo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    jobTitle: "React.js Developer",
    pay: "$70,000 - $100,000",
    tag1: "Junior Level",
    tag2: "Full Time",
    posts: 5,
    datePosted: "2026-09-03",
    location: "Mumbai, India"
  },
  {
    logo: "https://logo.clearbit.com/ibm.com",
    companyName: "IBM",
    jobTitle: "Full Stack Developer",
    pay: "$85,000 - $115,000",
    tag1: "Senior Level",
    tag2: "Full Time",
    posts: 4,
    datePosted: "2026-09-02",
    location: "Pune, India"
  },
  {
    logo: "https://logo.clearbit.com/infosys.com",
    companyName: "Infosys",
    jobTitle: "Node.js Developer",
    pay: "$55,000 - $75,000",
    tag1: "Junior Level",
    tag2: "Full Time",
    posts: 6,
    datePosted: "2026-09-01",
    location: "Delhi, India"
  },
  {
    logo: "https://logo.clearbit.com/tcs.com",
    companyName: "TCS",
    jobTitle: "MERN Stack Developer",
    pay: "$60,000 - $85,000",
    tag1: "Junior Level",
    tag2: "Part Time",
    posts: 2,
    datePosted: "2026-08-30",
    location: "Chennai, India"
  },
  {
    logo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    jobTitle: "UI/UX Developer",
    pay: "$75,000 - $105,000",
    tag1: "Senior Level",
    tag2: "Full Time",
    posts: 3,
    datePosted: "2026-08-29",
    location: "Noida, India"
  },
  {
    logo: "https://logo.clearbit.com/wipro.com",
    companyName: "Wipro",
    jobTitle: "JavaScript Developer",
    pay: "$50,000 - $70,000",
    tag1: "Junior Level",
    tag2: "Part Time",
    posts: 4,
    datePosted: "2026-08-28",
    location: "Kolkata, India"
  },
  {
    logo: "https://logo.clearbit.com/salesforce.com",
    companyName: "Salesforce",
    jobTitle: "Backend Developer",
    pay: "$85,000 - $120,000",
    tag1: "Senior Level",
    tag2: "Full Time",
    posts: 2,
    datePosted: "2026-08-27",
    location: "Gurgaon, India"
  },
  {
    logo: "https://logo.clearbit.com/flipkart.com",
    companyName: "Flipkart",
    jobTitle: "MERN Stack Developer",
    pay: "$65,000 - $90,000",
    tag1: "Junior Level",
    tag2: "Full Time",
    posts: 5,
    datePosted: "2026-08-26",
    location: "Bangalore, India"
  }
];
  return (
    <div className='parent'>
      {jobOpenings.map(function(el) {
        return <Card company={el.companyName}
         post={el.posts}
          logo={el.logo}
           job={el.jobTitle}
           tag1={el.tag1}
           tag2={el.tag2}
           loc={el.location}
           date={el.datePosted}
           pay={el.pay}  />
      })}
    </div>
  
  )
}

export default App
