export default function Tab({ tabData, field, setField }) {
    return (
      <div
        style={{
          boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
        }}
        className="flex bg-sky-700 p-1 gap-x-1 my-6 rounded-full max-w-max"
      >
        {tabData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setField(tab.type)}
            className={`${
              field === tab.type
                ? "bg-sky-300 text-richblack-900 font-semibold"
                : "bg-transparent text-richblack-50 font-semibold"
            } py-2 px-5 rounded-full transition-all duration-200`}
          >
            {tab?.tabName}
          </button>
        ))}
      </div>
    );
  }