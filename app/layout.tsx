import './globals.css'; // Keep your default styles

export const metadata = {
  title: 'Likhita Chinnari - Portfolio',
  description: 'My personal portfolio website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-p1CmR6Vf1dyPfYZ7R6pujISiFDUFxIr05o2N8S1Ry6j8Tz6kRXKuX3sI5Gucs5cjox96D65V6pZeRAwIJ5zs/Q==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body>{children}</body>
    </html>
  );
}
