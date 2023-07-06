import { render, screen } from "@testing-library/react"
import Application from "./Application"


describe('Application', () => {
    test('renders correctly', () => {
        render(<Application />);

        const pageHeading = screen.getByRole('heading', {
            level: 1,
        });
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading = screen.getByRole('heading', {
            level: 2,
        });
        expect(sectionHeading).toBeInTheDocument();

        const paragraphElement = screen.getByText((content) => content.includes("All"));
        expect(paragraphElement).toBeInTheDocument();

        const nameElement = screen.getByLabelText("Name");
        expect(nameElement).toBeInTheDocument();

        const bioElement = screen.getByRole('textbox', {
            name: "Bio",
        });
        expect(bioElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole('combobox');
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole("checkbox");
        expect(termsElement).toBeInTheDocument();

        const buttonElement =screen.getByRole("button");
        expect(buttonElement).toBeInTheDocument();
    })
})