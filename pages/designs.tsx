import Heading from "components/designs/Heading";
import More from "components/designs/More";
import Page from "components/utility/Page";
import Projects from "components/designs/Designs";
import React from "react";

function resume() {
  return (
    <Page
      currentPage="Resume"
      meta={{
        desc: "",
      }}
    >
      <Heading />
    </Page>
  );
}

export default resume;
