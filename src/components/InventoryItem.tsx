
import { cn } from '@/lib/utils';

interface InventoryItemProps {
  name: string;
  level: number;
  className?: string;
  maxLevel?: number;
}

export const InventoryItem = ({
  name,
  level,
  className,
  maxLevel = 5,
}: InventoryItemProps) => {
  return (
    <div className={cn('retro-border p-2 flex flex-col gap-1 bg-retro-dark-brown', className)}>
      <div className="text-retro-amber uppercase tracking-wide text-sm">{name}</div>
      <div className="flex items-center gap-1">
        {Array.from({ length: maxLevel }).map((_, i) => (
          <div
            key={i}
            className={cn(
              'w-3 h-3 border border-retro-border-brown',
              i < level ? 'bg-retro-amber' : 'bg-retro-dark-gray/50'
            )}
          />
        ))}
      </div>
    </div>
  );
};
