import Image from "next/image";
import './globals.css';
import ProjCard from "./components/project-card";
import Playground from "./components/playground";
import Head from 'next/head';


export default function Home() {
  return (
    <>
    <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* Other meta tags */}
      </Head>
      <div className="hero-section">
        <h2>ava rubin</h2>
        <h1>FULL STACK</h1>
        <h1>SOFTWARE</h1>
        <h1>DEVELOPER</h1>
        {/* <div className="code-sample">
        </div> */}
      </div>
     
      <div className="banner">
        <a className="hover:font-medium" href="https://github.com/Ava-Rubin" target="_blank">GITHUB</a>
        <p>-</p>
        <a className="hover:font-medium" href="https://www.linkedin.com/in/ava-rubin/" target="_blank">LINKEDIN</a>
        <p>-</p>
        <a className="hover:font-medium" href="https://drive.google.com/file/d/1gf7Bru8hMj3r81lr3UvKcaQgaCLwEvlu/view?usp=sharing" target="_blank">RESUME</a>
      </div>
     
      <div className="min-w-screen">
      <ProjCard title="A HAPPIER ME" startDate="JANUARY 2024" endDate="MARCH 2024" stack={["FLUTTER","DART","FIREBASE"]} color="text-th-red" img="/AHMMockup.png" link="https://a-happierme.com/"/>
      <ProjCard title="SCHOOLHOUSE GHANA" startDate="JANUARY 2024" endDate="PRESENT" stack={["MONGODB","EXPRESS","REACT","NODE"]} color="text-th-blue" img="/SHGLap.png" link="https://globalties.ucsd.edu/what/projects/schoolhouse-solar-ghana.html"/>
      <ProjCard title="COMPASS INSTITUTION" startDate="MAY 2023" endDate="PRESENT" stack={["JAVASCRIPT","PYTHON","REACT"]} color="text-th-green" img="/COMPASSMac.png" link="https://github.com/compass-institution/compass-website"/>
      <ProjCard title="WRAPPED (FOR REAL)" startDate="DECEMBER 2023" endDate="PRESENT" stack={["JAVASCRIPT","PYTHON","FLASK","SQL"]} color="text-th-yellow" img="/wrapped.png" link="https://github.com/Ava-Rubin/wrapped-for-real"/>
      <Playground/>
      </div>
      
      <div className="h-[8rem]"></div>
    </>
  );
}
