/** @format */

export default function ContactSection() {
    return (
        <div
            className="mt-10"
            id="contact">
            <form action="submit">
                <div className="flex flex-col">
                    <input
                        type="text"
                        placeholder="Name..."
                        className="w-40 border-2"
                    />
                    <input
                        type="text"
                        placeholder="Email..."
                        className="w-40 border-2"
                    />
                    <input
                        type="text"
                        placeholder="Use this field to send me a message"
                        className="w-40 h-80 border-2"
                    />
                </div>
            </form>
        </div>
    );
}
