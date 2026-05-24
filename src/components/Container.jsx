export function Container({ children, className = '', as: Component = 'section', id }) {
  return (
    <Component id={id} className={`section-shell ${className}`}>
      {children}
    </Component>
  );
}
