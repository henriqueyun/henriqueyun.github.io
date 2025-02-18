import theme from "../../theme"
import { styled, keyframes } from "styled-components"
import { useState } from "react"

import ReactIcon from '../../assets/react.webp'
import VueIcon from '../../assets/vue.webp'
import MaterialUIIcon from '../../assets/material-ui.webp'
import SassIcon from '../../assets/sass.webp'
import JSIcon from '../../assets/js.webp'
import HtmlIcon from '../../assets/html.webp'
import CssIcon from '../../assets/css.webp'

import NestIcon from '../../assets/nest.webp'
import ExpressIcon from '../../assets/express.webp'
import NodeIcon from '../../assets/node.webp'
import JavaIcon from '../../assets/java.webp'
import ServerlessIcon from '../../assets/serverless.webp'

import MySQLIcon from '../../assets/mysql.webp'
import MicrosoftSQLIcon from '../../assets/microsoft-sql.svg'
import MongoDBIcon from '../../assets/mongodb.webp'
import PostgreSQLIcon from '../../assets/postgres.webp'

import GitIcon from '../../assets/git.webp'
import DockerIcon from '../../assets/docker.webp'
import LinuxIcon from '../../assets/linux.webp'
import ViteIcon from '../../assets/vite.webp'
import NetlifyIcon from '../../assets/netlify.webp'
import RenderIcon from '../../assets/render.webp'
import DrawioIcon from '../../assets/draw-io.webp'
import Figma from '../../assets/figma.webp'

const InternalSection = styled.section`
    display: flex;
    flex-flow: wrap column;
    align-items: center;
    gap: 32px;
`

const SkillsHeader = styled.h1`
    font-size: ${theme.font.size.title};
    font-weight: ${theme.font.weight.bold};
    text-align: center;
    background: linear-gradient(45deg, ${theme.palette.gradient.light} 37%, ${theme.palette.gradient.dark} 99%); 
    background-clip: text;
    color: transparent;
    @media (max-width: 768px) {
        font-size: ${theme.font.size.xs.title};
    }
`

const SkillsSubHeader = styled.p`
    text-align: center;
    color: ${theme.palette.text.secondary};
    font-size: ${theme.font.size.highlight};
    @media (max-width: 768px) {
        font-size: ${theme.font.size.xs.highlight};
    }
`

const SkillsDivisionWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 48px;
    @media (max-width: 768px) {
        align-items: center;
    }
`

const SkillsDivisionTitlesWrapper = styled.ul`
    display: flex;
    justify-content: center;
    gap: 40px;
    @media (max-width: 768px) {
        align-items: center;
        flex-direction: column;
    }
`

const SkillDivisionTitle = styled.li<{ $selected: boolean; }>`
    font-size: ${theme.font.size.highlight};
    background: ${props => props.$selected ? `linear-gradient(45deg, ${theme.palette.gradient.light} 37%, ${theme.palette.gradient.dark} 99%)` : theme.palette.text.secondary};
    background-clip: text;
    color: transparent;
    font-weight: ${theme.font.weight.bold};
    cursor: pointer;
    &:hover {
        color: ${props => !props.$selected ? theme.palette.text.primary : 'transparent'};
    }
`

const SkillsDivisionIconWrapper = styled.ul`
    display: flex;
    justify-content: center;
    gap: 32px;
    @media (max-width: 768px) {
        align-items: center;
        width: 80%;
        flex-wrap: wrap;
    }
`
const balance = keyframes`
    0% { transform: rotate(0deg); }
    25% { transform: rotate(35deg); }
    60% { transform: rotate(-25deg); }
    85% { transform: rotate(20deg); }
    85% { transform: rotate(-10deg); }
    85% { transform: rotate(5deg); }
    100% { transform: rotate(0deg); }
