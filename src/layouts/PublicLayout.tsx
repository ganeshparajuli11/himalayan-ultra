
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Outlet } from 'react-router-dom';

export default function PublicLayout() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-20 flex flex-col">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
