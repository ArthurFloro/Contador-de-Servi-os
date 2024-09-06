import logo from "../imgs/logo fe comercio.png"
import fecomercio from "../imgs/fecomercio.png"
import senac from "../imgs/logo_senac-removebg-preview.png"
import React from "react"
import { Link } from "react-router-dom"

export default function Home(){
    return(
        <>
        <div className="bg-white flex items-center justify-center px-2 py-6 w-full m-auto">
        <img src={logo} alt="Logo Senac" className="max-w-96" />
        </div>
        <h1 className="text-white flex items-center justify-center py-8 text-4xl mt-9 
        font-bold">Contador de Serviços</h1>

        
         <div className="mt-8">
         <div className="flex items-center justify-center gap-12">
            <Link to="/secretaria">
            <button className="bg-white text-orange-500 font-bold px-6 py-1 rounded-lg hover:bg-gray-300 
          transition text-3xl ">Secretaria</button>
            </Link>
       
            <Link to="/biblioteca">
            <button className="bg-white text-orange-500 font-bold px-6 py-1 rounded-lg hover:bg-gray-300 
          transition text-3xl ">Biblioteca</button>
            </Link>

          <Link to="/central">
          <button className="bg-white text-orange-500 font-bold px-6 py-1 rounded-lg hover:bg-gray-300 
          transition text-3xl">Central de Atendimento</button>
          </Link>
           
          
          </div>
          

          <div className="flex items-center justify-center gap-12 mt-8">
            <Link to="/coordenacao">
            <button className="bg-white text-orange-500 font-bold px-6 py-1 rounded-lg hover:bg-gray-300 
          transition text-3xl">Coordenação</button>
            </Link>

            <Link to="/negociacoes">
            <button className="bg-white text-orange-500 font-bold px-6 py-1 rounded-lg hover:bg-gray-300 
          transition text-3xl">Negociações financeiras</button>
            </Link>
          </div>
           
         </div>
        

        <footer className="flex justify-between bg-white bottom-0 w-full fixed h-16">
        <img src={fecomercio} alt="Fecomercio logo" className="w-18 h-18 flex items-center justify-center px-5 py-5" />
        <img src={senac} alt="logo senac " className="w-20 h-20 flex items-center justify-center px-5 py-5"  />
        </footer>
        </>
    )
}