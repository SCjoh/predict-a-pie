import React, { useRef } from "react";
import "./LandingPage.scss";
import Button from "./Button";
import gtmTrack from "../helpers/gtmTrack";
import { Link } from "react-router-dom";
import scroll from "../helpers/articleScroll";

import beginning from "../assets/beginning.png";
import indigenous from "../assets/indigenous.png";
import aiWeirdness from "../assets/ai-weirdness.png";
import amazonIcon from "../assets/amazon-icon.png";
import iconLesson from "../assets/icon-lesson-plans.png";
import iconCreateClassroom from "../assets/icon-create-classroom.png";
import iconBookTraining from "../assets/icon-book-training.png";
import iconBookClassroom from "../assets/icon-book-classroom.png";
import funJoin from "../assets/fun-join.png";
import funBuild from "../assets/fun-build.png";
import funPP from "../assets/fun-pp.png";
import funIndigenous from "../assets/fun-indigenous.png";
import logoAmazon from "../assets/logo-amazon.png";
import wesUni from "../assets/logo-wesuni.png";
import teknisk from "../assets/logo-teknisk.png";
import tpl from "../assets/logo-tpl.png";
import clc from "../assets/logo-clc.png";
import digiMoment from "../assets/logo-digimoment.png";
import sw from "../assets/logo-sw.png";

