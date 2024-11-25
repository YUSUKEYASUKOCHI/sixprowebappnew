import React from 'react';
import { Calendar, ShoppingCart, Heart, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface BottomNavigationProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export default function BottomNavigation({ currentTab, onTabChange }: BottomNavigationProps) {
  const tabs = [
    { id: 'menu', icon: Calendar, label: 'メニュー' },
    { id: 'shopping', icon: ShoppingCart, label: '買い物リスト' },
    { id: 'favorites', icon: Heart, label: 'お気に入り' },
    { id: 'guide', icon: HelpCircle, label: '使い方' },
  ];

  return (
    <motion.nav 
      className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-100 px-4 pb-safe pt-2 z-50"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
    >
      <div className="flex justify-around items-center max-w-lg mx-auto">
        {tabs.map(({ id, icon: Icon, label }) => (
          <motion.button
            key={id}
            onClick={() => onTabChange(id)}
            className={`
              relative flex flex-col items-center justify-center p-3 min-w-[80px] min-h-[64px]
              rounded-xl transition-all duration-300
              ${currentTab === id 
                ? 'text-[#007AFF] bg-gradient-to-b from-blue-50/80 to-blue-50/30' 
                : 'text-gray-400 hover:text-gray-600'
              }
            `}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{
                scale: currentTab === id ? 1.2 : 1,
                y: currentTab === id ? -4 : 0
              }}
              transition={{ 
                type: 'spring',
                stiffness: 500,
                damping: 30
              }}
            >
              <Icon 
                className="h-6 w-6 transition-all duration-300" 
                strokeWidth={currentTab === id ? 2.5 : 1.5} 
              />
            </motion.div>
            <span className={`text-xs mt-1.5 transition-all duration-300 ${
              currentTab === id ? 'font-semibold scale-105' : ''
            }`}>
              {label}
            </span>
            {currentTab === id && (
              <motion.div
                layoutId="bottomNav"
                className="absolute bottom-1 h-1 w-8 bg-gradient-to-r from-[#007AFF] to-[#00C6FF] rounded-full"
                transition={{ 
                  type: 'spring',
                  stiffness: 500,
                  damping: 30
                }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
}