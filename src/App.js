import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import HomePage from './home/HomePage';
import ReferencesPage from './references/ReferencesPage';
import ProjectsPage from './projects/ProjectsPage';
import ContactPage from './contact/ContactPage';
import ProjectInfoPage from './projects/ProjectInfoPage';
import AboutPage from './about/AboutPage';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { LanguageProvider } from './LanguageContext';
import WorkInfoPage from './projects/WorkFieldInfoPage';
import GalleryPage from './Gallery/GalleryPage';
//import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/references" element={<ReferencesPage />} />
              <Route path="/projectspage/:category" element={<ProjectsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/projects/:id" element={<ProjectInfoPage />} />
              <Route path="/workfield/:id" element={<WorkInfoPage/>} /> 
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />

            </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </I18nextProvider>
  );
}

export default App;
