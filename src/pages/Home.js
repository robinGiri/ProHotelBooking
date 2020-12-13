import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Hero>
      <Banner title="luxurious rooms" subtitle="Delux rooms starting at $299">
        <Link to="/rooms">our room</Link>
      </Banner>
    </Hero>
  );
}
