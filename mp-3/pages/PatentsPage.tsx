import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Main from "../components/Main";
import "./PatentPage.css"

export default function PatentsPage() {
  return (
    <>
      <Header />
      <div id="container">
        <Nav />
        <Main>
          <section className="patents">
            <h2>Patents</h2>

            <div className="patent-entry">
              <h3>
                <a
                  href="https://patents.justia.com/patent/20240226831"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Conversion of Solid Waste Into a Blend Having a Target Composition
                </a>
              </h3>
              <p>Filed: October 20, 2023 | U.S. Patent Application No. 20240226831</p>
              <p>Inventors: Aidan Yagoobi, et al.</p>
            </div>
          </section>
        </Main>
      </div>
      <Footer />
    </>
  );
}
