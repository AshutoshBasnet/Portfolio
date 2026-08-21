function PokeballIcon({ size = 20, className = '', color = '#E11D48' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    >
      {/* Outer Circle */}
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.75" />
      
      {/* Upper Half Filled */}
      <path
        d="M2.5 12 A9.5 9.5 0 0 1 21.5 12 Z"
        fill={color}
      />
      
      {/* Lower Half Filled */}
      <path
        d="M2.5 12 A9.5 9.5 0 0 0 21.5 12 Z"
        fill="#FFFFFF"
      />

      {/* Middle Dividing Line */}
      <line x1="2" y1="12" x2="22" y2="12" stroke="#0F172A" strokeWidth="1.75" />

      {/* Center Outer Ring */}
      <circle cx="12" cy="12" r="3.2" fill="#0F172A" />

      {/* Center Inner Dot */}
      <circle cx="12" cy="12" r="1.8" fill="#FFFFFF" />
    </svg>
  );
}

export default PokeballIcon;
