import { SimpleGrid } from "@chakra-ui/react";
import { InsuranceItem } from "../../../models/product";
import ProductListCard from "./ProductListCard";

export type ProductListGridProps = {
    data: InsuranceItem[];
    numberOfColumns: number;
}

export const ProductListGrid = (props: ProductListGridProps) => {
    if (!props || !props.data || props.data.length === 0) {
        return (
            <template></template>
        );
    }

    return (
        <SimpleGrid columns={props.numberOfColumns} spacing={10}>
            {
                props.data.map((product, id) => {
                    return (
                        <ProductListCard
                            key={id}
                            data={product}
                        ></ProductListCard>
                    );
                })
            }
        </SimpleGrid>
    );
};