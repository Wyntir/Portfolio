import './globals.css';

export const metadata = {
    title: 'Johan Ryu | Software Engineer & Designer',
    description: 'Professional portfolio of Johan Ryu - Software Engineer and Designer',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="bg-gray-50 text-gray-900">
        {children}
        </body>
        </html>
    );
}