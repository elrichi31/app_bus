"use client"
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';

const Register = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState([])

  const { register } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/welcome',
  });


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      console.error("Passwords don't match");
      return;
    }
    console.log(register({
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
      setErrors
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto my-16">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
        <input type="text" name="name" value={name} onChange={event => setName(event.target.value)} placeholder="Tu nombre completo" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
        <input type="email" name="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="tu@correo.com" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
        <input type="password" name="password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Contraseña" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
      </div>
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirmar Contraseña</label>
        <input type="password" name="confirmPassword" value={passwordConfirmation} onChange={event => setPasswordConfirmation(event.target.value)} placeholder="Confirmar Contraseña" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
      </div>
      <div>
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Registrarse</button>
      </div>
    </form>
  );
};

export default Register;
