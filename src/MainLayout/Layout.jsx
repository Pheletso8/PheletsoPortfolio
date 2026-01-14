import NavBar from '../Components/NavBar'


export default function Layout({children}) {
  return (
    <div>
        <NavBar/>
        <main className='flex flex-col min-h-screen'>{children}</main>
    </div>
  )
}
