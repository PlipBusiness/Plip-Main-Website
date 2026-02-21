import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-transparent relative z-10 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-white/60 mb-8">Page not found</p>
        <Link to="/" className="text-blue-500 hover:text-blue-400">
          Go back home
        </Link>
      </div>
    </div>
  );
}
