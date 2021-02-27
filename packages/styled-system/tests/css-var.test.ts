import { toCSSVar } from "../src/css-var"

test("should convert to css variables", () => {
  expect(
    toCSSVar({
      space: {
        sm: "8px",
        md: "16px",
        lg: "24px",
      },
    }),
  ).toMatchInlineSnapshot(`
    Object {
      "__breakpoints": null,
      "__cssMap": Object {
        "space.-lg": Object {
          "value": "-24px",
          "var": "--space-lg",
          "varRef": "calc(var(--space-lg) * -1)",
        },
        "space.-md": Object {
          "value": "-16px",
          "var": "--space-md",
          "varRef": "calc(var(--space-md) * -1)",
        },
        "space.-sm": Object {
          "value": "-8px",
          "var": "--space-sm",
          "varRef": "calc(var(--space-sm) * -1)",
        },
        "space.lg": Object {
          "value": "24px",
          "var": "--space-lg",
          "varRef": "var(--space-lg)",
        },
        "space.md": Object {
          "value": "16px",
          "var": "--space-md",
          "varRef": "var(--space-md)",
        },
        "space.sm": Object {
          "value": "8px",
          "var": "--space-sm",
          "varRef": "var(--space-sm)",
        },
      },
      "__cssVars": Object {
        "--ring": "var(--ring-offset-shadow), var(--ring-shadow), 0 0 transparent",
        "--ring-color": "rgba(66, 153, 225, 0.6)",
        "--ring-inset": "var(--empty, /* */)",
        "--ring-offset": "0px",
        "--ring-offset-shadow": "var(--ring-inset) 0 0 0 var(--ring-offset) var(--ring-offset-color, transparent)",
        "--ring-shadow": "var(--ring-inset) 0 0 0 calc(var(--ring-width) + var(--ring-offset)) var(--ring-color)",
        "--ring-width": "3px",
        "--space-lg": "24px",
        "--space-md": "16px",
        "--space-sm": "8px",
        "--space-x-reverse": "0",
        "--space-y-reverse": "0",
        "--transform": "translateX(var(--translate-x, 0)) translateY(var(--translate-y, 0)) rotate(var(--rotate, 0)) scaleX(var(--scale-x, 1)) scaleY(var(--scale-y, 1)) skewX(var(--skew-x, 0)) skewY(var(--skew-y, 0))",
        "--transform-gpu": "translate3d(var(--translate-x, 0), var(--translate-y, 0), 0) rotate(var(--rotate, 0)) scaleX(var(--scale-x, 1)) scaleY(var(--scale-y, 1)) skewX(var(--skew-x, 0)) skewY(var(--skew-y, 0))",
      },
      "space": Object {
        "lg": "24px",
        "md": "16px",
        "sm": "8px",
      },
    }
  `)
})

test("should convert to css variables", () => {
  expect(
    toCSSVar({
      space: [8, 12, 16, 33],
    }),
  ).toMatchInlineSnapshot(`
    Object {
      "__breakpoints": null,
      "__cssMap": Object {
        "space.-0": Object {
          "value": "-8",
          "var": "--space-0",
          "varRef": "calc(var(--space-0) * -1)",
        },
        "space.-1": Object {
          "value": "-12",
          "var": "--space-1",
          "varRef": "calc(var(--space-1) * -1)",
        },
        "space.-2": Object {
          "value": "-16",
          "var": "--space-2",
          "varRef": "calc(var(--space-2) * -1)",
        },
        "space.-3": Object {
          "value": "-33",
          "var": "--space-3",
          "varRef": "calc(var(--space-3) * -1)",
        },
        "space.0": Object {
          "value": 8,
          "var": "--space-0",
          "varRef": "var(--space-0)",
        },
        "space.1": Object {
          "value": 12,
          "var": "--space-1",
          "varRef": "var(--space-1)",
        },
        "space.2": Object {
          "value": 16,
          "var": "--space-2",
          "varRef": "var(--space-2)",
        },
        "space.3": Object {
          "value": 33,
          "var": "--space-3",
          "varRef": "var(--space-3)",
        },
      },
      "__cssVars": Object {
        "--ring": "var(--ring-offset-shadow), var(--ring-shadow), 0 0 transparent",
        "--ring-color": "rgba(66, 153, 225, 0.6)",
        "--ring-inset": "var(--empty, /* */)",
        "--ring-offset": "0px",
        "--ring-offset-shadow": "var(--ring-inset) 0 0 0 var(--ring-offset) var(--ring-offset-color, transparent)",
        "--ring-shadow": "var(--ring-inset) 0 0 0 calc(var(--ring-width) + var(--ring-offset)) var(--ring-color)",
        "--ring-width": "3px",
        "--space-0": 8,
        "--space-1": 12,
        "--space-2": 16,
        "--space-3": 33,
        "--space-x-reverse": "0",
        "--space-y-reverse": "0",
        "--transform": "translateX(var(--translate-x, 0)) translateY(var(--translate-y, 0)) rotate(var(--rotate, 0)) scaleX(var(--scale-x, 1)) scaleY(var(--scale-y, 1)) skewX(var(--skew-x, 0)) skewY(var(--skew-y, 0))",
        "--transform-gpu": "translate3d(var(--translate-x, 0), var(--translate-y, 0), 0) rotate(var(--rotate, 0)) scaleX(var(--scale-x, 1)) scaleY(var(--scale-y, 1)) skewX(var(--skew-x, 0)) skewY(var(--skew-y, 0))",
      },
      "space": Array [
        8,
        12,
        16,
        33,
      ],
    }
  `)
})

