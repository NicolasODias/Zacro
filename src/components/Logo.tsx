import { motion } from 'motion/react';

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <motion.div 
      className={`relative flex items-center justify-center overflow-hidden rounded-lg ${className}`}
      whileHover={{ scale: 1.05 }}
    >
      <img 
        src="/images/logo-zacro.png" 
        alt="Zacro Agency Logo" 
        className="w-full h-full object-contain"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
        referrerPolicy="no-referrer"
      />
    </motion.div>
  );
}
