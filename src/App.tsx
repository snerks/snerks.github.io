import './App.css'
import { Header } from './Header'
import { Footer } from './Footer'
import HeaderImage from './assets/mike-carter-53.jpg'
// import { ProjectSummary } from './ProjectSummary'
import { dotnetProjectSummaries } from './DotnetProjectSummariesData'
import { projectSummaries } from './ProjectSummariesData'
import { ProjectSection } from './ProjectSection'

function App() {

  const reactProjectSummaries =
    projectSummaries.filter(p => p.technologies.some(t => t.toLowerCase().includes('react')) &&
      !p.technologies.some(t => t.toLowerCase().includes('angular')));

  const angularProjectSummaries = projectSummaries.filter(p => p.technologies.some(t => t.toLowerCase().includes('angular')));

  const typescriptProjectSummaries =
    projectSummaries.filter(p => p.technologies.some(t => t.toLowerCase().includes('angular')) || p.technologies.some(t => t.toLowerCase().includes('typescript')));

  return (
    <>
      <Header />

      <div id="wrapper">
        {/* Main */}
        <div id="main">
          {/* One */}
          <section id="one">
            <div className="image main" data-position="center">
              {/* <img src="images/beach-shoreline-coast-summer.jpg" alt="" /> */}
              <img src={HeaderImage} alt="Header Image" />
            </div>
            <div className="container">
              <header className="major">
                <h2>About snerks</h2>
                <p>Full-Stack software development specialist<br /></p>
              </header>
            </div>
          </section>

          {/* Two */}
          <section id="two">
            <div className="container">
              <h3>Things I Can Do</h3>

              <ul className="feature-icons">
                <li className="icon solid fa-code">.NET Core</li>
                <li className="icon solid fa-code">C#</li>
                {/* <li className="icon solid fa-code">NodeJs</li> */}
                <li className="icon solid fa-bolt">React</li>
                <li className="icon solid fa-angle-up">Angular</li>
                <li className="icon solid fa-code">TypeScript</li>
                {/* <li className="icon solid fa-code">Blazor</li> */}
                <li className="icon solid fa-cloud-upload-alt">DevOps</li>
                <li className="icon solid fa-cloud-upload-alt">Docker</li>
                {/* <li className="icon solid fa-vial">Unit Testing</li> */}
                <li className="icon solid fa-code">Lambda Functions</li>
              </ul>
            </div>
          </section>

          <ProjectSection sectionId="react" sectionTitle="A Few React Apps" projectSummaries={reactProjectSummaries} />

          <ProjectSection sectionId="typescript" sectionTitle="A Few TypeScript Apps" projectSummaries={typescriptProjectSummaries} />

          <ProjectSection sectionId="angular" sectionTitle="A Few Angular Apps" projectSummaries={angularProjectSummaries} />

          <ProjectSection sectionId="devops" sectionTitle="A Few DevOps Apps" projectSummaries={dotnetProjectSummaries} />

        </div>
      </div>

      <Footer />

    </>
  )
}

export default App


