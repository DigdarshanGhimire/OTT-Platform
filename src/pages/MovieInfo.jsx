import React from 'react'

function MovieInfo() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto p-4">
        <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row">
                <img src="http://via.placeholder.com/1080x720" alt="Movie Poster"
                    className="rounded-lg w-4/4 md:w-1/3 lg:w-1/4 mb-4 md:mb-0"/>

                <div className="md:ml-6 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-2">Movie Title</h2>
                    <p className="text-gray-400 mb-4">Release Year: 2024 | Genre: Action, Adventure</p>
                    <p className="mb-4">
                        <strong>Director:</strong> John Doe<br/>
                        <strong>Cast:</strong> Jane Doe, Jack Smith, Emily Johnson
                    </p>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ullamcorper
                        placerat, lorem eros malesuada nisl, a consectetur felis augue non velit.
                    </p>
                    <a className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 cursor-pointer w-fit">
                        Watch Trailer
                    </a>
                </div>
            </div>
        </div>
    </main>
    </div>
  )
}

export default MovieInfo
