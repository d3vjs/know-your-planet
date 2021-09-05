import { Nav, List, Item, Link } from './NavLgStyles';
import { planets } from '../data';

function NavLg() {
    return (
        <Nav>
            <List>
                {planets.map((planet) => (
                    <Item key={planet.id}>
                        <Link>
                            {planet.name}
                        </Link>
                    </Item>
                ))}
            </List>
        </Nav>
    )
}

export default NavLg
