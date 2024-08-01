import Link from 'next/link';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Routes } from '@/lib/routes';
import { getUser } from '@/lib/utils.server';
import { logout } from '@/server/actions';

export default async function Page() {
    const user = await getUser();
    if (!user) {
        return (
            <div className='container flex h-full flex-col items-center justify-center gap-4'>
                <h1 className='text-4xl font-semibold'>Mag App Start(MAS)</h1>
                <ThemeToggle />
                <div className='flex items-center gap-4'>
                    <Button asChild className='w-28'>
                        <Link href={Routes.login()}>Login</Link>
                    </Button>
                    <Button asChild className='w-28' variant='outline'>
                        <Link href={Routes.getStarted()}>Get Started</Link>
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className='container flex h-full flex-col items-center justify-center gap-4'>
            <h1 className='text-4xl font-semibold'>magNext</h1>
            <ThemeToggle />
            <form action={logout}>
                <Button>Logout</Button>
            </form>
        </div>
    );
}
