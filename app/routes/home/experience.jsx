import tasknovaLogo1 from '~/assets/tasknova-logo-1.png';
import volkiharEnderal from '~/assets/volkihar-enderal.jpg';
import volkiharEnderalPlaceholder from '~/assets/volkihar-enderal-placeholder.jpg';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Loader } from '~/components/loader';
import { deviceModels } from '~/components/model/device-models';
import { useWindowSize } from '~/hooks';
import { useHydrated } from '~/hooks/useHydrated';
import { Suspense, lazy, useEffect, useState } from 'react';
import { cssProps, media } from '~/utils/style';
import { useTheme } from '~/components/theme-provider';
import katakana from './katakana.svg';
import styles from './experience.module.css';

const Model = lazy(() =>
  import('~/components/model').then(module => ({ default: module.Model }))
);

export const Experience = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [sectionLoaded, setSectionLoaded] = useState(false);
  const { theme } = useTheme();
  const { width } = useWindowSize();
  const isHydrated = useHydrated();
  const titleId = `${id}-title`;
  const isMobile = width <= media.tablet;
  const svgOpacity = theme === 'light' ? 0.7 : 1;
  const laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;

  useEffect(() => {
    if (visible || focused) {
      const timer = setTimeout(() => setSectionLoaded(true), 1000);
      return () => clearTimeout(timer);
    } else {
      setSectionLoaded(false);
    }
  }, [visible, focused]);

  function handleModelLoad() {
    setModelLoaded(true);
  }

  function renderKatakana(visible) {
    return (
      <svg
        type="experience"
        data-visible={visible && modelLoaded}
        data-light={theme === 'light'}
        style={cssProps({ opacity: svgOpacity })}
        className={styles.svg}
        viewBox="0 0 751 136"
      >
        <use href={`${katakana}#katakana-project`} />
      </svg>
    );
  }

  function renderPreview(visible) {
    return (
      <div className={styles.preview}>
        {renderKatakana(visible)}
        <div className={styles.model} data-device="laptop">
          {!modelLoaded && (
            <Loader center className={styles.loader} data-visible={visible} />
          )}
          {isHydrated && visible && (
            <Suspense>
              <Model
                alt="Tasknova - AI Automation Company"
                cameraPosition={{ x: 0, y: 0, z: 8 }}
                showDelay={700}
                onLoad={handleModelLoad}
                show={visible}
                models={[
                  {
                    ...deviceModels.laptop,
                    texture: {
                      srcSet: `${volkiharEnderal} 1280w`,
                      placeholder: volkiharEnderalPlaceholder,
                      sizes: laptopSizes,
                    },
                  },
                ]}
              />
            </Suspense>
          )}
        </div>
      </div>
    );
  }

  return (
    <Section
      className={sectionLoaded ? `${styles.experience} ${styles.experienceLoaded}` : styles.experience}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <div className={styles.content}>
        {!sectionLoaded ? (
          <div className={styles.sectionLoader}><Loader center /></div>
        ) : (
          <Transition in={visible || focused}>
            {({ visible }) => (
              <>
                {!isMobile && (
                  <>
                    <div className={styles.details}>
                      <div aria-hidden className={styles.index}>
                        <Divider
                          notchWidth="64px"
                          notchHeight="8px"
                          collapsed={!visible}
                          collapseDelay={1000}
                        />
                        <span className={styles.indexNumber} data-visible={visible}>
                          Work
                        </span>
                      </div>
                      
                      <div className={styles.experienceCard} data-visible={visible}>
                        <div className={styles.cardHeader}>
                          <div className={styles.logoWrapper}>
                            <Image
                              className={styles.companyLogo}
                              srcSet={tasknovaLogo1}
                              width={120}
                              height={40}
                              alt="Tasknova Logo"
                            />
                          </div>
                          <div className={styles.headerInfo}>
                            <Heading className={styles.role} level={4}>
                              AI Automation Engineer (Intern)
                            </Heading>
                            <Text className={styles.company} size="m">
                              Tasknova
                            </Text>
                          </div>
                        </div>
                        
                        <div className={styles.cardMeta}>
                          <div className={styles.metaItem}>
                            <span className={styles.metaIcon}>📍</span>
                            <Text size="s">Remote - Hadapsar, Pune</Text>
                          </div>
                          <div className={styles.metaItem}>
                            <span className={styles.metaIcon}>📅</span>
                            <Text size="s">May 2025 - Present</Text>
                          </div>
                        </div>
                        
                        <Divider className={styles.divider} />
                        
                        <Text className={styles.description} size="m" as="p">
                          Built end-to-end AI automation applications combining backend logic, APIs, 
                          and workflow orchestration. Developed AI-powered systems using LLMs for 
                          data analysis, reporting, and decision support.
                        </Text>
                        
                        <Text className={styles.description} size="m" as="p">
                          Worked on integrations-heavy apps involving REST APIs, databases, and 
                          automation tools, focusing on scalability, reliability, and clean deployment.
                        </Text>
                        
                        <div className={styles.companyInfo}>
                          <Text className={styles.companyDescription} size="s" as="p">
                            Tasknova is a Pune-based startup providing AI and AI Automation services 
                            to small and medium scale industries.
                          </Text>
                        </div>
                      </div>
                    </div>
                    {renderPreview(visible)}
                  </>
                )}
                {isMobile && (
                  <>
                    {renderPreview(visible)}
                    <div className={styles.details}>
                      <div aria-hidden className={styles.index}>
                        <Divider
                          notchWidth="64px"
                          notchHeight="8px"
                          collapsed={!visible}
                          collapseDelay={1000}
                        />
                        <span className={styles.indexNumber} data-visible={visible}>
                          Work
                        </span>
                      </div>
                      
                      <div className={styles.experienceCard} data-visible={visible}>
                        <div className={styles.cardHeader}>
                          <div className={styles.logoWrapper}>
                            <Image
                              className={styles.companyLogo}
                              srcSet={tasknovaLogo1}
                              width={120}
                              height={40}
                              alt="Tasknova Logo"
                            />
                          </div>
                          <div className={styles.headerInfo}>
                            <Heading className={styles.role} level={4}>
                              AI Automation Engineer (Intern)
                            </Heading>
                            <Text className={styles.company} size="m">
                              Tasknova
                            </Text>
                          </div>
                        </div>
                        
                        <div className={styles.cardMeta}>
                          <div className={styles.metaItem}>
                            <span className={styles.metaIcon}>📍</span>
                            <Text size="s">Remote - Hadapsar, Pune</Text>
                          </div>
                          <div className={styles.metaItem}>
                            <span className={styles.metaIcon}>📅</span>
                            <Text size="s">May 2025 - Present</Text>
                          </div>
                        </div>
                        
                        <Divider className={styles.divider} />
                        
                        <Text className={styles.description} size="m" as="p">
                          Built end-to-end AI automation applications combining backend logic, APIs, 
                          and workflow orchestration. Developed AI-powered systems using LLMs for 
                          data analysis, reporting, and decision support.
                        </Text>
                        
                        <Text className={styles.description} size="m" as="p">
                          Worked on integrations-heavy apps involving REST APIs, databases, and 
                          automation tools, focusing on scalability, reliability, and clean deployment.
                        </Text>
                        
                        <div className={styles.companyInfo}>
                          <Text className={styles.companyDescription} size="s" as="p">
                            Tasknova is a Pune-based startup providing AI and AI Automation services 
                            to small and medium scale industries.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
          </Transition>
        )}
      </div>
    </Section>
  );
};