`

const Skill = styled.span`
    display: flex;
    align-items: center;
    gap: 8px;
    flex-flow: column wrap;
    &:hover {
        box-shadow:
            50px 250px 150px ${theme.palette.gradient.light};
    }
    &:hover > strong {
        color: ${theme.palette.text.primary};
        text-shadow:  
            0 0 7px ${theme.palette.text.secondary},
            0 0 10px ${theme.palette.text.secondary},
            0 0 21px ${theme.palette.text.secondary},
            0 0 42px ${theme.palette.text.primary},
            0 0 82px ${theme.palette.text.primary},
            0 0 92px ${theme.palette.text.primary},
            0 0 102px ${theme.palette.text.primary},
            0 0 151px ${theme.palette.text.primary};
    }
    &:hover > span > img {
        animation: ${balance} 1s ease-in-out forwards;
    }
`

const SkillIcon = styled.img`
    height: 64px;
    width: 64px;
`

const SkillLabel = styled.strong`
    font-size: ${theme.font.size.highlight};
    color: ${theme.palette.text.secondary};
`

const SkillBg = styled.span`
    padding: 8px;
    border-radius: 50%;
    background-color: rgba(0, 87, 189, 0.5);
    border: solid 10px ${theme.palette.primary};
`

function SkillsSection() {

    const divisions = ["FRONT END", "BACK END", "DATABASES", "TOOLING"]
    const [selectedDivision, setSelectedDivision] = useState(divisions[0])

    return (
        <InternalSection>
            <SkillsHeader id="skills-section">SKILLS</SkillsHeader>
            <SkillsSubHeader>Select below to see area related skills</SkillsSubHeader>
            <SkillsDivisionWrapper>
                <SkillsDivisionTitlesWrapper>
                    {divisions.map(division => (
                        <SkillDivisionTitle $selected={division === selectedDivision}
                            key={division}
                            onClick={() => setSelectedDivision(division)}
                        >
                            {division}
                        </SkillDivisionTitle>
                    ))}
                </SkillsDivisionTitlesWrapper>
                {selectedDivision === 'FRONT END'
                    ? (
                        <SkillsDivisionIconWrapper>
                            <Skill>
                                <SkillBg>
                                    <SkillIcon src={ReactIcon} alt="React icon" title="React" />
                                </SkillBg>
                                <SkillLabel>React</SkillLabel>
                            </Skill>
                            <Skill>
                                <SkillBg>
                                    <SkillIcon src={VueIcon} alt="Vue icon" title="Vue" />
                                </SkillBg>
                                <SkillLabel>Vue</SkillLabel>
                            </Skill>
                            <Skill>
                                <SkillBg>
                                    <SkillIcon src={MaterialUIIcon} alt="Material UI icon" title="Material UI" />
                                </SkillBg>
                                <SkillLabel>Material</SkillLabel>
                            </Skill>
                            <Skill>
                                <SkillBg>
                                    <SkillIcon src={SassIcon} alt="SASS icon" title="SASS" />
                                </SkillBg>
                                <SkillLabel>SASS</SkillLabel>
                            </Skill>
                            <Skill>
                                <SkillBg>
                                    <SkillIcon src={JSIcon} alt="Javascript icon" title="Javascript" />
                                </SkillBg>
                                <SkillLabel>Javascript</SkillLabel>
                            </Skill>
                            <Skill>
                                <SkillBg>
                                    <SkillIcon src={HtmlIcon} alt="HTML icon" title="HTML" />
                                </SkillBg>
                                <SkillLabel>HTML</SkillLabel>
                            </Skill>
                            <Skill>
                                <SkillBg>
                                    <SkillIcon src={CssIcon} alt="CSS icon" title="CSS" />
                                </SkillBg>
                                <SkillLabel>CSS</SkillLabel>
                            </Skill>
                        </SkillsDivisionIconWrapper>
                    ) : selectedDivision === 'BACK END' ? (
                        <SkillsDivisionIconWrapper>
                            <Skill>
                                <SkillBg>
                                    <SkillIcon src={NestIcon} alt="Nest icon" title="Nest" />
                                </SkillBg>
                                <SkillLabel>Nest</SkillLabel>
                            </Skill>
                            <Skill>
                                <SkillBg>
                                    <SkillIcon src={ExpressIcon} alt="Express icon" title="Express" />
                                </SkillBg>
                                <SkillLabel>Express</SkillLabel>
                            </Skill>
                            <Skill>
                                <SkillBg>
                                    <SkillIcon src={NodeIcon} alt="Node icon" title="Node" />
                                </SkillBg>
                                <SkillLabel>Node</SkillLabel>
                            </Skill>
                            <Skill>
                                <SkillBg>
                                    <SkillIcon src={JavaIcon} alt="Java icon" title="Java" />
                                </SkillBg>
                                <SkillLabel>Java</SkillLabel>
                            </Skill>
                            <Skill>
                                <SkillBg>
                                    <SkillIcon src={ServerlessIcon} alt="Serverless icon" title="Serverless" />
                                </SkillBg>
                                <SkillLabel>Serverless</SkillLabel>
                            </Skill>
                        </SkillsDivisionIconWrapper>
                    ) : selectedDivision === 'DATABASES' ? (
                        <SkillsDivisionIconWrapper>
                            <Skill>
                                <SkillBg>
                                    <SkillIcon src={MySQLIcon} alt="My SQL icon" title="MySQL" />
                                </SkillBg>
                                <SkillLabel>MySQL</SkillLabel>
                            </Skill>
                            <Skill>
                                <SkillBg>
                                    <SkillIcon src={MicrosoftSQLIcon} alt="Microsoft SQL icon" title="Microsoft SQL" />
                                </SkillBg>
                                <SkillLabel>SQL</SkillLabel>
                            </Skill>
                            <Skill>
                                <SkillBg>
                                    <SkillIcon src={MongoDBIcon} alt="Mongo DB icon" title="MongoDB" />
                                </SkillBg>
                                <SkillLabel>MongoDB</SkillLabel>
                            </Skill>
                            <Skill>
                                <SkillBg>
                                    <SkillIcon src={PostgreSQLIcon} alt="Postgre SQL icon" title="PostgreSQL" />
                                </SkillBg>
                                <SkillLabel>PostgreSQL</SkillLabel>
                            </Skill>
                        </SkillsDivisionIconWrapper>
                    ) : (
                        <SkillsDivisionIconWrapper>
                            <Skill>
                                <SkillBg>
                                    <SkillIcon src={GitIcon} alt="Git icon" title="Git" />
                                </SkillBg>
                                <SkillLabel>Git</SkillLabel>
                            </Skill>
                            <Skill>
                                <SkillBg>
                                    <SkillIcon src={DockerIcon} alt="Docker icon" title="Docker" />
                                </SkillBg>
                                <SkillLabel>Docker</SkillLabel>
                            </Skill>
                            <Skill>
                                <SkillBg>
                                    <SkillIcon src={LinuxIcon} alt="Linux icon" title="Linux" />
                                </SkillBg>
                                <SkillLabel>Linux</SkillLabel>
                            </Skill>
                            <Skill>
                                <SkillBg>
                                    <SkillIcon src={ViteIcon} alt="Vite icon" title="Vite" />
                                </SkillBg>
                                <SkillLabel>Vite</SkillLabel>
                            </Skill>
                            <Skill>
                                <SkillBg>
                                    <SkillIcon src={NetlifyIcon} alt="Netlify icon" title="Netlify" />
                                </SkillBg>
                                <SkillLabel>Netlify</SkillLabel>
                            </Skill>
                            <Skill>
                                <SkillBg>
                                    <SkillIcon src={RenderIcon} alt="Render icon" title="Render" />
                                </SkillBg>
                                <SkillLabel>Render</SkillLabel>
                            </Skill>
                            <Skill>
                                <SkillBg>
                                    <SkillIcon src={DrawioIcon} alt="Draw.io icon" title="Draw.io" />
                                </SkillBg>
                                <SkillLabel>io</SkillLabel>
                            </Skill>
                            <Skill>
                                <SkillBg>
                                    <SkillIcon src={Figma} alt="Figma icon" title="Figma" />
                                </SkillBg>
                                <SkillLabel>Figma</SkillLabel>
                            </Skill>
                        </SkillsDivisionIconWrapper>
                    )
                }
            </SkillsDivisionWrapper>
        </InternalSection>
    );
}

export default SkillsSection;