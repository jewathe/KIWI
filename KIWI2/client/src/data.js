// import icons
import {
    FaYoutube,
    FaFacebookF,
    FaInstagram,
    FaPinterestP,
    FaDiscord
} from 'react-icons/fa'
// import images

export const socialData = [
    { href: '/', icon: <FaYoutube /> },
    { href: '/', icon: <FaFacebookF /> },
    { href: '/', icon: <FaInstagram /> },
    { href: '/', icon: <FaPinterestP /> },
    { href: '/', icon: <FaDiscord /> }
]

export const newsletterData = {
    title: 'join our newsletter',
    subtitle: 'Get latest news & updates in your inbox.',
    placeholder: 'Subscribe our delicious dishes',
    btnText: 'subscribe now'
}

export const footerData = {
    contact: {
        title: 'contact location',
        address: '3784 patterson road, #8 new york, CA 69000',
        phone: '(201)256-3689'
    },
    hours: {
        title: 'working hours',
        program: [
            {
                days: 'monday - friday',
                hours: '09:00 AM - 10:00 PM'
            },
            {
                days: 'saturday - sunday',
                hours: '09:00 AM - 11:00 PM'
            }
        ]
    },
    social: {
        title: 'social network',
        icons: [
            { href: '/', icon: <FaYoutube /> },
            { href: '/', icon: <FaFacebookF /> },
            { href: '/', icon: <FaInstagram /> },
            { href: '/', icon: <FaPinterestP /> },
            { href: '/', icon: <FaDiscord /> }
        ]
    }
}
