import { Content } from 'flotiq-components-react';
import { graphql, Link } from 'gatsby';
import { CommentCount, Disqus } from 'gatsby-plugin-disqus';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import highlight from 'highlight.js';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import Sygnet from '../assets/logo.png';
import JoinNewsletter from '../components/JoinNewsletter/JoinNewsletter';
import SharePostButtons from '../components/SharePostButtons/SharePostButtons';
import Layout from '../layouts/layout';

const EventPage = ({ data, pageContext }) => {
    const event = data.events;
    const [offset, setOffset] = useState(0);
    const [visible, setVisible] = useState(false);
    const [progressBar, setProgressBar] = useState(0);
    const [progressHeight, setProgressHeight] = useState(0);
    const progress = useRef(0);
    const [url, setUrl] = useState('');
    useEffect(() => {
        setUrl(window.location.href.split('/?')[0]);
    }, []);

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset);
        };
    }, []);

    useEffect(() => {
        const height = progress.current.clientHeight;
        if (offset > progress.current.offsetTop) {
            setVisible(true);
            setProgressHeight(progress.current.offsetTop);
        } else {
            setVisible(false);
            setProgressHeight(0);
        }
        const width = (offset / height) * 100;
        setProgressBar(width <= 100 ? width : 100);
    }, [offset]);
    if (!event) {
        return <div>Whats up</div>;
    }
    const disqusConfig = {
        url: `${data.site.siteMetadata.siteUrl}/${event.slug}`,
        identifier: event.slug,
        title: event.title,
    };
    return (
        <Layout>
            <Helmet>
                <html lang="en" />
                <title>
                    {event.title}
                    {' - '}
                    {data.allFlotiqMainSettings.nodes[0].title}
                </title>
                <meta name="description" content={event.metaDescription} />
                <meta
                    property="og:site_name"
                    content={data.allFlotiqMainSettings.nodes[0].title}
                />
                <meta property="og:type" content="article" />
                <meta
                    property="og:title"
                    content={`${event.title} - ${data.allFlotiqMainSettings.nodes[0].title}`}
                />
                <meta
                    property="og:description"
                    content={event.metaDescription}
                />
                <meta property="og:url" content={url} />
                {event.headerImage && (
                    <meta
                        property="og:image"
                        content={
                            data.site.siteMetadata.siteUrl +
                            event.headerImage[0].localFile.publicURL
                        }
                    />
                )}
                <meta property="article:published_time" content={event.date} />
                {event.tags && (
                    <meta
                        property="article:tag"
                        content={event.tags[0].tag_name}
                    />
                )}

                {data.allFlotiqMainSettings.nodes[0].facebook_url && (
                    <meta
                        property="article:publisher"
                        content={
                            data.allFlotiqMainSettings.nodes[0].facebook_url
                        }
                    />
                )}
                {data.allFlotiqMainSettings.nodes[0].facebook_url && (
                    <meta
                        property="article:author"
                        content={
                            data.allFlotiqMainSettings.nodes[0].facebook_url
                        }
                    />
                )}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content={`${event.title} - ${data.allFlotiqMainSettings.nodes[0].title}`}
                />
                <meta
                    name="twitter:description"
                    content={event.metaDescription}
                />
                <meta name="twitter:url" content={url} />
                {event.headerImage && (
                    <meta
                        name="twitter:image"
                        content={
                            data.site.siteMetadata.siteUrl +
                            event.headerImage[0].localFile.publicURL
                        }
                    />
                )}

                {data.allFlotiqMainSettings.nodes[0].twitter_url && (
                    <meta
                        name="twitter:site"
                        content={`@${
                            data.allFlotiqMainSettings.nodes[0].twitter_url.split(
                                'https://twitter.com/'
                            )[1]
                        }`}
                    />
                )}
                {data.allFlotiqMainSettings.nodes[0].twitter_url && (
                    <meta
                        name="twitter:creator"
                        content={`@${
                            data.allFlotiqMainSettings.nodes[0].twitter_url.split(
                                'https://twitter.com/'
                            )[1]
                        }`}
                    />
                )}
                {event.headerImage[0] && (
                    <meta
                        property="og:image:width"
                        content={event.headerImage[0].width}
                    />
                )}
                {event.headerImage[0] && (
                    <meta
                        property="og:image:height"
                        content={event.headerImage[0].height}
                    />
                )}
            </Helmet>
            <div ref={progress}>
                <Container
                    fluid
                    className="post-reading"
                    style={{
                        opacity: visible ? 1 : 0,
                        height: `${progressHeight}px`,
                    }}
                >
                    <div className="post-reading-content">
                        <Link to="/">
                            <img src={Sygnet} alt="Tiramisu" />
                        </Link>
                        <div>
                            <p>
                                <strong>{event.title}</strong>
                            </p>
                        </div>
                    </div>
                    <div
                        className="post-reading-progress"
                        style={{ width: `${progressBar}%` }}
                    />
                </Container>
                <Container>
                    <p className="text-center post-date pt-4 pb-4">
                        {moment(event.date).format('DD MMM YYYY')}
                    </p>
                    <h1 className="text-center px-0 px-sm-3 px-md-5">
                        {event.title}
                    </h1>

                    <h4 className="text-center pb-4 pb-sm-5">
                        {event.excerpt}
                    </h4>

                    <div className="pt-3 pb-4 pb-sm-5">
                        <GatsbyImage
                            alt={event.title}
                            image={getImage(event.headerImage[0].localFile)}
                            className="post-image"
                        />
                    </div>
                    <Row>
                        <Col lg={1} md={1} sm={0} xs={0}>
                            <div className="floating-socials d-none d-md-block">
                                <SharePostButtons />
                            </div>
                        </Col>
                        <Col>
                            <Content
                                blocks={event.content.blocks}
                                quoteProps={{ variant: 'light' }}
                                delimiterProps={{ variant: 'light' }}
                                tableProps={{
                                    additionalClasses: ['custom-table'],
                                }}
                                highlight={highlight}
                            />
                        </Col>
                        <Col lg={1} md={1} sm={0} xs={0} />
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col lg={1} md={1} sm={0} xs={0} />
                    <Col>
                        <div className="mt-5 mb-3 text-center">
                            <p className="link-s bottom-socials-title">
                                Share this article
                            </p>
                            <div className="bottom-socials">
                                <SharePostButtons />
                            </div>
                        </div>
                        {/* <div className="my-5 pb-5">
                            <CommentCount config={disqusConfig} placeholder="..." />
                            <Disqus config={disqusConfig} />
                        </div> */}
                    </Col>
                    <Col lg={1} md={1} sm={0} xs={0} />
                </Row>
            </Container>

            <div className="join-newsletter-floating">
                <JoinNewsletter />
            </div>
        </Layout>
    );
};

export default EventPage;

export const query = graphql`
    query ($slug: String) {
        site {
            siteMetadata {
                siteUrl
            }
        }
        events(slug: { eq: $slug }) {
            title
            date
            metaDescription
            flotiqInternal {
                createdAt
                updatedAt
            }
            content {
                blocks {
                    data {
                        alignment
                        anchor
                        caption
                        code
                        content
                        extension
                        fileName
                        height
                        items {
                            content
                            items {
                                content
                                items {
                                    content
                                }
                            }
                        }
                        level
                        message
                        stretched
                        style
                        text
                        title
                        url
                        width
                        withBackground
                        withBorder
                        withHeadings
                    }
                    tunes {
                        alignmentTuneTool {
                            alignment
                        }
                    }
                    id
                    type
                }
            }
            headerImage {
                extension
                url
                width
                height
                localFile {
                    publicURL
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
            slug
        }
        allFlotiqMainSettings {
            nodes {
                cookie_policy_popup_text
                title
                facebook_url
                twitter_url
            }
        }
    }
`;
