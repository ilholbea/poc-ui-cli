import { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

interface FormValues {
    field1: string;
    field2: string;
    field3: string;
    field4: string;
    field5: string;
}

const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Tab 1");
    const tabs = ["Tab 1", "Tab 2", "Tab 3", "Tab 4", "Tab 5"];

    const renderForm = () => {
        switch (activeTab) {
            case "Tab 1": return <Form content="Form 1" />;
            case "Tab 2": return <Form content="Form 2" />;
            case "Tab 3": return <Form content="Form 3" />;
            case "Tab 4": return <Form content="Form 4" />;
            case "Tab 5": return <Form content="Form 5" />;
            default: return null;
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col font-sans">
            {/* Navigation */}
            <nav className="bg-white p-4 shadow-md border-b border-gray-200">
                <div className="container mx-auto flex justify-center">
                    <ul className="flex space-x-4">
                        {tabs.map((tab) => (
                            <li key={tab}>
                                <button
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 rounded-md font-medium text-gray-700 hover:text-blue-600 transition duration-300
                    ${activeTab === tab
                                        ? "bg-blue-50 text-blue-600 border border-blue-600 font-semibold"
                                        : "hover:bg-gray-100"
                                    }`}
                                >
                                    {tab}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto mt-8 flex-grow flex items-start">
                <div className="w-full flex">

                    {/* Side Info Boxes */}
                    <div className="w-1/4 mr-8">
                        <InfoBox title="Helpful Resources" content="Links to documentation, tutorials, and other helpful resources." />
                        <InfoBox title="Latest Updates" content="Information about recent updates and new features." />
                        <InfoBox title="Contact Support" content="Contact information for support and assistance." />
                    </div>

                    {/* Main Content Area */}
                    <div className="w-3/4">

                        {/* Main Info Box */}
                        <div className="bg-white p-6 shadow-md border rounded-lg mb-8">
                            <div className="prose lg:prose-xl max-w-none">
                                <h2>Form Description</h2>
                                <p>Different forms based on tabs. This description area can be used to provide context and instructions for the forms below.</p>
                            </div>
                        </div>

                        {/* Form Area */}
                        {renderForm()}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Info Box Component
const InfoBox: React.FC<{ title: string; content: string }> = ({ title, content }) => (
    <div className="bg-white p-6 shadow-md border rounded-lg mb-6">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p>{content}</p>
    </div>
);

const Form: React.FC<{ content: string }> = ({ content }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

    const handleClear = () => {
        reset();
    };

    return (
        <div className="bg-white p-8 shadow-md border rounded-lg relative">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">{content}</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {["field1", "field2", "field3", "field4", "field5"].map((field, index, arr) => (
                    <div key={field} className={`${index === arr.length - 1 ? 'mb-16' : 'mb-0'}`}> {/* Conditional margin */}
                        <label htmlFor={field} className="block font-medium text-gray-700 mb-2">{field}</label>
                        <input
                            id={field}
                            {...register(field as keyof FormValues, { required: "Required" })}
                            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        />
                        {errors[field as keyof FormValues] && <p className="text-red-500 mt-1">{errors[field as keyof FormValues]?.message}</p>}
                    </div>
                ))}

                {/* Buttons floating right */}
                <div className="absolute bottom-8 right-8">
                    <div className="flex space-x-4">
                        <button type="button" onClick={handleClear} className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium py-3 px-6 rounded-md transition duration-300">
                            Clear
                        </button>
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default App;
