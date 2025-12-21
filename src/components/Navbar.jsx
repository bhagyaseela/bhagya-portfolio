import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { Bio } from "../data/constants";
import { MenuRounded, LightMode, DarkMode } from "@mui/icons-material";


const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  opacity: 0.9;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  color: white;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(14px);
  background: rgba(10, 10, 20, 0.75);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;
const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  padding: 10px 22px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  color: white;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.primary},
    #9b6cff
  );
  box-shadow: 0 8px 24px rgba(155, 108, 255, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(155, 108, 255, 0.45);
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const MobileIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 80px;
  right: 0;

  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
        isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

const ThemeToggle = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 16px;

  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);

  transition: all 0.3s ease;

  &:hover {
    transform: rotate(15deg) scale(1.1);
    background: ${({ theme }) => theme.primary};
    color: white;
  }
`;


const scrollWithOffset = (id) => {
    const element = document.getElementById(id);
    const yOffset = -80;
    const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
};


const Navbar = ({ toggleTheme, isDark }) => {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">Seela</NavLogo>

                <MobileIcon onClick={() => setIsOpen(!isOpen)}>
                    <MenuRounded style={{ color: "inherit" }} />
                </MobileIcon>

                <NavItems>
                    <NavLink onClick={() => scrollWithOffset("About")}>About</NavLink>
                    <NavLink onClick={() => scrollWithOffset("Skills")}>Skills</NavLink>
                    <NavLink onClick={() => scrollWithOffset("Experience")}>Experience</NavLink>
                    <NavLink onClick={() => scrollWithOffset("Projects")}>Projects</NavLink>
                    <NavLink onClick={() => scrollWithOffset("Education")}>Education</NavLink>
                </NavItems>


                {isOpen && (
                    <MobileMenu isOpen={isOpen}>
                        <NavLink
                            onClick={() => {
                                scrollWithOffset("About");
                                setIsOpen(false);
                            }}
                        >
                            About
                        </NavLink>

                        <NavLink
                            onClick={() => {
                                scrollWithOffset("Skills");
                                setIsOpen(false);
                            }}
                        >
                            Skills
                        </NavLink>

                        <NavLink
                            onClick={() => {
                                scrollWithOffset("Experience");
                                setIsOpen(false);
                            }}
                        >
                            Experience
                        </NavLink>

                        <NavLink
                            onClick={() => {
                                scrollWithOffset("Projects");
                                setIsOpen(false);
                            }}
                        >
                            Projects
                        </NavLink>

                        <NavLink
                            onClick={() => {
                                scrollWithOffset("Education");
                                setIsOpen(false);
                            }}
                        >
                            Education
                        </NavLink>

                        <GithubButton
                            href={Bio.github}
                            target="_Blank"
                            style={{
                                background: theme.primary,
                                color: theme.text_primary,
                            }}
                        >
                            Github Profile
                        </GithubButton>
                    </MobileMenu>
                )}

                <ButtonContainer>
                    <GithubButton href={Bio.github} target="_Blank">
                        Github Profile
                    </GithubButton>

                    <ThemeToggle onClick={toggleTheme}>
                        {isDark ? <LightMode /> : <DarkMode />}
                    </ThemeToggle>

                </ButtonContainer>
            </NavbarContainer>
        </Nav>
    );
};

export default Navbar;

