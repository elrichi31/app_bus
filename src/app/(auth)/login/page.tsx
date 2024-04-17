"use client";
import InputError from '@/components/ImputError';
import Loading from '@/components/Loading';
import { useAuth } from '@/hooks/useAuth';
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [shouldRemember, setShouldRemember] = useState(false);
    const [errors, setErrors]: any = useState([]);
    const [status, setStatus] = useState('');

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/welcome',
    });
    if (status === 'loading') {
        return <Loading />;
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setStatus('loading');
        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        });
        setStatus('');
    };

    const handleChangeEmail = (event: any) => {
        setEmail(event.target.value);
    };

    const handleChangePassword = (event: any) => {
        setPassword(event.target.value);
    };

    const handleRememberMeChange = (event: any) => {
        setShouldRemember(event.target.checked);
    };

    return (
        <div className="space-y-4 max-w-md mx-auto my-16">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Inicia sesión en tu cuenta</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <InputError messages={errors.email} className="mt-2" />
                            <label htmlFor="email" className="sr-only">Correo electrónico</label>
                            <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Correo electrónico" value={email} onChange={handleChangeEmail} />

                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Contraseña</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Contraseña" value={password} onChange={handleChangePassword} />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" checked={shouldRemember} onChange={handleRememberMeChange} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Recuérdame</label>
                        </div>
                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">¿Olvidaste tu contraseña?</a>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Iniciar sesión
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
