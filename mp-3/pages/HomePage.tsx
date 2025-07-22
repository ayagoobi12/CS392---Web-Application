import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Main from "../components/Main";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <Header />
      <div id="container">
        <Nav />
        <Main className="home">
          <section className="home-section">
            <img
              className="profile-pic"
              src="/profilepic.png"
              alt="Aidan Yagoobi"
            />
            <h3>About Me</h3>
            <h4>
              I am Aidan Yagoobi, a Boston University graduate. During my time at
              Boston University, I researched AI Safety, 3D-Printing Brain Tumors,
              and quantitative finance. As I transition into post-grad life, I look
              to leverage my computer science and financial skills in a quantitative
              financial role.
            </h4>
          </section>
        </Main>
      </div>
      <Footer />
    </>
  );
}
