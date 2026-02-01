

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-stayra-ivory flex flex-col">
            <main className="flex-grow pt-32 pb-16 px-4 container mx-auto">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h1 className="font-serif text-5xl md:text-6xl text-stayra-green">About Stayra</h1>
                    <p className="font-sans text-lg text-stayra-charcoal/80 leading-relaxed max-w-2xl mx-auto">
                        We are a collection of handpicked sanctuaries where luxury meets the raw beauty of nature.
                        Every property in our portfolio is chosen for its unique story, architectural character, and ability to transport you to a state of pure serenity.
                    </p>
                </div>
            </main>
        </div>
    );
}
