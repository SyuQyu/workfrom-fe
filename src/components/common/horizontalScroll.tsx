import clsx from "clsx";
import React from "react";

type props = {
    children: React.ReactNode;
    className?: string;
}

const HorizontalScroll = ({ children, className }: props) => {
    return (
        <div className={clsx('scrolling-wrapper-flexbox', className)}>
            {children}
        </div>
    );
};

export default HorizontalScroll;

