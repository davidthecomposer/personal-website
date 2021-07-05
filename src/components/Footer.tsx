import React, { useEffect } from "react";
// import { DesktopContext, TabletContext } from "App";
import styled from "styled-components";
import media from "styles/media";
import colors from "styles/Colors";
import gsap from "gsap";
import { SubHeader, Body1, FooterSubHeader } from "styles/text";
// import { ReactComponent as DavidSigSVG } from "assets/svg/davidSig.svg";
// import { useHistory } from "react-router-dom";
import twitter from "assets/svg/twitterIcon.svg";
import instagram from "assets/svg/instagramIcon.svg";
import web from "assets/svg/webIcon.svg";
import facebook from "assets/svg/facebookIcon.svg";
import linkedIn from "assets/svg/linkedIcon.svg";
import youtube from "assets/svg/youtube.svg";
import code from "assets/svg/codeIcon.svg";
import music from "assets/svg/soundIcon.svg";
import { ReactComponent as DavidSigSVG } from "assets/svg/davidSig2.svg";
const Footer: React.FC<{}> = () => {
  // const desktop = useContext(DesktopContext);
  // const tablet = useContext(TabletContext);

  useEffect(() => {
    const tl = gsap.timeline({ scrollTrigger: { trigger: ".dav-sig-1" } });

    tl.fromTo(
      ".dav-sig-2",
      { drawSVG: "0 0" },
      { drawSVG: "0 100%", duration: 0.2 },
      0
    )
      .fromTo(
        ".dav-sig-3",
        { drawSVG: "0 0" },
        { drawSVG: "0 100%", duration: 0.3 },
        0.2
      )
      .fromTo(
        ".dav-sig-4",
        { drawSVG: "0 0" },
        { drawSVG: "0 100%", duration: 0.4 },
        0.5
      )
      .fromTo(
        ".dav-sig-5",
        { drawSVG: "0 0" },
        { drawSVG: "0 100%", duration: 0.2 },
        1
      )
      .fromTo(
        ".dav-sig-6",
        { drawSVG: "0 0" },
        { drawSVG: "0 100%", duration: 0.2 },
        1.2
      )
      .fromTo(
        ".dav-sig-7",
        { drawSVG: "0 0" },
        { drawSVG: "0 100%", duration: 0.1 },
        1.4
      )
      .fromTo(
        ".dav-sig-8",
        { drawSVG: "0 0" },
        { drawSVG: "0 100%", duration: 0.3 },
        1.5
      )
      .fromTo(
        ".dav-sig-1",
        { drawSVG: "0 0" },
        { drawSVG: "0% 100%", duration: 0.8 },
        1.9
      );
  }, []);

  const socials = [
    { icon: twitter, name: "twitter icon", link: "" },
    { icon: facebook, name: "facebook icon", link: "" },
    { icon: instagram, name: "instagram icon", link: "" },
    { icon: web, name: "web icon", link: "" },
    { icon: linkedIn, name: "linkedIn icon", link: "" },
  ];

  const links = [
    {
      icon: music,
      name: "davidhalcampbell.com/music",
      link: "https://www.davidhalcampbell.com/music",
    },
    {
      icon: code,
      name: "davidhalcampbell.com/developer",
      link: "https://www.davidhalcampbell.com/developer",
    },
    { icon: youtube, name: "Youtube Channel", link: "" },
  ];

  const allLinks = links.map((link, i) => {
    return (
      <OutBoundLink key={`link-${i}`}>
        <img src={link.icon} alt={`${link.name}-icon and link`} />
        <LinkText>{link.name}</LinkText>
      </OutBoundLink>
    );
  });

  const allSocials = socials.map((social, i) => {
    return (
      <a key={i} href={social.link}>
        <img src={social.icon} alt="social icon" />
      </a>
    );
  });

  return (
    <Wrapper>
      <BuildColumn>
        <Title>I Create </Title>
        <Text>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum{" "}
        </Text>
        <Email>
          <a href="mailto:composer@davidhalcampbell.com">
            composer@davidhalcampbell.com
          </a>
          <br />
          <a href="mailto:developer@davidhalcampbell.com">
            developer@davidhalcampbell.com
          </a>
        </Email>
      </BuildColumn>
      <SocialColumn>
        <FooterSub>Social</FooterSub>
        <HeaderLine />
        <Socials>{allSocials}</Socials>
        <FooterSub>Links</FooterSub>
        <HeaderLine />
        {allLinks}
      </SocialColumn>
      <DavidSig />
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  position: relative;
  height: 22.7vw;
  width: calc(100% - 4.6vw);
  display: flex;
  justify-content: space-between;

  padding: 4.1vw 2.3vw;
  z-index: 1000;
  right: 0;
  background: linear-gradient(
    128.33deg,
    #2c354b 11.05%,
    rgba(44, 47, 78, 0.895521) 23.42%,
    rgba(42, 19, 90, 0.41) 90.48%
  );
  ${media.tablet} {
  }
  ${media.mobile} {
    height: 234.5vw;
    width: 95.2vw;
    padding: 12.6vw 2.4vw 6vw;
    flex-direction: column;
    justify-content: flex-start;
  }
  ${media.fullWidth} {
  }
`;

const BuildColumn = styled.div`
  width: 44.3vw;

  ${media.tablet} {
  }
  ${media.mobile} {
    width: 100%;
  }
  ${media.fullWidth} {
  }
`;

const Title = styled.h3`
  ${SubHeader};
  margin-bottom: 3.1vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Text = styled.p`
  ${Body1};
  position: relative;
  width: 100%;
  margin-bottom: 3.1vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Email = styled.div`
  ${Body1};
  text-decoration: none;
  color: ${colors.coolPurple};

  a {
    color: ${colors.coolPurple};
  }
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const FooterSub = styled.h4`
  ${FooterSubHeader};
  text-align: right;
  color: ${colors.coolWhite};
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Socials = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 3.8vw;
  a {
    ${media.hover} {
      :hover {
        transform: rotate(360deg);

        transition: 0.3s;
      }
    }
    margin-right: 1.3vw;
    img {
      width: 2vw;
      height: 2vw;
    }
  }

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const HeaderLine = styled.div`
  position: relative;
  width: 26.3vw;
  height: 0.2vw;

  background: ${colors.skyBlue};
  margin: 0.3vw 1.8vw 1.8vw 0;
  border-radius: 0.3vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const SocialColumn = styled.div`
  width: 28.2vw;

  ${FooterSub}:nth-of-type(2) {
    text-align: left;
  }

  ${HeaderLine}:nth-of-type(3) {
    margin-right: 0;
    margin-left: 1.8vw;
    color: white;
  }
  ${media.tablet} {
  }
  ${media.mobile} {
    width: 100%;
  }
  ${media.fullWidth} {
  }
`;

const OutBoundLink = styled.a`
  ${Body1};
  color: ${colors.coolWhite};
  display: flex;
  margin-left: 9.9vw;
  align-items: center;
  margin-bottom: 0.5vw;
  cursor: pointer;
  transition: 0.5s;
  img {
    width: 1.5vw;
  }
  ${media.hover} {
    :hover {
      transform: scale(1.1);
      transform-origin: "100% 0%";
      color: ${colors.dullTeal};
      transition: 0.5s;
    }
  }

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const LinkText = styled.p`
  margin-left: 15px;
  text-decoration: none;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const DavidSig = styled(DavidSigSVG)`
  width: 54.3vw;
  height: 20.1vw;
  position: absolute;
  left: 0;
  top: 3.1vw;
  z-index: 0;
  opacity: 0.03;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;
