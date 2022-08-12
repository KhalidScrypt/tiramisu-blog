import { Content } from 'flotiq-components-react';
import { graphql, Link } from 'gatsby';
import highlight from 'highlight.js';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import SharePostButtons from '../components/SharePostButtons/SharePostButtons';
import Layout from '../layouts/layout';

const PrivacyPage = ({ data, pageContext }) => {
    const post = data.staticPages;
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
    if (!post) {
        return <div>NO DATA</div>;
    }

    return (
        <Layout>
            <Helmet>
                <html lang="en" />
                <title>
                    {post.seo_title}
                    {' - '}
                    {data.allFlotiqMainSettings.nodes[0].title}
                </title>
                <meta name="description" content={post.metaDescription} />
                <meta
                    property="og:site_name"
                    content={data.allFlotiqMainSettings.nodes[0].title}
                />
                <meta property="og:type" content="article" />
                <meta
                    property="og:title"
                    content={`${post.header} - ${data.allFlotiqMainSettings.nodes[0].title}`}
                />
                <meta
                    property="og:description"
                    content={post.metaDescription}
                />
                <meta property="og:url" content={url} />
                {post.headerImage && (
                    <meta
                        property="og:image"
                        content={
                            data.site.siteMetadata.siteUrl +
                            post.headerImage[0].localFile.publicURL
                        }
                    />
                )}
                <meta
                    property="article:published_time"
                    content={post.publish_date}
                />
                {post.tags && (
                    <meta
                        property="article:tag"
                        content={post.tags[0].tag_name}
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
                    content={`${post.header} - ${data.allFlotiqMainSettings.nodes[0].title}`}
                />
                <meta
                    name="twitter:description"
                    content={post.metaDescription}
                />
                <meta name="twitter:url" content={url} />
                {post.headerImage && (
                    <meta
                        name="twitter:image"
                        content={
                            data.site.siteMetadata.siteUrl +
                            post.headerImage[0].localFile.publicURL
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
            </Helmet>
            <div ref={progress}>
                <Container>
                    <h1 className="text-center px-0 px-sm-3 px-md-5">
                        {post.header}
                    </h1>

                    <Row>
                        <Col lg={1} md={1} sm={0} xs={0}>
                            <div className="floating-socials d-none d-md-block">
                                <SharePostButtons />
                            </div>
                        </Col>
                        <Col>
                            <Content
                                blocks={post.content.blocks}
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
        </Layout>
    );
};

export default PrivacyPage;

export const query = graphql`
    query {
        site {
            siteMetadata {
                siteUrl
            }
        }
        staticPages(id: {}, header: { eq: "Privacy policy" }) {
            id
            seo_title
            subheader
            header
            content {
                blocks {
                    data {
                        content
                        message
                        text
                        title
                        code
                        level
                        alignment
                        anchor
                        caption
                        extension
                        fileName
                        height
                        items {
                            items {
                                items {
                                    content
                                }
                                content
                            }
                            content
                        }
                        stretched
                        style
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
