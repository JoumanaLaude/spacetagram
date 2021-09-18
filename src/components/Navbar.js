import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faSatellite, faMeteor, faRocket, faStar } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const showMenu = () => setIsOpen(!isOpen);

    return (
        <Navigation>
            
                <Link to='#' className="menu-bars">
                    <FontAwesomeIcon icon={faBars} className="fa-2x" onClick={showMenu} />
                </Link>
                <Title>Spacetagram</Title>
                
            <nav className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-links">
                    <NavItem>
                        <Link to='#' className="menu-exit">
                            <FontAwesomeIcon icon={faTimes} onClick={showMenu} className="fa-2x" />
                        </Link>
                    </NavItem>
                    <NavItem><Link to="/"><FontAwesomeIcon icon={faSatellite} /> Today</Link></NavItem>
                    <NavItem><Link to="/past"><FontAwesomeIcon icon={faMeteor} /> Past</Link></NavItem>
                    <NavItem><Link to="/past"><FontAwesomeIcon icon={faStar} /> Saved</Link></NavItem>
                    <NavItem><Link to="/past"><FontAwesomeIcon icon={faRocket} /> About</Link></NavItem>
                    {/* make navdata component ? */}
                </ul>
            </nav>
        </Navigation>
    )
}

const Navigation = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #d1ccdc;
`;

const NavItem = styled.li`
@media only screen and (max-width: 700px) { 
    padding: 1.2rem;
}
    @media only screen and (min-width: 701px) {
        font-size: 1.4rem;
        text-decoration: none;
        padding: 2rem;
    }
`;

const Title = styled.h2`
    color: #1b1725;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
`;