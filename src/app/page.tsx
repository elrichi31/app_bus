'use client'
import { useAuth } from "@/hooks/useAuth";
import Navigation from "./(app)/Navigation";
import AuthHeader from "@/components/AuthHeader";

const Welcome = () => {
    const { user } = useAuth({ middleware: 'guest' })
    return (
        <div>
            {
                user
                    ? <Navigation user={user} />
                    : <AuthHeader />
            }
            <div className="my-52 flex flex-col items-center justify-center">
                <h1 className="text-6xl font-bold text-indigo-600">
                    ¡Bienvenido!
                </h1>
                <p className="mt-3 text-lg text-gray-600">
                    Estás en la página de bienvenida.
                </p>
            </div>
        </div>
    );
};

export default Welcome;
