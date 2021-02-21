import FeatureBox from "./home_components/FeatureBox";
import { FeatureContent } from "./../utils/FeatureContent";
import Widget from "./home_components/Widget";
import Banner from "./home_components/Banner";

const Home = () => {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div className=" pt-5 p-sm-5 container d-flex flex-column align-item-center">
        <h1 className="fs-1 text-center">What we offer</h1>
        <p className="fs-6 p-2 text-center">
          We help teachers to create digital classrooms to conduct online
          classes and create an engaging learning environment. Our Secured
          robust platform brings ease and efficiency to tutors through our
          all-in-one application so that tutors don’t need to juggle between
          multiple apps.
        </p>
        {FeatureContent.map((item, index) => (
          <FeatureBox {...item} key={index} />
        ))}
      </div>

      <div>
        <p className="p-3 text-center fs-1">What Teachers Say About Electura</p>
      </div>
      <div className="d-lg-flex justify-content-around align-items-start container">
        <div>
          <Widget />
        </div>
        <div className="mt-lg-5">
          <Widget />
        </div>
        <div>
          <Widget />
        </div>
      </div>
    </div>
  );
};

export default Home;
