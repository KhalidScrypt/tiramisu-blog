import { graphql } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import JoinNewsletter from '../components/JoinNewsletter/JoinNewsletter';
import PaginationEvent from '../components/Pagination/Pagination';
import EventCard from '../components/EventCard/EventCard';
import Layout from '../layouts/layout';

const EventsPage = ({ data, pageContext }) => {
    const events = data.allEvents.nodes;
    const siteMeta = data.site.siteMetadata;
    const skip = pageContext.currentPage === 1 ? 3 : 0;
    const [url, setUrl] = useState('');
    useEffect(() => {
        setUrl(window.location.href.split('/?')[0]);
    }, []);
    return (
        <Layout>
            <Helmet>
                <html lang="en" />
                <title>Tiramisu - Social Network of Kindness</title>
                <meta
                    name="description"
                    content={
                        "Tiramisu's blog share content and news about the company, wellbeing and social impact " +
                        `${
                            pageContext.currentPage > 1
                                ? ` - Page ${pageContext.currentPage}`
                                : ''
                        }`
                    }
                />
                {pageContext.currentPage > 1 && (
                    <link
                        rel="prev"
                        href={`${siteMeta.siteUrl}${siteMeta.pathPrefix}/${
                            pageContext.currentPage - 1
                        }`}
                    />
                )}
                {pageContext.currentPage + 1 < pageContext.numEventPages && (
                    <link
                        rel="next"
                        href={`${siteMeta.siteUrl}${siteMeta.pathPrefix}/${
                            pageContext.currentPage + 1
                        }`}
                    />
                )}
                <link
                    rel="stylesheet"
                    href="https://sibforms.com/forms/end-form/build/sib-styles.css"
                />
                <meta
                    property="og:site_name"
                    content={data.allFlotiqMainSettings.nodes[0].title}
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Tiramisu - Social Network of Kindness"
                />
                <meta property="og:url" content={url} />
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
                <meta name="twitter:card" content="summary" />
                <meta
                    name="twitter:title"
                    content="Tiramisu - Social Network of Kindness"
                />
                <meta name="twitter:url" content={url} />
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
            </Helmet>
            <Container fluid className="container-fluid__bigger-padding mt-5">
                {pageContext.currentPage === 1 && (
                    <>
                        <Row>
                            <Col lg={8} md={8} sm={12} sx={12}>
                                <EventCard
                                    event={events[0]}
                                    key={events[0].id}
                                    showDescription
                                    additionalClass="event-card__no-height"
                                />
                            </Col>
                            <Col>
                                <EventCard
                                    event={events[1]}
                                    key={events[1].id}
                                    additionalClass="event-card__no-height"
                                />
                                <EventCard
                                    event={events[2]}
                                    key={events[2].id}
                                    additionalClass="event-card__no-height"
                                />
                            </Col>
                        </Row>
                        <JoinNewsletter addMargin />
                    </>
                )}
                <Row xs={1} sm={1} md={2} lg={3}>
                    {events.map((post, index) =>
                        index >= skip ? (
                            <Col key={post.id}>
                                <EventCard post={post} />
                            </Col>
                        ) : null
                    )}
                </Row>
                {pageContext.currentPage !== 1 && <JoinNewsletter addMargin />}
                <PaginationEvent
                    page={pageContext.currentPage}
                    numOfPages={pageContext.numEventPages}
                    folder="events"
                />
            </Container>
        </Layout>
    );
};

export default EventsPage;

export const pageQuery = graphql`
    query eventPageQuery($skip: Int!, $limit: Int!) {
        allEvents(
            sort: { fields: date, order: DESC }
            limit: $limit
            skip: $skip
        ) {
            totalCount
            nodes {
                content {
                    blocks {
                        id
                        data {
                            caption
                            code
                            content
                            items {
                                content
                                items {
                                    content
                                }
                            }
                            message
                            text
                            title
                        }
                    }
                }
                date
                slug
                title
                headerImage {
                    extension
                    url
                    localFile {
                        childImageSharp {
                            gatsbyImageData(layout: FULL_WIDTH)
                        }
                    }
                }
            }
        }
        allFlotiqMainSettings {
            nodes {
                cookie_policy_popup_text
                title
                description
                facebook_url
                twitter_url
            }
        }
        site {
            siteMetadata {
                siteUrl
                pathPrefix
            }
        }
    }
`;
