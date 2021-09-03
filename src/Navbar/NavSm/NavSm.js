import { AnimatePresence } from "framer-motion"
import { useEffect } from "react";
import shouldToggle from "../shouldToggle";
import NavSmItems from "./NavSmItems"
import { Bars, List, Menu, Nav } from "./NavSmStyles"

function NavSm({ windowWidth }) {
    
    const [
        handleToggle,
        restoreToDefault,
        isOpen,
        isExpanded,
        tabletBreakpoint,
    ] = shouldToggle();
    
    
    useEffect(() => {
        if (windowWidth >= tabletBreakpoint) {
            restoreToDefault();
        }
    }, [windowWidth]);

    return (
        <Nav>
            <Menu
                aria-label="Menu toggle"
                aria-expanded={isExpanded}
                aria-controls="nav-list"
                onClick={handleToggle}>
                <Bars isOpen={isOpen} />
                <AnimatePresence>
                    {isOpen && (
                        <List
                            id="nav-list"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ ease: 'linear', duration: 0.3 }}
                            exit={{ opacity: 0 }}
                        >
                            <NavSmItems restoreToDefault={restoreToDefault} />
                        </List>
                    )}
                </AnimatePresence>
            </Menu>
        </Nav>
    )
}

export default NavSm
