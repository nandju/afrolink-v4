import Link from 'next/link';

const GetStartedButton = ({ padding, fullWidth }) => {
  return (
    <Link
      href="/schedule-call"
      style={{
        padding: padding,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '6.25rem',
        background: 'var(--accent-gradient)',
        color: '#fff',
        fontSize: '1rem',
        fontWeight: 600,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        textDecoration: 'none',
        width: fullWidth ? '100%' : 'auto',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(226, 124, 0, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      Planifier un appel
    </Link>
  );
};

export default GetStartedButton;
