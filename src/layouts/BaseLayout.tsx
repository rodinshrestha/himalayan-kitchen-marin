import React from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/theme/GlobalStyles";
import { getTheme } from "@/theme/theme";
import OppeningHours from "@/modules/OppeningHours";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

type Props = {
  children: React.ReactNode;
};

const BaseLayout = ({ children }: Props) => {
  //TODO: Need to fix this toogle
  const handleToggleMenu = () => {};

  return (
    <>
      <ThemeProvider theme={getTheme}>
        <GlobalStyles />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
        />
        <div className="body">
          <div id="layout-wrapper">
            <Header onToggleMenu={handleToggleMenu} />
            <main> {children}</main>
            <OppeningHours />
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default BaseLayout;
