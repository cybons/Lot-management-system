/**
 * ステータスバッジコンポーネント
 */

import React from 'react';

export type StatusVariant = 
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'default';

interface StatusBadgeProps {
  label: string;
  variant?: StatusVariant;
  className?: string;
}

const variantStyles: Record<StatusVariant, string> = {
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  error: 'bg-red-100 text-red-800',
  info: 'bg-blue-100 text-blue-800',
  default: 'bg-gray-100 text-gray-800',
};

export function StatusBadge({
  label,
  variant = 'default',
  className = '',
}: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${variantStyles[variant]} ${className}`}
    >
      {label}
    </span>
  );
}

// 事前定義されたステータスバッジ
export const LotStatusBadge = ({ status }: { status: string }) => {
  const variant: StatusVariant = 
    status === 'active' ? 'success' :
    status === 'allocated' ? 'info' :
    status === 'shipped' ? 'default' :
    'error';
  
  const label = 
    status === 'active' ? '有効' :
    status === 'allocated' ? '引当済' :
    status === 'shipped' ? '出荷済' :
    status === 'inactive' ? '無効' :
    status;
  
  return <StatusBadge label={label} variant={variant} />;
};

export const OrderStatusBadge = ({ status }: { status: string }) => {
  const variant: StatusVariant = 
    status === 'open' ? 'warning' :
    status === 'allocated' ? 'info' :
    status === 'shipped' ? 'success' :
    status === 'closed' ? 'default' :
    'default';
  
  const label = 
    status === 'open' ? '未処理' :
    status === 'allocated' ? '引当済' :
    status === 'shipped' ? '出荷済' :
    status === 'closed' ? '完了' :
    status;
  
  return <StatusBadge label={label} variant={variant} />;
};
