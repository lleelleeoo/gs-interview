import { render } from "@testing-library/react";

import { Card } from "./Card";
import styles from "./Card.module.css";

describe("<Card/> component", () => {
    it("should be rendered", () => {
        const { getByTestId } = render(<Card />);

        getByTestId("card");
    });

    it("shuld pass children", () => {
        const { getByTestId } = render(
            <Card>
                <div data-testid="test">I am a perfect child</div>
            </Card>
        );

        getByTestId("test");
    });

    it("should pass className prop, but not override original", () => {
        const { getByTestId } = render(<Card className="pew" />);
        const card = getByTestId("card");

        expect(card).toHaveClass("pew");
    });

    it("shouldn't override self className", () => {
        const { getByTestId } = render(<Card className="pew" />);
        const card = getByTestId("card");

        expect(card).toHaveClass(styles.card);
    });
});
