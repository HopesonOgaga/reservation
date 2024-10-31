import React from "react";
import {
  Button,
  Html,
  Body,
  Container,
  Head,
  Heading,
  Img,
  Link,
  Preview,
  Text,
} from "@react-email/components";



const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";

export default function WelcomeEmail({ loginCode }) {
  return (
    <Html>
      <Head />
      <Preview>Log in with this magic link</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Welcome</Heading>
          <Text style={{ ...text, color: "#ababab", marginTop: "14px", marginBottom: "16px" }}>
            Thank you for signing up for our newsletter
          </Text>
          <Text style={{ ...text, marginBottom: "14px" }}></Text>
          <Text style={{ ...text, color: "#ababab", marginTop: "12px", marginBottom: "38px" }}>
            Hint: You can set a permanent password in Settings & members → My account.
          </Text>
          <Img src={`${baseUrl}/static/notion-logo.png`} width="32" height="32" alt="Notion's Logo" />
          {/* Uncomment if needed */}
          {/* 
          <Text style={footer}>
            <Link href="https://notion.so" target="_blank" style={{ ...link, color: "#898989" }}>
              Notion.so
            </Link>
            , the all-in-one workspace for your notes, tasks, wikis, and databases.
          </Text> 
          */}
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const footer = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};

const code = {
  display: "inline-block",
  padding: "16px 4.5%",
  width: "90.5%",
  backgroundColor: "#f4f4f4",
  borderRadius: "5px",
  border: "1px solid #eee",
  color: "#333",
};
