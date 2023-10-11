import Dropdown from "@/Components/Dropdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";

/* Header */
export default function Header({ user }) {
    return (
        <header className="max-w-6xl mx-auto absolute inset-x-0 top-0 z-50">
            <nav
                className="flex items-center justify-between p-4 lg:px-6 border-b-[1px] border-gray-200 dark:border-gray-700"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <a href="/" className="p-1.5">
                        <h1 class="sm:text-2xl text-2xl font-bold">
                            RestoreChitra AI
                        </h1>
                    </a>
                </div>

                {!user && (
                    <div className="flex flex-1 justify-end lg:flex lg:flex-1 lg:justify-end">
                        <a
                            href="/login"
                            className="text-sm p-1.5 font-semibold leading-6 text-gray-900"
                        >
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                )}
                {user && (
                    <div className="sm:flex sm:items-center sm:ml-6">
                        <div className="ml-3 relative">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            <span className="mr-2">
                                                {user.name}
                                            </span>
                                            <Avatar className="w-8 h-8">
                                                <AvatarImage src="" />
                                                <AvatarFallback>
                                                    {user.name.charAt(0)}
                                                </AvatarFallback>
                                            </Avatar>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
