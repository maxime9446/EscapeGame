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
                        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white p-4">
                            <mark
                                className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Réserver
                            </mark>
                            en ligne
                        </h1>

                        <form>
                            <div className="mb-6">
                                <label htmlFor="scenarios"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Scénarios</label>

                                <select
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option>Sélectionne ton scénario</option>
                                    {scenarios.data.map((scenario) => (
                                        <option key={scenario.id}>{scenario.attributes.title}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="numberPlayer"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre
                                    de joueurs</label>

                                <select
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required>
                                    <option>Sélectionne ton nombre de joueurs</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                            <a href="https://buy.stripe.com/test_9AQ9EFgxlb7e9EY6oo"
                               className="text-white mb-14 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-500">Payer
                            </a>
                            <div className="flex justify-center items-center">
                                <img src="/logo-stripe.png"></img>
                            </div>
                        </form>
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
