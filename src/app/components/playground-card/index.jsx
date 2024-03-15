import React from "react";
import './styles.css';

const PlaygroundCard = ({title, subtitle, desc,stack,link}) => { 
    return (
        <div>
            <p className="proj-title">{title}</p>
            <a href={link} target="_blank">
            <div className='border-[2px] border-white transform h-auto transition-transform hover:-rotate-1'>
                <p className="pg-subtitle">{subtitle}</p>
                <p className="pg-desc">{desc}</p>
                <div className="flex m-6 overflow-auto">
                    {stack.map((_, index) => (
                        <p className='tag' key={index}>{stack[index]}</p>
                    ))}
                </div>
            </div>
            </a>
        </div>
        
    );
 };
    
export default PlaygroundCard;