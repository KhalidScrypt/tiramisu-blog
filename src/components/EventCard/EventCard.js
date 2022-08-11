import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

const EventCard = ({ event, showDescription, additionalClass }) => (
    <div className={`event-card pb-4 ${additionalClass}`}>
        <div>
            <Link to={`/events/${event.slug}`} className="post-card-link">
                {
                    // eslint-disable-next-line no-nested-ternary
                    event.headerImage ? (
                        event.headerImage[0].extension !== 'svg' &&
                        event.headerImage[0].localFile &&
                        event.headerImage[0].localFile.childImageSharp ? (
                            <GatsbyImage
                                image={getImage(event.headerImage[0].localFile)}
                                alt={event.title}
                                className="post-card-image"
                            />
                        ) : (
                            <img
                                src={`https://api.flotiq.com${event.headerImage[0].url}`}
                                alt={event.title}
                                className="post-card-image"
                            />
                        )
                    ) : null
                }
            </Link>

            <Link to={`/events/${event.slug}`} className="post-card-link">
                <h2 className="mt-3">{event.title}</h2>
                {showDescription && (
                    <div className="mt-3 post-card-description">
                        {event.excerpt}
                    </div>
                )}
            </Link>
        </div>
    </div>
);

export default EventCard;
