// src/pages/EduPage.tsx
import Header from "../components/Header";
import Nav    from "../components/Nav";
import Footer from "../components/Footer";
import Main   from "../components/Main";
import "./EduPage.css";

export default function EduPage() {
  return (
    <>
      <Header />
      <div id="container">
        <Nav />
        <Main>
          <section className="education">
            <h2>Education</h2>

            <div className="edu-entry">
              <h3>Boston University</h3>
              <p>Bachelor of Arts in Computer Science</p>
              <p>2021 – 2025 | Boston, MA</p>
            </div>

            <div className="edu-entry">
              <h3>Hopkinton High School</h3>
              <p>2017 – 2021 | Hopkinton, MA</p>
            </div>
          </section>
        </Main>
      </div>
      <Footer />
    </>
  );
}
