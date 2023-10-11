import { Link, Head } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import Header from "@/Partials/Header";
import Footer from "@/Partials/Footer";

export default function Home({ auth }) {
    return (
        <div className="bg-white">
            <Head title="Home" />

            {/* Header */}
            <Header user={auth.user} />

            <main className="isolate">
                {/* Hero section */}
                <div className="relative ptt-14 pt-[65px]">
                    <div
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                        />
                    </div>
                    <div className="py-24 sm:py-32">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                                <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                    An open-source photo restoration tool.{" "}
                                    <a
                                        href="https://github.com/sandeshjangam/restore-chitra"
                                        class="font-semibold"
                                    >
                                        <span
                                            class="absolute inset-0"
                                            aria-hidden="true"
                                        ></span>
                                        Read more{" "}
                                        <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                            <div className="mx-auto max-w-5xl text-center">
                                <h1 className="text-4xl font-bold tracking-tight leading-tight text-gray-900 sm:text-7xl sm:leading-tight">
                                    Photo Restoration Made Easy with{" "}
                                    <span className="text-[#338cf5]">
                                        AI Magic
                                    </span>
                                </h1>
                                <p className="mx-auto max-w-lg mt-6 text-lg leading-8 text-gray-600">
                                    Restore your old, blurry face photos
                                    effortlessly with the power of AI. 100%
                                    free, no catch - start restoring today!
                                    {/* Bring your photos back to life today! */}
                                </p>
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <Button
                                        className="px-6 py-3 text-base font-semibold"
                                        asChild
                                    >
                                        <Link href="/restore-chitra">
                                            Restore your photo
                                        </Link>
                                    </Button>
                                    {/* <a
                                        href="#"
                                        className="text-sm font-semibold leading-6 text-gray-900"
                                    >
                                        Learn more{" "}
                                        <span aria-hidden="true">→</span>
                                    </a> */}
                                </div>
                            </div>

                            {/* Compare section */}
                            <div className="mt-16 flex items-center sm:justify-center text-center flex-col sm:mt-24 sm:space-x-2 sm:flex-row">
                                <div className="mb-4">
                                    <h2 className="mb-1 font-medium text-lg">
                                        Original Photo
                                    </h2>
                                    <div className="rounded-xl m-4 bg-gray-900/5 p-0 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl">
                                        <img
                                            src="/images/original-photo.jpeg"
                                            alt="Original photo"
                                            className="w-96 h-auto rounded-2xl shadow-2xl ring-1 ring-gray-900/10"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <h2 className="mb-1 font-medium text-lg">
                                        Restored Photo
                                    </h2>
                                    <div className="rounded-xl m-4 bg-gray-900/5 p-0 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl">
                                        <img
                                            src="/images/restored-photo.jpeg"
                                            alt="Restored photo"
                                            className="w-96 h-auto rounded-2xl shadow-2xl ring-1 ring-gray-900/10"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Word section */}
                            <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-32 lg:px-8">
                                <div className="mx-auto max-w-2xl text-center">
                                    {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                        Why I chose the the word <b>"Chitra"</b>
                                        ?
                                    </p>
                                    <p className="mt-6 text-lg leading-8 text-gray-600 ali">
                                        The word <b>Chitra</b> comes from
                                        Marathi word{" "}
                                        <b>Chayachitra (छायाचित्र),</b> where{" "}
                                        <b>Chaya</b> means to <b>shadow</b>, and{" "}
                                        <b>Chitra</b> means <b>picture</b>.
                                    </p>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">
                                        I've deliberately chosen this abstract
                                        term to underscore the uniqueness of my
                                        tool. I believe that every photo holds a
                                        unique story, a moment, a shadow of time
                                        that deserves to be preserved.
                                    </p>
                                </div>
                            </div>

                            {/* Catchy section */}
                            <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-32 lg:px-8">
                                <div className="mx-auto max-w-2xl text-center">
                                    <h2 className="text-base font-semibold leading-7 text-[#338cf5]">
                                        I'm here to help you restore the hidden
                                        beauty within your treasured photos.
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Background Blob */}
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                        />
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
