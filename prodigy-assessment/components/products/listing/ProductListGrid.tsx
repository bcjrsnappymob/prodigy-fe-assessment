import { SimpleGrid } from "@chakra-ui/react";
import { ProductGridProps } from "../../../models/product";
import ProductListCard from "./ProductListCard";

export const ProductListGrid = (props: ProductGridProps) => {
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
                            imageFile={product.imageFile}
                            title={product.title}
                            stub={product.stub}
                            currentStatus={product.currentStatus}
                        ></ProductListCard>
                    );
                })
            }
        </SimpleGrid>
    );
};