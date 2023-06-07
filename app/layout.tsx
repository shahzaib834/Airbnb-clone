import getCurrentUser from './actions/getCurrentUser';
import LoginModal from './components/modal/LoginModal';
import RegisterModal from './components/modal/RegisterModal';
import RentModal from './components/modal/RentModal';
import SearchModal from './components/modal/SearchModal';
import Navbar from './components/navbar/Navbar';
import './globals.css'
import { Nunito } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'AirBnb',
  description: 'AirBnb Clone',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <Toaster />
        <RegisterModal />
        <LoginModal />
        <RentModal />
        <SearchModal />
        < Navbar currentUser={currentUser} />
        <div className='pb-20 pt-28'>
          {children}
        </div>
      </body>
    </html>
  )
}
