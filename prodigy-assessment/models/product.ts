import { IconType } from "react-icons";
import { InsuranceStatus } from "../constants/product"

export interface InsuranceItem {
    id: string;
    title: string;
    icon: IconType;
    stub: string;
    description: string;
    benefits: string[];
    currentStatus: InsuranceStatus;
};

export interface BadgeProps {
    currentStatus: InsuranceStatus;
}

export interface ProductGridProps {
    data: InsuranceItem[];
    numberOfColumns: number;
}