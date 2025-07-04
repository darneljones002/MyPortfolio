export function Button({ children, className = '', asChild = false, ...props }) {
  const Component = asChild ? 'span' : 'button';
  return (
    <Component
      className={`inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
