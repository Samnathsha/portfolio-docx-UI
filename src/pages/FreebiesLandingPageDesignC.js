import { useCallback } from "react";
import styles from "./FreebiesLandingPageDesignC.module.css";

const FreebiesLandingPageDesignC = () => {
  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='divborder']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onWorksTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='divContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='divContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAContainer7Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='div']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.freebiesLandingPageDesignC}>
      <div className={styles.div}>
        <img className={styles.groupIcon} alt="" src="../group-1.svg" />
        <div className={styles.divwNodeB3cf563aB5a27d79}>
          
          <div className={styles.heyFolksIAmShamnadUXDes}>
            <span className={styles.heyFolksIContainer}>
              <p className={styles.heyFolksP}>Hey Folks,</p>
              <p className={styles.heyFolksP}>I am shamnad</p>
              <p className={styles.uXDesignP}>UX Designer</p>
            </span>
          </div>
          <div className={styles.iAmAUserExperienceUXDes}>
            I am a User Experience(UX) Designer with experience in the
            end-to-end design of web and mobile interfaces
          </div>
          <div className={styles.div1}>
            <div className={styles.aDiv}>
              <div className={styles.downloadCvDiv}>Download Cv</div>
            </div>
            <div className={styles.aDiv1}>
              <img className={styles.divIcon} alt="" src="../div.svg" />
              <div className={styles.outlineDiv} />
            </div>
          </div>
          <div className={styles.div2}>
            <img className={styles.divIcon1} alt="" src="../div1.svg" />
            <div className={styles.rated495FromOver600Revi}>
              <span className={styles.heyFolksIContainer}>
                <span>{`Rated `}</span>
                <span className={styles.span}>4.9/5</span>
                <span>{` from over `}</span>
                <span className={styles.span}>600</span>
                <span> reviews.</span>
              </span>
            </div>
          </div>
        </div>
        <img
          className={styles.divwNodeCca7840f72eaDd03Icon}
          alt=""
          src="../divwnodecca7840f72eadd03d0d7c6899f291ab244e22b36.svg"
        />
        <div className={styles.acbde5b7f406f9e22b87Card2001Div}>
          <div className={styles.frameDiv}>
            <img className={styles.vectorIcon} alt="" src="../vector.svg" />
            <img className={styles.vectorIcon1} alt="" src="../vector1.svg" />
            <img className={styles.vectorIcon2} alt="" src="../vector2.svg" />
            <img className={styles.vectorIcon3} alt="" src="../vector3.svg" />
            <img className={styles.vectorIcon4} alt="" src="../vector4.svg" />
            <img className={styles.vectorIcon5} alt="" src="../vector5.svg" />
            <img className={styles.vectorIcon6} alt="" src="../vector6.svg" />
            <img className={styles.vectorIcon7} alt="" src="../vector5.svg" />
            <img className={styles.vectorIcon8} alt="" src="../vector8.svg" />
            <img className={styles.vectorIcon9} alt="" src="../vector5.svg" />
            <div className={styles.whatIsYourPrrimaryGoalFor}>
              <span className={styles.heyFolksIContainer}>
                <p
                  className={styles.heyFolksP}
                >{`What is your prrimary goal for `}</p>
                <p className={styles.uXDesignP}>using figma ?</p>
              </span>
            </div>
          </div>
        </div>
        <img
          className={styles.socialMediaBehance}
          alt=""
          src="../social-media--behance.svg"
        />
        <div className={styles.socialMediaGitHub}>
          <div className={styles.groupDiv}>
            <div className={styles.logoContainerDiv} />
          </div>
          <img className={styles.vectorIcon10} alt="" src="../vector10.svg" />
        </div>
      </div>
      <div className={styles.div3}>
        <div className={styles.div4}>
          <div className={styles.professionalExperienceDiv}>
            Professional experience
          </div>
        </div>
        <div className={styles.div5}>
          <div className={styles.div6}>
            <img
              className={styles.acbde5b7f4d5a0e22b98StarssvgIcon}
              alt=""
              src="../6298acbde5b7f4d5a0e22b98-starssvg.svg"
            />
            <div className={styles.div7} />
            <div className={styles.div8}>
              <div className={styles.div9} />
              <img className={styles.svgIcon} alt="" src="../svg.svg" />
              <div className={styles.designDiv}>Design</div>
            </div>
          </div>
          <img className={styles.divborderIcon} alt="" src="../divborder.svg" />
          <div className={styles.div10}>
            <img
              className={styles.acbde5b7f4d5a0e22b98StarssvgIcon}
              alt=""
              src="../6298acbde5b7f4d5a0e22b98-starssvg1.svg"
            />
            <div className={styles.div7} />
            <div className={styles.div12}>
              <img className={styles.divIcon2} alt="" src="../div2.svg" />
              <div className={styles.projectsDiv}>projects</div>
            </div>
          </div>
          <img
            className={styles.divborderIcon1}
            alt=""
            src="../divborder1.svg"
          />
          <div className={styles.div13}>
            <img
              className={styles.acbde5b7f4d5a0e22b98StarssvgIcon}
              alt=""
              src="../6298acbde5b7f4d5a0e22b98-starssvg2.svg"
            />
            <div className={styles.div7} />
            <div className={styles.div15}>
              <div className={styles.div16} />
              <div className={styles.div17}>
                <img className={styles.divIcon2} alt="" src="../div3.svg" />
                <div className={styles.projectsDiv}>Frontend</div>
              </div>
            </div>
          </div>
          <img
            className={styles.divborderIcon2}
            alt=""
            src="../divborder2.svg"
          />
        </div>
      </div>
      <div className={styles.div18} data-scroll-to="divContainer">
        <div className={styles.divwNode2df4c46cB8250a33}>
          <div className={styles.iAmAUserExperienceUXDes1}>
            I am a User Experience(UX) Designer with experience in the
            end-to-end design of web and mobile interfaces, SAAS applications,
            and mobile-responsive websites and also Front-end Developer using
            html and Cascading style sheet a years of experience as Freelancer
            and with different start-ups
          </div>
          <div className={styles.aDiv2}>
            <div className={styles.forMoreDiv}>For More</div>
            <img className={styles.divIcon4} alt="" src="../div4.svg" />
          </div>
          <div className={styles.aboutMeDiv}>About me!!</div>
        </div>
        <div className={styles.divwNode2df4c46cB8250a331}>
          <img
            className={styles.acbde5b7f45495e22ba7Content2Icon}
            alt=""
            src="../6298acbde5b7f45495e22ba7-content2520img25201p500png@2x.png"
          />
          <img
            className={styles.acbde5b7f42614e22b9cFeature2Icon}
            alt=""
            src="../6298acbde5b7f42614e22b9c-feature20pattern202svg.svg"
          />
          <div className={styles.div19}>
            <div className={styles.acbde5b7f45b79e22b88Card2002Div}>
              <div className={styles.acbde5b7f45b79e22b88Card2002Div1}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector11.svg"
                />
                <img
                  className={styles.vectorIcon12}
                  alt=""
                  src="../vector12.svg"
                />
                <img
                  className={styles.vectorIcon13}
                  alt=""
                  src="../vector13.svg"
                />
                <img
                  className={styles.vectorIcon14}
                  alt=""
                  src="../vector14.svg"
                />
                <img
                  className={styles.vectorIcon15}
                  alt=""
                  src="../vector15.svg"
                />
                <img
                  className={styles.vectorIcon16}
                  alt=""
                  src="../vector16.svg"
                />
                <div className={styles.designerDiv}>Designer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.div20}>
        <img
          className={styles.acbde5b7f48f82e22b9dFeature2Icon}
          alt=""
          src="../6298acbde5b7f48f82e22b9d-feature20bg202svg.svg"
        />
        <div className={styles.div21}>
          <div className={styles.divwNode22df261c7aafB5b3}>
            <img className={styles.divIcon5} alt="" src="../div5.svg" />
            <div className={styles.loremIpsumDolorSitAmetCo}>
              Lorem ipsum dolor sit amet, consectetur.
            </div>
          </div>
          <div className={styles.divwNode22df261c7aafB5b31}>
            <img className={styles.divIcon5} alt="" src="../div6.svg" />
            <div className={styles.loremIpsumDolorSitAmetCo}>
              Lorem ipsum dolor sit amet, consectetur.
            </div>
          </div>
          <div className={styles.divwNode22df261c7aafB5b32}>
            <img className={styles.divIcon5} alt="" src="../div7.svg" />
            <div className={styles.loremIpsumDolorSitAmetCo}>
              Lorem ipsum dolor sit amet, consectetur.
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.divIcon8}
        alt=""
        src="../div8.svg"
        data-scroll-to="div"
      />
      <div className={styles.divwNode46b452291e8f1dec}>
        <img
          className={styles.acbde5b7f4d428e22b9bFeature2Icon}
          alt=""
          src="../6298acbde5b7f4d428e22b9b-feature20pattern201svg.svg"
        />
        <div className={styles.emailFormDiv}>
          <div className={styles.inputemail2Div}>
            <div className={styles.emailDiv}>Email*</div>
          </div>
          <div className={styles.inputemail2Div1}>
            <div className={styles.emailDiv}>Type your message!!</div>
          </div>
          <div className={styles.div22}>
            <div className={styles.getStartedDiv}>Get Started</div>
            <img className={styles.divIcon9} alt="" src="../div9.svg" />
          </div>
        </div>
        <input className={styles.inputname2} type="text" />
        <div className={styles.sendUsAMessage}>Send us a Message</div>
      </div>
      <div className={styles.div23}>
        <div className={styles.div24} data-scroll-to="divContainer1">
          <img
            className={styles.acbde5b7f4d428e22b9bFeature2Icon1}
            alt=""
            src="../6298acbde5b7f4d428e22b9b-feature20pattern201svg1.svg"
          />
          <div className={styles.latestWorksDiv}>Latest works</div>
        </div>
        <div className={styles.div25}>
          <div className={styles.aDiv3}>
            <img
              className={styles.acbde5b7f42224e22c05Blog2004Icon}
              alt=""
              src="../6298acbde5b7f42224e22c05-blog2004png@2x.png"
            />
            <div className={styles.div26}>
              <div className={styles.mINTOREAD}>10 MIN TO READ</div>
              <div className={styles.latestDevelopmentsInFigma}>
                15 Latest Developments In Figma.
              </div>
              <div className={styles.div27}>
                <div className={styles.div28}>
                  <img
                    className={styles.acbde5b7f44b1fe22b7aAvatarpnIcon}
                    alt=""
                    src="../6298acbde5b7f44b1fe22b7a-avatarpng@2x.png"
                  />
                </div>
                <div className={styles.outlineDiv1} />
                <div className={styles.shamnadDiv}>Shamnad</div>
              </div>
            </div>
            <img
              className={styles.divborderIcon3}
              alt=""
              src="../divborder3.svg"
            />
          </div>
          <div className={styles.aDiv4}>
            <img
              className={styles.acbde5b7f42224e22c05Blog2004Icon}
              alt=""
              src="../6298acbde5b7f48271e22bdf-blog2002png@2x.png"
            />
            <div className={styles.div26}>
              <div className={styles.mINTOREAD1}>8 MIN TO READ</div>
              <div className={styles.skillsThatYouCanLearnFrom}>
                Skills That You Can Learn From Adobe XD.
              </div>
              <div className={styles.div27}>
                <div className={styles.outlineDiv1} />
                <div className={styles.shamnadDiv}>shamnad</div>
                <div className={styles.div28}>
                  <img
                    className={styles.acbde5b7f44b1fe22b7aAvatarpnIcon}
                    alt=""
                    src="../6298acbde5b7f44b1fe22b7a-avatarpng@2x.png"
                  />
                </div>
              </div>
            </div>
            <img
              className={styles.divborderIcon3}
              alt=""
              src="../divborder3.svg"
            />
          </div>
          <div className={styles.aDiv5}>
            <img
              className={styles.acbde5b7f42224e22c05Blog2004Icon}
              alt=""
              src="../6298acbde5b7f4df49e22bf2-blog2003png@2x.png"
            />
            <div className={styles.div26}>
              <div className={styles.mINTOREAD2}>12 MIN TO READ</div>
              <div className={styles.easyWaysToFacilitateDesign}>
                7 Easy Ways To Facilitate Design.
              </div>
              <div className={styles.div27}>
                <div className={styles.outlineDiv1} />
                <div className={styles.shamnadDiv}>Shamnad</div>
                <div className={styles.div28}>
                  <img
                    className={styles.acbde5b7f44b1fe22b7aAvatarpnIcon}
                    alt=""
                    src="../6298acbde5b7f44b1fe22b7a-avatarpng@2x.png"
                  />
                </div>
              </div>
            </div>
            <img
              className={styles.divborderIcon3}
              alt=""
              src="../divborder3.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.div35} />
      <img
        className={styles.acbde5b7f4010ee22b9fCTA20BGIcon}
        alt=""
        src="../6298acbde5b7f4010ee22b9f-cta20bgsvg.svg"
      />
      <div className={styles.div36}>
        <div className={styles.divwNode8d8ab86dB89fE8af}>
          <img
            className={styles.acbde5b7f4a0ece22ba0Feature2Icon}
            alt=""
            src="../6298acbde5b7f4a0ece22ba0-feature20pattern204svg.svg"
          />
          <div className={styles.aDiv6}>
            <div className={styles.hireMeDiv}>Hire me</div>
            <img className={styles.divIcon10} alt="" src="../div10.svg" />
          </div>
          <div className={styles.wereHereToHelp}>We’re here to help.</div>
          <div className={styles.loremIpsumDolorSitAmetCo3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </div>
        </div>
        <div className={styles.div37}>
          <div className={styles.lETSTRYDiv}>LET’S TRY!</div>
          <div className={styles.div38}>
            <img className={styles.divIcon11} alt="" src="../div11.svg" />
            <div className={styles.addFeatureHereBloremBlips}>
              [add feature here] blorem blipsum dolor
            </div>
          </div>
          <div className={styles.div39}>
            <img className={styles.divIcon12} alt="" src="../div12.svg" />
            <div className={styles.addFeatureHereUllamcoLore}>
              [add feature here] ullamco lorem
            </div>
          </div>
          <div className={styles.div40}>
            <img className={styles.divIcon13} alt="" src="../div13.svg" />
            <div className={styles.addFeatureHereLoremIpsum}>
              [add feature here] lorem ipsum bolor sit amat
            </div>
          </div>
        </div>
      </div>
      <div className={styles.div41}>
        <div className={styles.div42}>
          <div className={styles.div43}>
            <img
              className={styles.acbde5b7f403c2e22b45LogosvgIcon}
              alt=""
              src="../6298acbde5b7f403c2e22b45-logosvg.svg"
            />
            <div className={styles.navDiv}>
              <div className={styles.homeDiv} onClick={onHomeTextClick}>
                Home
              </div>
              <div className={styles.servicesDiv}>Services</div>
              <div className={styles.worksDiv} onClick={onWorksTextClick}>
                Works
              </div>
              <div className={styles.divwDropdownToggle0}>
                <div className={styles.div44}>
                  <div className={styles.div45}></div>
                </div>
                <div className={styles.aboutDiv} onClick={onAboutTextClick}>
                  About
                </div>
              </div>
            </div>
          </div>
          <div className={styles.aDiv7} onClick={onAContainer7Click}>
            <div className={styles.contactMeDiv}>Contact Me</div>
          </div>
        </div>
      </div>
      <img
        className={styles.divborderIcon6}
        alt=""
        src="../divborder6.svg"
        data-scroll-to="divborder"
      />
      <div className={styles.rectangleDiv} />
      <div className={styles.frameDiv1}>
        <div className={styles.lineDiv} />
        <div className={styles.frameDiv2}>
          <div className={styles.frameDiv3}>
            <img className={styles.aIcon} alt="" src="../a.svg" />
            <img className={styles.aIcon} alt="" src="../a1.svg" />
            <img className={styles.aIcon} alt="" src="../a2.svg" />
            <img className={styles.aIcon} alt="" src="../a3.svg" />
          </div>
        </div>
      </div>
      <img className={styles.divIcon14} alt="" src="../div14@2x.png" />
    </div>
  );
};

export default FreebiesLandingPageDesignC;