const LandingPage = ({ onCommand, appData }) => {
  // Scroll movement
  const scroll = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="LandingPage">
      <div className="Hero">
        <div className="Hero-animation">
          <div className="line"></div>
          <div className="bright-line"></div>
          <div className="particle"></div>

          <div className="Hero-contents">
            <h1>Artificial Intelligence is everywhere</h1>

            <div>
              <Button onClick={() => scroll("Beginning")}>
                Learn how AI works
              </Button>
              <Button onClick={() => scroll("TryAI")}>Try an AI</Button>
              <Button onClick={() => scroll("Educators")}>
                Explore AI workshops for any classroom
              </Button>
            </div>
          </div>
        </div>

        {/* <div className="Hero-scroll" onClick={scroll}>
          <span class="Hero-arrow"></span>
        </div>

        <p>SCROLL DOWN</p> */}
      </div>

      <div className="MainSection">
        <a id="HowAIWorks">
          <div className="Beginning" id="Beginning">
            <h2>How does AI work?</h2>

            <div className="columns">
              <div className="left">
                <h2>Let’s start from the beginning...</h2>
                <h4 className="box-title">Intro to Neural Networks</h4>
                <p className="box-description">
                  Totally brand new? Take a look at the concept and building
                  blocks of Artificial Intelligence (AI) and how it is able to
                  make predictions using a neural network.
                </p>
                <Link
                  onClick={() =>
                    gtmTrack(
                      "prm_btn_click",
                      "Article",
                      "Intro to Neural Networks",
                      ""
                    )
                  }
                  to={
                    appData.classroom
                      ? `/${appData.classroom.code}/article/intro-to-neural-networks`
                      : "/article/intro-to-neural-networks"
                  }
                >
                  <Button>READ ARTICLE</Button>
                </Link>
              </div>

              <div className="right">
                <img src={beginning} />
              </div>
            </div>
          </div>
        </a>

        <div className="Articles">
          <h2>Let's go deeper!</h2>
          <div className="Articles-contents">
            <div className="Articles-indigenous columns">
              <div className="left">
                <img src={indigenous} />
              </div>
              <div className="right">
                <h4>
                  Indigenous Cooking with a <em>dash</em> of AI
                </h4>
                <p>
                  Learn about Indigenous-fusion cooking practices from Xaxli’p
                  First Nation chef, David Wolfman and how to use an AI Neural
                  Network simulator to generate new recipes for a restaurant!
                  You will learn about how data can be biased and how excluding
                  cooking from a wide array of cultures can have negative
                  impacts.
                </p>
                <Button>READ ARTICLE</Button>
              </div>
            </div>

            <div className="Articles-columns columns">
              <div className="Articles-columns-weird columns left">
                <div className="left">
                  <h4>AI Weirdness</h4>
                  <p>asff</p>

                  <Button>READ ARTICLE</Button>
                </div>

                <div className="right">
                  <img src={aiWeirdness} />
                </div>
              </div>
              <div className="Articles-columns-prime columns right">
                <div className="left">
                  <h4>Recommendation engine AI with Prime Video</h4>
                  <p>
                    Learn how the Amazon Prime Video recommendation engine works
                    using Neural Networks!
                  </p>

                  <Button>READ ARTICLE</Button>
                </div>
                <div className="right">
                  <img src={amazonIcon} />
                </div>
              </div>
            </div>
            <div className="Articles-non-computer columns">
              <div className="left">
                {" "}
                <h4>
                  Neural Networks for your non-computer science classroom
                  subject
                </h4>
                <p>
                  The idea of Artificial Intelligence (AI) often conjures up
                  ideas related to science fiction or of an individual mashing
                  the keyboard, working on some complex algorithm. However, we
                  hope to challenge some of these notions and highlight
                  potential areas in which AI could be adopted into different
                  areas of an education curriculum.
                </p>
                <Link
                  onClick={() =>
                    gtmTrack(
                      "prm_btn_click",
                      "Article",
                      "Neural Networks for Your Non-Computer Science Classroom Subject",
                      ""
                    )
                  }
                  to={
                    appData.classroom
                      ? `/${appData.classroom.code}/article/non-computer-science-classroom`
                      : "/article/non-computer-science-classroom"
                  }
                >
                  <Button>READ ARTICLE</Button>
                </Link>
              </div>
              <div className="right">
                <img src="" />
              </div>
            </div>
          </div>
        </div>

        <div className="Educators columns" id="Educators">
          <div className="left">
            <h2>Hey Educators! Want to use this in your classroom?</h2>
            <p>
              This no-code workshop is designed for non computer science
              teachers to introduce AI into any subject. AI is being used in
              every field, most recently even transforming creative fields such
              as writing and visual arts. The lesson plans include presentation
              slides, a teaching guide and have been tested on grades 5 to 12.
            </p>
            <p>
              Curriculum connections include:
              <ul>
                <li>Data literacy</li>
                <li>(add more)</li>
              </ul>
            </p>
          </div>

          <div className="right">
            <div className="tile">
              <img src={iconLesson} />

              <div>
                <h4>Lesson Plan</h4>
                <p>Incorporate into any subject grades 5 to 12.</p>

                <a
                  onClick={() =>
                    gtmTrack(
                      "out_btn_click",
                      "LandingPage",
                      "Out Bound: https://kidscodejeunesse.org/data/resources/resources_files/en/ai_algo/Cooking_with_Neural_Networks.pdf",
                      "https://kidscodejeunesse.org/data/resources/resources_files/en/ai_algo/Cooking_with_Neural_Networks.pdf"
                    )
                  }
                  href="https://kidscodejeunesse.org/data/resources/resources_files/en/ai_algo/Cooking_with_Neural_Networks.pdf"
                  target="_new"
                >
                  <Button>Download Plan</Button>
                </a>
              </div>
            </div>

            <div className="tile">
              <img src={iconCreateClassroom} />

              <div>
                <h4>Create a Classroom</h4>
                <p>
                  Companion website for lesson plan. Explore an AI with your
                  class.
                </p>
                <a
                  onClick={() => {
                    onCommand("create-classroom");
                    gtmTrack("sec_btn_click", "Class", "Create Class", "");
                  }}
                  disabled={!appData.connected}
                >
                  <Button>Create</Button>
                </a>
              </div>
            </div>

            <div className="tile">
              <img src={iconBookTraining} />

              <div>
                <h4>Book Teacher Training</h4>
                <p>
                  Participant in live workshops that will help guide you through
                  lessons!
                </p>
                <a
                  onClick={() =>
                    gtmTrack(
                      "out_btn_click",
                      "LandingPage",
                      "Out Bound: https://kidscodejeunesse.org/teacher-training?eventGroupType=kcj_educators",
                      "https://kidscodejeunesse.org/teacher-training?eventGroupType=kcj_educators"
                    )
                  }
                  href="https://kidscodejeunesse.org/teacher-training?eventGroupType=kcj_educators"
                  target="_new"
                >
                  <Button>Book</Button>
                </a>
              </div>
            </div>

            <div className="tile">
              <img src={iconBookClassroom} />

              <div>
                <h4>Book a Classroom Visit</h4>
                <p>Have an instructor present to your classrom</p>
                <a
                  onClick={() =>
                    gtmTrack(
                      "out_btn_click",
                      "LandingPage",
                      "Out Bound: https://kidscodejeunesse.org/code-in-the-classroom?p=all&l=en&g=all",
                      "https://kidscodejeunesse.org/code-in-the-classroom?p=all&l=en&g=all"
                    )
                  }
                  href="https://kidscodejeunesse.org/code-in-the-classroom?p=all&l=en&g=all"
                  target="_new"
                >
                  <Button>Book</Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="TryAI" id="TryAI">
          <h2>Try an AI!</h2>
          <div className="columns">
            <div className="tile try-ai">
              <img src={funPP} />

              <div>
                <h4>Predict a Pie</h4>
                <p>
                  Trained on thousands of pie recipes to be able to classify any
                  recipe as "Sweet Pie", "Quiche", "Savoury Pie" and "Other"
                  from a combination of the input ingredients.
                </p>
              </div>
              <Link
                onClick={() =>
                  gtmTrack("prm_btn_click", "Pretrained", "Predict a Pie", "")
                }
                to={
                  appData.classroom
                    ? `/${appData.classroom.code}/trained`
                    : "/trained"
                }
              >
                <Button>Ready to Play!</Button>
              </Link>
            </div>

            <div className="tile try-ai">
              <img src={funIndigenous} />

              <div>
                <h4>Indigenous Fusion Cuisine</h4>
                <p>
                  Play with this pretrained neural network and discover new
                  recipes using this AI trained on xnumber of pie recipes!
                </p>
              </div>

              <Link
                onClick={() =>
                  gtmTrack(
                    "prm_btn_click",
                    "Pretrained",
                    "Chef David Wolfman",
                    ""
                  )
                }
                to={
                  appData.classroom
                    ? `/${appData.classroom.code}/trained/wolfman`
                    : "/trained/wolfman"
                }
              >
                <Button>Ready to Play!</Button>
              </Link>
            </div>

            <div className="tile try-ai">
              <img src={funBuild} />

              <div>
                <h4>Build Your Own Neural Network</h4>
                <p>
                  Create your own working neural network! Wire up the nodes and
                  use to make decisions based on your interests!
                </p>
              </div>

              <Link
                onClick={() => gtmTrack("prm_btn_click", "Build", "Build", "")}
                to={
                  appData.classroom
                    ? `/${appData.classroom.code}/build`
                    : "/build"
                }
              >
                <Button>Ready to Build!</Button>
              </Link>
            </div>

            <div className="tile try-ai">
              <img src={funJoin} />

              <div>
                <h4>Join a Classroom</h4>
                <p>
                  Enter the classroom code provided by your instructor to start
                  exploring!
                </p>
              </div>

              <a
                onClick={() => {
                  onCommand("join-classroom");
                  gtmTrack("sec_btn_click", "Class", "Join Class", "");
                }}
                disabled={!appData.connected}
              >
                <Button>Enter Code</Button>
              </a>
            </div>
          </div>
        </div>

        <a id="About">
          <div className="AboutApp">
            <h2>About This App</h2>
            <div className="AboutApp-tiles">
              <div>
                <a
                  onClick={() =>
                    gtmTrack(
                      "out_btn_click",
                      "Instructions",
                      "Out Bound: https://www.steamlabs.ca/",
                      "https://www.steamlabs.ca/"
                    )
                  }
                  href="https://www.steamlabs.ca/"
                  target="_new"
                >
                  <img src="https://steamlabs.ca/wp-content/uploads/2020/04/SteamLabs_Wordmark_RGB_Blue.jpg" />
                </a>
                <p>Predict-a-Pie is a creation of Steamlabs.</p>
              </div>

              <div>
                <a
                  onClick={() =>
                    gtmTrack(
                      "out_btn_click",
                      "Instructions",
                      "Out Bound: http://www.cookingwiththewolfman.com/home.html",
                      "http://www.cookingwiththewolfman.com/home.html"
                    )
                  }
                  href="http://www.cookingwiththewolfman.com/home.html"
                  target="_new"
                >
                  <img src="./ChefWolfmanLogo.gif" />
                </a>
                <p>Consultation with David Wolfman and Marlene Finn</p>
              </div>

              <div>
                <a
                  onClick={() =>
                    gtmTrack(
                      "out_btn_click",
                      "Instructions",
                      "Out Bound: https://kidscodejeunesse.org/",
                      "https://kidscodejeunesse.org/"
                    )
                  }
                  href="https://kidscodejeunesse.org/"
                  target="_new"
                >
                  <img
                    src="https://steamlabs.ca/wp-content/uploads/2021/01/300px-KCJ.png"
                    height="100px"
                  />
                </a>
                <p>Co-designed by Steamlabs and Kids Code Jeunesse.</p>
              </div>

              <div>
                <a
                  onClick={() =>
                    gtmTrack(
                      "out_btn_click",
                      "Instructions",
                      "Out Bound: https://www.amazonfutureengineer.com/",
                      "https://www.amazonfutureengineer.com/"
                    )
                  }
                  href="https://www.amazonfutureengineer.com/"
                  target="_new"
                >
                  <img src="https://steamlabs.ca/wp-content/uploads/2021/04/Amazon-Future-Engineer-Logo.png" />
                </a>
                <p>Created with funding from Amazon Future Engineer.</p>
              </div>
            </div>
          </div>
        </a>

        <div className="BringAI columns">
          <div className="left">
            <h2>Bringing AI education everywhere!</h2>
            <p>
              This tools has been used to support educators and students all
              over Canada and the world! Use this tool and workshop content to
              teach students, adults, and coworkers alike.
            </p>
          </div>

          <div className="right container">
            <div className="amazon">
              <a
                onClick={() =>
                  gtmTrack(
                    "out_btn_click",
                    "Instructions",
                    "Out Bound: https://www.aboutamazon.com/news/workplace/amazon-hosts-more-than-8-000-kids-for-bring-your-kids-to-work-day",
                    "https://www.aboutamazon.com/news/workplace/amazon-hosts-more-than-8-000-kids-for-bring-your-kids-to-work-day"
                  )
                }
                href="https://www.aboutamazon.com/news/workplace/amazon-hosts-more-than-8-000-kids-for-bring-your-kids-to-work-day"
                target="_new"
              >
                <img src={logoAmazon} />
              </a>
            </div>

            <div className="wesUni">
              <a
                onClick={() =>
                  gtmTrack(
                    "out_btn_click",
                    "Instructions",
                    "Out Bound: https://space.uwo.ca/",
                    "https://space.uwo.ca/"
                  )
                }
                href="https://space.uwo.ca/"
                target="_new"
              >
                <img src={wesUni} />
              </a>
            </div>

            <div className="teknisk">
              <a
                onClick={() =>
                  gtmTrack(
                    "out_btn_click",
                    "Instructions",
                    "Out Bound: https://www.tekniskmuseum.no",
                    "https://www.tekniskmuseum.no"
                  )
                }
                href="https://www.tekniskmuseum.no"
                target="_new"
              >
                <img src={teknisk} />
              </a>
            </div>

            <div className="tpl">
              <a
                onClick={() =>
                  gtmTrack(
                    "out_btn_click",
                    "Instructions",
                    "Out Bound: https://www.torontopubliclibrary.ca/programs-and-classes/",
                    "https://www.torontopubliclibrary.ca/programs-and-classes/"
                  )
                }
                href="https://www.torontopubliclibrary.ca/programs-and-classes/"
                target="_new"
              >
                <img src={tpl} />
              </a>
            </div>

            <div className="clc">
              <a
                onClick={() =>
                  gtmTrack(
                    "out_btn_click",
                    "Instructions",
                    "Out Bound: https://www.canadalearningcode.ca/",
                    "https://www.canadalearningcode.ca/"
                  )
                }
                href="https://www.canadalearningcode.ca/"
                target="_new"
              >
                <img src={clc} />
              </a>
            </div>

            <div className="digitalMoment">
              <a
                onClick={() =>
                  gtmTrack(
                    "out_btn_click",
                    "Instructions",
                    "Out Bound: https://digitalmoment.org/",
                    "https://digitalmoment.org/"
                  )
                }
                href="https://digitalmoment.org/"
                target="_new"
              >
                <img src={digiMoment} />
              </a>
            </div>

            <div className="sw">
              <a
                onClick={() =>
                  gtmTrack(
                    "out_btn_click",
                    "Instructions",
                    "Out Bound: https://www.scienceworld.ca/",
                    "https://www.scienceworld.ca/"
                  )
                }
                href="https://www.scienceworld.ca/"
                target="_new"
              >
                <img src={sw} />
              </a>
            </div>
          </div>
        </div>

        <div className="License columns">
          <div className="left">
            <p>
              <strong>
                Licensed under Attribution-ShareAlike 4.0 International (CC
                BY-SA 4.0)
              </strong>
            </p>
            <p>In summary, you are free to:</p>
            <ul>
              <p>
                <li>
                  Share — copy and redistribute the material in any medium or
                  format
                </li>
                <li>
                  Adapt — remix, transform, and build upon the material for any
                  purpose, even commercially.
                </li>
              </p>
            </ul>
            <p>Under the following terms:</p>
            <ul>
              <p>
                <li>
                  Attribution — You must give appropriate credit, provide a link
                  to the license, and indicate if changes were made. You may do
                  so in any reasonable manner, but not in any way that suggests
                  the licensor endorses you or your use.
                </li>
                <li>
                  ShareAlike — If you remix, transform, or build upon the
                  material, you must distribute your contributions under the
                  same license as the original.
                </li>
              </p>
            </ul>
            <p>
              Full details of this license can be found here:{" "}
              <a
                className="word-wrap"
                onClick={() =>
                  gtmTrack(
                    "out_btn_click",
                    "Instructions",
                    "Out Bound: https://creativecommons.org/licenses/by-sa/4.0/",
                    "https://creativecommons.org/licenses/by-sa/4.0/"
                  )
                }
                href="https://creativecommons.org/licenses/by-sa/4.0/"
                target="_new"
              >
                https://creativecommons.org/licenses/by-sa/4.0/
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
