# Box model

- Everything in CSS has a box around it.
- Two types of boxes:
  1. **Block boxes**
  1. **Inline boxes**
- Different behavior in terms of page flow and in relation to other boxes on the page.
- Set by the `display` property (`block`, `inline`).
- Relates to the **outer** display type.

## Block boxes

- Box will break onto a new line.
- Box will extend in the inline direction and fill the space in the container. Usually filling 100% of the space available.
- The `width` and `height` properties are respected.
- Padding, margin and border will cause elements to be pushed away from the box.
- Examples: `<h1>`, `<p>`

## Inline boxes

- Box will _not_ break onto a new line.
- The `width` and `height` properties will not apply.
- Vertical padding, margins, and borders will apply, but will _not_ cause other inline boxes to move away from the box.
- Horizontal padding, margins, and borders will apply and will cause other inline boxes to move away from the box.
- Examples: `<a>`, `<span>`, `<em>`, `<strong>`

### Using display: inline-block

- `Width` and `height` properties are respected.
- `Padding`, `margin`, and `border` will cause other elements to be pushed away from the box.
- It does _not_ break onto a new line.
- Will only become larger than its content if you explicitly add width and height properties.

## Inner and outer display types

- Boxes in CSS have an outer **display type**, which details whether the box is `block` or `inline`.
- Boxes have an **inner display** type, which dictates how elements _inside_ that box are laid out.
- Using `display` values like `flex` or `grid` sets the outer display type to `block` and inner display type to `flex` or `grid`.
- Using `display` value `inline-flex` sets the outer display type to `inline` and inner display type to `flex`.

## CSS box model

- **Content box**: The area where your content is displayed.
- **Padding box**: The padding sits around the content as white space.
- **Border box**: The border box wraps the content and any padding.
- **Margin box**: The margin is the outermost layer, wrapping the content, padding and border as whitespace between this box and other elements.

### Standard CSS box model

- Giving a box `width` and `height` applies to the content box.
- `Padding` and `border` are added to the content box to get the total size taken up by the box.
- The `margin` is _not_ counted towards the actual size of the box.

Example:

```css
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

- The `padding` and `border` are added to the `width` and `height` used for the content box.
- The width will be **410px** (350 + 25 + 25 + 5 + 5)
- The height will be **210px** (150 + 25 + 25 + 5 + 5)

### Alternative CSS box model

- Any width is the width of the visible box on the page.
- Content area width is width minus the width for the padding and border.
- By default, browsers use the standard box model.
- Use alternative model for an element by setting `box-sizing: border-box`.

## Margins

- Margin is an invisible space around your box.
- Pushes other elements away from the box.
- Margins can be negative.
- Regardless of box model, margin is always added after the visible box was calculated.
- **Margin collapsing**: If you have two elements whose margins touch, and both margins are positive, those margins will combine to become one margin, which is the size of the largest individual margin. If one or both margins are negative, the amount of negative value will subtract from the total.

## Borders

- Border is drawn between the margin and the padding of a box.
- In the standard box model, the size of the border is added to the width and height of the box.
- In the alternative box model, the size of the border makes the content box smaller as it takes up some of that available width and height.

## Padding

- The padding sits between the border and the content area.
- No negative amounts of padding.
- Any background applied to your element will display behind the padding.
- Typically used to push the content away from the border.

## References

- [MDN web docs: The box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
