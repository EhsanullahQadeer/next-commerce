import { cn } from '@/lib/utils';
import { ColorVariant } from '@/types/product';
import { FC, useEffect, useState } from 'react';

interface ColorVariantProps {
  variants?: ColorVariant[];
  currenValue: string;
  onChangeColorVarient: (color: string) => void
}

const ColorVariants: FC<ColorVariantProps> = ({ variants, currenValue, onChangeColorVarient }) => {

  if (!variants) return;

  return (
    <div className="flex items-center gap-[5px]">
      {variants.map((variant,index) => (
        <div
          key={variant.id + index}
          className={cn(
            'h-[17px] w-[17px] cursor-pointer rounded-full mt-[5px] border-2 border-white transition-shadow duration-[0.35s] ease hover:shadow-variant',
            currenValue === variant.color && 'shadow-variant'
          )}
          style={{ background: variant.color }}
          onClick={() => onChangeColorVarient(variant.color)}
        ></div>
      ))}
    </div>
  );
};

export default ColorVariants;
