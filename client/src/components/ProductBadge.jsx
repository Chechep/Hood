export default function ProductBadge({ label }) {
    return (
      <div className="px-4 py-2 rounded-full bg-yellow-300/10 border border-yellow-300/20 text-yellow-200 text-sm">
        {label}
      </div>
    );
  }