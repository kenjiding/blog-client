const ShinyText = ({ text = '', disabled = false, speed = 3, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`bg-clip-text text-transparent inline-block ${disabled ? 'dark:text-zinc-300 text-zinc-600' : 'animate-shine'} ${className}`}
      style={{
        backgroundImage: disabled 
          ? 'none'
          : 'linear-gradient(120deg, rgba(107, 114, 128, 0.7) 40%, rgba(255, 255, 255, 1) 50%, rgba(107, 114, 128, 0.7) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animationDuration: animationDuration,
        color: disabled ? 'inherit' : 'transparent',
      }}
    >
      {text}
    </div>
  );
};

export default ShinyText;