// app/layout.tsx
import { Provider } from 'react-redux';
import { store } from './redux/store'; 
import './globals.css';

export const metadata = {
  title: 'Create Rony App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <div className="max-w-7xl mx-auto">
            {/* Add your header and footer components here */}
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
