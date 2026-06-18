import {
  ChartNoAxesColumn,
  Flag,
  House,
  Layers,
  LifeBuoy,
  Settings,
  SquareCheckBig,
  Users,
} from 'lucide-react';

export const navItems = [
  { label: 'Home', icon: <House />, notifications: null, isActive: false },
  {
    label: 'Dashboard',
    icon: <ChartNoAxesColumn />,
    notifications: 10,
    isActive: false,
  },
  { label: 'Projects', icon: <Layers />, notifications: null, isActive: false },
  {
    label: 'Tasks',
    icon: <SquareCheckBig />,
    notifications: null,
    isActive: false,
  },
  { label: 'Reporting', icon: <Flag />, notifications: null, isActive: false },
  { label: 'Users', icon: <Users />, notifications: null, isActive: false },
  {
    label: 'Support',
    icon: <LifeBuoy />,
    notifications: null,
    isActive: false,
  },
  {
    label: 'Settings',
    icon: <Settings />,
    notifications: null,
    isActive: true,
  },
];

export const settingsButtons = [
  'My details',
  'Profile',
  'Password',
  'Team',
  'Plan',
  'Roles',
  'Notifications',
  'Integrations',
  'API',
];

export const userData = [
  {
    name: 'Superadmin',
    type: 'DEFAULT',
    dateCreated: 'Jan 1, 2023',
    status: 'Active',
    users: {
      images: [
        '/images/avatar1.png',
        '/images/avatar2.png',
        '/images/avatar3.png',
        '/images/avatar4.png',
        '/images/avatar5.png',
      ],
      number: 2,
    },
  },
  {
    name: 'Merchantadmin',
    type: 'DEFAULT',
    dateCreated: 'Feb 1, 2023',
    status: 'Active',
    users: {
      images: [
        '/images/avatar1.png',
        '/images/avatar2.png',
        '/images/avatar3.png',
        '/images/avatar4.png',
        '/images/avatar5.png',
      ],
      number: 1,
    },
  },
  {
    name: 'supportadmin',
    type: 'DEFAULT',
    dateCreated: 'Feb 1, 2023',
    status: 'Active',
    users: {
      images: [
        '/images/avatar1.png',
        '/images/avatar2.png',
        '/images/avatar3.png',
        '/images/avatar4.png',
        '/images/avatar5.png',
      ],
    },
  },
  {
    name: 'sales personnel',
    type: 'CUSTOM',
    dateCreated: 'Mar 1, 2023',
    status: 'Active',
    users: {
      images: [
        '/images/avatar1.png',
        '/images/avatar2.png',
        '/images/avatar3.png',
      ],
    },
  },
  {
    name: 'Deputy sales personnel',
    type: 'CUSTOM',
    dateCreated: 'Apr 1, 2023',
    status: 'In Active',
    users: {
      images: [
        '/images/avatar1.png',
        '/images/avatar2.png',
        '/images/avatar3.png',
        '/images/avatar4.png',
      ],
    },
  },
  {
    name: 'Developeradmin',
    type: 'SYSTEM-CUSTOM',
    dateCreated: 'May 1, 2023',
    status: 'Active',
    users: {
      images: [
        '/images/avatar1.png',
        '/images/avatar2.png',
        '/images/avatar3.png',
        '/images/avatar4.png',
      ],
    },
  },
  {
    name: 'Developer-basic',
    type: 'SYSTEM-CUSTOM',
    dateCreated: 'Jun 1, 2023',
    status: 'Active',
    users: {
      images: [
        '/images/avatar1.png',
        '/images/avatar2.png',
        '/images/avatar3.png',
      ],
    },
  },
];
