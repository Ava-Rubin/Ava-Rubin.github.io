import React from "react";
import './styles.css';

const PlaygroundCard = ({title, subtitle, desc,stack}) => { 
    return (
        <div>
            <p className="proj-title">{title}</p>
            <div className='border-[2px] border-white h-full transform transition-transform hover:-rotate-1'>
                <p className="pg-subtitle">{subtitle}</p>
                <p className="pg-desc">{desc}</p>
                <div className="flex m-6">
                    {stack.map((_, index) => (
                        <p className='tag' key={index}>{stack[index]}</p>
                    ))}
                </div>
            </div>
        </div>
        
    );
 };
    
export default PlaygroundCard;