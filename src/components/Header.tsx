import React, { useEffect, useState, useRef, useContext } from "react";
import { MobileContext } from "App";
import styled from "styled-components";
import media from "styles/media";
import colors from "styles/Colors";
import gsap from "gsap";
import { Heading1 } from "styles/text";
import { ReactComponent as DavidSigSVG } from "assets/svg/davidSig.svg";
import { ReactComponent as DavidInitialsSVG } from "assets/svg/initials.svg";
import { useHistory } from "react-router-dom";

const Header: React.FC<{}> = () => {
  const mobile = useContext(MobileContext);
  // const tablet = useContext(TabletContext);
  const history = useHistory().location;
  const [role, setRole] = useState("");

  const name = useRef(null);
  const line = useRef(null);
  const myRole = useRef(null);
  const navLinks = useRef(null);
  const wrapper = useRef(null);
  const [display, setDisplay] = useState(true);
  const [navOpen, setNavOpen] = useState(true);
  const navIsOpen = useRef(true);
  const [initial, setInitial] = useState(true);

  const pressed = useRef(false);

  useEffect(() => {
    const pathname = history.pathname;

    if (pathname) {
      if (pathname === "/") {
        setDisplay(false);
      } else if (pathname === "/music") {
        setRole("composer");
      } else {
        setRole("developer");
      }
    }
  }, [history]);

  useEffect(() => {
    gsap.set(line.current, { scaleY: 0 });

    const tl = gsap.timeline({ onComplete: () => setInitial(false) });

    tl.to(line.current, { scaleY: 1, duration: 0.6, ease: "power1.inOut" }, 0)
      .to(name.current, { left: 0, duration: 1.3, ease: "power1.inOut" }, 0.3)

      .to(
        myRole.current,
        { left: "1.3vw", duration: 0.8, ease: "power1.inOut" },
        0.7
      )
      .to(
        ".header__link",
        { opacity: 1, stagger: 0.15, duration: 0.4, ease: "power1.inOut" },
        1
      );
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      if (navIsOpen.current) {
        gsap.to(line.current, {
          scaleY: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power1.inOut",
          onStart: () => {
            navIsOpen.current = false;
            setNavOpen(false);
          },
        });
      }
    } else {
      gsap.to(line.current, {
        scaleY: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power1.inOut",
        onStart: () => {
          navIsOpen.current = true;
          setNavOpen(true);
        },
      });
    }
  };

  useEffect(() => {
    if (!initial) {
      const ready =
        !gsap.isTweening(".music__nav-btn") && !gsap.isTweening(".header_link");
      if (!ready) {
        gsap.getTweensOf(".music__nav-btn").forEach((tween) => {
          tween.kill();
        });
        gsap.getTweensOf(".header__link").forEach((tween) => {
          tween.kill();
        });
        gsap.getTweensOf(".titleWrapper").forEach((tween) => {
          tween.kill();
        });
      }

      if (navOpen) {
        if (!ready) {
          gsap.set(".music__nav-btn", { opacity: 1, zIndex: 10 });
          gsap.set(".header__link", { opacity: 0, zIndex: 0 });
          gsap.set(wrapper.current, {
            width: mobile ? "20vw" : "4vw",
            duration: 0,
          });
        }
        const tl = gsap.timeline();

        tl.to(".music__nav-btn", { opacity: 0, zIndex: 0, duration: 0.3 }, 0)
          .to(
            wrapper.current,
            {
              width: "96vw",
              duration: 0,
            },
            0
          )
          .to(
            ".titleWrapper",
            {
              width: "58vw",
              duration: 0,
            },
            0
          )
          .to(
            ".header__link",
            {
              opacity: 1,
              stagger: 0.1,
              duration: 0.2,
              reversed: true,
              ease: "power1.inOut",
              onComplete: () => {
                gsap.set(".header__link", { zIndex: 10 });
              },
            },
            0
          );
      } else {
        if (!ready) {
          gsap.set(".header__link", { opacity: 0, zIndex: 10 });
          gsap.to(".music__nav-btn", { opacity: 1, zIndex: 10, duration: 0.3 });
          gsap.to(wrapper.current, {
            width: mobile ? "20vw" : "4vw",
            duration: 0,
          });
        } else {
          if (pressed.current) {
            gsap.set(".header__link", { opacity: 0, zIndex: 10 });
            gsap.to(".music__nav-btn", {
              opacity: 1,
              zIndex: 10,
              duration: 0.3,
            });
            gsap.to(".titleWrapper", {
              width: "56vw",
              duration: 0,
            });
            gsap.to(wrapper.current, {
              width: mobile ? "20vw" : "4vw",
              duration: 0,
              delay: 0.4,
            });
            gsap.to(".titleWrapper", {
              width: "0",
              duration: 0,
              delay: 0.4,
            });
            pressed.current = false;
          }
          const tl1 = gsap.timeline();
          tl1
            .to(
              ".music__nav-btn",
              {
                opacity: 1,
                zIndex: 10,
                duration: 0.7,
                onComplete: () => {
                  gsap.set(".header__link", { zIndex: 0 });
                },
              },
              0.22
            )
            .fromTo(
              ".david_sig",
              { drawSVG: "0,0" },
              {
                drawSVG: "100%, 0",
                stagger: 0.05,
                duration: 0.05,

                ease: "power1.inOut",
              },
              0.22
            )
            .to(
              ".header__link",
              {
                opacity: 0,
                stagger: 0.05,
                duration: 0.2,
                ease: "power1.inOut",
              },
              0
            )
            .to(
              wrapper.current,
              { width: mobile ? "20vw" : "4vw", duration: 0 },
              0.3
            )
            .to(
              ".titleWrapper",
              {
                width: "0",
                duration: 0,
              },
              0.3
            );
        }
      }
    }
  }, [navOpen, initial, mobile]);

  const handleClick = () => {
    setNavOpen(true);
    navIsOpen.current = true;
    pressed.current = true;
  };

  return (
    <Wrapper ref={wrapper} willDisplay={display}>
      <TitleWrapper className="titleWrapper">
        <TitleContainer open={navOpen && !pressed.current}>
          <Title ref={name}>David Campbell</Title>
        </TitleContainer>
        <Line ref={line} open={navOpen} initial={initial} />
        <RoleContainer open={navOpen && !pressed.current}>
          <Role ref={myRole}>{role}</Role>
        </RoleContainer>
      </TitleWrapper>
      <NavLinks
        ref={navLinks}
        open={navOpen && !pressed.current}
        initial={initial}
      >
        <Link open={navOpen} className="header__link">
          Home
        </Link>
        <Link open={navOpen} className="header__link">
          Music
        </Link>
        <Link open={navOpen} className="header__link">
          News
        </Link>
        <Link open={navOpen} className="header__link">
          About
        </Link>
        <Link open={navOpen} className="header__link">
          Connect
        </Link>
      </NavLinks>
      <NavBtn className="music__nav-btn" onClick={handleClick}>
        {!mobile ? <DavidSig /> : <DavidInitials />}
      </NavBtn>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.nav<{ willDisplay: boolean }>`
  position: fixed;
  height: 6vw;
  width: calc(100% - 4vw);
  display: ${(props) => (props.willDisplay ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  padding: 0.5vw 2vw;
  z-index: 1000;
  right: 0;

  ${media.mobile} {
    height: 80px;
  }
  /* ${media.fullWidth} {
    height: 108px;
    width: calc(100% - 72px);
    display: ${(props) => (props.willDisplay ? "flex" : "none")};
    justify-content: space-between;
    align-items: center;
    padding: 9px 36px;
    z-index: 1000;
    right: 0;
  } */
`;

const TitleWrapper = styled.div`
  display: flex;
  ${Heading1};
  color: ${colors.brightPurple};
  align-items: center;
  width: 58vw;
  height: 5vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
    width: 1044px;
    height: 90px;
  }
`;

const Line = styled.div<{ open: boolean; initial: boolean }>`
  height: 4.3vw;
  background: ${colors.brightPurple};
  width: 0.2vw;

  transform: scaleY(${(props) => (props.initial ? 0 : props.open ? 1 : 0)});
  opacity: 1;

  transform-origin: "50% 50%";
  margin-top: 0.8vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
    height: 77px;
    border-left: 4px solid ${colors.brightPurple};

    margin-top: 14px;
  }
`;

const TitleContainer = styled.div<{ open: boolean }>`
  position: relative;
  overflow: hidden;
  padding-right: 1.3vw;
  width: 38vw;
  height: 4.3vw;
  transform: scaleY(${(props) => (props.open ? 1 : 0)});
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: transform 0.3s 0.1s, opacity 0.5s;
  display: flex;
  flex-direction: column;

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
    padding-right: 23px;
    width: 684px;
    height: 77px;
  }
`;

const Title = styled.h1`
  position: absolute;
  width: 100%;
  letter-spacing: -0.05em;
  color: ${colors.brightPurple};
  left: 100%;
`;

const RoleContainer = styled.div<{ open: boolean }>`
  position: relative;
  overflow: hidden;
  height: 2vw;
  padding-left: 1.3vw;
  width: 11vw;
  margin-top: 0.8vw;
  transform: scaleY(${(props) => (props.open ? 1 : 0)});
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: transform 0.3s 0.2s, opacity 0.5s;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
    height: 36px;
    padding-left: 23px;
    width: 198px;
    margin-top: 14px;
  }
`;

const DavidSig = styled(DavidSigSVG)`
  width: 100%;
  height: 100%;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Role = styled.span`
  font-size: 2vw;
  position: absolute;
  letter-spacing: 0;
  left: -100%;
  ${media.fullWidth} {
    font-size: 36px;
  }
`;
const Link = styled.a<{ open: boolean }>`
  ${Heading1}
  color: ${colors.coolWhite};
  font-size: 1.1vw;
  margin-right: 1.3vw;
  cursor: pointer;
  opacity: 0;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
    font-size: 20px;
    margin-right: 23px;
  }
`;

const NavBtn = styled.button`
  width: 6vw;
  height: 6vw;
  position: absolute;
  right: 1vw;
  top: 0.5vw;
  z-index: 0;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  border: 3px solid ${colors.dullerTeal};
  border-radius: 100%;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0;
  color: ${colors.coolWhite};
  transition: transform 0.4s;
  svg {
    path {
      transition: 0.4s;
    }
  }

  :hover {
    color: ${colors.coolWhite};
    transform: scale(1.2);
    transform-origin: "0% 100%";
    transition: 0.4s;
    svg {
      path {
        stroke: currentColor;
        transition: 0.4s;
      }
    }
  }

  ${media.tablet} {
  }
  ${media.mobile} {
    width: 15vw;
    height: 15vw;
    top: 3vw;
    right: 1.5vw;
  }
  ${media.fullWidth} {
  }
`;

const NavLinks = styled.div<{ open: boolean; initial: boolean }>`
  display: flex;
  width: 25vw;
  position: relative;
  transition: opacity 0.8s, width 0.3s 0.4s, border 0.6s;
  transform-origin: ${(props) => (!props.open ? "50% 50%" : "right")};
  height: 2.5vw;
  align-items: flex-end;
  overflow: hidden;
  transition: 0.4s;
  padding: 0 0 1vw 1.3vw;
  margin-top: 1vw;

  ${Link}:nth-child(even) {
    :hover {
      transform: skew(5deg, -5deg);
      color: ${colors.brightPurple};
      transition: 0.3s;
    }
  }
  ${Link}:nth-child(odd) {
    :hover {
      transform: skew(-5deg, 5deg);
      color: ${colors.brightPurple};
      transition: 0.3s;
    }
  }

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const DavidInitials = styled(DavidInitialsSVG)`
  ${media.tablet} {
  }
  ${media.mobile} {
    width: 12vw;
    height: 12vw;
  }
  ${media.fullWidth} {
  }
`;
