import ThemeToogler from "@/components/ThemeToogler";
import {useRouter} from 'next/router';

export default function Layout({children}) {
    const router = useRouter();
    const currentPath = router.pathname;

    return (
        <>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <img src="/logo-escapeg.png" className="max-h-14"/>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/"
                                   className={currentPath === '/' ? 'py-2 pl-3 pr-4 text-white bg-blue-700 rounded' : 'md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'}>Accueil</a>
                            </li>
                            <li>
                                <a href="/scenarios"
                                   className={currentPath === '/scenarios' ? 'py-2 pl-3 pr-4 text-white bg-blue-700 rounded' : 'md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'}>Les
                                    scénarios</a>
                            </li>
                            <li>
                                <a href="/tarifs"
                                   className={currentPath === '/tarifs' ? 'py-2 pl-3 pr-4 text-white bg-blue-700 rounded' : 'md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'}>Les
                                    tarifs</a>
                            </li>
                            <li>
                                <a href="/faq"
                                   className={currentPath === '/faq' ? 'py-2 pl-3 pr-4 text-white bg-blue-700 rounded' : 'md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'}>FAQ</a>
                            </li>
                            <li>
                                <ThemeToogler/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main>{children}</main>

            <footer
                className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a
                        href="https://flowbite.com/" className="hover:underline">ICB™</a>. All Rights Reserved.</span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li><a href="#" className="mr-4 hover:underline md:mr-6 ">About</a></li>
                    <li><a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a></li>
                    <li><a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a></li>
                    <li><a href="#" className="hover:underline">Contact</a></li>
                </ul>
            </footer>
        </>
    )
}
