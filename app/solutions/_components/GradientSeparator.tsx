export function GradientSeparator() {
  return (
    <div className="relative my-16">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-purple-400/20" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-black px-4">
          <span className="text-purple-400">&#10022;</span>
        </span>
      </div>
    </div>
  );
}
