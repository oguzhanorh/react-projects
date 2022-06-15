import React, { useState, useEffect } from 'react';
import data from './data';
import Article from './Article';
import { MdDarkMode } from 'react-icons/md';

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme; //it is a HTML element sayfa yüklendiğinde ki başlangıç
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h2>DARK MODE AND LIGHT MODE PROJECT</h2>
          <button className="btn" onClick={toggleTheme}>
            <MdDarkMode />
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;
