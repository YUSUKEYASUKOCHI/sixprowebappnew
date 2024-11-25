import React from 'react';
import { Calendar, ShoppingCart, Heart, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export default function Navigation({ currentTab, onTabChange }: NavigationProps) {
  const tabs = [
    { id: 'menu', icon: Calendar, label: 'メニュー' },
    { id: 'shopping', icon: ShoppingCart, label: '買い物リスト' },
    { id: 'favorites', icon: Heart, label: 'お気に入り' },
    { id: 'guide', icon: HelpCircle, label: '使い方' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-[88px] z-40">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {tabs.map(({ id, icon: Icon, label }) => (
            <motion.button
              key={id}
              onClick={() => onTabChange(id)}
              className={`
                relative flex items-center gap-3 py-4 px-6 rounded-xl transition-all duration-300
                ${currentTab === id 
                  ? 'text-[#007AFF] bg-gradient-to-r from-blue-50/80 to-blue-50/30' 
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                }
              `}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{
                  scale: currentTab === id ? 1.1 : 1,
                  rotate: currentTab === id ? 360 : 0
                }}
                transition={{ 
                  type: 'spring',
                  stiffness: 500,
                  damping: 30,
                  duration: 0.3
                }}
              >
                <Icon 
                  className={`h-5 w-5 transition-all duration-300`} 
                  strokeWidth={currentTab === id ? 2.5 : 1.5} 
                />
              </motion.div>
              <span className={`text-sm font-medium transition-all duration-300 ${
                currentTab === id ? 'font-semibold scale-105' : ''
              }`}>
                {label}
              </span>
              {currentTab === id && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#007AFF] to-[#00C6FF]"
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
      </div>
    </nav>
  );
}