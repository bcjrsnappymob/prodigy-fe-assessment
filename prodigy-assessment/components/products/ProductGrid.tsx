import { SimpleGrid } from "@chakra-ui/react";
import { InsuranceItem } from "../../models/product";
import ProductCard from "./ProductCard";

export const ProductGrid = (props: InsuranceItem[]) => {
    if (!props || props.length === 0) {
        return (
            <template></template>
        );
    }

    return (
        <SimpleGrid columns={3} spacing={10}>
            {
                props.map((product, id) => {
                    return (
                        <ProductCard
                            key={id}
                            icon={product.icon}
                            title={product.title}
                            currentStatus={product.currentStatus}
                        ></ProductCard>
                    );
                })
            }
        </SimpleGrid>
    );
};