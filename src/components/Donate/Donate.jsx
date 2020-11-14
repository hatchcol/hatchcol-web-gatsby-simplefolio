import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Donate = () => {
  const { donate } = useContext(PortfolioContext);
  const { cta, btn, email } = donate;

  return (
    <section id="donate">
      <Container>
        <Title title="Donate" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="donate-wrapper">
            <p className="donate-wrapper__text">
              {cta || 'want to support our mission? yay!'}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={url || 'https://www.classy.org/campaign/hatchcol-hope/c312715'}
            >
              {btn || "donate"}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Donate;
