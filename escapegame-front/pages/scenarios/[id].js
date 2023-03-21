import Head from "next/head";
import Carousel from "@/components/Carousel";

const Scenario = ({scenario}) => {
    const attributes = scenario.data.attributes;
    const images = attributes?.imageGallery;
    const image = images?.data?.map(image => ("http://localhost:1337" + image.attributes?.url));
    return (
        <div>
            <Head>
                <title>EscapeGame</title>
                <meta name="description" content="Escape game qui tue"/>
            </Head>
            <section className="bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{attributes.title}</h2>
                    <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">{attributes.description}</p>
                </div>

                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto w-lg text-center mb-8 lg:mb-12">
                        <a href="#">
                            <Carousel images={image}/>
                        </a>
                        <div className="px-5 pb-5">
                            <div className="flex items-center mt-2.5 mb-5">
                                {attributes.duration} heures
                            </div>
                            <div className="flex items-center mt-2.5 mb-5">
                                Max : {attributes.numberPlayer} joueurs
                            </div>
                            <div className="flex items-center justify-between">
                    <span
                        className="text-3xl font-bold text-gray-900 dark:text-white">Diffilculté : {attributes.diffulculty}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>)
        ;
};

export async function getStaticPaths() {
    const res = await fetch("http://localhost:1337/api/scenarios");
    const scenarios = await res.json();
    const paths = scenarios.data.map((scenario) => ({
        params: {id: scenario.id.toString()},
    }));

    return {paths, fallback: false};
}

export async function getStaticProps({params}) {
    const res = await fetch("http://localhost:1337/api/scenarios/" + params.id + "?populate=*");
    const scenario = await res.json();
    return {props: {scenario}};
}

export default Scenario;
