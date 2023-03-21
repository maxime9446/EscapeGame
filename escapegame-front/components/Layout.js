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
                <a href="https://github.com/maxime9446/EscapeGame"
                   className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"/>
                    </svg>
                    <span className="sr-only">GitHub account</span>
                </a>
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
