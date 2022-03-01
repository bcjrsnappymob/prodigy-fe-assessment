import { InsuranceStatus } from "../constants/product";
import { InsuranceItem, InsuranceDetailItem } from "../models/product";

export const insuranceItems: InsuranceItem[] = [
    {
        id: 'starry-night-insurance',
        stub: 'starry-night-insurance',
        imageFile: 'starry-night-insurance.jpg',
        title: 'Starry Night Insurance',
        currentStatus: InsuranceStatus.popular,
    },
    {
        id: 'active-fast-insurance',
        stub: 'active-fast-insurance',
        title: 'Active Fast Insurance',
        imageFile: 'active-insurance.jpg',
        currentStatus: InsuranceStatus.new,
    },
    {
        id: 'diabetes-go-away-insurance',
        stub: 'diabetes-go-away-insurance',
        title: 'Diabetes Go-Away Insurance',
        imageFile: 'diabetic-insurance.png',
        currentStatus: InsuranceStatus.none,
    },
];

export const insuranceDetailItems: InsuranceDetailItem[] = [
    {
        id: 'starry-night-insurance',
        stub: 'starry-night-insurance',
        imageFile: 'starry-night-insurance.jpg',
        title: 'Starry Night Insurance',
        benefits: [ '99% medical coverage', 'Premium Insurance Coverage', 'All Rounder Insurance'],
        description: 'Wish away your pains with this insurance!',
        currentStatus: InsuranceStatus.popular,
    },
    {
        id: 'active-fast-insurance',
        stub: 'active-fast-insurance',
        title: 'Active Fast Insurance',
        imageFile: 'active-insurance.jpg',
        benefits: [ 'Great for quick coverage with minimal payments', 'Cover normal medical issues'],
        description: 'Wish away your pains with this insurance!',
        currentStatus: InsuranceStatus.new,
    },
    {
        id: 'diabetes-go-away-insurance',
        stub: 'diabetes-go-away-insurance',
        title: 'Diabetes Go-Away Insurance',
        imageFile: 'diabetic-insurance.png',
        benefits: [ 'Premium Insurace for Diabetic Users', 'Cover 99% of Diabetes Medicine and Tests'],
        description: 'Wish away your pains with this insurance!',
        currentStatus: InsuranceStatus.none,
    },
];