import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import CookieInfo from '../components/CookieInfo/CookieInfo';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../sections/Footer/Footer';

const Layout = ({ children, navbarSettings = {}, mainSettings = {} }) => {
    const data = useStaticQuery(query);
    return (
        <main {...mainSettings}>
            <Helmet>
                <html lang="en" />
                <meta charSet="utf-8" />
                <script>
                    {`
    (function(d, w, c) {
        w.SibConversationsID = '616f185484b5c003ee7b3a7d'
        w[c] = w[c] || function() {
            (w[c].q = w[c].q || []).push(arguments)
        };
        var s = d.createElement('script');
        s.async = true;
        s.src = 'https://conversations-widget.sendinblue.com/sib-conversations.js';
        if (d.head) d.head.appendChild(s);
    })(document, window, 'SibConversations');`}
                </script>
                <script
                    src="https://config.confirmic.com/config.js?id=prj:deb2b370-bacf-4b55-a31a-6631b81fae99"
                    crossorigin
                    charset="utf-8"
                ></script>
                <script
                    src="https://consent-manager.confirmic.com/embed.js"
                    crossorigin
                    charset="utf-8"
                ></script>
                <script>history.scrollRestoration = 'manual'</script>
            </Helmet>
            <Navbar {...navbarSettings} />
            {children}
            <Footer />
            <CookieInfo
                cookieText={
                    data.allFlotiqMainSettings.nodes[0].cookie_policy_popup_text
                }
            />
        </main>
    );
};

const query = graphql`
    query LayoutQuery {
        allFlotiqMainSettings {
            nodes {
                cookie_policy_popup_text
            }
        }
    }
`;

export default Layout;
