import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock() {
    return (
        <ContentLoader
            className='pizza-block'
            speed={2}
            width={280}
            height={457}
            viewBox="0 0 280 457"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="134" cy="136" r="110" />
            <rect x="0" y="296" rx="0" ry="6" width="280" height="30" />
            <rect x="0" y="343" rx="18" ry="18" width="270" height="50" />
            <rect x="22" y="424" rx="10" ry="10" width="92" height="20" />
            <rect x="181" y="410" rx="22" ry="22" width="75" height="40" />
        </ContentLoader>
    );
}

export default LoadingBlock;
