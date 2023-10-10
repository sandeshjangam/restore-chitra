import { Link } from "@inertiajs/react";

/* Footer */
export default function Footer() {
    return (
        <footer
            aria-labelledby="footer-heading"
            className="mx-auto mt-16 max-w-7xl px-6 lg:px-8"
        >
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="relative border-t border-gray-900/10 sm:mt-16">
                <div className="flex flex-col justify-center items-center md:flex-row md:text-left md:flex md:items-center md:justify-between py-4 md:py-8">
                    {/* Copyrights note */}
                    <div className="mb-4 md:mb-0 text-sm text-gray-600">
                        Tech stack{" "}
                        <a
                            className="text-blue-600 hover:underline"
                            href="https://laravel.com"
                            target="_blank"
                        >
                            Laravel
                        </a>
                        {", "}
                        <a
                            className="text-blue-600 hover:underline"
                            href="https://react.dev"
                            target="_blank"
                        >
                            React
                        </a>
                        {", "}
                        <a
                            className="text-blue-600 hover:underline"
                            href="https://inertiajs.com"
                            target="_blank"
                        >
                            Inertia,
                        </a>{" "}
                        and{" "}
                        <a
                            className="text-blue-600 hover:underline"
                            href="https://replicate.com"
                            target="_blank"
                        >
                            Replicate
                        </a>
                        .
                    </div>

                    {/* Social links */}
                    <ul className="flex mb-0">
                        <li>
                            <a
                                href="https://github.com/sandeshjangam"
                                target="_blank"
                                className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                                aria-label="Github"
                            >
                                <svg
                                    className="w-8 h-8 fill-current"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                                </svg>
                            </a>
                        </li>
                        <li className="ml-4">
                            <a
                                href="https://twitter.com/sandesh055"
                                target="_blank"
                                className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                                aria-label="Twitter"
                            >
                                <svg
                                    className="w-8 h-8 fill-current"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                                </svg>
                            </a>
                        </li>

                        {/* <li className="ml-4">
                            <a
                                href="#"
                                target="_blank"
                                className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                                aria-label="Facebook"
                            >
                                <svg
                                    className="w-8 h-8 fill-current"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                                </svg>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </footer>
    );
}
