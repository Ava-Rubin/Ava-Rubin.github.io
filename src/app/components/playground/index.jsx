import React from "react";
import PlaygroundCard from "../playground-card";
import './styles.css';

const Playground = () => { 
    return (
        <div className='proj-container content-container'>
        <div className='mr-24 pt-[2.3rem]'>
            <svg width="55" height="4" viewBox="0 0 55 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="2" x2="55" y2="2" stroke="#B16286" strokeWidth="4"/>
            </svg>
        </div>
        
        <div>
            <h3 className="text-th-purp">PLAYGROUND</h3>
                <div className="grid grid-rows-2 grid-cols-2 gap-24 w-[85rem] h-[50rem]">
                    <PlaygroundCard
                        title="DATA SCIENCE"
                        subtitle="AN ANALYSIS OF PROFESSIONAL ATHLETE PERFORMANCE"
                        desc="following an event that garnered negative media attention"
                        stack={['PYTHON','BEAUTIFULSOUP','PANDAS','MATPLOTLIB']}
                    />
                    <PlaygroundCard
                        title="PERSONAL"
                        subtitle="CUSTOM FANTASY FOOTBALL DASHBOARD"
                        desc="to give managers a comprehensive view of their team--including the latest news, reccomended trades, and more"
                        stack={['REACT','AUTH/API','FIGMA']}
                    />
                    <PlaygroundCard
                        title="DESIGN"
                        subtitle="SOME POSTERS & OTHER PROJECTS I’VE MADE & WORKED ON"
                        desc="includes graphic, UI/UX, and web design"
                        stack={['ILLUSTRATOR','INDESIGN','FIGMA']}
                    />
                    <div className="flex flex-col justify-end h-[26rem] w-full">
                        <div className="rounded-[300px] w-[20rem] h-[20rem] border-2 border-white"></div>
                        <div className="text-center w-[20rem] leading-none">
                            <p className="me-text mt-4">COMPUTER SCIENCE &</p>
                            <p className="me-text">DESIGN STUDENT</p>
                            <p className="me-text">@ UC SAN DIEGO</p>
                        </div>
                        

                    </div>
                </div>
        </div>
      </div>
    );
 };
    
export default Playground;