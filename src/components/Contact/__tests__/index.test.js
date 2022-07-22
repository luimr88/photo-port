/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<ContactForm></ContactForm>)
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm></ContactForm>)

        expect(asFragment()).toMatchSnapshot();
    })

    it('renders-2', () => {
        const { getByTestId } = render(<ContactForm></ContactForm>)
        expect(getByTestId('contact-me')).toHaveTextContent('Contact me')
    })

    it('renders-3', () => {
        const { getByTestId } = render(<ContactForm></ContactForm>)
        expect(getByTestId('submit')).toHaveTextContent('Submit')
    })
})