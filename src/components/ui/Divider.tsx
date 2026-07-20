import { cn } from '@/lib/utils/cn';

interface DividerProps {
  className?: string;
}

export function Divider({ className }: DividerProps) {
  return <hr className={cn('editorial-rule', className)} />;
}
