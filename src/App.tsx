import React, { useState, useEffect, createContext, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./fonts/typography.css";
// import Home from "pages/Home";
import Header from "components/Header";
import Footer from "components/Footer";

import styled from "styled-components";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { CustomEase } from "gsap/CustomEase";
import MandiChristmas from "pages/MandiChristmas";

const MusicPage = lazy(() => import("pages/MusicPage"));
const DeveloperPage = lazy(() => import("pages/Developer"));

export const DesktopContext = createContext(false);
export const TabletContext = createContext(false);
export const MobileContext = createContext(false);

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, ScrollToPlugin, MorphSVGPlugin, CustomEase);

const App = () => {
  const [desktop, setDesktop] = useState(window.innerWidth > 1024);
  const [tablet, setTablet] = useState(window.innerWidth >= 767 && window.innerWidth <= 1024);
  const [mobile, setMobile] = useState(window.innerWidth < 767 || (window.innerWidth >= 767 && window.innerWidth <= 1200 && window.innerHeight > window.innerWidth));

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDesktop(window.innerWidth > 1024);
      setTablet(window.innerWidth >= 767 && window.innerWidth <= 1024);
      setMobile(window.innerWidth < 767);
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    // @ts-ignore
    <DesktopContext.Provider value={desktop}>
      <TabletContext.Provider value={tablet}>
        <MobileContext.Provider value={mobile}>
          <Wrapper className="App">
            <Router>
              <Header />

              <Switch>
                {/* <Route exact path="/">
                  <Suspense fallback={<Fallback />}>
                    <Home />
                  </Suspense>
                </Route> */}
                <Route exact path="/">
                  <Suspense fallback={<Fallback />}>
                    <MusicPage />
                  </Suspense>
                </Route>
                <Route path="/developer">
                  <Suspense fallback={<Fallback />}>
                    <DeveloperPage />
                  </Suspense>
                </Route>
                <Route path="/christmas">
                  <Suspense fallback={<Fallback />}>
                    <MandiChristmas />
                  </Suspense>
                </Route>
              </Switch>
              <Footer />
            </Router>
          </Wrapper>
        </MobileContext.Provider>
      </TabletContext.Provider>
    </DesktopContext.Provider>
  );
};

export default App;

const Wrapper = styled.div`
  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;

const Fallback: React.FC = () => {
  return <Container></Container>;
};

const Container = styled.div`
  height: 300vh;
  width: 100%;
  background-color: #000000;
`;
