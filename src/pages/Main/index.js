import React from 'react';

import {
  Header,
  LearnMoreLinks,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  Container,
  Scroll,
  Engine,
  Body,
  SectionContainer,
  SectionTitle,
  SectionDescription,
  Highlight,
  Footer,
} from './styles';

function Main() {
  return (
    <>
      <Container>
        <Scroll>
          <Header />
          {global.HermesInternal == null ? null : (
            <Engine>
              <Footer>Engine: Hermes</Footer>
            </Engine>
          )}
          <Body>
            <SectionContainer>
              <SectionTitle>Step One</SectionTitle>
              <SectionDescription>
                Edit <Highlight>src/pages/Main/index.js</Highlight> to change
                this screen and then come back to see your edits.
              </SectionDescription>
            </SectionContainer>
            <SectionContainer>
              <SectionTitle>See Your Changes</SectionTitle>
              <SectionDescription>
                <ReloadInstructions />
              </SectionDescription>
            </SectionContainer>
            <SectionContainer>
              <SectionTitle>Debug</SectionTitle>
              <SectionDescription>
                <DebugInstructions />
              </SectionDescription>
            </SectionContainer>
            <SectionContainer>
              <SectionTitle>Learn More</SectionTitle>
              <SectionDescription>
                Read the docs to discover what to do next:
              </SectionDescription>
            </SectionContainer>
            <LearnMoreLinks />
          </Body>
        </Scroll>
      </Container>
    </>
  );
}

export default Main;
