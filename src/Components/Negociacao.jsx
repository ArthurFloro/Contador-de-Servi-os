import "../index.css";
import fecomercio from "../imgs/fecomercio.png";
import senac from "../imgs/logo_senac-removebg-preview.png";
import React, { useState } from "react";

export default function Negociacao() {

    const [negociacoes, setNegociacoes] = useState(0)

    const incrementarNegociacoes = () => setNegociacoes(negociacoes + 1)
    const diminuirNegociacoes = () => setNegociacoes((prev) => Math.max(prev - 1, 0));

    const resetarNegociacoes = () => setNegociacoes(0)

  return (
    <>
      <div
        className="bg-white flex items-center justify-center w-3/4 m-auto py-8 mt-8
        rounded-lg"
      >
        <h1 className="text-orange-500 text-8xl font-bold">Negociação</h1>
      </div>

      <div className="flex items-center justify-center mt-10 ">
        <ul className="list-disc pl-5 text-orange-500 text-3xl space-y-4">
          <li className="flex items-center space-x-4 gap-1">
            <span className="text-white ">Negociações financeiras: {negociacoes}</span>
            <button className="bg-orange-500 text-white px-2 py-0 rounded
            hover:bg-orange-600
            transition" onClick={incrementarNegociacoes}>+</button>

            <button className="bg-orange-500 text-white px-2 py-0 rounded
            hover:bg-orange-600
            transition" onClick={diminuirNegociacoes}>-</button>

            <button className="bg-orange-500 text-white px-2 py-0 rounded
            hover:bg-orange-600
            transition" onClick={resetarNegociacoes}>deletar</button>
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-center mt-11">
      <button onClick={window.print} className="bg-orange-500 text-white  
       px-5 py-1 text-xl hover:bg-orange-600 transition-all rounded-lg">Imprimir</button>
      </div>

   
      <footer className="flex justify-between bg-white bottom-0 w-full fixed h-16">
        <img src={fecomercio} alt="Fecomercio logo" className="w-18 h-18 flex items-center justify-center px-5 py-5" />
        <img src={senac} alt="logo senac " className="w-20 h-20 flex items-center justify-center px-5 py-5"  />
        </footer>
    </>
  );
}
