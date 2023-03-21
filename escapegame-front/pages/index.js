import Head from "next/head";

const Index = () => {
    return (
        <div>
            <Head>
                <title>EscapeGame</title>
                <meta name="description" content="Escape game qui tue"/>
            </Head>

            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto w-lg text-center mb-8 lg:mb-12">
                        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Reprenez <mark
                            className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">le contrôle</mark> bientôt
                            !
                        </h1>
                        <video
                            className="w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700"
                            autoPlay={true} muted loop>
                            <source src="/LaMine.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Index;
