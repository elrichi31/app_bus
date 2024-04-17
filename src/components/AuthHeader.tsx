"use client";
import Link from 'next/link';
const AuthHeader = () => {
    return (
        <div>
            <div className="flex justify-between items-center py-4 px-6">
                <div className="flex-shrink-0 flex items-center">
                    <Link href="/">
                        <img src='logo.png' className="block h-10 w-auto fill-current text-gray-600" />
                    </Link>
                </div>
                <div className='space-x-10'>
                    <Link href="/login">
                        Iniciar sesión
                    </Link>
                    <Link href="/register">
                        Registrarse
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AuthHeader;
