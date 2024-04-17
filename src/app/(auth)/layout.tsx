import AuthHeader from '@/components/AuthHeader'
export const metadata = {
    title: 'Laravel',
}

const Layout = ({ children }: any) => {
    return (
        <div>
            <div className="font-sans text-gray-900 antialiased">
                <AuthHeader />
                {children}
            </div>
        </div>
    )
}

export default Layout