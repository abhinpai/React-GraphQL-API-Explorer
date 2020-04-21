import React, { PureComponent } from "react";
import { SimpleImg } from "react-simple-img";
import "./overview.scss";
import antd from "../../../assets/antd.png";
import apollo from "../../../assets/apollo.jpg";
import firebase from "../../../assets/firebase.png";
import github from "../../../assets/github.png";
import graphql from "../../../assets/graphql.png";
import react from "../../../assets/react.png";
import { Row, Col, Popover } from "antd";

const data = [
  {
    link: react,
    hypherLink: "https://reactjs.org/",
    technology: "React",
    height: 65,
    width: 150,
  },
  {
    link: graphql,
    hypherLink: "https://graphql.org/",
    technology: "GraphQl",
    height: 65,
    width: 150,
  },
  {
    link: apollo,
    hypherLink: "https://www.apollographql.com/",
    technology: "Apollo",
    height: 65,
    width: 150,
  },
  {
    link: firebase,
    hypherLink: "https://firebase.google.com/",
    technology: "Firebase Hosting",
    height: 65,
    width: 150,
  },
  {
    link: github,
    hypherLink: "https://github.com/features/actions",
    technology: "Github Actions",
    height: 65,
    width: 150,
  },
  {
    link: antd,
    hypherLink: "https://ant.design/",
    technology: "AntD",
    height: 50,
    width: 55,
  },
];

export default class Overview extends PureComponent {
  render() {
    return (
      <div>
        <h3>Objective of this application</h3>
        <p>
          The intention of this application is to understand the <b>GraphQL</b>{" "}
          implementation in client side using libraries like apollo-client and
          graphql-tag. I do also enabled the CI-CD using Github action and
          Firebase Hosting which will host the application on every commit to
          the <b>Master branch</b>
        </p>
        <h3>Technology</h3>
        <Row className={"tech-div"}>
          {data.map((item, index) => {
            return (
              <Col key={index} xs={12} sm={12} md={8} lg={8} xl={6}>
                <a href={item.hypherLink} target="_blank">
                  <SimpleImg
                    className={"tech-img"}
                    importance={"high"}
                    width={item.width}
                    height={item.height}
                    src={item.link}
                  />
                </a>
              </Col>
            );
          })}
        </Row>
        <ul>
          <li>Github Link</li>
          <li>What is GraphQL and how its different then the rest</li>
          <li>What is the pros and cons of the Graphql</li>
          <li>CICD with Github Action</li>
          <li>React app hosting in firebase</li>
          <li>Open GraphQl APIs links</li>
        </ul>
      </div>
    );
  }
}
