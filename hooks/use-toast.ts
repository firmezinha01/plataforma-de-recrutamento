// This is a placeholder for a useToast hook.
// In a real shadcn/ui project, this would typically be provided by the
// shadcn/ui toast component, which uses a context provider.
// For v0, we'll just provide a basic mock.

import * as React from 'react';

type Toast = {
  id: string;
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success';
  duration?: number;
};

type ToastContextType = {
  toast: (props: Omit<Toast, 'id'>) => void;
};

const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const toast = React.useCallback((props: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, ...props }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, props.duration || 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {/* Simple toast display for demonstration */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`p-4 rounded-md shadow-lg ${
              t.variant === 'destructive' ? 'bg-red-500 text-white' :
              t.variant === 'success' ? 'bg-green-500 text-white' :
              'bg-gray-800 text-white'
            }`}
          >
            {t.title && <div className="font-bold">{t.title}</div>}
            {t.description && <div className="text-sm">{t.description}</div>}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
