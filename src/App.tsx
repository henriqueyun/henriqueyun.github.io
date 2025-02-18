import theme from './theme'
import { styled } from "styled-components"
import Navbar from "./components/Navbar"
import Footerbar from "./components/Footerbar"
import { HeaderSection, PortfolioSection, HobbiesSection } from './components'
import backgroundImage from './assets/bg.webp'
import CareerSection from './components/sections/CareerSection'
import SkillsSection from './components/sections/SkillsSection'

const AppWrapper = styled.div`
	background: center center fixed; 
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	background-color: ${theme.palette.backgroundColor};
	background-image: url(${backgroundImage}); 
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
	@media (max-width: 768px) {
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
