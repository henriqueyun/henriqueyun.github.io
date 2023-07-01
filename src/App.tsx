import theme from './theme'
import { styled } from "styled-components"
import Navbar from "./components/Navbar"
import { HeaderSection, PortfolioSection } from './components'
import backgroundImage from './assets/stairs.png'
import CareerSection from './components/sections/CareerSection'

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
`

function App() {
	return (
    <AppWrapper>
        <Navbar />
        <Container>
            <HeaderSection />
            <PortfolioSection />
            <CareerSection />
        </Container>
    </AppWrapper>
	)
}

export default App
