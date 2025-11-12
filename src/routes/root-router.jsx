import { createBrowserRouter } from 'react-router'
import AboutPage from '../screens/about/about'
import CaseStudiesDetailsScreen from '../screens/case-studies-details/case-studies-details'
import CaseStudiesScreen from '../screens/case-studies/case-studies'
import CleaningScreen from '../screens/cleaning/cleaning'
import ContactUsScreen from '../screens/contact-us/contact-us'
import EducationScreen from '../screens/education/education'
import EntertainmentScreen from '../screens/entertainment/entertainment'
import EventManagementScreen from '../screens/event-management/event-management'
import GovernmentScreen from '../screens/government/government'
import HardAndSoftFacility from '../screens/hard-and-soft-facility/hard-and-soft-facility'
import HealthcareScreen from '../screens/healthcare/healthcare'
import HomePage from '../screens/home/homepage'
import HospitalityScreen from '../screens/hospitality/hospitality'
import IndustriesServedScreen from '../screens/industries-served/industries-served'
import InsightsScreen from '../screens/insights/insights'
import MallsScreen from '../screens/malls/malls'
import NotFoundScreen from '../screens/not-found/not-found'
import ProjectGalleryScreen from '../screens/project-gallery/project-gallery'
import ResidentialScreen from '../screens/residential/residential'
import SecuritySectorScreen from '../screens/security-sector/security-sector'
import SecuritySolutionScreen from '../screens/security/security-solution'
import HospitalityManagementScreen from '../screens/services/hospitality-management'
import TransportationScreen from '../screens/transportation/transportation'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/hospitality-management',
    element: <HospitalityManagementScreen />,
  },
  {
    path: '/security-solutions',
    element: <SecuritySolutionScreen />,
  },
  {
    path: '/cleaning-services',
    element: <CleaningScreen />,
  },
  {
    path: '/hard-and-soft-facility',
    element: <HardAndSoftFacility />,
  },

  {
    path: '/industries-served',
    element: <IndustriesServedScreen />,
  },
  {
    path: '/insights',
    element: <InsightsScreen />,
  },
  {
    path: '/case-studies',
    element: <CaseStudiesScreen />,
  },
  {
    path: '/case-studies/:id',
    element: <CaseStudiesDetailsScreen />,
  },
  {
    path: '/contact-us',
    element: <ContactUsScreen />,
  },
  {
    path: '/event-management',
    element: <EventManagementScreen />,
  },
  {
    path: '/project-gallery',
    element: <ProjectGalleryScreen />,
  },
  {
    path: '/sectors/government',
    element: <GovernmentScreen />,
  },
  {
    path: '/sectors/education',
    element: <EducationScreen />,
  },
  {
    path: '/sectors/healthcare',
    element: <HealthcareScreen />,
  },
  {
    path: '/sectors/hospitality',
    element: <HospitalityScreen />,
  },
  {
    path: '/sectors/residential',
    element: <ResidentialScreen />,
  },
  {
    path: '/sectors/entertainment',
    element: <EntertainmentScreen />,
  },
  {
    path: '/sectors/transportation',
    element: <TransportationScreen />,
  },
  {
    path: '/sectors/malls-and-supermarkets',
    element: <MallsScreen />,
  },
  {
    path: '/sectors/security',
    element: <SecuritySectorScreen />,
  },
  {
    path: '*',
    element: <NotFoundScreen />,
  },
])
