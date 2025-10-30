import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'


export default function Layout({children}) {
  return (
    <div>
        <NavBar/>
        <main className='flex flex-col min-h-screen'>{children}</main>
        <Footer />
    </div>
  )
}
