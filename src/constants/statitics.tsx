import userIcon from '../assets/UserIcon.png';
import locationIcon from '../assets/locationIcon.png';
import serversIcon from '../assets/serversIcon.jpg';

type StatisticsCardItem = {
  icon: string;
  title: string;
  value: string;
};

export const StatisticsCardItems : StatisticsCardItem[]= [
  { icon: userIcon, title: 'Users', value: '90+' },
  { icon: locationIcon, title: 'Locations', value: '30+' },
  { icon: serversIcon, title: 'Servers', value: '50' },
];