test("should handle nested theme with css-var", () => {
  const baseTheme = toCSSVar({ space: [2, 3, 4] })
  const theme = { ...baseTheme, colors: { red: { 100: "#100", 200: "#200" } } }
  expect(toCSSVar(theme)).toMatchInlineSnapshot(`
    Object {
      "__breakpoints": null,
      "__cssMap": Object {
        "colors.red.100": Object {
          "value": "#100",
          "var": "--colors-red-100",
          "varRef": "var(--colors-red-100)",
        },
        "colors.red.200": Object {
          "value": "#200",
          "var": "--colors-red-200",
          "varRef": "var(--colors-red-200)",
        },
        "space.-0": Object {
          "value": "-2",
          "var": "--space-0",
          "varRef": "calc(var(--space-0) * -1)",
        },
        "space.-1": Object {
          "value": "-3",
          "var": "--space-1",
          "varRef": "calc(var(--space-1) * -1)",
        },
        "space.-2": Object {
          "value": "-4",
          "var": "--space-2",
          "varRef": "calc(var(--space-2) * -1)",
        },
        "space.0": Object {
          "value": 2,
          "var": "--space-0",
          "varRef": "var(--space-0)",
        },
        "space.1": Object {
          "value": 3,
          "var": "--space-1",
          "varRef": "var(--space-1)",
        },
        "space.2": Object {
          "value": 4,
          "var": "--space-2",
          "varRef": "var(--space-2)",
        },
      },
      "__cssVars": Object {
        "--colors-red-100": "#100",
        "--colors-red-200": "#200",
        "--ring": "var(--ring-offset-shadow), var(--ring-shadow), 0 0 transparent",
        "--ring-color": "rgba(66, 153, 225, 0.6)",
        "--ring-inset": "var(--empty, /* */)",
        "--ring-offset": "0px",
        "--ring-offset-shadow": "var(--ring-inset) 0 0 0 var(--ring-offset) var(--ring-offset-color, transparent)",
        "--ring-shadow": "var(--ring-inset) 0 0 0 calc(var(--ring-width) + var(--ring-offset)) var(--ring-color)",
        "--ring-width": "3px",
        "--space-0": 2,
        "--space-1": 3,
        "--space-2": 4,
        "--space-x-reverse": "0",
        "--space-y-reverse": "0",
        "--transform": "translateX(var(--translate-x, 0)) translateY(var(--translate-y, 0)) rotate(var(--rotate, 0)) scaleX(var(--scale-x, 1)) scaleY(var(--scale-y, 1)) skewX(var(--skew-x, 0)) skewY(var(--skew-y, 0))",
        "--transform-gpu": "translate3d(var(--translate-x, 0), var(--translate-y, 0), 0) rotate(var(--rotate, 0)) scaleX(var(--scale-x, 1)) scaleY(var(--scale-y, 1)) skewX(var(--skew-x, 0)) skewY(var(--skew-y, 0))",
      },
      "colors": Object {
        "red": Object {
          "100": "#100",
          "200": "#200",
        },
      },
      "space": Array [
        2,
        3,
        4,
      ],
    }
  `)
})