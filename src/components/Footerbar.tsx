import theme from "../theme";
import { styled } from "styled-components";

const Footer = styled.footer`
    margin: 0 auto;
    text-align: center;
    font-size: ${theme.font.size.content};
    padding: 128px 0 56px 0;
    width: 80%;
    background: linear-gradient(45deg, ${theme.palette.gradient.light} 37%, ${theme.palette.gradient.dark} 99%); 
    background-clip: text;
    color: transparent;
    @media (max-width: 768px) {
        padding: 64px 0 56px 0;
    }
`

function Footerbar() {

    return (
        <Footer>
            henriqueyun 2025® All Rights Reserved
        </Footer>
    );
}

export default Footerbar;