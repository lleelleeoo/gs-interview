import { render } from "@testing-library/react";

import { Header } from "./Header";

describe("<Header/> component", () => {
    it("should be rendered", () => {
        const { container } = render(<Header />);

        expect(container).not.toBeEmptyDOMElement();
    });

    it("should contents propper parts", () => {
        const { getByTestId } = render(<Header />);

        getByTestId("logo");
        getByTestId("header-navigation");
        getByTestId("header-avatar");
    });
});
