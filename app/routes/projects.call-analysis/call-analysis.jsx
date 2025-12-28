import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import callAnalysisSs1 from '~/assets/call-analysis-ss-1.png';
import callAnalysisSs2 from '~/assets/call-analysis-ss-2.png';
import callAnalysisSs3 from '~/assets/call-analysis-ss-3.png';
import callAnalysisSs4 from '~/assets/call-analysis-ss-4.png';
import callAnalysisPlaceholder from '~/assets/call-analysis-placeholder.jpg';
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
import styles from './call-analysis.module.css';
import { Suspense, lazy } from 'react';

const Carousel = lazy(() =>
  import('~/components/carousel').then(module => ({ default: module.Carousel }))
);

const title = 'AI Call Analysis System';
const description =
  'A production-ready system that analyzes sales and support calls using AI. Converts recordings into transcripts, extracts KPIs like sentiment, engagement, objections, confidence, and outcomes, generating structured insights for teams at scale.';
const roles = [
  'LLM Integration',
  'Speech-to-Text',
  'Data Pipeline',
  'Analytics Dashboard',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const CallAnalysis = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      <ProjectContainer className={styles.callAnalysis}>
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
          <a href="https://github.com/Tasknova/Tasknova-Sales-Call-Analysis" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          {' | '}
          <a href="https://sales.tasknova.io" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <Suspense>
              <Carousel
                placeholder={callAnalysisPlaceholder}
                images={[
                  {
                    srcSet: `${callAnalysisSs1} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'Call Analysis Dashboard - Overview of call metrics and insights',
                  },
                  {
                    srcSet: `${callAnalysisSs2} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'Call Analysis Dashboard - Sentiment analysis view',
                  },
                  {
                    srcSet: `${callAnalysisSs3} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'Call Analysis Dashboard - KPI extraction results',
                  },
                  {
                    srcSet: `${callAnalysisSs4} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'Call Analysis Dashboard - Team performance metrics',
                  },
                ]}
                width={1920}
                height={1080}
              />
            </Suspense>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The Problem</ProjectSectionHeading>
            <ProjectSectionText>
              Sales and support teams generate thousands of hours of call recordings, but extracting 
              actionable insights from this data was manual, time-consuming, and inconsistent. 
              Managers needed a way to understand call quality, agent performance, and customer 
              sentiment at scale without listening to every call.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The Solution</ProjectSectionHeading>
            <ProjectSectionText>
              I built an end-to-end AI-powered call analysis system that automatically processes 
              call recordings through speech-to-text transcription, then uses LLMs to extract 
              structured insights. The system identifies key moments, tracks objections, measures 
              sentiment throughout the call, and scores overall engagement and outcomes.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Technical Architecture</ProjectSectionHeading>
            <ProjectSectionText>
              The pipeline uses advanced speech-to-text models for accurate transcription, 
              followed by custom LLM prompts for insight extraction. Data flows through 
              automated workflows that handle batching, error recovery, and result aggregation. 
              Results are stored in a structured database and surfaced through analytics dashboards 
              for managers and leadership.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Key Features</ProjectSectionHeading>
            <ProjectSectionText>
              • Automatic call transcription with speaker diarization{'\n'}
              • Sentiment analysis tracking throughout calls{'\n'}
              • Objection detection and categorization{'\n'}
              • Engagement and confidence scoring{'\n'}
              • Outcome prediction and classification{'\n'}
              • Multi-user team dashboards{'\n'}
              • Batch processing for high call volumes{'\n'}
              • Custom KPI extraction based on business needs
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Impact</ProjectSectionHeading>
            <ProjectSectionText>
              The system now processes hundreds of calls daily, providing real-time insights 
              that help teams identify coaching opportunities, track performance trends, and 
              understand customer pain points. What used to take hours of manual review now 
              happens automatically within minutes of call completion.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
