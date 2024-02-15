import React from 'react';
import { Route } from 'react-router';
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


 
export default (
    <Route>
    <Route path='/home' component={HomePage} />
    <Route path='/references' component={ReferencesPage} />
    <Route path='/projects' component={ProjectsPage} />
    <Route path='/gallery' component={GalleryPage} />
    <Route path='/projects/:id' component={ProjectInfoPage} />
    <Route path='/workfield/:id' component={WorkInfoPage} />
    <Route path='/contact' component={ContactPage} />
    <Route path='/about' component={AboutPage} />
    </Route>


);