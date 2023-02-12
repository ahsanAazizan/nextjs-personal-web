import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        <p>
          Welcome To <br />
            <span style={{ color: "#71cfe0" }}>Ahsan</span>'s Personal Web.
          </p>
        </SectionTitle>
        <SectionText>
          I'm a student at SMK Telkom Sandhy Putra Malang majoring in Software Engineering, currently learning web development.
        </SectionText>
        <a href={"mailto:ahsanaz461@gmail.com"}>
          <Button onClick={props.handleClick}>Contact Me</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;