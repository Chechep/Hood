export default function Button({ text, onClick }) {
    return (
      <button
        onClick={onClick}
        className="bg-emerald-500 hover:bg-emerald-600 text-lightyellow px-4 py-2 rounded-xl shadow-md transition"
      >
        {text}
      </button>
    );
  }