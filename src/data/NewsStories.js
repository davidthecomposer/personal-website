import sampleNews from "assets/images/sampleNews.jpg";
import twitter from "assets/svg/twitterIcon.svg";
import instagram from "assets/svg/instagramIcon.svg";
import web from "assets/svg/webIcon.svg";
import facebook from "assets/svg/facebookIcon.svg";
import liz2 from "assets/images/liz2.jpg";
import mandiScarf from "assets/images/mandiScarf.jpg";
import jenny from "assets/images/jennyCampbell.jpg";

const newsItems = [
  {
    title: "Song Cycle Commission",
    mainImage: sampleNews,
    paragraph:
      "I have the pleasure of announcing that I am finishing up a set of 6 songs setting the words of Liz Christensen, and to be performed by Mezzo-Soprano Mandi Barrus in the Fall/Winter of 2021. This has been an ongoing project for some time that has continued during many life changes and the obvious global pandemic. More info to come about performance times and details.",
    paragraph1: "",
    share: "News Item 1 short synopsis",
    links1: [
      { icon: twitter, link: "" },
      { icon: facebook, link: "" },
      { icon: instagram, link: "" },
      { icon: web, link: "" },
    ],
    links2: [
      { icon: twitter, link: "" },
      { icon: facebook, link: "" },
      { icon: instagram, link: "" },
      { icon: web, link: "" },
    ],
    moreTitle: "Creators",
    moreImage1: mandiScarf,
    moreText1: [
      "Mezzo-soprano ",
      <a
        href="http://mandibarrus.com"
        target="__blank"
        rel="noreferrer noopener"
      >
        Mandi Barrus
      </a>,
      " is a musician originally from Seattle, Washington. With her ",
      <a
        href="https://frontrowreviewersutah.com/?p=8504"
        target="__blank"
        rel="noreferrer noopener"
      >
        "impressive technique and clear tone"
      </a>,
      " . Ms. Barrus' performances are described as ",
      <a
        href="https://frontrowreviewersutah.com/?p=8504"
        target="__blank"
        rel="noreferrer noopener"
      >
        "a breath of fresh air"
      </a>,
      " and ",
      <a
        href="https://frontrowreviewersutah.com/?p=3625"
        target="__blank"
        rel="noreferrer noopener"
      >
        "particularly impressive"
      </a>,
      ". She is known for her versatility of performance, with credits in both musical theater (Hale Centre Theatre, Utah Repertory Theatre Company, Centerpoint Legacy Theatre, The Grand Theatre) and opera (Utah Opera, La Musica Lirica, Utah Lyric Opera, Lyric Opera Ensemble, Idaho Falls Opera Theatre). A winner of Utah Opera's AriaFest and of the University of Utah's Concerto Competition, Ms. Barrus holds a Bachelor of Musical Arts degree with a minor in Theatre Arts from BYU-Idaho and a Master of Music degree from the University of Utah",
    ],
    moreText2: [
      <a
        target="__blank"
        rel="noreferrer noopener"
        href="http://www.lizzylizzyliz.com"
      >
        Liz Christensen{" "}
      </a>,
      "is the producer and host of both the entertainment podcast ",
      <a
        target="__blank"
        rel="noreferrer noopener"
        href="https://inthetellingpodcast.buzzsprout.com/"
      >
        "In the Telling"
      </a>,
      " and the webseries ",
      <a
        target="__blank"
        rel="noreferrer noopener"
        href="https://www.youtube.com/channel/UCvHO_s9oMYjKv2crN9_tjqA"
      >
        "She Made Me Do It."
      </a>,
      " She is also a playwright, editor, theatre director, choreographer stage and ",
      <a
        target="__blank"
        rel="noreferrer noopener"
        href="https://www.imdb.com/name/nm2296618/?ref_=fn_al_nm_1"
      >
        screen
      </a>,
      " actress, and ",
      <a
        target="__blank"
        rel="noreferrer noopener"
        href="https://www.instagram.com/lizcpoetry/"
      >
        Instagram poet.
      </a>,
      " Her creative work includes nine feature films, three short films, three music videos and over 70 theatrical productions. She is the mother of a teenager and a tween, a caregiver of an elderly parent, and has been married to her college sweetheart for over a decade. She was born and raised along the Wasatch Front and received her BFA from the University of Utah.",
    ],
    moreImage2: liz2,
    moreText2a: "",
  },
  {
    title: "Chamber Opera",
    mainImage: sampleNews,
    paragraph:
      "This project was originally slated for the spring of this year, but once again the pandemic put everything on pause. The librettist has begun again in earnest to create a compelling chamber opera touching on topics of technology, personhood, and class warfare. More updates to come",
    paragraph1: "",
    share: "Meet Jenny",

    links1: [
      { icon: twitter, link: "" },
      { icon: facebook, link: "" },
      { icon: web, link: "" },
    ],
    links2: [
      { icon: twitter, link: "" },
      { icon: facebook, link: "" },
      { icon: instagram, link: "" },
      { icon: web, link: "" },
    ],
    moreTitle: "Meet Jenny",
    layout: "full",
    moreImage1: jenny,
    moreImage2: "",
    moreText1: [
      `Jennifer Campbell is a writer with a background in history, journalism
      and video. Her articles have appeared on Faithcounts.org and in Utah
      Stories Magazine. She is currently working on a fantasy novel set in
      alt-world ancient Persia. When not writing she's busy getting called
      "noob" by her 11-year-old son, escaping to the Uintas and ripping it
      up on the flag football field.`,
    ],
    moreText2: [],
  },
];

export default newsItems;
