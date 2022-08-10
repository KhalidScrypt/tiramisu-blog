import { graphql } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import JoinNewsletter from '../components/JoinNewsletter/JoinNewsletter';
import Hero from '../components/Landing/hero';
import WhatToDo from '../components//Landing/what-to-do';
import Frustrations from '../components//Landing/frustrations';
import WhyTiramisu from '../components/Landing/why-tiramisu';
import Layout from '../layouts/layout';

import '../style/home.scss';
import '../style/global.scss';

const IndexPage = (props) => {
    const [url, setUrl] = useState('');

    const title = 'Tiramisu - Social Network of kindness';
    const facebookUrl = 'https://facebook.com/tiramisuapp';
    const twitterUrl = 'https://twitter.com/tiramisuapp';
    const instagramUrl = 'https://instagram.com/tiramisuapp';
    const youtubeUrl =
        'https://www.youtube.com/channel/UChheETRXMsgGeUatnik2s6w';
    return (
        <div className="home-container">
            <Helmet>
                <html lang="en" />
                <title>Tiramisu - Social Network of Kindness</title>
                <meta
                    name="description"
                    content={
                        'Tiramisu is the social network of kindness where you can ask for or offer support and volunteer with nonprofits'
                    }
                />

                <link
                    rel="stylesheet"
                    href="https://sibforms.com/forms/end-form/build/sib-styles.css"
                />
                <meta property="og:site_name" content={title} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Tiramisu - Social Network of Kindness"
                />
                <meta property="og:url" content={url} />

                <meta property="article:publisher" content={facebookUrl} />

                <meta property="article:author" content={facebookUrl} />

                <meta name="twitter:card" content="summary" />
                <meta
                    name="twitter:title"
                    content="Tiramisu - Social Network of Kindness"
                />
                <meta name="twitter:url" content={url} />
                <meta
                    name="twitter:site"
                    content={`@${twitterUrl.split('https://twitter.com/')[1]}`}
                />

                <meta
                    name="twitter:creator"
                    content={`@${twitterUrl.split('https://twitter.com/')[1]}`}
                />
            </Helmet>
            <main className="home-main">
                <Layout>
                    <Hero></Hero>
                    <WhatToDo></WhatToDo>
                    <Frustrations></Frustrations>
                    <WhyTiramisu></WhyTiramisu>
                </Layout>
            </main>
        </div>
    );
};

export default IndexPage;

// export const pageQuery = graphql`
//     query blogPageQuery($skip: Int!, $limit: Int!) {
//         allFlotiqBlogPost(
//             sort: { fields: [publish_date], order: DESC }
//             limit: $limit
//             skip: $skip
//             filter: { status: { eq: "public" } }
//         ) {
//             nodes {
//                 id
//                 slug
//                 title
//                 excerpt
//                 publish_date
//                 content {
//                     blocks {
//                         data {
//                             caption
//                             code
//                             content
//                             items {
//                                 content
//                                 items {
//                                     content
//                                     items {
//                                         content
//                                     }
//                                 }
//                             }
//                             message
//                             text
//                             title
//                         }
//                     }
//                 }
//                 tags {
//                     id
//                     tag
//                     tag_name
//                 }
//                 headerImage {
//                     extension
//                     url
//                     localFile {
//                         childImageSharp {
//                             gatsbyImageData(layout: FULL_WIDTH)
//                         }
//                     }
//                 }
//                 author {
//                     id
//                     name
//                     slug
//                     bio
//                 }
//             }
//         }
//         allFlotiqMainSettings {
//             nodes {
//                 cookie_policy_popup_text
//                 title
//                 description
//                 facebook_url
//                 twitter_url
//             }
//         }
//         site {
//             siteMetadata {
//                 siteUrl
//                 pathPrefix
//             }
//         }
//     }
// `;
