import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { motion } from 'framer-motion';

const EventCard = ({ event, showDescription, additionalClass }) => (
    <motion.div
        className={`event-card pb-4 ${additionalClass}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ease: 'easeIn', duration: 1 }}
    >
        <div>
            <Link to={`/events/${event.slug}`} className="event-card-link">
                {
                    // eslint-disable-next-line no-nested-ternary
                    event.headerImage ? (
                        event.headerImage[0].extension !== 'svg' &&
                        event.headerImage[0].localFile &&
                        event.headerImage[0].localFile.childImageSharp ? (
                            <GatsbyImage
                                image={getImage(event.headerImage[0].localFile)}
                                alt={event.title}
                                className="event-card-image"
                            />
                        ) : (
                            <img
                                src={`https://api.flotiq.com${event.headerImage[0].url}`}
                                alt={event.title}
                                className="event-card-image"
                            />
                        )
                    ) : null
                }
            </Link>

            <Link to={`/events/${event.slug}`} className="event-card-link">
                <h2 className="mt-3">{event.title}</h2>
                {showDescription && (
                    <div className="mt-3 event-card-description">
                        {event.excerpt}
                    </div>
                )}
            </Link>
        </div>
    </motion.div>
);

export default EventCard;
