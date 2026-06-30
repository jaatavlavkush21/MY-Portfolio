@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: 'Inter', sans-serif;
  --font-display: 'Space Grotesk', sans-serif;
  
  --color-primary-light: #60a5fa;
  --color-primary: #3b82f6;
  --color-primary-dark: #1d4ed8;
  --color-secondary: #a855f7;
  --color-accent: #c084fc;
}

@layer utilities {
  .glass {
    background: rgba(15, 23, 42, 0.45);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
  
  .glass-card {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.07);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
  }

  .glass-card-hover {
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .glass-card-hover:hover {
    transform: translateY(-6px);
    border-color: rgba(96, 165, 250, 0.3);
    box-shadow: 0 12px 40px -10px rgba(59, 130, 246, 0.25);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
  }

  .glass-input {
    background: rgba(15, 23, 42, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    transition: all 0.3s ease;
  }

  .glass-input:focus {
    outline: none;
    border-color: rgba(168, 85, 247, 0.5);
    box-shadow: 0 0 15px rgba(168, 85, 247, 0.25);
    background: rgba(15, 23, 42, 0.8);
  }

  .glow-text {
    text-shadow: 0 0 20px rgba(96, 165, 250, 0.5);
  }

  .bg-grid-pattern {
    background-size: 40px 40px;
    background-image: 
      linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  }
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #090d16;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(96, 165, 250, 0.4);
}

/* Animations */
@keyframes pulse-slow {
  0%, 100% {
    transform: scale(1) translate(0px, 0px);
    opacity: 0.3;
  }
  33% {
    transform: scale(1.1) translate(30px, -50px);
    opacity: 0.4;
  }
  66% {
    transform: scale(0.95) translate(-20px, 20px);
    opacity: 0.35;
  }
}

@keyframes pulse-slow-reverse {
  0%, 100% {
    transform: scale(1) translate(0px, 0px);
    opacity: 0.25;
  }
  50% {
    transform: scale(1.15) translate(-40px, 30px);
    opacity: 0.4;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 15s infinite alternate ease-in-out;
}

.animate-pulse-slow-reverse {
  animation: pulse-slow-reverse 18s infinite alternate ease-in-out;
}

html {
  scroll-behavior: smooth;
}
