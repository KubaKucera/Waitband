import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

interface HeadingWithLineProps {  
  lineHeight?: string;  
}

const HeadingWithLine = ({ lineHeight = "0" }: HeadingWithLineProps) => {
    return (
        <div
            className="absolute z-30 hidden xl:flex"
            style={{
                top: "125px",
                left: "13px",
            }}
        >
            <div
                className="relative"
                style={{          
                    transformOrigin: "top left",
                }}
            >
                {/* Nadpis */}
                <h2
                    className="text-neonPink font-bold italic uppercase"          
                >
                    <FaAngleDoubleDown className="text-left text-[32px] font-semibold text-neonPink"/>
                </h2>
                {/* Čára pod nadpisem */}
                <div
                    className="bg-gray-300 animate-grow"
                    style={{
                        position: "absolute",
                        width: "1px",
                        height: lineHeight,
                        marginTop: "7px",
                        top: "100%",
                        left: "50%",
                        transform: "translateX(-50%)",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default HeadingWithLine;
