import React from "react"
import Header from "/src/Header.jsx"
import AboutMe from "/src/AboutMe.jsx"
import Footer from "/src/Footer.jsx"

export default function App(){
  return (
    <div className="bg-[#1A1B21] w-80 mx-auto rounded-lg overflow-hidden my-4">
       <Header />
       <AboutMe />
       <Footer />
    </div>
  )
}