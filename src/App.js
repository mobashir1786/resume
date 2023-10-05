import './App.css';
import Contact from './components/Contact';
import Education from './components/Education';
import Header from './components/Header';
import Interest from './components/Interest';
import Internship from './components/Internship';
import Language from './components/Language';
import Project from './components/Project';
import Skill from './components/Skill';

function App() {
  let educationData = [
    { name: "Full Stack Web Developer(MERN)", institute: "Prepbytes(Elevation Academy),Onlinemode", date: "08/2022 - 02/2023" },
    { name: "B.tech (in Mechanical Engineering)", institute: "Vidya Vihar Institute Of Technology, Purnea", date: "06/2017 - 10/2021" },
    { name: "Senior secondry (12th)", institute: "Muslim High School +2 , Bhagalpur", date: "04/2015 - 04/2017" }
  ];

  let projectData = [
    {
      name: "Reflect Clone (08/2023 - 08/2023)",
      desc1: "Technology Used:- HTML , CSS , React-Bootstrap, JavaScript, React.js, Node.js, JWT, Express.js, MongoDB, Bcrypt, RestAPI, etc.",
      desc2: "In this project user can purchase hall according to requirement in your city, if city is not listed so they can contact to sale, and admin can create, edit user's event",
      url: "https://whatcode-frontend.vercel.app/"
    },
    {
      name: "E-Commerce Website (11/2022 - 12/2022)",
      desc1: "Technology Used:- HTML , CSS , React-Bootstrap, JavaScript, React.js, Node.js, JWT, Express.js, MongoDB",
      desc2: "In This Project a User portal. Where user can login, signup, purchase products and admin can add, update, delete products",
      url: "https://grocery-shop-mobashir.netlify.app/"
    },
    {
      name: "Beauty Salon Project (12/2022 - 12/2022)",
      desc1: "Technology Used:- HTML , CSS , React-Bootstrap, JavaScript, React.js.",
      desc2: "This is only UI of a salon. ",
      url: "https://beauty-salon-task.netlify.app/"
    },
    {
      name: "React Blog Project (10/2022 - 10/2022)",
      desc1: "Technology Used:- HTML , CSS , JAVASCRIPT, REACT.Js.",
      desc2: "this is a react blog project for UI.",
      url: "https://react-blog-prepbytes.netlify.app/"
    },
    {
      name: "Digital Clock (07/2022 - 07/2022)",
      desc1: "This Clock change the text like Morning, Afternoon, etc according to time",
      desc2: "Technology Used:- HTML , CSS , JAVASCRIPT.",
      url: "https://mobashir1786.github.io/digitalClockProject/projec4.html"
    },
  ]

  let skills = ["HTML", "CSS", "Bootstrap", "Javascript", "React.js", "Netlify", "Node.js", "Express.js", "MongoDB", "JWT token", "RestAPI", "Git", "Github", "Gsap", "Socket.IO", "MERN", "DSA", "React Native", "Three.js", "WebRTC", "Next.js", "Nest.js", "Dart", "Leadeship"];

  let internshipData = [
    {
      name: "SDE internship (oopar-club)",
      date: "(02/2023 - 03/2023)",
      desc: "User Authentication, password eye button, ionic, scss, typescript, dark mode. ",
      url: "https://play.google.com/store/apps/details?id=club.oopar.app"
    },
    {
      name: "React Developer (EVE healthcare)",
      date: "(02/2023 - 04/2023)",
      desc: "Creating Company's website on react from scratch using React",
      url: "https://evehealthcarecenter.com"
    }
  ]

  let languageData = [
    { name: "English", ability: "Professional Working Proficiency" },
    { name: "Hindi", ability: "Professional Working Proficiency" },
    { name: "Urdu", ability: "Limited Working Proficiency" }
  ]

  let interestData = ["Learing new skill", "Teaching mobile ", "app developmen"]
  return (
    <div className="App">
      <Header />
      <Contact />
      <div className="allcontent">
        <div className="allcontentLeft">
          <div className='allcontentHeading'>EDUCATION</div>
          <hr />
          {educationData.map((n) => (<Education name={n.name} institute={n.institute} date={n.date} />))}

          <div className='allcontentHeading'>PERSONAL PROJECTS</div>
          <hr />
          {projectData.map((n) => (<Project name={n.name} desc1={n.desc1} desc2={n.desc2} url={n.url} />))}
        </div>
        <div className="allcontentRight">
          <div className='allcontentHeading'>SKILL</div>
          <hr />
          <div className="skill">{skills.map((n) => (<Skill n={n} />))}</div>

          <div className='allcontentHeading'>INTERNSHIP</div>
          <hr />
          {internshipData.map((n) => (<Internship name={n.name} desc={n.desc} date={n.date} url={n.url} />))}


          <div className='allcontentHeading'>LANGUAGES</div>
          <hr />
          {languageData.map((n) => (<Language name={n.name} desc={n.ability} />))}


          <div className='allcontentHeading'>SKILL</div>
          <hr />
          <div className="skill">{interestData.map((n) => (<Interest n={n} />))}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
