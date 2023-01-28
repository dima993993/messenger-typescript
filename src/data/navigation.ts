import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
export const menuItems = [
    {id: "chats", title: 'Chats', icon: ChatOutlinedIcon, clickHandler: '...'},
    {id: "profile", title: 'Profile', icon: AccountCircleOutlinedIcon, clickHandler: '...'},
    {id: "contacts", title: 'Contacts', icon: PermContactCalendarOutlinedIcon, clickHandler: '...'},
    {id: "search-users", title: 'Search Contact', icon: PersonSearchOutlinedIcon, clickHandler: '...'},
    {id: "favorite", title: 'Favorite', icon: StarOutlineOutlinedIcon, clickHandler: '...'},
    {id: "settings", title: 'Settings', icon: SettingsOutlinedIcon, clickHandler: '...'},
]