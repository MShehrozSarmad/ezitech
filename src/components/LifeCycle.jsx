// import React, { useState, useEffect } from "react";

// const SoftwareDevLifecycle = () => {
//     const textPositions = [
//         { text: "PLANNING", top: "33%", left: "33%" },
//         { text: "DESIGNING", top: "20%", left: "61%" },
//         { text: "DEFINING", top: "27%", left: "83%" },
//         { text: "BUILDING", top: "46%", left: "89%" },
//         { text: "TESTING", top: "59%", left: "66%" },
//         { text: "DEPLOYMENT", top: "67%", left: "33%" },
//         { text: "MAINTENANCE", top: "60%", left: "21%" },
//     ];

//     const [visibleIndex, setVisibleIndex] = useState(-1); // Tracks which text is visible

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setVisibleIndex(-1); // Reset for loop
//             let index = 0;
//             const timer = setInterval(() => {
//                 if (index < textPositions.length) {
//                     setVisibleIndex(index);
//                     index++;
//                 } else {
//                     clearInterval(timer);
//                 }
//             }, 1000); // Display each text after 1 second
//         }, 8000); // Restart animation after 8 seconds (7 texts * 1 second each + some buffer time)

//         return () => clearInterval(interval); // Cleanup interval
//     }, []);

//     return (
//         <div
//             className="relative h-screen"
//             style={{
//                 backgroundImage: 'url(https://www.eziline.com/wp-content/uploads/landing_3_img1_mini.jpg)',
//                 backgroundRepeat: "no-repeat",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center top",
//             }}
//         >
//             {/* Title and Subtitle */}
//             <div className="absolute top-10 left-10">
//                 <h1 className="text-4xl font-bold text-white">
//                     SOFTWARE <span className="text-red-600">DEV LIFE CYCLE</span>
//                 </h1>
//                 <p className="text-lg text-white mt-2">We use Agile / Scrum methodology</p>
//             </div>

//             {/* Text Positioning */}
//             <div className="relative h-full w-1/2">
//                 {textPositions.map((pos, index) => (
//                     <p
//                         key={index}
//                         className={`absolute text-red-600 font-bold transition-opacity duration-700 ease-in-out ${visibleIndex === index ? "opacity-100" : "opacity-0"
//                             }`}
//                         style={{
//                             top: pos.top,
//                             left: pos.left,
//                             transform: "translate(-50%, -50%)",
//                         }}
//                     >
//                         {pos.text}
//                     </p>
//                 ))}

//                 {/* Center SDLC Text */}
//                 <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-center">
//                     <h2 className="text-3xl font-extrabold text-white bg-[#752922] px-6 py-2 rounded-lg rotate-[-29deg]">
//                         SDLC
//                     </h2>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SoftwareDevLifecycle;

























import React, { useState, useEffect } from "react";

const SoftwareDevLifecycle = () => {
    const textPositions = [
        { text: "PLANNING", top: "33%", left: "33%" },
        { text: "DESIGNING", top: "20%", left: "61%" },
        { text: "DEFINING", top: "27%", left: "83%" },
        { text: "BUILDING", top: "46%", left: "89%" },
        { text: "TESTING", top: "59%", left: "66%" },
        { text: "DEPLOYMENT", top: "67%", left: "33%" },
        { text: "MAINTENANCE", top: "60%", left: "21%" },
    ];

    const [visibleIndices, setVisibleIndices] = useState([0]); // Start with "PLANNING"
    const [index, setIndex] = useState(1); // Track the current index to add to visible indices
    const [cycleComplete, setCycleComplete] = useState(false); // Track cycle completion

    useEffect(() => {
        let cycleTimer;

        if (cycleComplete) {
            // After completing a cycle, reset the visible indices to start from "PLANNING"
            setVisibleIndices([0]);
            setIndex(1); // Reset to start showing the second item after "PLANNING"
            setCycleComplete(false);
            cycleTimer = setInterval(() => {
                // Show next text in the cycle after the cycle is reset
                if (index < textPositions.length) {
                    setVisibleIndices((prev) => [...prev, index]);
                    setIndex(index + 1);
                }
            }, 1000); // Transition time of 1 second for each text
        } else {
            // If the cycle is not complete, start adding text
            cycleTimer = setInterval(() => {
                if (index < textPositions.length) {
                    setVisibleIndices((prev) => [...prev, index]);
                    setIndex(index + 1);
                } else {
                    // When the cycle completes, set cycleComplete to true
                    setCycleComplete(true);
                }
            }, 1000); // Transition time of 1 second for each text
        }

        return () => clearInterval(cycleTimer); // Cleanup interval on unmount
    }, [cycleComplete, index]); // Trigger when cycleComplete or index changes

    return (
        <div
            className="relative h-screen"
            style={{
                backgroundImage: 'url(https://www.eziline.com/wp-content/uploads/landing_3_img1_mini.jpg)',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center top",
            }}
        >
            {/* Title and Subtitle */}
            <div className="absolute top-10 left-10">
                <h1 className="text-4xl font-bold text-white tracking-wider">
                    <span className="px-2 bg-[#752922] rounded-sm">SOFTWARE</span> DEV LIFE CYCLE
                </h1>
                <p className="text-sm text-white mt-2">We use Agile / Scrum methodology</p>
            </div>

            {/* Text Positioning */}
            <div className="relative h-full w-full top-12 md:w-1/2">
                {textPositions.map((pos, idx) => (
                    <p
                        key={idx}
                        className={`absolute text-[#752922] font-bold transition-opacity duration-700 ease-in-out ${visibleIndices.includes(idx) ? "opacity-100" : "opacity-0"
                            }`}
                        style={{
                            top: pos.top,
                            left: pos.left,
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        {pos.text}
                    </p>
                ))}

                {/* Center SDLC Text */}
                <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-center">
                    <h2 className="text-3xl font-extrabold text-white bg-[#752922] px-6 py-2 rounded-lg rotate-[-29deg]">
                        SDLC
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default SoftwareDevLifecycle;
