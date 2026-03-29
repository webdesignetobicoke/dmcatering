import './globals.css'

export const metadata = {
  title: 'David Mintz Catering — Great Food. Great People.',
  description: 'Toronto\'s premier Film & TV caterer and Social/Corporate catering service. 25+ years, 400+ productions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
