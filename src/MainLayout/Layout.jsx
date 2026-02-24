import NavBar from '../Components/NavBar'
import LangflowChat from '../Components/LangflowChat'


export default function Layout({children}) {
  return (
    <div>
      <NavBar/>
      <main className='flex flex-col min-h-screen'>{children}</main>
      <LangflowChat />
    </div>
  )
}
