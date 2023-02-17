import React from 'react';

import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

const data = [
  { number: 10, text: 'Personal Projects'},
  { number: 4, text: 'Certificates', },
  { number: 3, text: 'Open-Source projects'}
];

const Accomplishments = () => (
  <Section>
    <SectionTitle>Accomplishments</SectionTitle>
    <SectionText>
      I have achieved some personal accomplishments throughout my coding journey. Things like certificates and personal projects. 
    </SectionText>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Accomplishments;
