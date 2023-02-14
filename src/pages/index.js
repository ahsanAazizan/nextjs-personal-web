import Accomplishments from '../components/Accomplishments/Accomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import About from '../components/About/About';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <title>Personal Website</title>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <About />
      <Projects />
      <Technologies />
      <Accomplishments />
    </Layout>
  );
};

export default Home;
