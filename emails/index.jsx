import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://localhost:3000";
  
  export const EmailTemplate = ({
    userFirstname="test user",
  }) => (
    <Html>
      <Head />
      <Preview>
      A website from where you can book appointments of your suited doctors and save your time.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`https://img.freepik.com/free-vector/hospital-logo-design-vector-medical-cross_53876-136743.jpg?w=740&t=st=1710433690~exp=1710434290~hmac=85125a1fdbfe2432350164fb501649b6581468be716ef9b77bbffc9789e3b1e3`}
            width="80"
            height="60"
            alt="Koala"
            style={logo}
          />
          <Text style={paragraph}>Hi {userFirstname},</Text>
          <Text style={paragraph}>
            Welcome to Ayushmann online Booking site, the website from where you can book appointment of your suited doctor and save your time.
          </Text>
          <Section style={btnContainer}>
            <Button style={button} href="http://localhost:3000/">
              Visit Site
            </Button>
          </Section>
          <Text style={paragraph}>
            Best Regard,
            <br />
            Ayushmann team
          </Text>
          <Hr style={hr} />
        </Container>
      </Body>
    </Html>
  );
  
  export default EmailTemplate;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
  const logo = {
    margin: "0 auto",
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
  };
  
  const btnContainer = {
    textAlign: "center" ,
  };
  
  const button = {
    backgroundColor: "#0096FF",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center" ,
    // display: "block",
    padding: "12px",
    width:"80px",
    height:"20px",
  };
  
  const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
  };
  