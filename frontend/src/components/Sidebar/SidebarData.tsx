import {
    AiFillCaretDown,
    AiFillCaretUp,
    AiOutlineHistory,
    AiOutlineHome,
    AiOutlineMoneyCollect,
    AiOutlineUser
} from 'react-icons/ai';
import { MdEventAvailable } from 'react-icons/md';
import { FaChild, FaCog, FaOpencart } from 'react-icons/fa';
import SidebarItem from '../../models/SidebarItem';

export const SidebarData: SidebarItem[] = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiOutlineHome />,
        /* 
        @mehdi
        In case a subnav is needed, uncomment the following lines and add the subnav items 
        */
        // iconClosed: <AiFillCaretDown />,
        // iconOpened: <AiFillCaretUp />,
        // subnav: [
        //     {
        //         title: 'Users',
        //         path: '/overview/users',
        //         icon: <AiOutlineUser />
        //     },
        //     {
        //         title: 'Revenue',
        //         path: '/overview/revenue',
        //         icon: <AiOutlineMoneyCollect />
        //     }
        // ]
    },
    {
        title: 'Events',
        path: '/',
        icon: <MdEventAvailable />
    },
    {
        title: 'History',
        path: '/history',
        icon: <AiOutlineHistory />
    },
    {
        title: 'Dependents',
        path: '/dependents',
        icon: <FaChild />
    },
    {
        title: 'Profile',
        path: '/complete-profile',
        icon: <FaCog />
    }
];