import React from "react";

// Pass Movie Array, index for now only title
const MovieSection = ({ title }) => {
  return (
    <section className="container mx-auto py-6">
      <h2 className="text-xl font-bold border-l-4 border-gray-800 dark:border-white pl-2 dark:text-white mb-4">
        {title}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </section>
  );
};


const MovieCard = () => {
  return (
    <div class="border bg-white text-white rounded overflow-hidden shadow-md dark:bg-gray-800 dark:border-gray-700 h-fit scaling">
      <img
        class="w-full md:h-64 lg:h-72 object-cover"
        src="https://media.themoviedb.org/t/p/w220_and_h330_face/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg"
        alt="Alien: Romulus"
      />
      <div class="p-2">
        <h2 class="text-md font-semibold dark:text-white text-gray-900 poppins">
          Alien: Romulus
        </h2>
        <p class="text-xs text-gray-400">Comedy | 2h 32mins</p>
      </div>
    </div>
  );
};

export default MovieSection;
