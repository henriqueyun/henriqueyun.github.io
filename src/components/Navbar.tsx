import theme from '../theme'
import { styled } from "styled-components";
import { useState } from "react";

import GithubIcon from '../assets/github.svg'
import LinkedinIcon from '../assets/linkedin.svg'
import HamburguerIcon from '../assets/hamburguer.svg'

function Navbar() {
    
    const [displayNavItems, setDisplayNavItems] = useState(false);

    const Nav = styled.nav`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: 0 auto;
        padding: 128px 32px;
        max-width: 1280px;
        color: white;
        li:hover {
            color: ${theme.palette.primary};
        }
        li > img {
            border: solid transparent;
            border-width: 0 0 2px 0; 
            padding: 0 0 2px 0;
            &:hover {
                border-color: white;
            }
        }
        @media (max-width: 720px) {
                flex-direction: column;
                padding: 48px 32px;
                gap: 32px;
            }
    `

    const Logotype = styled.h1`
        font-size: ${theme.font.size.highlight};
        font-family: ${theme.font.family.title};
        font-weight: ${theme.font.weight.bold};
        &:hover {
            color: ${theme.palette.primary};
        }
    `

    const LogotypeLink = styled.a`
        color: inherit;
        text-decoration: none;
    `

    const DrawerWrapper = styled.div`
        display: flex;
        flex-direction: column;
    `

    const DrawerToggler = styled.button`
        display: none;
        @media (max-width: 720px) {
            display: ${displayNavItems ? 'display' : 'none' };
            background-color: unset;
            border: none;
            cursor: pointer;
            display: block;
        }
    `

    const MobileDrawerNavMenu = styled.ul`
        display: none;
        @media (max-width: 720px) {
            display: ${displayNavItems ? 'flex' : 'none'};
            gap: 32px;
            align-items: center;
            padding: 32px 0;
            flex-direction: column;
        }
    `

    const DrawerNavMenu = styled.ul`
        display: flex;
        gap: 32px;
        @media (max-width: 720px) {
            display: none;
            padding-top: 32px;
            flex-direction: column;
        }
    `

    const NavMenuItem = styled.li`
        font-size: ${theme.font.size.highlight};
        font-family: ${theme.font.family.title};
        cursor: pointer;
    `

    const Icon = styled.img`
        width: ${theme.font.size.highlight};
    `

    return (
        <Nav>
            <LogotypeLink href="/">
                <Logotype>HENRIQUEYUN</Logotype>
            </LogotypeLink>
            <DrawerWrapper>
                <DrawerToggler onClick={() => setDisplayNavItems(!displayNavItems)}><img src={HamburguerIcon} alt="Hamburguer icon"/></DrawerToggler>
                <MobileDrawerNavMenu>
                    <NavMenuItem>portfolio</NavMenuItem>
                    <NavMenuItem>career</NavMenuItem>
                    <NavMenuItem>skills</NavMenuItem>
                    <NavMenuItem>hobbies</NavMenuItem>
                    <NavMenuItem><Icon src={LinkedinIcon} alt="Linkedin icon" /></NavMenuItem>
                    <NavMenuItem><Icon src={GithubIcon} alt="Github icon" /></NavMenuItem>
                </MobileDrawerNavMenu>
                <DrawerNavMenu>
                    <NavMenuItem>portfolio</NavMenuItem>
                    <NavMenuItem>career</NavMenuItem>
                    <NavMenuItem>skills</NavMenuItem>
                    <NavMenuItem>hobbies</NavMenuItem>
                    <NavMenuItem><Icon src={LinkedinIcon} alt="Linkedin icon" /></NavMenuItem>
                    <NavMenuItem><Icon src={GithubIcon} alt="Github icon" /></NavMenuItem>
                </DrawerNavMenu>
            </DrawerWrapper>
        </Nav>
    );
}

export default Navbar