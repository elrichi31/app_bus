'use client'
import { useAuth } from '@/hooks/useAuth'
import Navigation from '@/app/(app)/Navigation'
import Loading from '@/components/Loading'

const AppLayout = ({ children }: any) => {
    const { user } = useAuth({ middleware: 'auth' })

    if (!user) {
        return <Loading />
    }

    return (
        <div className="min-h-screen">
            <Navigation user={user} />

            <main>{children}</main>
        </div>
    )
}

export default AppLayout