import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieSection from "../components/MovieCard";

function Home() {
  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      <main>
          <MovieSection title="Latest Release" />
          <MovieSection title="Trending Movie" />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
