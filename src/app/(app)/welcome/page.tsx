// pages/Welcome.js
import Link from 'next/link';

const Welcome = () => {
  return (
    <div className="my-52 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-indigo-600">
        ¡Bienvenido!
      </h1>
      <p className="mt-3 text-lg text-gray-600">
        Estás en la página de bienvenida protegida.
      </p>
      <div className="space-x-10 flex items-center justify-center my-10">
        <button className="justify-center py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <Link href="/">
            Volver al inicio
          </Link>
        </button>
        <button className="justify-center py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <Link href="/rutas">Rutas disponibes</Link>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
