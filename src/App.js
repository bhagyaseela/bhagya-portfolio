import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import StartCanvas from "./components/canvas/Stars";
import WaveCanvas from "./components/canvas/wave";
import TechCanvas from "./components/canvas/Tech";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import ForegroundImage from "./components/ForegroundImage";
import ForegroundCanvas from "./components/canvas/ForegroundCanvas";



// Styled Components
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
  
`;

// Wrapper for sections with gradient background
const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
    const [isDark, setIsDark] = useState(true);

    const toggleTheme = () => {
        setIsDark((prev) => !prev);
    };

    return (
        // <ThemeProvider theme={lightTheme}>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <BrowserRouter>
                <Navbar toggleTheme={toggleTheme} isDark={isDark} />
                <Body>
                    <ForegroundImage />
                    {/* <ForegroundCanvas /> */}
                    {/* <StartCanvas /> */}
                    <TechCanvas
                        key={isDark ? "tech-dark" : "tech-light"}
                        isDark={isDark}
                    />
                    {/* <WaveCanvas /> */}
                    <div>
                        <Hero />
                        <Wrapper>
                            <Skills />
                            <Experience />
                        </Wrapper>
                        <Projects />
                        <Wrapper>
                            <Education />
                            <Contact />
                        </Wrapper>
                        <Footer />
                    </div>
                </Body>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
