import { Container } from "@chakra-ui/react";
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next/types";
import { useEffect, useState } from "react";
import { insuranceDetailItems } from "../../../data/mock-data";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    console.log(params);

    if (params) {
        const currentInsurance = insuranceDetailItems.find((item) => {
            return item.stub === params.stub;
        });
        return {
            props: {
                data: currentInsurance,
            }
        };
    }
    return {
        notFound: true,
    }
}

const InsuranceDetailPage: NextPage = ({data}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const [currentInsuranceDetails, setInsuranceDetails] = useState({});
    useEffect(() => {
        // Fetch mock data with stub
        // Return Mock Data        
        document.title = `ProdigiNow | ${data.title}`;
        setInsuranceDetails(currentInsuranceDetails);
    });

    return (
        <Container minW='100%' p={0} minH='100vh'></Container>
    );

}

export default InsuranceDetailPage;