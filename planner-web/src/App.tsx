import { AppRoutes } from './routes/AppRoutes';

// Named Export conforme seu padrão
export function App() {
  return (
    <div className="min-h-screen bg-base-200 font-sans antialiased">
      <AppRoutes />
    </div>
  );
}