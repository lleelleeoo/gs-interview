import { queryByText, render } from "@testing-library/react";

import { Logo } from "./Logo";

describe("<Logo/> component", () => {
    it("should render company name", () => {
        const { getByText } = render(<Logo />);

        getByText("greenscreens.ai");
    });
});
