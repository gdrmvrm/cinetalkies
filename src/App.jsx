import React, { useEffect, useState } from 'react';
import Search from './Components/search';

import { API_BASE_URL, API_OPTIONS } from '../config';

const App = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchMovies = async () => {
    const url = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
    try {
      const response = await fetch(url, API_OPTIONS);
      if (!response.ok) {
        throw new Error('Error fetching movies. Please try again.');
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      setErrorMsg(`${error.message}`);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <header className="flex flex-row items-center w-full justify-center mt-5 mb-5">
        <img src="./logo.png" alt="black & white reel logo" width={50} className="mt-5 w-10 sm:w-20 md:w-[50px]" />
        <h1 className="text-2xl sm:text-3xl font-mono text-center mt-10">
          Cine<span className="text-red-700">Talkies</span>
        </h1>
      </header>
      <section className="flex flex-col items-center justify-center">
        <img src="./hero.png" alt="hero banner" className="w-90 sm:w-200 md:w-[480px] mb-10" />
        <h1 className="text-2xl sm:text-3xl font-mono text-center mb-8">
          Smart Picks. <span className="text-red-700"> Zero Fuss.</span>
        </h1>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </section>

      {errorMsg && <p className="text-sm text-red-700 text-center pt-1">*{errorMsg}</p>}
    </main>
  );
};

export default App;
