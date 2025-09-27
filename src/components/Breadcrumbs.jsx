// MUI
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

// react router
import { useLocation, NavLink } from 'react-router';

// =======================================================================================
export default function BasicBreadcrumbs() {
  const location = useLocation()
  let pathnameLink = location.pathname.split("/");
  console.log()

  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Typography sx={{ color: "text.primary" }}>Dashboard</Typography>
        <Link component={NavLink} to={pathnameLink[pathnameLink.length - 1]} replace={true}>
          {pathnameLink[pathnameLink.length - 1]}
        </Link>
      </Breadcrumbs>
    </div>
  );
}
