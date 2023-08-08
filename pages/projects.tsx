import Heading from "components/projects/Heading";
import Page from "components/utility/Page";
import Projects from "components/projects/Projects";
import React from "react";

function projects() {
  return (
    <Page
      currentPage="Projects"
      meta={{
        title: "Projects",
        desc: "",
      }}
    >
      <Heading />
      <Projects />
    </Page>
  );
}

export default projects;
