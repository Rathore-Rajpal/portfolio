import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { useTheme } from '~/components/theme-provider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';
import styles from './calling-agent.module.css';

const title = 'Calling and Booking Agent';
const description =
  'An autonomous AI agent that conducts natural conversations over calls, qualifies users, confirms intent, and books appointments automatically with structured outputs.';
const roles = [
  'Voice AI',
  'Conversational Design',
  'Decision Logic',
  'Calendar Integration',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const CallingAgent = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      <ProjectContainer className={styles.callingAgent}>
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
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`}
              width={375}
              height={814}
              placeholder={gamestackTexturePlaceholder}
              alt="AI Calling Agent mobile interface"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The Challenge</ProjectSectionHeading>
            <ProjectSectionText>
              Businesses spend countless hours on repetitive phone calls - confirming appointments, 
              qualifying leads, and scheduling follow-ups. Human agents are expensive, inconsistent, 
              and can't scale to handle peak demand. The challenge was to build an AI agent that 
              could handle these conversations naturally and reliably.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The Solution</ProjectSectionHeading>
            <ProjectSectionText>
              I developed an autonomous voice AI agent powered by large language models and 
              text-to-speech technology. The agent can initiate outbound calls, respond to 
              natural language, handle interruptions, ask qualifying questions, and make 
              decisions based on conversational context - all while sounding natural and 
              professional.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Conversation Design</ProjectSectionHeading>
            <ProjectSectionText>
              The agent uses a sophisticated decision tree combined with LLM-powered natural 
              language understanding. It can handle edge cases, unexpected responses, and 
              complex multi-turn conversations. The system includes fallback mechanisms and 
              knows when to gracefully hand off to a human agent.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Key Capabilities</ProjectSectionHeading>
            <ProjectSectionText>
              • Natural voice conversations with minimal latency{'\n'}
              • Lead qualification through dynamic questioning{'\n'}
              • Intent confirmation and objection handling{'\n'}
              • Real-time calendar integration for booking{'\n'}
              • Structured data extraction from conversations{'\n'}
              • Automatic follow-up scheduling{'\n'}
              • CRM integration for lead updates{'\n'}
              • Call recording and transcript generation
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Results</ProjectSectionHeading>
            <ProjectSectionText>
              The agent now handles hundreds of calls autonomously, successfully booking 
              appointments and qualifying leads without human intervention. It operates 24/7, 
              ensuring no lead goes unanswered, while maintaining consistent quality and 
              reducing operational costs significantly.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
