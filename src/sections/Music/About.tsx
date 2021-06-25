import React from "react";
import styled from "styled-components";
import { Heading1, Body1 } from "styles/text";
import colors from "styles/Colors";
import media from "styles/media";
import davidHuge from "assets/images/davidHuge.jpg";
import davidAbout from "assets/images/davidAbout.jpg";
// import { PrimaryButtonStyle } from "styles/Buttons";
// import { ReactComponent as ButtonArrowSVG } from "assets/svg/buttonArrow.svg";
// import { ReactComponent as ScoreIconSVG } from "assets/svg/scoreIcon.svg";
// import gsap from "gsap";

const About: React.FC<{}> = () => {
  return (
    <Wrapper id="about">
      <HeaderWrapper>
        <Header>About</Header>
        <HeaderLine />
      </HeaderWrapper>
      <Teal />
      <Grey />
      <DavidImage src={davidAbout} />
      <Text>
        "But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system, and expound the actual teachings of the great
        explorer of the truth, the master-builder of human happiness. No one
        rejects, dislikes, or avoids pleasure itself, because it is pleasure,
        but because those who do not know how to pursue pleasure rationally
        encounter consequences that are extremely painful. Nor again is there
        anyone who loves or pursues or desires to obtain pain of itself, because
        it is pain, but because occasionally circumstances occur in which toil
        and pain can procure him some great pleasure.
        <br />
        To take a trivial example, which of us ever undertakes laborious
        physical exercise, except to obtain some advantage from it? But who has
        any right to find fault with a man who chooses to enjoy a pleasure that
        has no annoying consequences, or one who avoids a pain that produces no
        resultant pleasure?" On the other hand, we denounce with righteous
        indignation and dislike men who are so beguiled and demoralized by the
        charms of pleasure of the moment, so blinded by desire, that they cannot
        foresee the pain and trouble that are bound to ensue; and equal blame
        belongs to those who fail in their duty through weakness of will, which
        is the same as saying through shrinking from toil and pain.
        <br />
        These cases are perfectly simple and easy to distinguish. In a free
        hour, when our power of choice is untrammelled and when nothing prevents
        our being able to do what we like best, every pleasure is to be welcomed
        and every pain avoided. But in certain circumstances and owing to the
        claims of duty or the obligations of business it will frequently occur
        that pleasures have to be repudiated and annoyances accepted. The wise
        man therefore always holds in these matters to this principle of
        selection: he rejects pleasures to secure other greater pleasures, or
        else he endures pains to avoid worse pains. Contrary to popular belief,
        Lorem Ipsum is not simply random text.
        <br />
        It has roots in a piece of classical Latin literature from 45 BC, making
        it over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32.
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 158.5vw;
  padding: 15.4vw 0 0 0;
  background-size: cover;
  position: relative;
  box-sizing: border-box;
  background-image: url(${davidHuge});

  /* -webkit-transform: translate3d(0, 0, 0);
  -webkit-transform-style: preserve-3d;
  -webkit-backface-visibility: hidden; */

  ${media.mobile} {
    width: 100%;
    height: 240vw;
    padding: 12.3vw 0vw 0vw 23vw;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 88.1vw;
  margin-left: 6.3vw;
  align-items: flex-end;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Header = styled.h2`
  ${Heading1};
  color: ${colors.brightPurple};
  width: fit-content;
  position: relative;

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const HeaderLine = styled.div`
  position: relative;
  width: 82.4vw;
  height: 0.3vw;
  margin-right: 3.9vw;
  background: ${colors.brightPurple};

  border-radius: 0.3vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Text = styled.p`
  ${Body1};
  position: absolute;
  width: 37.1vw;
  height: 75.6vw;
  left: 56.9vw;
  top: 60vw;

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Teal = styled.div`
  position: absolute;
  width: 48.5vw;
  height: 55.7vw;
  left: 38.6vw;
  top: 31.9vw;

  background: rgba(115, 209, 239, 0.15);
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Grey = styled.div`
  position: absolute;
  width: 49.1vw;
  height: 68.9vw;
  left: 22.3vw;
  top: 48.3vw;

  background: rgba(25, 24, 28, 0.5);
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const DavidImage = styled.img`
  position: absolute;
  width: 36.9vw;
  height: 52.6vw;
  left: 13.2vw;
  top: 44.7vw;

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

export default About;
