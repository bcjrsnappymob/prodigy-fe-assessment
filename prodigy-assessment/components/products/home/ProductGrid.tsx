import { SimpleGrid } from "@chakra-ui/react";
import { InsuranceItem } from "../../../models/product";
import ProductCard from "./ProductCard";

export type ProductGridProps = {
    data: InsuranceItem[];
    numberOfColumns: number;
}

export const ProductGrid = (props: ProductGridProps) => {
    if (!props || !props.data || props.data.length === 0) {
        return (
            <template></template>
        );
    }

    return (
        <SimpleGrid columns={props.numberOfColumns} spacing={10}>
            {
                props.data.map((product: InsuranceItem, id: number) => {
                    return (
                        <ProductCard
                            key={id}
                            data={product}
                        ></ProductCard>
                    );
                })
            }
        </SimpleGrid>
    );
};