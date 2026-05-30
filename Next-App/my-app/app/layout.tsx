import Navbar from "@/components/Navbar";

function RootLayout({children}: {
  children: React.ReactNode
})
{
  return (
    <html>
      <body>
          <Navbar/>
          {children}
      </body>
    </html>
  )
}

export default RootLayout;