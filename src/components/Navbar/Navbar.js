import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import Logo from '../../assets/logo.png';
import Logo2 from '../../assets/logo.png';
import Search from '../../assets/search.svg';
import Button from '../Button/Button';

const CustomNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [visible, setVisible] = React.useState(false);
    const data = useStaticQuery(query);
    return (
        <Navbar
            collapseOnSelect
            expand="md"
            sticky="top"
            id="navbar"
            className={isOpen ? 'open' : ''}
        >
            {visible && (
                <div className="backdrop" onClick={() => setVisible(false)} />
            )}
            <Container fluid className="position-relative">
                <Navbar.Brand href={`${data.site.siteMetadata.pathPrefix}/`}>
                    <img
                        src={Logo}
                        alt="Tiramisu"
                        className="d-none d-lg-inline"
                    />
                    <img
                        src={Logo2}
                        alt="Tiramisu"
                        className="d-inline d-lg-none"
                    />
                </Navbar.Brand>
                <div className="mobile-header-right">
                    <Nav className="d-inline d-md-none">
                        <Button click={() => window.open('/download')}>
                            <Nav.Item>Get the app</Nav.Item>
                        </Button>
                    </Nav>

                    <Navbar.Toggle
                        aria-controls="responsive-navbar-nav"
                        onClick={() => setIsOpen(!isOpen)}
                    />
                </div>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-3">
                        {/* <Nav.Item
                            role="button"
                            className="dropdown-toggle nav-link nav-link__features-dropdown d-none d-md-block"
                            onClick={() => setVisible(!visible)}
                        >
                            {visible ? <span className="nav-link__opened">Features</span>
                                : <span className="nav-link__closed">Features</span>}
                        </Nav.Item>
                        <NavDropdown title="Features" id="basic-nav-dropdown" className=" d-block d-md-none">
                            {data.allFeatures.nodes.map((feature, index) => (
                                <a
                                    href={`/features?feature=${index}`}
                                    className="dropdown-item"
                                    key={feature.id}
                                >
                                    {feature.name}
                                </a>
                            ))}
                        </NavDropdown> */}
                        <Nav.Link
                            href="/"
                            onClick={() => {
                                setIsOpen(false);
                                setVisible(false);
                            }}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="/blog"
                            onClick={() => {
                                setIsOpen(false);
                                setVisible(false);
                            }}
                        >
                            Blog
                        </Nav.Link>
                        <Nav.Link
                            href="/events"
                            onClick={() => {
                                setIsOpen(false);
                                setVisible(false);
                            }}
                        >
                            Events
                        </Nav.Link>
                    </Nav>
                    <Nav className="d-none d-md-flex d-lg-flex">
                        {/* <Nav.Item>
                            <form
                                action={`${data.site.siteMetadata.pathPrefix}/search/`}
                                className={`search ${searchOpen ? 'open' : ''}`}
                            >
                                <input
                                    name="q"
                                    placeholder="Type to search..."
                                    required
                                    className="search-input"
                                    autoComplete="off"
                                    onFocus={() => setSearchOpen(true)}
                                    onBlur={() => setSearchOpen(false)}
                                />
                                <Button additionalClasses={['btn--icon', 'search-button']} click={() => {}}>
                                    <img src={Search} alt="search" />
                                </Button>
                            </form>
                        </Nav.Item> */}
                        <Button click={() => window.open('/download')}>
                            <Nav.Item>Get the app</Nav.Item>
                        </Button>
                    </Nav>
                    <div className="d-md-none d-lg-none bottom-mobile-nav">
                        <div>
                            <Button
                                click={() => window.open('/download')}
                                additionalClasses={['btn-mobile-big']}
                            >
                                <Nav.Item>Get the app</Nav.Item>
                            </Button>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

const query = graphql`
    query MenuQuery {
        allFeatures {
            nodes {
                id
                name
                order
                menu_icon {
                    localFile {
                        publicURL
                    }
                }
            }
        }
        site {
            siteMetadata {
                pathPrefix
            }
        }
    }
`;

export default CustomNavbar;
