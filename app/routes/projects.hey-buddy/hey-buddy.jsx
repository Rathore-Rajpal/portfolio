import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import heyBuddySs1 from '~/assets/hey-buddy-ss-1.png';
import heyBuddySs2 from '~/assets/hey-buddy-ss-2.png';
import heyBuddySs3 from '~/assets/hey-buddy-ss-3.png';
import heyBuddySs4 from '~/assets/hey-buddy-ss-4.png';
import heyBuddySs5 from '~/assets/hey-buddy-ss-5.png';
import heyBuddySs6 from '~/assets/hey-buddy-ss-6.png';
import heyBuddySs7 from '~/assets/hey-buddy-ss-7.png';
import heyBuddySs8 from '~/assets/hey-buddy-ss-8.png';
import heyBuddyTexturePlaceholder from '~/assets/hey-buddy-placeholder.jpg';
import { Footer } from '~/components/footer';
import { Icon } from '~/components/icon';
import { useTheme } from '~/components/theme-provider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';
import styles from './hey-buddy.module.css';
import { Suspense, lazy } from 'react';

const title = 'Hey Buddy — AI Virtual Assistant';
const description =
  'An AI-powered virtual assistant for automating system and browser tasks using voice, AI, and computer vision.';
const roles = [
  'Voice AI',
  'Automation',
  'Computer Vision',
  'LLM Integration',
  'System Integration',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

const Carousel = lazy(() =>
  import('~/components/carousel').then(module => ({ default: module.Carousel }))
);

export const HeyBuddy = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      <ProjectContainer className={styles.heyBuddy}>
        <ProjectBackground
          src={backgroundSpr}
          srcSet={`${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`}
          width={1080}
          height={600}
          placeholder={backgroundSprPlaceholder}
          opacity={isDark ? 0.5 : 0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
        />
        <div style={{ margin: '1.5rem 0 0 0' }}>
          <a href="https://github.com/Rathore-Rajpal/HeyBuddy" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          {' | '}
          <a href="https://heybuddy.rathorerajpal.live" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <Suspense>
              <Carousel
                placeholder={heyBuddyTexturePlaceholder}
                images={[
                  { srcSet: `${heyBuddySs1} 1920w`, sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`, alt: 'Hey Buddy Screenshot 1' },
                  { srcSet: `${heyBuddySs2} 1920w`, sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`, alt: 'Hey Buddy Screenshot 2' },
                  { srcSet: `${heyBuddySs3} 1920w`, sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`, alt: 'Hey Buddy Screenshot 3' },
                  { srcSet: `${heyBuddySs4} 1920w`, sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`, alt: 'Hey Buddy Screenshot 4' },
                  { srcSet: `${heyBuddySs5} 1920w`, sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`, alt: 'Hey Buddy Screenshot 5' },
                  { srcSet: `${heyBuddySs6} 1920w`, sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`, alt: 'Hey Buddy Screenshot 6' },
                  { srcSet: `${heyBuddySs7} 1920w`, sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`, alt: 'Hey Buddy Screenshot 7' },
                  { srcSet: `${heyBuddySs8} 1920w`, sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`, alt: 'Hey Buddy Screenshot 8' },
                ]}
                width={1920}
                height={1080}
              />
            </Suspense>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Intro</ProjectSectionHeading>
            <ProjectSectionText>
              Hey Buddy is an AI-powered virtual assistant built to automate everyday system and browser tasks using voice commands, AI reasoning, and computer vision. It acts as a personal productivity layer on top of the operating system, enabling hands-free and intelligent interactions.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Problem</ProjectSectionHeading>
            <ProjectSectionText>
              Most daily computer tasks—opening apps, searching, sending emails, managing tools—require repetitive manual actions. Traditional assistants are limited to predefined commands, lack deep system access, and fail to adapt to complex or contextual user requests.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The Solution</ProjectSectionHeading>
            <ProjectSectionText>
              Hey Buddy provides a voice-driven, AI-backed automation system that understands user intent and executes actions across the system and browser. By combining LLMs, automation logic, and vision-based controls, it converts natural language commands into real, executable workflows.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Technical Architecture</ProjectSectionHeading>
            <ProjectSectionText>
              The system is built using Python as the core engine, with speech recognition for voice input and LLM APIs for intent understanding and response generation. OpenCV and computer vision power gesture-based virtual mouse and keyboard controls. Backend databases manage contacts, commands, and user data, while integrations with Google APIs, Spotify API, email services, and browser automation tools enable external actions. The architecture is modular, allowing easy addition of new skills and integrations.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Key Features</ProjectSectionHeading>
            <ProjectSectionText>
              • Voice-controlled system and browser automation{'\n'}
              • Face authentication for secure access{'\n'}
              • AI-based intent detection and response handling{'\n'}
              • Virtual mouse and keyboard using gesture recognition{'\n'}
              • Email, Google tools, and Spotify integration{'\n'}
              • Image generation using AI APIs{'\n'}
              • Backend database for contact and command management
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Impact</ProjectSectionHeading>
            <ProjectSectionText>
              Hey Buddy significantly reduces manual effort and context switching by automating routine tasks through natural interaction. It demonstrates how AI, automation, and system-level integrations can work together to create a practical, production-ready virtual assistant, improving productivity and accessibility.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
