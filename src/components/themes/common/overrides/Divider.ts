export default function Divider() {
  return {
    MuiDivider: {
      styleOverrides: {
        root: {
          borderTop: '0px solid rgba(0, 0, 0, 0.12)',
          borderRight: '0px solid rgba(0, 0, 0, 0.12)',
          borderLeft: '0px solid rgba(0, 0, 0, 0.12)',
          borderBottom: 'none',
          margin: '1rem 0px',
          height: '0.0625rem',
          backgroundColor: 'transparent',
          backgroundImage: 'linear-gradient(to right, rgba(52, 71, 103, 0), rgba(52, 71, 103, 0.4), rgba(52, 71, 103, 0))',
          opacity: '0.45'
        }
      }
    }
  }
}
