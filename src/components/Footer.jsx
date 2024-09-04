import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';

const navigation = [
  // {
  //   name: 'Facebook',
  //   href: '#',
  //   icon: FaFacebookF,
  // },
  // {
  //   name: 'Instagram',
  //   href: '#',
  //   icon: FaInstagram,
  // },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/santhosh-kumar-barigeda/',
    icon: FaLinkedinIn,
  },
  // {
  //   name: 'Twitter',
  //   href: '#',
  //   icon: FaTwitter,
  // },
  {
    name: 'GitHub',
    href: 'https://github.com/santhosh10378',
    icon: FaGithub,
  },
  // {
  //   name: 'YouTube',
  //   href: '#',
  //   icon: FaYoutube,
  // },
];

export default function Footer() {
  return (
    <footer className='py-8'>
      <div className='container max-w-3xl'>
        <div className='md:flex md:items-center md:justify-between'>
          <div className='flex justify-center space-x-6 md:order-2'>
            {navigation.map((item) => (
              <a key={item.name} href={item.href} target='_blank' rel='noreferrer noopener' className='text-muted-foreground hover:text-foreground'>
                <span className='sr-only'>{item.name}</span>
                <item.icon aria-hidden='true' className='h-3 w-3' />
              </a>
            ))}
          </div>
          <div className='mt-8 md:order-1 md:mt-0'>
            <p className='text-center text-xs leading-5 text-muted-foreground'>&copy; {new Date().getFullYear()} Pixelswift. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
