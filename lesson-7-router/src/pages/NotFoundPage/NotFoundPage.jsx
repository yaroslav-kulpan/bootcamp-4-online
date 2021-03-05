import React from 'react';

const NotFoundPage = ({match}) => {
    return (
        <div>
            <h1>Not Found Page</h1>
            <p>This page {match.url}</p>
        </div>
    )
}

export default NotFoundPage;