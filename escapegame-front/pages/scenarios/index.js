import Head from "next/head";

const Index = ({scenarios}) => {
    return (
        <div>
            <Head>
                <title>EscapeGame</title>
                <meta name="description" content="Escape game qui tue"/>
            </Head>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto w-lg text-center mb-8 lg:mb-12">
                        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white p-4">Les <mark
                            className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">scénarios</mark> possibles
                        </h1>
                        <div>

                        </div>
                        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                            {scenarios.data.map((scenario) => (
                                <div key={scenario.id}
                                     className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {scenario.attributes.title}
                                    </h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        Difficulté : {scenario.attributes.diffulculty}
                                    </p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        Durée : {scenario.attributes.duration} heures
                                    </p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        Nombre de joueurs maximum : {scenario.attributes.numberPlayer}
                                    </p>
                                    <a
                                        href={`/scenarios/${scenario.id}`}
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Plus d'infos
                                        <svg
                                            aria-hidden="true"
                                            className="w-4 h-4 ml-2 -mr-1"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export async function getStaticProps() {
    const res = await fetch("http://localhost:1337/api/scenarios");
    const scenarios = await res.json();
    return {
        props: {
            scenarios,
        },
    };
}

export default Index;
