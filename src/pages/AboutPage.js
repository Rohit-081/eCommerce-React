import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam aut
            laboriosam similique ex ea illum consequatur quae iure impedit
            voluptate maxime dicta nulla modi, minus voluptates animi alias
            molestiae enim eligendi assumenda aspernatur cumque optio quidem
            facilis. Nulla tenetur, quos voluptatibus perferendis aspernatur
            doloribus molestiae! Sequi, unde quibusdam quam ipsam labore
            laudantium nobis nulla. Aliquam doloribus eum hic, architecto quod
            deserunt, libero praesentium reprehenderit earum velit corrupti
            aspernatur dolorem dolore blanditiis aliquid rerum doloremque
            pariatur quis ex animi omnis! Cupiditate, molestiae adipisci!
            Repudiandae asperiores, minus reiciendis alias autem tempora dicta?
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
