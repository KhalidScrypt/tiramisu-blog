import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Pagination } from 'react-bootstrap';

const CustomPagination = ({ page, numOfPages, folder }) => {
    const data = useStaticQuery(query);
    const { pathPrefix } = data.site.siteMetadata;
    var folder;
    return (
        <Pagination className="mb-5 pb-5">
            <Pagination.Prev
                href={
                    page > 2
                        ? `${pathPrefix}/${folder}/${page - 1}`
                        : `${pathPrefix}/${folder}`
                }
                disabled={page === 1}
            />
            {page > 1 && (
                <>
                    <Pagination.Item href={`${pathPrefix}/${folder}/`}>
                        {1}
                    </Pagination.Item>
                    {page > 4 && <Pagination.Ellipsis />}
                </>
            )}

            {page > 3 && (
                <Pagination.Item href={`${pathPrefix}/${folder}/${page - 2}`}>
                    {page - 2}
                </Pagination.Item>
            )}
            {page > 2 && (
                <Pagination.Item href={`${pathPrefix}/${folder}/${page - 1}`}>
                    {page - 1}
                </Pagination.Item>
            )}
            <Pagination.Item active activeLabel="">
                {page}
            </Pagination.Item>
            {page < numOfPages - 1 && (
                <Pagination.Item href={`${pathPrefix}/${folder}/${page + 1}`}>
                    {page + 1}
                </Pagination.Item>
            )}
            {page < numOfPages - 2 && (
                <Pagination.Item href={`${pathPrefix}/${folder}/${page + 2}`}>
                    {page + 2}
                </Pagination.Item>
            )}

            {page < numOfPages && (
                <>
                    {page < numOfPages - 3 && <Pagination.Ellipsis />}
                    <Pagination.Item
                        href={`${pathPrefix}/${folder}/${numOfPages}`}
                    >
                        {numOfPages}
                    </Pagination.Item>
                </>
            )}
            <Pagination.Next
                href={`${pathPrefix}/${folder}/${page + 1}`}
                disabled={page === numOfPages}
            />
        </Pagination>
    );
};

const query = graphql`
    query PaginationQuery {
        site {
            siteMetadata {
                pathPrefix
            }
        }
    }
`;

export default CustomPagination;
