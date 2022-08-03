import React from "react";
import ContentLoader from "react-content-loader";

const PagesSkeleton = (props) => (
    <ContentLoader
        className="item-list"
        speed={2}
        width={800}
        height={200}
        viewBox="0 0 800 200"
        backgroundColor="#eff8f3"
        foregroundColor="#f1fcdc"
        {...props}
    >
        <rect x="0" y="274" rx="0" ry="0" width="260" height="18" />
        <rect x="0" y="319" rx="10" ry="10" width="260" height="56" />
        <rect x="1" y="397" rx="10" ry="10" width="86" height="30" />
        <rect x="112" y="388" rx="25" ry="25" width="146" height="45" />
        <rect x="26" y="145" rx="0" ry="0" width="0" height="1" />
        <rect x="6" y="16" rx="0" ry="0" width="205" height="149" />
        <rect x="322" y="52" rx="0" ry="0" width="176" height="29" />
        <rect x="346" y="89" rx="0" ry="0" width="122" height="16" />
        <rect x="345" y="117" rx="0" ry="0" width="125" height="21" />
    </ContentLoader>
);

export default PagesSkeleton;
