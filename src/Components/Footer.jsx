

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-[#5b3e31] text-neutral-content items-center justify-center p-4">
        <aside className="grid-flow-col items-center">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
    </footer>
  )
}
