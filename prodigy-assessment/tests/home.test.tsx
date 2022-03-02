import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import InsuranceListingPage from '../pages/insurances';
import { insuranceItems } from '../data/mock-data';
import { Provider } from 'react-redux';
import Store from '../stores/store';

// Insurance Listing Page Suite
describe('Insurance Listing Page', () => {
    // Check to see if there is a list of items rendered on the listing page
    it('Render a list of insurance plans on page load', () => {
        render(
            <Provider store={Store}>
                <InsuranceListingPage/>
            </Provider>
        );
        insuranceItems.forEach((item) => {
            const title = item.title;
            const titleInCard = screen.getByText(title);
            expect(titleInCard).toBeInTheDocument();
        }); 
    });

    // Check to see if Insurance Title is in the listing page
    it('Render Insurance Title on Page Load', () => {
        render(
            <Provider store={Store}>
                <InsuranceListingPage/>
            </Provider>
        );
        const titleInPage = screen.getByText('Insurances');
        expect(titleInPage).toBeInTheDocument();
    });
});