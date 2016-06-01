// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  auth: require("../assets/auth.png"),
  aws: require("../assets/aws.png"),
  goog: require("../assets/google-sign-in.png"),
  gPlus: require("../assets/g-plus.png")  
};

preloader(images);

const theme = createTheme({
  primary: "#3F7E8A"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide>
            <Heading fit caps>Ipreo Account</Heading>
            <Text italic>(An Identity Provider for Ipreo Applications)</Text>
          </Slide>
          <Slide>
            <Heading fit caps>Similar to Google Account</Heading>
            <Text italic>(An Identity Provider for Random Internet Applications)</Text>
            <Text margin={50} />
            <Layout>
              <Fill>
                <Appear><Image src={images.gPlus} width="70%"/></Appear>
              </Fill>
              <Fill>
                <Appear><Image src={images.goog} width="70%"/></Appear>
              </Fill>
            </Layout>
            <Text margin={50} />
            <Appear><Text> This is OAuth 2 authentication and the interaction (flow, payload, steps) is governed by the Open ID Connect spec</Text></Appear>
          </Slide>
          <Slide>
            <Heading fit caps> Enter Identity Server (4.0)</Heading>
            <Text margin={50} />
            <Text>A Free+Open .NET (core) implementation of Open ID Connect already exists</Text>
            <Text margin={50} />            
            <Link href='https://github.com/IdentityServer/IdentityServer4'>
              <Text italic>view on github</Text>
            </Link>
          </Slide>
          <Slide>
            <Heading fit caps>Benefits of a Central Authentication Provider</Heading>
            <List>
              <Appear><ListItem>Application teams no longer have to manage credentials</ListItem></Appear>
              <Appear><ListItem>Advanced Authentication Scenarios (MFA, Federated SSO)</ListItem></Appear>
              <Appear><ListItem>Client Policies (session timeouts, sso required)</ListItem></Appear>
              <Appear><ListItem>Integrations between applications (resources)</ListItem></Appear>
            </List>
          </Slide>
          <Slide>
            <Heading fit caps>And Also... This...</Heading>
            <Text margin={50} />
            <Image src={images.auth} width="90%" />
            <Text margin={50} />
          </Slide>
          <Slide>
            <Heading fit caps>Infrastructure</Heading>
            <Text italic>(AWS for practically everything)</Text>
            <Text margin={50}/>
            <Layout>
              <Fill>
                <Heading textAlign="left" textColor='black' size={5}> Goals </Heading>
                <List>
                  <Appear><ListItem>Environment setup via code</ListItem></Appear>
                  <Appear><ListItem>Multi AZ and Multi Region</ListItem></Appear>
                  <Appear><ListItem>Elastic EC2 Clusters</ListItem></Appear>
                  <Appear><ListItem>Zero Downtime Deployment</ListItem></Appear>                  
                </List>
              </Fill>
              <Fill>
                <Appear><Image src={images.aws} width="100%"/></Appear>
              </Fill>
            </Layout>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
