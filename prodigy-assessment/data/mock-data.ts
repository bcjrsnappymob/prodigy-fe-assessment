import { InsuranceStatus } from "../constants/product";
import { InsuranceItem } from "../models/product";
import { FaStethoscope, FaUserInjured, FaUserAstronaut } from 'react-icons/fa';

export const insuranceItems: InsuranceItem[] = [
    {
        id: 'starry-night-insurance',
        stub: 'starry-night-insurance',
        icon: FaStethoscope,
        title: 'Starry Night Insurance',
        benefits: [ '99% medical coverage', 'Premium Insurance Coverage', 'All Rounder Insurance'],
        description: 'Wish away your pains with this insurance!',
        currentStatus: InsuranceStatus.popular,
    },
    {
        id: 'active-fast-insurance',
        stub: 'active-fast-insurance',
        title: 'Active Fast Insurance',
        icon: FaUserInjured,
        benefits: [ 'Great for quick coverage with minimal payments', 'Cover normal medical issues'],
        description: 'Wish away your pains with this insurance!',
        currentStatus: InsuranceStatus.new,
    },
    {
        id: 'diabetes-go-away-insurance',
        stub: 'diabetes-go-away-insurance',
        title: 'Diabetes Go-Away Insurance',
        icon: FaUserAstronaut,
        benefits: [ 'Premium Insurace for Diabetic Users', 'Cover 99% of Diabetes Medicine and Tests'],
        description: 'Wish away your pains with this insurance!',
        currentStatus: InsuranceStatus.none,
    },
];

