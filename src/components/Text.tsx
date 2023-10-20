export const Text = ({children, className, anim}) => {
 return (
  <div className={"box " + className } data-animate={ anim }>
  {children}
  </div>
 )
}