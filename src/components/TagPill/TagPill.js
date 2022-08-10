import { Link } from 'gatsby';
import React from 'react';

const TagPill = ({ tag }) => (
    <Link to={`/blog/tags/${tag.tag}`} className="tag-pill">
        {tag.tag_name}
    </Link>
);

export default TagPill;
