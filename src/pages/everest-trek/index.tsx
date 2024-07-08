import Seo from "@/components/Seo";
import BaseLayout from "@/layouts/BaseLayout";
import React from "react";
import seo from "content/seo/experience-page-seo.json";
import EverestTrek from "@/modules/EverestTrek";

const EverestTrekPage = () => {
  return (
    <BaseLayout>
      <Seo {...seo} />
      <EverestTrek />
    </BaseLayout>
  );
};

export default EverestTrekPage;
