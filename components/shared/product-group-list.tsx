import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "./title";
import { ProductCard } from "./product-card";

interface ProductGroupListProps {
  title: string;
  items: any[];
  className?: string;
  listClassName?: string;
  categoryId?: number;
}

const ProductGroupList: React.FC<ProductGroupListProps> = ({
  title,
  items,
  className,
  listClassName,
  categoryId,
}) => {
  return (
    <div className={cn(className)}>
      <Title text={title} size="lg" className="mb-5 font-extrabold" />

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.items[0].price}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export { ProductGroupList };
