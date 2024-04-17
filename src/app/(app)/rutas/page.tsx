import React from 'react';
import rutasData from '../../../../public/rutas.json'; // Ajusta la ruta de importación según sea necesario
import Link from 'next/link';

type Ruta = {
  id: string;
  nombre: string;
  recorrido: string;
  horas: string;
  paradas: { direccion: string; hora_dia: string; hora_tarde: string }[];
};

const Rutas = () => {
  const rutas: Ruta[] = rutasData.rutas;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 auto-rows-min">
      {rutas.map((ruta, index) => (
        <Link href={`/rutas/${ruta.id}`} key={index} passHref>
          <div className="transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="bg-white hover:bg-gray-50 border border-gray-200 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
              <div className="p-5 flex flex-col">
                <h2 className="font-bold text-xl mb-2 text-gray-800">{ruta.nombre}</h2>
                <p className="text-gray-700 text-base mb-4 flex-grow h-12">{ruta.recorrido}</p>
                <p className="text-gray-600 text-sm">{ruta.horas}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Rutas;
