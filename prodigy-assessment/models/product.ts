import { Demographics } from "../constants/demographics";
import { InsuranceStatus } from "../constants/product"

export interface InsuranceItem {
    id: string;
    title: string;
    imageFile: string;
    stub: string;
    currentStatus: InsuranceStatus;
};

export interface InsuranceDetailItem extends InsuranceItem {
    description: string;
    benefits: string[];
    demographics: Demographics[];
}

export interface BadgeProps {
    currentStatus: InsuranceStatus;
}
