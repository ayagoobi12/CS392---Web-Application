import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Main from "../components/Main";
import "./ReferencesPage.css";

export default function ReferencesPage() {
  return (
    <>
      <Header />
      <div id="container">
        <Nav />
        <Main>
          <section className="references">
            <h2>References</h2>

            <div className="reference-entry">
              <h3>Glenn Gaudette</h3>
              <p>Chair of the Department of Engineering, Boston College</p>
              <p>245 Beacon Street, Chestnut Hill, MA, 02467</p>
              <p>
                Phone:{" "}
                <a href="tel:16175522049">(617)-552-2049</a> | Email:{" "}
                <a href="mailto:glenn.gaudette@bc.edu">
                  glenn.gaudette@bc.edu
                </a>
              </p>
              <p>
                <em>
                  Technical supervisor for my Technical Consultant & Developer
                  projects (2021–2023)
                </em>
              </p>
            </div>

            <div className="reference-entry">
              <h3>Jonathan Fife</h3>
              <p>Chief Executive Officer & Forbes 30 Under 30, BrightFeeds</p>
              <p>76 Fuller Way, Berlin, CT 06037</p>
              <p>
                Phone: <a href="tel:19147143994">(914) 714-3994</a> | Email:{" "}
                <a href="mailto:jfife@brightfeeds.com">jfife@brightfeeds.com</a>
              </p>
              <p>
                <em>Direct supervisor at BrightFeeds (2021–2024)</em>
              </p>
            </div>

            <div className="reference-entry">
              <h3>Laxmi Wordham</h3>
              <p>Chief Growth Officer, BrightFeeds</p>
              <p>76 Fuller Way, Berlin, CT 06037</p>
              <p>
                Email:{" "}
                <a href="mailto:laxmiwordham@gmail.com">
                  laxmiwordham@gmail.com
                </a>
              </p>
              <p>
                <em>
                  Collaborated with me on business development at BrightFeeds
                  (2021–2023)
                </em>
              </p>
            </div>
          </section>
        </Main>
      </div>
      <Footer />
    </>
  );
}
