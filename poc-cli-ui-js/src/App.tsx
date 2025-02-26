import { useState, createContext, useContext } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

interface FormValues {
    field1: string;
    field2: string;
    field3: string;
    field4: string;
    field5: string;
    field6?: string;
}

// Translation keys type
type TranslationKeys =
    | "Form 1"
    | "Form 2"
    | "Form 3"
    | "Form 4"
    | "Form 5"
    | "Form 6"
    | "No value selected"
    | "Agree"
    | "Disagree"
    | "Form Description"
    | "Different forms based on tabs. This description area can be used to provide context and instructions for the forms below."
    | "Helpful Resources"
    | "Links to documentation, tutorials, and other helpful resources."
    | "Latest Updates"
    | "Information about recent updates and new features."
    | "Contact Support"
    | "Contact information for support and assistance."
    | "Required"
    | "Clear"
    | "Submit"
    | "Tab 1"
    | "Tab 2"
    | "Tab 3"
    | "Tab 4"
    | "Tab 5";

// Translation interfaces
interface LanguageTranslations {
    [key: string]: string;
}

interface Translations {
    en: LanguageTranslations;
    ko: LanguageTranslations;
    ja: LanguageTranslations;
}

const translations: Translations = {
    en: {
        "Form 1": "Form 1",
        "Form 2": "Form 2",
        "Form 3": "Form 3",
        "Form 4": "Form 4",
        "Form 5": "Form 5",
        "Form 6": "Form 6",
        "Form Description": "Form Description",
        "No value selected": "No value selected",
        "Agree": "Agree",
        "Disagree": "Disagree",
        "Required": "Required",
        "Clear": "Clear",
        "Submit": "Submit",
        "Tab 1": "Tab 1",
        "Tab 2": "Tab 2",
        "Tab 3": "Tab 3",
        "Tab 4": "Tab 4",
        "Tab 5": "Tab 5",
        "Helpful Resources": "Helpful Resources",
        "Links to documentation, tutorials, and other helpful resources.": "Links to documentation, tutorials, and other helpful resources.",
        "Latest Updates": "Latest Updates",
        "Information about recent updates and new features.": "Information about recent updates and new features.",
        "Contact Support": "Contact Support",
        "Contact information for support and assistance.": "Contact information for support and assistance.",
        "Different forms based on tabs. This description area can be used to provide context and instructions for the forms below.": "Different forms based on tabs. This description area can be used to provide context and instructions for the forms below."
    },
    ko: {
        "Form 1": "양식 1",
        "Form 2": "양식 2",
        "Form 3": "양식 3",
        "Form 4": "양식 4",
        "Form 5": "양식 5",
        "Form 6": "양식 6",
        "Form Description": "양식 설명",
        "No value selected": "선택된 값 없음",
        "Agree": "동의",
        "Disagree": "반대",
        "Required": "필수",
        "Clear": "지우기",
        "Submit": "제출",
        "Tab 1": "탭 1",
        "Tab 2": "탭 2",
        "Tab 3": "탭 3",
        "Tab 4": "탭 4",
        "Tab 5": "탭 5",
        "Helpful Resources": "유용한 리소스",
        "Links to documentation, tutorials, and other helpful resources.": "문서, 튜토리얼 및 기타 유용한 리소스에 대한 링크.",
        "Latest Updates": "최신 업데이트",
        "Information about recent updates and new features.": "최근 업데이트 및 새로운 기능에 대한 정보.",
        "Contact Support": "지원 문의",
        "Contact information for support and assistance.": "지원 및 도움을 위한 연락처 정보.",
        "Different forms based on tabs. This description area can be used to provide context and instructions for the forms below.": "탭에 기반한 다양한 양식. 이 설명 영역은 아래 양식에 대한 컨텍스트와 지침을 제공하는 데 사용할 수 있습니다."
    },
    ja: {
        "Form 1": "フォーム 1",
        "Form 2": "フォーム 2",
        "Form 3": "フォーム 3",
        "Form 4": "フォーム 4",
        "Form 5": "フォーム 5",
        "Form 6": "フォーム 6",
        "Form Description": "フォームの説明",
        "No value selected": "値が選択されていません",
        "Agree": "同意する",
        "Disagree": "不同意",
        "Required": "必須",
        "Clear": "クリア",
        "Submit": "送信",
        "Tab 1": "タブ 1",
        "Tab 2": "タブ 2",
        "Tab 3": "タブ 3",
        "Tab 4": "タブ 4",
        "Tab 5": "タブ 5",
        "Helpful Resources": "役立つリソース",
        "Links to documentation, tutorials, and other helpful resources.": "ドキュメント、チュートリアル、およびその他の役立つリソースへのリンク。",
        "Latest Updates": "最新の更新",
        "Information about recent updates and new features.": "最近の更新と新機能に関する情報。",
        "Contact Support": "サポートに連絡",
        "Contact information for support and assistance.": "サポートと支援の連絡先情報。",
        "Different forms based on tabs. This description area can be used to provide context and instructions for the forms below.": "タブに基づいたさまざまなフォーム。この説明領域は、以下のフォームのコンテキストと手順を提供するために使用できます。"
    }
};



