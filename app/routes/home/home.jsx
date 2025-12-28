import callAnalysisTextureLarge from '~/assets/call-analysis-large.jpg';
import callAnalysisTexturePlaceholder from '~/assets/call-analysis-placeholder.jpg';
import callAnalysisTexture from '~/assets/call-analysis.jpg';
import heyBuddyTextureLarge from '~/assets/hey-buddy-large.jpg';
import heyBuddyTexturePlaceholder from '~/assets/hey-buddy-placeholder.jpg';
import heyBuddyTexture from '~/assets/hey-buddy.jpg';
import internalCrmTexture2Large from '~/assets/internal-crm-2-large.png';
import internalCrmTexture2Placeholder from '~/assets/internal-crm-2-placeholder.jpg';
import internalCrmTexture2 from '~/assets/internal-crm-2.png';
import internalCrmTextureLarge from '~/assets/internal-crm-large.png';
import internalCrmTexturePlaceholder from '~/assets/internal-crm-placeholder.jpg';
import internalCrmTexture from '~/assets/internal-crm.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Experience } from './experience';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'AI Automation Engineer',
    description: `Portfolio of ${config.name} — an AI Automation Engineer building production-grade systems with LLMs, Voice AI, and workflow automation.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const experience = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, experience, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="projects"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="AI Call Analysis System"
        description="A production-ready system that analyzes sales and support calls using AI, extracting KPIs like sentiment, engagement, and outcomes"
        buttonText="View project"
        buttonLink="/projects/call-analysis"
        model={{
          type: 'laptop',
          alt: 'AI Call Analysis Dashboard',
          textures: [
            {
              srcSet: `${callAnalysisTexture} 1280w, ${callAnalysisTextureLarge} 2560w`,
              placeholder: callAnalysisTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Internal Team CRM"
        description="A comprehensive CRM with 3-level access control, task & leave management, reports, dashboards, project & document management, and Discord/Slack integration"
        buttonText="View project"
        buttonLink="/projects/internal-crm"
        model={{
          type: 'phone',
          alt: 'Internal Team CRM Mobile Interface',
          textures: [
            {
              srcSet: `${internalCrmTexture} 375w, ${internalCrmTextureLarge} 750w`,
              placeholder: internalCrmTexturePlaceholder,
            },
            {
              srcSet: `${internalCrmTexture2} 375w, ${internalCrmTexture2Large} 750w`,
              placeholder: internalCrmTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Hey Buddy - Virtual Assistant"
        description="An intelligent assistant with face auth, speech recognition, browser & system automation, Google & Spotify APIs, LLM chat, image generation, and gesture-based virtual mouse/keyboard using OpenCV"
        buttonText="View project"
        buttonLink="/projects/hey-buddy"
        model={{
          type: 'laptop',
          alt: 'Hey Buddy Virtual Assistant Dashboard',
          textures: [
            {
              srcSet: `${heyBuddyTexture} 1280w, ${heyBuddyTextureLarge} 2560w`,
              placeholder: heyBuddyTexturePlaceholder,
            },
          ],
        }}
      />
      <Experience
        sectionRef={experience}
        visible={visibleSections.includes(experience.current)}
        id="experience"
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
