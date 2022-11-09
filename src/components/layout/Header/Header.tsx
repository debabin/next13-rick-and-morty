import Link from 'next/link';

import { Logo } from '@components/icons';
import { ROUTES } from '@utils/constants';

export const Header = () => (
  <header className='w-full bg-gray-300'>
    <div className='container flex justify-between py-4 items-center text-slate-700'>
      <Logo />
      <nav>
        <ul>
          <li>
            <Link href={ROUTES.CHARACTERS}>Characters</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
