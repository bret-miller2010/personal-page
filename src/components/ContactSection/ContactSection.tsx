/** @format */

export default function ContactSection() {
    return (
        <div className="mb-10">
            <form action="submit">
                <div className="flex flex-col space-y-1 rounded">
                    <input
                        type="text"
                        placeholder="Name..."
                        className="w-80 border-2 pl-1"
                    />
                    <input
                        type="text"
                        placeholder="Email..."
                        className="w-80 border-2 pl-1"
                    />
                    <input
                        type="text"
                        placeholder="Use this field to send me a message"
                        className="w-80 h-80 border-2 pl-1"
                    />
                </div>
            </form>
        </div>
    );
}
