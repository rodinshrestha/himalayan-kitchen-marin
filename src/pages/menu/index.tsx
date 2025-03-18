import Seo from "@/components/Seo";
import BaseLayout from "@/layouts/BaseLayout";
import KitchenMenu from "@/modules/KitchenMenu";
import React from "react";
import seo from "content/seo/menu-page-seo.json";

const MenuPage = () => {
  return (
    <BaseLayout>
      <Seo {...seo} />
      <KitchenMenu />
    </BaseLayout>
  );
};

export default MenuPage;
