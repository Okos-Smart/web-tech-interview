import { Link as RouterLink } from 'react-router'

type LinkProps = React.ComponentProps<typeof RouterLink>

export const Link = ({ children, ...props }: LinkProps) => {
  return <RouterLink {...props}>{children}</RouterLink>
}
