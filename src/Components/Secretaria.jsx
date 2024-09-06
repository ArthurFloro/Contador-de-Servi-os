import "../index.css";
import fecomercio from "../imgs/fecomercio.png";
import senac from "../imgs/logo_senac-removebg-preview.png";
import React, { useState } from "react";


export default function Beleza() {
  
  const [balcao, setBalcao] = useState(0)
  const [telefone, setTelefone] = useState(0)
  const [whatsapp, setWhatsapp] = useState(0)
  const [matriculas, setMatriculas] = useState(0)

  const incrementarBalcao = () => setBalcao(balcao + 1)
  const incrementarTelefone = () => setTelefone(telefone + 1)
  const incrementarWhatsapp = () => setWhatsapp(whatsapp + 1)
  const incrementarMatriculas = () => setMatriculas(matriculas + 1)

  const diminuirBalcao = () => setBalcao((prev) => Math.max(prev - 1, 0));
  const diminuirTelefone = () => setTelefone((prev) => Math.max(prev - 1, 0));
  const diminuirWhatsapp = () => setWhatsapp((prev) => Math.max(prev - 1, 0));
  const diminuirMatriculas = () => setMatriculas((prev) => Math.max(prev - 1, 0));

  const resetarBalcao = () => setBalcao(0)
  const resetarTelefone = () => setTelefone(0)
  const resetarWhatsapp = () => setWhatsapp(0)
  const resetarMatriculas = () => setMatriculas(0)


  return (
    <>
      <div
        className="bg-white flex items-center justify-center w-3/4 m-auto py-8 mt-8
        rounded-lg"
      >
        <h1 className="text-orange-500 text-8xl font-bold">Secretaria</h1>
      </div>

      <div className="flex items-center justify-center mt-10 ">
        <ul className="list-disc pl-5 text-orange-500 text-3xl space-y-4">
          <li className="flex items-center space-x-4 gap-1">
            <span className="text-white ">Atendimento do Balcão: {balcao}</span>
            <button className="bg-orange-500 text-white px-2 py-0 rounded
            hover:bg-orange-600
            transition" onClick={incrementarBalcao}>+</button>

            <button className="bg-orange-500 text-white px-2 py-0 rounded
            hover:bg-orange-600
            transition" onClick={diminuirBalcao}>-</button>

            <button className="bg-orange-500 text-white px-2 py-0 rounded
            hover:bg-orange-600
            transition" onClick={resetarBalcao}>delete</button>
          </li>

          <li className="flex items-center space-x-4 gap-1 ">
            <span className="text-white">Atendimento de Telefone: {telefone}</span>
            <button className="bg-orange-500 text-white px-2 py-0 rounded
            hover:bg-orange-600
            transition" onClick={incrementarTelefone}>+</button>

            <button className="bg-orange-500 text-white px-2 py-0 rounded
            hover:bg-orange-600
            transition" onClick={diminuirTelefone}>-</button>

            <button className="bg-orange-500 text-white px-2 py-0 rounded
            hover:bg-orange-600
            transition" onClick={resetarTelefone}>delete</button>
          </li>

          <li className="flex items-center space-x-4 gap-1">
            <span className="text-white">Atendimento WhatsApp: {whatsapp}</span>
            <button className="bg-orange-500 text-white px-2 py-0 rounded
            hover:bg-orange-600
            transition" onClick={incrementarWhatsapp}>+</button>

            <button className="bg-orange-500 text-white px-2 py-0 rounded
            hover:bg-orange-600
            transition" onClick={diminuirWhatsapp}>-</button>

            <button className="bg-orange-500 text-white px-2 py-0 rounded
            hover:bg-orange-600
            transition" onClick={resetarWhatsapp}>delete</button>
          </li>

          <li className="flex items-center space-x-4 gap-1">
            <span className="text-white">Matrículas Realizadas: {matriculas}</span>
            <button className="bg-orange-500 text-white px-2 py-0 rounded
            hover:bg-orange-600
            transition" onClick={incrementarMatriculas}>+</button>

            <button className="bg-orange-500 text-white px-2 py-0 rounded
            hover:bg-orange-600
            transition" onClick={diminuirMatriculas}>-</button>

            <button className="bg-orange-500 text-white px-2 py-0 rounded
            hover:bg-orange-600
            transition" onClick={resetarMatriculas}>delete</button>
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
