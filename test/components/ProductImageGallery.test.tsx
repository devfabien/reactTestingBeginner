import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("Product Image Gallery", () => {
  it("should render nothing when image urls are not provided", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);

    expect(container).toBeEmptyDOMElement();
  });
  it("should render a list of img", () => {
    const imgUrls = ["url1", "url2"];

    render(<ProductImageGallery imageUrls={imgUrls} />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2);
    imgUrls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute("src", url);
    });
  });
});
