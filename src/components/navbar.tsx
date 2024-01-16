import Link from 'next/link';
import Image from 'next/image';
import DarkModeSelector from './darkModeSelector';

const Navbar = () => {

    const navItems = [
        { name: 'Overview', path: '/overview'},
        { name: 'Dashboard', path: '/dashboard'}
    ]

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    {/* <Image src="/test.svg" alt="Dropdown Icon" width={20} height={20}/> */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navItems.map((item, index) => (
                        <li key={index}><Link href={item.path}>{item.name}</Link></li>
                    ))} 
                </ul>
                </div>
                <Link href="/" className="btn btn-ghost text-xl">
                    Flora
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <DarkModeSelector className='menu menu-horizontal px-1' />
                <ul className="menu menu-horizontal px-1">
                    {navItems.map((item, index) => (
                        <li key={index}><Link href={item.path} className='text-xl'>{item.name}</Link></li>
                    ))} 
                </ul>
            </div>
        </div>
    )
}

export default Navbar;