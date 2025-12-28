import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
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
import styles from './lead-generation.module.css';

const title = 'Lead Generation Platform';
const description =
  'A scalable system for sourcing, enriching, and managing leads with automated discovery from multiple sources, data validation, and direct CRM integration.';
const roles = [
  'Data Automation',
  'Web Scraping',
  'Data Enrichment',
  'Pipeline Architecture',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const LeadGeneration = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      <ProjectContainer className={styles.leadGeneration}>
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
              srcSet={`${sliceTexture} 800w, ${sliceTextureLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceTexturePlaceholder}
              alt="Lead Generation Platform Dashboard"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The Problem</ProjectSectionHeading>
            <ProjectSectionText>
              Sales teams struggle with lead quality and quantity. Manual lead sourcing is 
              slow and inconsistent, purchased lists are often outdated, and there's no 
              systematic way to enrich, validate, and prioritize leads before they enter 
              the sales pipeline.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The Solution</ProjectSectionHeading>
            <ProjectSectionText>
              I built an automated lead generation platform that discovers prospects from 
              multiple sources, enriches their data with additional context, validates 
              contact information, and pushes qualified leads directly into CRM systems. 
              The platform runs continuously, ensuring a steady flow of fresh, verified leads.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Data Pipeline</ProjectSectionHeading>
            <ProjectSectionText>
              The system uses intelligent web scraping, API integrations, and data aggregation 
              to source leads. Each lead passes through validation checks, deduplication, 
              and enrichment stages before being scored and routed. The pipeline handles 
              thousands of records daily with built-in error handling and retry logic.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Key Features</ProjectSectionHeading>
            <ProjectSectionText>
              • Multi-source lead discovery automation{'\n'}
              • Email and phone validation{'\n'}
              • Company and contact data enrichment{'\n'}
              • Deduplication and data cleaning{'\n'}
              • Lead scoring based on custom criteria{'\n'}
              • Direct CRM and workflow integration{'\n'}
              • Real-time monitoring and alerts{'\n'}
              • Customizable filtering and targeting rules
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Impact</ProjectSectionHeading>
            <ProjectSectionText>
              The platform has transformed lead generation from a manual, sporadic process 
              into a consistent, automated pipeline. Sales teams now receive pre-qualified, 
              enriched leads daily, significantly reducing prospecting time and improving 
              conversion rates. The system processes thousands of potential leads weekly, 
              filtering down to high-quality prospects.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
