import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Main from "../components/Main";
import "./employment.css";

export default function EmpPage() {
  return (
    <>
      <Header />
      <div id="container">
        <Nav />
        <Main>
          <section className="employment">
            <h2>Employment</h2>

            <div className="job-entry">
              <h3>Harvard AI Safety</h3>
              <p>Technical Fellow</p>
              <p>Jan 2025 – Present | Boston, MA</p>
              <ul>
                <li>
                  Researching robust & reliable behavior in machine learning
                  systems, collaborating with MIT AI Alignment.
                </li>
              </ul>
            </div>

            <div className="job-entry">
              <h3>Boston University</h3>
              <p>Researcher – 3D Tumor Reconstruction</p>
              <p>Nov 2024 – Present | Boston, MA</p>
              <ul>
                <li>
                  Implemented variational auto-encoders to process 2D MRI imaging
                  into 3D printed tumor models for surgical planning.
                </li>
              </ul>
            </div>

            <div className="job-entry">
              <h3>BrightFeeds</h3>
              <p>Technical Analyst</p>
              <p>Jun 2022 – Sep 2024 | Berlin, CT</p>
              <ul>
                <li>
                  Connected financial data (Ocean Spray, Beyond Meat, Frito Lay)
                  to a time-weighted elastic net regression for portfolio &
                  warehouse demand optimization of accounts up to $4M.
                </li>
                <li>
                  Authored and submitted machine learning patents and NSF/DOE
                  grants, resulting in two granted patents.
                </li>
              </ul>
            </div>
          </section>
        </Main>
      </div>
      <Footer />
    </>
  );
}
