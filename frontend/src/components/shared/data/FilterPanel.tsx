/**
 * フィルターパネルコンポーネント
 */

import React from 'react';

interface FilterPanelProps {
  title?: string;
  children: React.ReactNode;
  onReset?: () => void;
  activeCount?: number;
  className?: string;
}

export function FilterPanel({
  title = 'フィルター',
  children,
  onReset,
  activeCount = 0,
  className = '',
}: FilterPanelProps) {
  return (
    <div className={`rounded-lg border bg-white p-4 ${className}`}>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
          {activeCount > 0 && (
            <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">
              {activeCount}
            </span>
          )}
        </div>
        
        {onReset && activeCount > 0 && (
          <button
            onClick={onReset}
            className="text-sm text-blue-600 hover:text-blue-700"
          >
            クリア
          </button>
        )}
      </div>
      
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
}

interface FilterFieldProps {
  label: string;
  children: React.ReactNode;
}

export function FilterField({ label, children }: FilterFieldProps) {
  return (
    <div>
      <label className="mb-1 block text-xs font-medium text-gray-700">
        {label}
      </label>
      {children}
    </div>
  );
}
