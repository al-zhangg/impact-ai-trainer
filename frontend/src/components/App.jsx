import React from "react";
import Layout from "./components/Layout";
import UploadSection from "./components/UploadSection";
import HowItWorks from "./components/HowItWorks";

export default function App() {
  return (
    <Layout currentPageName="Home">
      <UploadSection />
      <HowItWorks />
    </Layout>
  );
}
