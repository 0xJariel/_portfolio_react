import { styled } from "styled-components";
import image from "./assets/profile.png";

const Home = () => {
  return (
    <HomeSection>
      <div className="heading">
        <div className="logo">J</div>
        <div className="hamburger">B</div>
      </div>
      <nav className="nav-bar">
        <div className="link-list">
          <div>Home</div>
          <div>About</div>
          <div>Works</div>
          <div>Contact</div>
        </div>
      </nav>
      <div className="home-body">
        <div className="wrapper">
          <div className="summary-section">
            <h1 className="summary-title">Hi! I'm Jariel.</h1>
            <p className="summary-description">
              A detail-oriented full-stack developer dedicated to crafting
              user-centric applications
            </p>
          </div>
          <div className="image-section">
            <div className="profile"></div>
          </div>
        </div>
      </div>
    </HomeSection>
  );
};

export default Home;

const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 3rem;
  /* align-items: center; */

  .heading {
    display: flex;
    height: 125px;
    justify-content: space-between;
    font-family: "Subway";
    font-size: 44px;
    padding-top: 2rem;
  }

  .nav-bar {
    display: flex;
    height: 3.75rem;
    font-size: 2.375rem;
    font-family: "Subway";

    .link-list {
      display: flex;
      gap: 3rem;
      color: var(--inactive-color);
    }
  }

  .home-body {
    display: grid;
    height: 30rem;
    width: 100%;
    background-color: rebeccapurple;
    justify-content: center;
    gap: 0.6rem;
  }

  .wrapper {
    display: grid;
    width: 100%;
    grid-template-columns: minmax(auto, 30rem) minmax(auto, 30rem);
    align-items: center;
  }

  .summary-section {
    display: grid;
    align-self: start;
    justify-self: end;
    padding-top: 7rem;
    gap: 2rem;
  }

  .summary-title {
  }

  .summary-description {
  }

  .image-section {
    height: 100%;
    border: 2px solid var(--inactive-color);
    border-radius: 50%;
    /* background-color: red; */
  }

  .profile {
    width: 100%;
    height: 100%;
    background-image: url(${image});
    /* background-color: red; */
  }
`;
