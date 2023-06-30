import theme from '../theme'
import { styled } from "styled-components";

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding: 128px 32px;
    color: white;
    max-width: 1280px;
`

const Logotype = styled.h1`
    font-size: ${theme.font.size.highlight};
    font-family: ${theme.font.family.title};
    font-weight: ${theme.font.weight.bold};
`

const LogotypeLink = styled.a`
    color: inherit;
    text-decoration: none;
`


const NavMenu = styled.ul`
    display: flex;
    gap: 32px;
    align-items: center;
`

const NavMenuItem = styled.li`
    font-size: ${theme.font.size.highlight};
    font-family: ${theme.font.family.title};
`

const Icon = styled.img`
    width: ${theme.font.size.highlight};
`

import GithubIcon from '../assets/github.svg'
import LinkedinIcon from '../assets/linkedin.svg'

function Navbar() {
    return (
        <Nav>
            <LogotypeLink href="/">
                <Logotype>HENRIQUEYUN</Logotype>
            </LogotypeLink>
            <NavMenu>
                <NavMenuItem>portfolio</NavMenuItem>
                <NavMenuItem>career</NavMenuItem>
                <NavMenuItem>skills</NavMenuItem>
                <NavMenuItem>hobbies</NavMenuItem>
                <NavMenuItem><Icon src={LinkedinIcon} alt="Linkedin icon" /></NavMenuItem>
                <NavMenuItem><Icon src={GithubIcon} alt="Github icon" /></NavMenuItem>
            </NavMenu>
        </Nav>
    );
}

export default Navbar;