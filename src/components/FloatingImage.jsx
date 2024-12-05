import React, { useEffect, useState } from "react";
import floatingimg from '../assets/floatingimg.png';

const FloatingImage = () => {
    const [hasLoaded, setHasLoaded] = useState(false);
    const [hasLoaded1, setHasLoaded1] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHasLoaded(true);
        }, 500);
        const timer1 = setTimeout(() => {
            setHasLoaded1(true);
        }, 1000);
        return () => clearTimeout(timer, timer1);
    }, []);

    return (
        <div
            className={`fixed z-50 left-5 transform ${hasLoaded ? "block" : " hidden"} ${hasLoaded1 ? "top-3/4 -translate-y-3/4" : "top-0"
                } transition-all duration-1000 ease-out`}
            style={{ width: "150px", height: "150px" }}
        >
            <img
                src={floatingimg}
                alt="Floating"
                className="w-full h-full object-cover"
            />
        </div>
    );
};

export default FloatingImage;