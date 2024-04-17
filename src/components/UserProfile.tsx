import React from 'react';
import { useAuth } from '@/hooks/useAuth';

const UserProfile = () => {
    const { user, logout } = useAuth();

    // La función de logout se llama cuando el usuario hace clic en el botón de logout.
    const handleLogout = async () => {
        await logout();
    };

    return (
        <div className="flex justify-between items-center">
            <span>{user?.name || 'Usuario Anónimo'}</span>
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Cerrar Sesión
            </button>
        </div>
    );
};

export default UserProfile;
