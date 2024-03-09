import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="2023 - 2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            CodSoft
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Data Science Intern (ID-CS07WX6643)
          </h6>
          <p>• TITANIC SURVIVAL PREDICTION (Use the Titanic dataset to build a model that predicts whether a
            passenger on the Titanic survived or not.)</p>
          <p>• MOVIE RATING PREDICTION WITH PYTHON  (Build a model that predicts the rating of a movie based on
          features like genre, director, and actors.)</p>
          <p>• IRIS FLOWER CLASSIFICATION (Use the Iris dataset to develop a model that can classify iris
          flowers into different species based on their sepal and petal measurements.)</p>
          <p>• CREDIT CARD FRAUD DETECTION (Build a machine learning model to identify fraudulent credit card
          transactions.)</p>
          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2023 - 2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Bharat Intern
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Data Science Intern 
          </h6>
          <p>• Stock Prediction (Take stock price of any company and predicts its price by using LSTM.)</p>
          <p>• Titanic Classification (Make a system which tells whether the person will be save from sinking. What factors were
          most likely lead to success-socio-economic status, age, gender and more.)</p>
          <p>• Number Recognition (Handwritten digit recognition system not only detects scanned images of handwritten digits.Handwritten digit
          recognition using MNIST dataset is a major project made)</p>
          
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
