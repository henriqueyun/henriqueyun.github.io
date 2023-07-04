import theme from './theme'
import { styled } from "styled-components"
import Navbar from "./components/Navbar"
import Footerbar from "./components/Footerbar"
import { HeaderSection, PortfolioSection, HobbiesSection } from './components'
import backgroundImage from './assets/stairs.png'
import CareerSection from './components/sections/CareerSection'
import SkillsSection from './components/sections/SkillsSection'

const AppWrapper = styled.div`
	background: url(images/bg.jpg) no-repeat center center fixed; 
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	background-color: ${theme.palette.backgroundColor};
	background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${backgroundImage}); 
	color: ${theme.palette.text.primary};
	width: 100%;
	min-height: 100%;
	position: absolute;
`

const Container = styled.main`
	display: flex;
	flex-direction: column;
	gap: 80px;
	margin: 0 auto;
    max-width: 1280px;
	@media (max-width: 720px) {
		align-items: center;
		gap: 64px;
	}
`

function App() {
	return (
    <AppWrapper>
        <Navbar />
        <Container>
            <HeaderSection />
            <PortfolioSection />
            <CareerSection />
            <SkillsSection />
            <HobbiesSection />
        </Container>
        <Footerbar />
    </AppWrapper>
	)
}

export default App
