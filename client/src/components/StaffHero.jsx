function StaffHero({ firstName, lastName }) {
    return (
        <div className="bg-cyan-800 h-[80vh] flex justify-center items-center">
            <div className="flex flex-col items-center gap-7">
                <div className="flex flex-col gap-4">
                    <h1 className="text-7xl font-bold text-neutral-50">
                        Hello, {firstName} {lastName}
                    </h1>
                    <h3 className="text-center text-4xl text-neutral-400">
                        How is your day?
                    </h3>
                </div>
                <div className="flex gap-5">
                    <a href="/staff/laptops">
                        <button className="px-6 py-2 bg-neutral-200 rounded-lg text-lg">
                            Laptops
                        </button>
                    </a>
                    <a href="/staff/records">
                        <button className="px-6 py-2 bg-neutral-800 rounded-lg text-lg text-neutral-50">
                            Records
                        </button>
                    </a>
                    <a href="/staff/tickets">
                        <button className="px-6 py-2 bg-neutral-800 rounded-lg text-lg text-neutral-50">
                            Tickets
                        </button>
                    </a>
                    <a href="/staff/penalties">
                        <button className="px-6 py-2 bg-neutral-800 rounded-lg text-lg text-neutral-50">
                            Penalties
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default StaffHero;
