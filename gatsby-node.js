const path = require('path');
const _ = require('lodash');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        query MainQuery {
            allFlotiqBlogPost(
                sort: { fields: publish_date, order: DESC }
                limit: 10000
                filter: { status: { eq: "public" } }
            ) {
                edges {
                    node {
                        id
                        slug
                        status
                        tags {
                            id
                            tag
                            tag_name
                            description
                        }
                        author {
                            id
                            name
                            slug
                            avatar {
                                extension
                                id
                            }
                            bio
                        }
                    }
                }
                totalCount
            }
            allFlotiqBlogAuthor {
                edges {
                    node {
                        id
                        avatar {
                            extension
                            id
                        }
                        bio
                        name
                        slug
                    }
                }
            }

            allEvents(sort: { fields: date, order: DESC }, limit: 1000) {
                edges {
                    node {
                        id
                        slug
                        status
                    }
                }
                totalCount
            }
        }
    `);

    if (result.errors) {
        console.error(result.errors);
        throw new Error(result.errors);
    }

    // Create Homepage
    createPage({
        path: '/',
        component: path.resolve('./src/templates/index.js'),
    });

    // Create Download page
    createPage({
        path: '/download',
        component: path.resolve('./src/templates/download.js'),
    });

    // Create post pages
    const posts = result.data.allFlotiqBlogPost.edges;

    // Create paginated index
    const postsPerPage = 9;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((item, i) => {
        createPage({
            path: i === 0 ? '/blog' : `/blog/${i + 1}`,
            component: path.resolve('./src/templates/blog.js'),
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1,
            },
        });
    });
    const tmpTags = {};
    posts.forEach((edge) => {
        edge.node.tags.forEach((tag) => {
            tmpTags[tag.id] = tag;
        });
    });
    const tags = Object.values(tmpTags);

    posts.forEach(({ node }, index) => {
        const { slug } = node;
        const prev = index === 0 ? null : posts[index - 1].node;
        const next = index === posts.length - 1 ? null : posts[index + 1].node;

        createPage({
            path: `/blog/${slug}`,
            component: path.resolve('./src/templates/post.js'),
            context: {
                // Data passed to context is available in page queries as GraphQL variables.
                slug,
                prev,
                next,
                primaryTag: node.tags && node.tags[0] ? node.tags[0].tag : '',
                tags,
            },
        });
    });

    // Create events pages
    const events = result.data.allEvents.edges;

    // Create paginated index
    const eventsPerPage = 9;
    const numEventPages = Math.ceil(events.length / eventsPerPage);

    Array.from({ length: numEventPages }).forEach((item, i) => {
        createPage({
            path: i === 0 ? '/events' : `/events/${i + 1}`,
            component: path.resolve('./src/templates/events.js'),
            context: {
                limit: eventsPerPage,
                skip: i * eventsPerPage,
                numEventPages,
                currentPage: i + 1,
            },
        });
    });

    events.forEach(({ node }, index) => {
        const { slug } = node;
        const prev = index === 0 ? null : events[index - 1].node;
        const next =
            index === events.length - 1 ? null : events[index + 1].node;

        createPage({
            path: `/events/${slug}`,
            component: path.resolve('./src/templates/event.js'),
            context: {
                // Data passed to context is available in page queries as GraphQL variables.
                slug,
                prev,
                next,
            },
        });
    });

    // Create tag pages
    const tagTemplate = path.resolve('./src/templates/tags.js');

    tags.forEach((tag) => {
        createPage({
            path: `/blog/tags/${tag.tag}/`,
            component: tagTemplate,
            context: {
                tag: tag.tag,
                tags,
            },
        });
    });

    // Create author pages
    const authorTemplate = path.resolve('./src/templates/author.js');
    result.data.allFlotiqBlogAuthor.edges.forEach((edge) => {
        createPage({
            path: `/blog/author/${_.kebabCase(edge.node.slug)}/`,
            component: authorTemplate,
            context: {
                author: edge.node.slug,
                tags,
            },
        });
    });
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
    // adds sourcemaps for tsx in dev mode
    if (stage === 'develop' || stage === 'develop-html') {
        actions.setWebpackConfig({
            devtool: 'eval-source-map',
        });
    }
};