// Create a language context
const LanguageContext = createContext<string>("en");

// Custom hook to access the language context
const useLanguage = () => {
    return useContext(LanguageContext);
};

const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Tab 1");
    const [language, setLanguage] = useState("en");
    const tabs = ["Tab 1", "Tab 2", "Tab 3", "Tab 4", "Tab 5"];

    const t = (key: TranslationKeys) =>
        translations[language as keyof typeof translations][key] || key;

    const renderForm = () => {
        switch (activeTab) {
            case "Tab 1":
                return <Form content={t("Form 1")} />;
            case "Tab 2":
                return <Form content={t("Form 2")} />;
            case "Tab 3":
                return <Form content={t("Form 3")} />;
            case "Tab 4":
                return <Form content={t("Form 4")} />;
            case "Tab 5":
                return <Form content={t("Form 5")} />;
            default:
                return null;
        }
    };

    return (
        <LanguageContext.Provider value={language}>
            <div className="bg-gray-100 min-h-screen flex flex-col font-sans">
                {/* Language Bar */}
                <div className="bg-white p-2 shadow-md">
                    <div className="container mx-auto flex justify-end">
                        <ul className="flex space-x-4">
                            {Object.keys(translations).map((lang) => (
                                <li key={lang}>
                                    <button
                                        onClick={() => setLanguage(lang)}
                                        className="font-medium hover:text-blue-600"
                                    >
                                        {lang.toUpperCase()}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="bg-white p-4 shadow-md border-b border-gray-200">
                    <div className="container mx-auto flex justify-center">
                        <ul className="flex space-x-4">
                            {tabs.map((tab) => (
                                <li key={tab}>
                                    <button
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 rounded-md font-medium text-gray-700 hover:text-blue-600 transition duration-300
                    ${
                                            activeTab === tab
                                                ? "bg-blue-50 text-blue-600 border border-blue-600 font-semibold"
                                                : "hover:bg-gray-100"
                                        }`}
                                    >
                                        {t(tab as TranslationKeys)}
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
                            <InfoBox
                                title={t("Helpful Resources")}
                                content={t(
                                    "Links to documentation, tutorials, and other helpful resources."
                                )}
                            />
                            <InfoBox
                                title={t("Latest Updates")}
                                content={t("Information about recent updates and new features.")}
                            />
                            <InfoBox
                                title={t("Contact Support")}
                                content={t("Contact information for support and assistance.")}
                            />
                        </div>

                        {/* Main Content Area */}
                        <div className="w-3/4">
                            {/* Main Info Box */}
                            <div className="bg-white p-6 shadow-md border rounded-lg mb-8">
                                <div className="prose lg:prose-xl max-w-none">
                                    <h2>{t("Form Description")}</h2>
                                    <p>
                                        {t(
                                            "Different forms based on tabs. This description area can be used to provide context and instructions for the forms below."
                                        )}
                                    </p>
                                </div>
                            </div>

                            {/* Form Area */}
                            {renderForm()}
                        </div>
                    </div>
                </div>
            </div>
        </LanguageContext.Provider>
    );
};

// Info Box Component
const InfoBox: React.FC<{ title: string; content: string }> = ({
                                                                   title,
                                                                   content,
                                                               }) => (
    <div className="bg-white p-6 shadow-md border rounded-lg mb-6">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p>{content}</p>
    </div>
);

const Form: React.FC<{ content: string }> = ({ content }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

    const handleClear = () => {
        reset();
    };

    const language = useLanguage();

    const t = (key: TranslationKeys) =>
        translations[language as keyof typeof translations][key] || key;

    return (
        <div className="bg-white p-8 shadow-md border rounded-lg relative">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">{content}</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {["field1", "field2", "field3", "field4"].map((field) => (
                    <div key={field} className="mb-4">
                        <label htmlFor={field} className="block font-medium text-gray-700 mb-2">
                            {field}
                        </label>
                        <input
                            id={field}
                            {...register(field as keyof FormValues, { required: t("Required") })}
                            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        />
                        {errors[field as keyof FormValues] && (
                            <p className="text-red-500 mt-1">
                                {errors[field as keyof FormValues]?.message}
                            </p>
                        )}
                    </div>
                ))}

                {/* Checkbox for field5 */}
                <div className="mb-4">
                    <label className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            {...register("field5")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-gray-700">{t("Form 5")}</span>
                    </label>
                </div>

                {/* Dropdown for field6 */}
                <div className="mb-16">
                    <label htmlFor="field6" className="block font-medium text-gray-700 mb-2">
                        {t("Form 6")}
                    </label>
                    <select
                        id="field6"
                        {...register("field6")}
                        className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    >
                        <option value="">{t("No value selected")}</option>
                        <option value="agree">{t("Agree")}</option>
                        <option value="disagree">{t("Disagree")}</option>
                    </select>
                </div>

                {/* Buttons floating right */}
                <div className="absolute bottom-8 right-8">
                    <div className="flex space-x-4">
                        <button
                            type="button"
                            onClick={handleClear}
                            className="bg-red-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-md transition duration-300"
                        >
                            {t("Clear")}
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300"
                        >
                            {t("Submit")}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};



export default App;
