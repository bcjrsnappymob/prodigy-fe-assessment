import { SimpleGrid } from "@chakra-ui/react";
import { ProductGridProps } from "../../models/product";
import ProductCard from "./ProductCard";

export const ProductGrid = (props: ProductGridProps) => {
    if (!props || !props.data || props.data.length === 0) {
        return (
            <template></template>
        );
    }

    return (
        <SimpleGrid columns={3} spacing={10}>
            {
                props.data.map((product, id) => {
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