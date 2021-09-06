import { useEffect, useState } from "react";
import { Header, Container, Logo, LogoLink } from "./NavbarStyles"
import NavLg from "./NavLg/NavLg";
import NavSm from "./NavSm/NavSm";

function Navbar({ pathName, activePlanet, onHover }) {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const tabletBreakpoint = 768;

    useEffect(() => {
        window.addEventListener('resize', () =>
            setWindowWidth(window.innerWidth)
        );
    }, [windowWidth]);

    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { delay: 1.5, duration: 4 },
        },
        exit: {
            opacity: 0,
            transition: { duration: 1 },
        },
    };

    return (
        <Header
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Container>
                <Logo>
                <LogoLink to="/">Know Your Planet!</LogoLink>
                </Logo>
                {windowWidth >= tabletBreakpoint ? (

                    <NavLg
                        pathName={pathName}
                        onHover={onHover}
                        activePlanet={activePlanet} />
                ) : (
                    <NavSm windowWidth={windowWidth} />
                )}
            </Container>
        </Header>
    )
}

export default Navbar
