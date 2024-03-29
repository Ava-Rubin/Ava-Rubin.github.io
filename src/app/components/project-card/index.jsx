import React from 'react';
import Image from "next/image";
import './styles.css';
import '../../globals.css';
const ProjCard = ({title,startDate,endDate,stack, color, img, link}) => {  

    const strokeColor = {
        'text-th-red': '#F34734',
        'text-th-blue': '#83A598',
        'text-th-green': '#8DC07C',
        'text-th-yellow': '#FABD2E'
    }

    return (
      <div className='proj-container content-container'>
        <div className='mr-[6%] pt-[2.3rem]'>
            <svg width="55" height="4" viewBox="0 0 55 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="2" x2="55" y2="2" stroke={strokeColor[color]} strokeWidth="4"/>
            </svg>
        </div>
        
        <div>
            <h3 className={color}>{title}</h3>
            <div className='content-container'>
                <div>
                <a href={link} target="_blank">
                <div className='proj-image'>
                    <Image
                    src={img}
                    alt={title}
                    fill={true}
                    style={{objectFit: "cover"}}
                    priority
                    />
                </div>
                </a>
                <p className='proj-sub-text'>{startDate} - {endDate}</p>
                </div>
                <div className='sm:ml-14'>
                    {stack.map((_, index) => (
                        <p className='proj-sub-text' key={index}>{stack[index]}</p>
                    ))}
                </div>
                
            </div>
        </div>
      </div>
      
    );
};

export default ProjCard;