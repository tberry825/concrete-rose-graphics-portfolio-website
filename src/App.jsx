import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
// Add page imports here
import Home from '@/pages/Home';
import About from '@/pages/About';
import Projects from '@/pages/Projects';
import GraphicDesign from '@/pages/GraphicDesign';
import FrontendDevelopment from '@/pages/FrontendDevelopment';
import CategoryProjects from '@/pages/CategoryProjects';
import SubProjectPage from '@/pages/SubProjectPage';
import Contact from '@/pages/Contact';
import Pricing from '@/pages/Pricing';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import CookiePolicy from '@/pages/CookiePolicy';
import CookieConsentBanner from '@/components/CookieConsentBanner';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, appPublicSettings, authError, navigateToLogin } = useAuth();
  const allowsAnonymousAccess = appPublicSettings?.public_settings === 'public_without_login';

  // Only protected sites need to wait for the saved-session check.
  if (isLoadingPublicSettings || (isLoadingAuth && !allowsAnonymousAccess)) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors.
  // Only redirect to login when we have confirmed the app is NOT public — a
  // failure to load public settings (e.g. from a stale token) must never blank
  // the public site, so we render the app rather than redirecting blind.
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required' && appPublicSettings && !allowsAnonymousAccess) {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      {/* Add your page Route elements here */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/graphic-design" element={<GraphicDesign />} />
      <Route path="/projects/frontend-development" element={<FrontendDevelopment />} />
      <Route path="/projects/:slug" element={<CategoryProjects />} />
      <Route path="/projects/:slug/:subSlug" element={<SubProjectPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <AuthenticatedApp />
          <CookieConsentBanner />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App