import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BusinessCard } from "./BusinessCard";

function App() {
  const data = {
    name: "Pulkit",
    description: "Software Developer",
    linkedin: "https://www.linkedin.com/in/thepulkitmalhotra/",
    twitter: "https://twitter.com/PulkitMalhotraa",
    otherSocialMedia: {
      label: "Instagram",
      link: "https://www.instagram.com/thepulkitmalhotra/",
    },
    interest: ["play", "football"],
  };

  return (
    <div>
      <Card person={data}></Card>;
      <BusinessCard
        name={data.name}
        description={data.description}
        interests={data.interest}
        linkedin={data.linkedin}
        twitter={data.twitter}
        otherSocialMedia={data.otherSocialMedia}
      />
    </div>
  );
}

function Card({ person }) {
  const { name, description, interest } = person;

  return (
    <div className="card">
      <h1>{name}</h1>
      <h4>{description}</h4>
      <h3>Interest's</h3>
      <div className="interest">
        {interest.map((interest) => {
          return <h6>{interest}</h6>;
        })}
      </div>
      {/* <div className="social">
        {social.map((platform) => {
          return (
            <a href={Object.values(platform)[0]}>{Object.keys(platform)[0]}</a>
          );
        })}
      </div> */}
    </div>
  );
}

export default App;
