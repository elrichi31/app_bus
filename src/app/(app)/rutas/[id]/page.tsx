import React from 'react';
import rutasData from '../../../../../public/rutas.json'; // Ajusta la ruta de importación según sea necesario
const RutaPage = ({ params }: any) => {
  return (
    <div className="container mx-auto p-5">
      {rutasData.rutas.map((ruta, index) => (
        ruta.id === params.id && (
          <article key={index} className="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
            <img src={ruta?.img} alt="" />
            <h2 className="text-2xl font-bold mb-2">{ruta.nombre}</h2>
            <p className="text-md mb-4"><strong>Recorrido:</strong> {ruta.recorrido}</p>
            <p className="text-md mb-4"><strong>Horas:</strong> {ruta.horas}</p>
            <p className="text-md mb-4"><strong>Sector:</strong> {ruta.sector}</p>
            <h3 className="text-xl font-semibold mb-2">Paradas:</h3>
            <ul className="list-inside">
              {ruta.paradas.map((parada, paradaIndex) => (
                <li key={paradaIndex} className="mb-1">
                  <p className="text-md"><strong>Parada:</strong> {paradaIndex + 1}</p>
                  <p className="text-md"><strong>Dirección:</strong> {parada.direccion}</p>
                  <p className="text-sm"><strong>Mañana:</strong> {parada.hora_dia}, <strong>Tarde:</strong> {parada.hora_tarde}</p>
                </li>
              ))}
            </ul>
          </article>
        )
      ))}
    </div>
  )
}
export default RutaPage;
