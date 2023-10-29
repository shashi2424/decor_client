import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import ContactUs from "pages/ContactUs";


import SingleCol from "components/faqs/SingleCol";
import ThreeColSlider from "components/cards/ThreeColSlider";
import Header from "../components/headers/light.js";


export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (

    <AnimationRevealPage>
      <Header />
      {/* <Hero
        heading={<>Furnishing & Affordable <HighlightedText>Products Near You.</HighlightedText></>}
        description="We are the industry’s most stable and economical source for manufacturing, importing and exporting of a wide assortment of Gazebo Tent and Outdoor Umbrella. These offered products are known for easy usability."
        imageSrc="https://5.imimg.com/data5/SELLER/Default/2020/12/VR/QA/JP/85146723/whatsapp-image-2020-12-03-at-1-11-42-pm-500x500.jpeg"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Order Now"
        watchVideoButtonText="View the products"
      /> */}

      <ThreeColSlider />

      {/* <MainFeature
        subheading={<Subheading>Established Since 2014</Subheading>}
        heading={
          <>
            We've been serving for
            <wbr /> <HighlightedText>over 5 years.</HighlightedText>
          </>
        }
        description={
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        imageSrc={
          "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      /> */}
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Checkout our <HighlightedText>products.</HighlightedText>
          </>
        }
      />

      <MainFeature2 id="main-feature2"
        subheading={<Subheading>About Us</Subheading>}
      />
      <Testimonial
        subheading=""
        heading={<>Reviews and <HighlightedText>Ratings.</HighlightedText></>}
      />
      {/* <DownloadApp
        text={<>People around you are ordering delicious meals using the <HighlightedTextInverse>Treact App.</HighlightedTextInverse></>}
      /> */}
      <ContactUs />
      <SingleCol />

      <Footer />
    </AnimationRevealPage>
  );
}
