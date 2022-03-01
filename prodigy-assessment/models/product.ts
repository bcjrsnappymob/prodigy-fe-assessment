import { IconType } from "react-icons";
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
}

export interface BadgeProps {
    currentStatus: InsuranceStatus;
}

export interface ProductGridProps {
    data: InsuranceItem[];
    numberOfColumns: number;
}