import FeatureBox from "./home_components/FeatureBox";
import { FeatureContent } from "./../utils/FeatureContent";

const AboutUs = () => {
  return (
    <div className="mt-5 pt-5 p-sm-5 container d-flex flex-column align-item-center">
      <h1 className="fs-1 text-center">What we offer</h1>
      <p className="fs-6 p-2 text-center">
        We help teachers to create digital classrooms to conduct online classes
        and create an engaging learning environment. Our Secured robust platform
        brings ease and efficiency to tutors through our all-in-one application
        so that tutors don’t need to juggle between multiple apps.
      </p>
      {FeatureContent.map((item, index) => (
        <FeatureBox {...item} key={index} />
      ))}
    </div>
  );
};

export default AboutUs;
