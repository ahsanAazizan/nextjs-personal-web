import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, LogoGrid, ButtonsGrid, SocialsGrid, NavButton, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <LogoGrid>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white", fontSize:"1.5rem", fontWeight:"bold" }}>
          <DiCssdeck size="5rem" /> <span style={{ marginRight:"10px"}}>tripleA</span>
        </a>
      </Link>
    </LogoGrid>
    <ButtonsGrid>
      <li style={{ marginRight:"8px"}}>
        <Link href="#about">
          <NavButton>About</NavButton>
        </Link>
      </li>        
      <li style={{ marginRight:"8px"}}>
        <Link href="#projects">
          <NavButton>Projects</NavButton>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavButton>Techs</NavButton>
        </Link>
      </li>        
    </ButtonsGrid>
    <SocialsGrid>
      <SocialIcons href="https://github.com/ahsanAazizan">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/ahsan-azizan-33908b250/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com/ahsan_azizan">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </SocialsGrid>
    </Container>
);

export default Header;
