
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Outlet } from 'react-router-dom';

export default function PublicLayout() {
    return (
        <>
            <Header />
            <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
