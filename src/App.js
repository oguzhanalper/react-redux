import Counter from "./Counter";
import CounterActions from "./CounterActions";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import ReactSwitch from "react-switch";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Header />
        <div className="number">
          <Counter />
        </div>
        <div>
          <CounterActions />
        </div>
        <div className="switch">
          <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
