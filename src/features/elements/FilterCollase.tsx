import { FC, ReactNode } from "react";
import CategoryFilter from "./CategoryFilters";
import ColourFilters from "./ColourFilters";
import {
  selectProducts,
  selectHomePageProducts,
} from "@/store/slices/products/productsSlice";
import { useSelector } from "react-redux";
import { productSortCategories } from "@/store/slices/products/fakeProducts";
import PriceRangeInput from "@/components/PriceRangeInput";
import Collapse from "@/components/Collapse";
import SortFilters from "./SortFilters";

interface FilterCollapseProps {
  isOpen?: boolean;
}

interface FilterColumnProps {
  title: string;
  children: ReactNode;
}
const origin = "homePage";
const FilterCollapse: FC<FilterCollapseProps> = ({ isOpen }) => {
  const { productCategories } = useSelector(selectProducts);
  return (
    <Collapse isOpen={isOpen}>
      <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <FilterColumn title="Category: ">
          <CategoryFilter {...{ origin }} categories={productCategories} />
        </FilterColumn>
        <FilterColumn title="Sort by: ">
          <SortFilters
            {...{ origin }}
            productSortCategories={productSortCategories}
          />
        </FilterColumn>
        <FilterColumn title="Colour: ">
          <ColourFilters {...{ origin }} />
        </FilterColumn>
        <FilterColumn title="Price: ">
          <PriceRangeInput {...{ origin }} />
        </FilterColumn>
      </div>
    </Collapse>
  );
};

export default FilterCollapse;

const FilterColumn: FC<FilterColumnProps> = ({ title, children }) => {
  return (
    <div className="pt-5 pb-[30px] mt-4 border-t border-black-300">
      <h3 className="text-base text-black-75 font-light leading-[-.01em] mb-6">
        {title}
      </h3>
      {children}
    </div>
  );
};
