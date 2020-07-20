`use strict`;

const name = `Rogue Squadron`;
const type = `dark`;

const black = {
  1: `#0d121a`,
  2: `#06090e`,
  3: `#010203`
};

const grey = {
  1: `#e6e8e9`,
  2: `#cbced0`,
  3: `#a5a9ab`,
  4: `#7b7f81`
};

const red = {
  1: `#bd615f`,
  2: `#a34845`
};

const orange = {
  1: `#fc991a`,
  2: `#fa7611`,
  3: `#f5560b`
};

const beige = `#b6ad9d`;

const blue = {
  1: `#8fb5c3`,
  2: `#538397`
};

const transparent = `#0000`;

module.exports = {
  name,
  type,

  colors: {
    focusBorder: red[2],
    foreground: grey[2],
    "widget.shadow": transparent,
    "icon.foreground": grey[3],

    "window.activeBorder": black[1],
    "window.inactiveBorder": black[1],

    "textCodeBlock.background": orange[1],
    "textLink.activeForeground": orange[1],
    "textLink.foreground": orange[3],
    "textPreformat.foreground": beige,

    "button.background": blue[2],
    "button.foreground": black[3],
    "button.hoverBackground": blue[1],
    "checkbox.background": black[3],
    "checkbox.foreground": grey[2],
    "checkbox.border": red[2],

    "dropdown.background": black[3],
    "dropdown.listBackground": black[2],
    "dropdown.border": red[2],
    "dropdown.foreground": grey[2],

    "input.background": black[3],
    "input.border": transparent,
    "input.foreground": grey[2],
    "input.placeholderForeground": grey[4],
    "inputOption.activeBackground": black[1],
    "inputOption.activeBorder": red[2],

    "scrollbar.shadow": transparent,
    "scrollbarSlider.activeBackground": "#7b7f814d",
    "scrollbarSlider.background": "#7b7f8126",
    "scrollbarSlider.hoverBackground": "#7b7f814d",

    "badge.background": red[2],
    "badge.foreground": grey[1],

    "progressBar.background": red[2],

    "list.hoverBackground": black[1],
    "list.hoverForeground": grey[3],
    "list.activeSelectionBackground": black[3],
    "list.activeSelectionForeground": grey[2],
    "list.inactiveSelectionBackground": black[3],
    "list.inactiveSelectionForeground": grey[2],

    "activityBar.background": black[1],
    "activityBar.foreground": grey[1],
    "activityBar.inactiveForeground": grey[3],
    "activityBar.border": black[2],
    "activityBarBadge.background": red[2],
    "activityBarBadge.foreground": grey[1],
    "activityBar.activeBorder": transparent,
    "activityBar.activeBackground": black[2],
    "activityBar.activeFocusBorder": transparent,

    "sideBar.background": black[2],
    "sideBar.foreground": grey[4],
    "sideBar.border": black[3],
    "sideBarTitle.foreground": grey[2],
    "sideBarSectionHeader.background": transparent,
    "sideBarSectionHeader.foreground": grey[3],
    "sideBarSectionHeader.border": transparent,

    "minimap.selectionHighlight": "#7b7f814d",
    "minimap.background": black[3],
    "minimapSlider.background": "#7b7f8126",
    "minimapSlider.hoverBackground": "#7b7f814d",
    "minimapSlider.activeBackground": "#7b7f814d",
    "minimapGutter.addedBackground": blue[2],
    "minimapGutter.modifiedBackground": beige,
    "minimapGutter.deletedBackground": red[2],

    "editorGroup.border": black[3],
    "editorGroupHeader.tabsBackground": black[1],
    "editorGroupHeader.tabsBorder": black[3],
    "editorGroup.emptyBackground": black[2],

    "tab.activeBackground": black[3],
    "tab.unfocusedActiveBackground": black[3],
    "tab.activeForeground": grey[1],
    "tab.border": black[1],
    "tab.activeBorder": black[3],
    "tab.unfocusedActiveBorder": black[3],
    "tab.activeBorderTop": black[3],
    "tab.unfocusedActiveBorderTop": black[3],
    "tab.inactiveBackground": black[2],
    "tab.inactiveForeground": grey[3],
    "tab.unfocusedActiveForeground": grey[2],
    "tab.unfocusedInactiveForeground": grey[4],
    "tab.hoverBackground": black[3],
    "tab.unfocusedHoverBackground": black[3],
    "tab.hoverBorder": transparent,
    "tab.unfocusedHoverBorder": transparent,

    "editor.background": black[3],
    "editor.foreground": grey[2],
    "editorLineNumber.foreground": grey[4],
    "editorLineNumber.activeForeground": grey[2],
    "editorCursor.foreground": grey[4],
    "editor.selectionBackground": black[1],
    "editor.inactiveSelectionBackground": black[2],
    "editor.selectionHighlightBackground": black[1],
    "editor.selectionHighlightBorder": transparent,
    "editor.wordHighlightBackground": black[1],
    "editor.wordHighlightStrongBackground": black[1],
    "editor.findMatchHighlightBackground": transparent,
    "editor.findMatchHighlightBorder": red[2],

    "searchEditor.findMatchBackground": transparent,
    "searchEditor.findMatchBorder": red[2],
    "searchEditor.textInputBorder": red[2],

    "editor.hoverHighlightBackground": black[1],
    "editor.lineHighlightBackground": black[2],
    "editor.lineHighlightBorder": transparent,
    "editor.rangeHighlightBackground": black[1],
    "editorWhitespace.foreground": "#7b7f814d",
    "editorIndentGuide.background": "#7b7f8126",
    "editorIndentGuide.activeBackground": "#7b7f814d",
    "editorBracketMatch.background": transparent,
    "editorBracketMatch.border": grey[4],
    "editorOverviewRuler.background": transparent,
    "editorOverviewRuler.border": transparent,
    "editorOverviewRuler.selectionHighlightForeground": "#7b7f814d",
    "editorOverviewRuler.modifiedForeground": beige,
    "editorOverviewRuler.addedForeground": blue[2],
    "editorOverviewRuler.deletedForeground": red[2],
    "editorOverviewRuler.bracketMatchForeground": "#7b7f8126",

    "editorGutter.background": transparent,
    "editorGutter.modifiedBackground": beige,
    "editorGutter.addedBackground": blue[2],
    "editorGutter.deletedBackground": red[2],

    "editorWidget.foreground": grey[2],
    "editorWidget.background": black[1],
    "editorWidget.border": red[2],

    "extensionButton.prominentForeground": black[3],
    "extensionButton.prominentBackground": orange[3],
    "extensionButton.prominentHoverBackground": orange[1],

    "statusBar.background": blue[2],
    "statusBar.foreground": black[3],
    "statusBar.debuggingBackground": beige,
    "statusBar.debuggingForeground": black[3],
    "statusBar.noFolderBackground": red[2],
    "statusBar.noFolderForeground": grey[1],

    "titleBar.border": transparent,

    "welcomePage.background": black[2],
    "welcomePage.buttonBackground": blue[2],
    "welcomePage.buttonHoverBackground": blue[1],

    "gitDecoration.addedResourceForeground": blue[2],
    "gitDecoration.modifiedResourceForeground": beige,
    "gitDecoration.deletedResourceForeground": red[2],
    "gitDecoration.untrackedResourceForeground": blue[1],
    "gitDecoration.ignoredResourceForeground": grey[4],

    "breadcrumb.foreground": grey[4],
    "breadcrumb.focusForeground": grey[2],
    "breadcrumb.activeSelectionForeground": grey[1],
    "breadcrumbPicker.background": black[1],

    "terminal.background": black[3],
    "terminal.border": transparent,
    "terminal.selectionBackground": black[1],
    "terminalCursor.foreground": grey[4]
  },

  tokenColors: [
    // Global
    {
      scope: `comment`,
      settings: {
        foreground: grey[4]
      }
    },
    {
      scope: `constant`,
      settings: {
        foreground: orange[3]
      }
    },
    {
      scope: `constant.character.entity`,
      settings: {
        foreground: red[1]
      }
    },
    {
      scope: `keyword`,
      settings: {
        foreground: red[1]
      }
    },
    {
      scope: `storage`,
      settings: {
        foreground: beige
      }
    },
    {
      scope: `storage.type`,
      settings: {
        foreground: beige // ??
      }
    },
    {
      scope: `string`,
      settings: {
        foreground: orange[3]
      }
    },
    {
      scope: `support`,
      settings: {
        foreground: beige
      }
    },
    {
      scope: `variable`,
      settings: {
        foreground: orange[2]
      }
    },

    // HTML attribute names
    {
      scope: `entity.other.attribute-name.html`,
      settings: {
        fontStyle: `normal`,
        foreground: grey[1]
      }
    },
    // HTML attribute (class)
    {
      scope: `meta.attribute.class.html`,
      settings: {
        fontStyle: `bold`
      }
    },
    // HTML attribute values
    {
      scope: [`string.quoted.double.html`, `string.quoted.single.html`],
      settings: {
        foreground: orange[2]
      }
    },
    // HTML comments
    {
      scope: `comment.block.html`,
      settings: {
        fontStyle: `italic`,
        foreground: grey[4]
      }
    },
    // HTML tags
    {
      scope: `entity.name.tag.html`,
      settings: {
        foreground: orange[1]
      }
    },

    // CSS attribute names
    {
      scope: `entity.other.attribute-name.css`,
      settings: {
        foreground: grey[1]
      }
    },
    // CSS classes
    {
      scope: `entity.other.attribute-name.class.css`,
      settings: {
        fontStyle: `bold`,
        foreground: orange[2]
      }
    },
    // CSS comments
    {
      scope: `comment.block.css`,
      settings: {
        fontStyle: `italic`,
        foreground: grey[4]
      }
    },
    // CSS functions
    {
      scope: [
        `support.function.calc.css`,
        `support.function.misc.css`,
        `support.function.timing-function.css`,
        `support.function.transform.css`
      ],
      settings: {
        foreground: beige
      }
    },
    // CSS hex values
    {
      scope: [
        `constant.other.color.rgb-value.hex.css`,
        `punctuation.definition.constant.css`
      ],
      settings: {
        foreground: red[1]
      }
    },
    // CSS IDs
    {
      scope: `entity.other.attribute-name.id.css`,
      settings: {
        foreground: orange[2]
      }
    },
    // CSS important
    {
      scope: `keyword.other.important.css`,
      settings: {
        fontStyle: `italic`,
        foreground: blue[2]
      }
    },
    // CSS operators
    {
      scope: [
        `entity.other.keyframe-offset.css`,
        `keyword.operator.combinator.css`,
        `keyword.operator.logical.all.media.css`,
        `keyword.operator.logical.and.media.css`,
        `keyword.operator.logical.only.media.css`,
        `keyword.operator.pattern.css`
      ],
      settings: {
        foreground: grey[2]
      }
    },
    // CSS property names
    {
      scope: `support.type.property-name.css`,
      settings: {
        foreground: grey[2]
      }
    },
    // CSS property names (vendored)
    {
      scope: `support.type.vendored.property-name.css`,
      settings: {
        foreground: grey[3]
      }
    },
    // CSS pseudo-classses
    {
      scope: `entity.other.attribute-name.pseudo-class.css`,
      settings: {
        foreground: grey[1]
      }
    },
    // CSS pseudo-elements
    {
      scope: `entity.other.attribute-name.pseudo-element.css`,
      settings: {
        foreground: grey[1]
      }
    },
    // CSS punctuation
    {
      scope: `punctuation.definition.entity.css`,
      settings: {
        fontStyle: `normal`,
        foreground: grey[2]
      }
    },
    // CSS tags
    {
      scope: `entity.name.tag.css`,
      settings: {
        foreground: orange[1]
      }
    },
    // CSS units
    {
      scope: [
        `entity.other.keyframe-offset.percentage.css`,
        `keyword.other.unit.%.css`,
        `keyword.other.unit.ch.css`,
        `keyword.other.unit.cm.css`,
        `keyword.other.unit.deg.css`,
        `keyword.other.unit.em.css`,
        `keyword.other.unit.ex.css`,
        `keyword.other.unit.in.css`,
        `keyword.other.unit.mm.css`,
        `keyword.other.unit.ms.css`,
        `keyword.other.unit.pc.css`,
        `keyword.other.unit.percentage.css`,
        `keyword.other.unit.pt.css`,
        `keyword.other.unit.px.css`,
        `keyword.other.unit.rem.css`,
        `keyword.other.unit.s.css`,
        `keyword.other.unit.vmax.css`,
        `keyword.other.unit.vmin.css`,
        `keyword.other.unit.vh.css`,
        `keyword.other.unit.vw.css`
      ],
      settings: {
        foreground: orange[3]
      }
    },
    // CSS variables
    {
      scope: [`variable.css`, `variable.argument.css`],
      settings: {
        fontStyle: `italic`
      }
    },

    // SCSS attribute names
    {
      scope: `entity.other.attribute-name.attribute.scss`,
      settings: {
        foreground: grey[1]
      }
    },
    // SCSS attribute values
    {
      scope: `meta.attribute-selector.scss`,
      settings: {
        foreground: orange[3]
      }
    },
    // SCSS brackets
    {
      scope: [
        `punctuation.definition.attribute-selector.begin.bracket.square.scss`,
        `punctuation.definition.attribute-selector.end.bracket.square.scss`,
        `punctuation.definition.interpolation.begin.bracket.curly.scss`,
        `punctuation.definition.interpolation.end.bracket.curly.scss`,
        `punctuation.section.function.scss`
      ],
      settings: {
        fontStyle: `regular`,
        foreground: grey[2]
      }
    },
    // SCSS comments (block)
    {
      scope: `comment.block.scss`,
      settings: {
        fontStyle: `italic`,
        foreground: grey[3]
      }
    },
    // SCSS comments (line)
    {
      scope: `comment.line.scss`,
      settings: {
        fontStyle: `italic`
      }
    },
    // SCSS default and important
    {
      scope: [`keyword.other.default.scss`, `keyword.other.important.scss`],
      settings: {
        fontStyle: `italic`,
        foreground: blue[2]
      }
    },
    // SCSS functions
    {
      scope: [`entity.name.function.scss`, `support.function.misc.scss`],
      settings: {
        foreground: beige
      }
    },
    // SCSS operators
    {
      scope: [`keyword.control.operator.css.scss`, `keyword.operator.scss`],
      settings: {
        foreground: grey[2]
      }
    },
    // SCSS punctuation
    {
      scope: `punctuation.separator.delimiter.scss`,
      settings: {
        foreground: grey[2]
      }
    },
    // SCSS tags
    {
      scope: `meta.property-name.scss`,
      settings: {
        foreground: orange[1]
      }
    },
    // SCSS variables
    {
      scope: `variable.scss`,
      settings: {
        fontStyle: `italic`
      }
    },

    // JavaScript brackets
    {
      scope: [
        `meta.brace.round.js`,
        `meta.brace.square.js`,
        `punctuation.definition.block.js`,
        `punctuation.definition.template-expression.begin.js`,
        `punctuation.definition.template-expression.end.js`
      ],
      settings: {
        foreground: grey[2]
      }
    },
    // JavaScript class
    {
      scope: [
        `entity.name.type.class.js`,
        `entity.name.type.js`,
        `support.class.builtin.js`
      ],
      settings: {
        foreground: blue[2]
      }
    },
    // JavaScript class (inherited)
    {
      scope: `entity.other.inherited-class.js`,
      settings: {
        foreground: blue[1]
      }
    },
    // JavaScript comments (block)
    {
      scope: `comment.block.js`,
      settings: {
        fontStyle: `italic`,
        foreground: grey[3]
      }
    },
    // JavaScript comments (line)
    {
      scope: `comment.line.double-slash.js`,
      settings: {
        fontStyle: `italic`
      }
    },
    // JavaScript functions
    {
      scope: [
        `entity.name.function.js`,
        `support.function.console.js`,
        `support.function.js`
      ],
      settings: {
        foreground: orange[1]
      }
    },
    // JavaScript key-value separators
    {
      scope: `punctuation.separator.key-value.js`,
      settings: {
        foreground: grey[2]
      }
    },
    // JavaScript null
    {
      scope: `constant.language.null.js`,
      settings: {
        fontStyle: `bold`,
        foreground: grey[3]
      }
    },
    // JavaScript object keys
    {
      scope: `meta.object-literal.key.js`,
      settings: {
        foreground: orange[2]
      }
    },
    // JavaScript object property accessors
    {
      scope: `punctuation.accessor.js`,
      settings: {
        foreground: grey[2]
      }
    },
    // JavaScript operators
    {
      scope: [
        `keyword.operator.arithmetic.js`,
        `keyword.operator.assignment.compound.js`,
        `keyword.operator.assignment.js`,
        `keyword.operator.comparison.js`,
        `keyword.operator.decrement.js`,
        `keyword.operator.increment.js`,
        `keyword.operator.logical.js`,
        `keyword.operator.relational.js`,
        `keyword.operator.ternary.js`
      ],
      settings: {
        foreground: grey[2]
      }
    },
    // JavaScript storage
    {
      scope: [
        `keyword.control.export.js`,
        `keyword.control.from.js`,
        `keyword.control.import.js`,
        `keyword.operator.new.js`,
        `storage.modifier.js`,
        `storage.type.class.js`,
        `storage.type.function.arrow.js`,
        `storage.type.function.js`,
        `storage.type.js`,
        `storage.type.property.js`
      ],
      settings: {
        foreground: beige
      }
    },
    // JavaScript super
    {
      scope: `variable.language.super.js`,
      settings: {
        fontStyle: `normal`,
        foreground: grey[1]
      }
    },
    // JavaScript this
    {
      scope: `variable.language.this.js`,
      settings: {
        fontStyle: `bold`,
        foreground: grey[2]
      }
    },
    // JavaScript undefined
    {
      scope: `constant.language.undefined.js`,
      settings: {
        fontStyle: `bold`,
        foreground: grey[3]
      }
    },
    // JavaScript variables
    {
      scope: [
        `entity.name.type.module.js`,
        `support.class.console.js`,
        `variable.other.constant.js`,
        `variable.other.object.js`,
        `variable.other.object.property.js`,
        `variable.other.readwrite.alias.js`,
        `variable.other.readwrite.js`,
        `variable.parameter.js`
      ],
      settings: {
        fontStyle: `italic`
      }
    },

    // JSX attribute names
    {
      scope: `entity.other.attribute-name.js.jsx`,
      settings: {
        foreground: grey[1]
      }
    },
    // JSX attribute values
    {
      scope: `string.quoted.double.js.jsx`,
      settings: {
        foreground: orange[2]
      }
    },
    // JSX comments (block)
    {
      scope: `comment.block.js.jsx`,
      settings: {
        fontStyle: `italic`,
        foreground: grey[3]
      }
    },
    // JSX comments (line)
    {
      scope: `comment.line.double-slash.js.jsx`,
      settings: {
        fontStyle: `italic`
      }
    },
    // JSX keywords
    {
      scope: [`keyword.control.export.js.jsx`, `keyword.control.import.js.jsx`],
      settings: {
        foreground: beige
      }
    },
    // JSX tags
    {
      scope: `entity.name.tag.js.jsx`,
      settings: {
        foreground: orange[1]
      }
    },
    // JSX tags (compontents)
    {
      scope: `support.class.component.js.jsx`,
      settings: {
        fontStyle: `bold`
      }
    },

    // TypeScript brackets
    {
      scope: [
        `meta.brace.round.ts`,
        `meta.brace.square.ts`,
        `punctuation.definition.block.ts`,
        `punctuation.definition.template-expression.begin.ts`,
        `punctuation.definition.template-expression.end.ts`
      ],
      settings: {
        foreground: grey[2]
      }
    },
    // TypeScript class
    {
      scope: [
        `entity.name.type.class.ts`,
        `entity.name.type.ts`,
        `support.class.builtin.ts`
      ],
      settings: {
        foreground: blue[2]
      }
    },
    // TypeScript class (inherited)
    {
      scope: `entity.other.inherited-class.ts`,
      settings: {
        foreground: blue[1]
      }
    },
    // TypeScript comments (block)
    {
      scope: `comment.block.ts`,
      settings: {
        fontStyle: `italic`,
        foreground: grey[3]
      }
    },
    // TypeScript comments (line)
    {
      scope: `comment.line.double-slash.ts`,
      settings: {
        fontStyle: `italic`
      }
    },
    // TypeScript functions
    {
      scope: [
        `entity.name.function.ts`,
        `support.function.console.ts`,
        `support.function.ts`
      ],
      settings: {
        foreground: orange[1]
      }
    },
    // TypeScript interface
    {
      scope: `entity.name.type.interface.ts`,
      settings: {
        foreground: blue[1]
      }
    },
    // TypeScript key-value separators
    {
      scope: `punctuation.separator.key-value.ts`,
      settings: {
        foreground: grey[2]
      }
    },
    // TypeScript null
    {
      scope: `constant.language.null.ts`,
      settings: {
        fontStyle: `bold`,
        foreground: grey[3]
      }
    },
    // TypeScript object keys
    {
      scope: `meta.object-literal.key.ts`,
      settings: {
        foreground: orange[2]
      }
    },
    // TypeScript object property accessors
    {
      scope: `punctuation.accessor.ts`,
      settings: {
        foreground: grey[2]
      }
    },
    // TypeScript operators
    {
      scope: [
        `keyword.operator.arithmetic.ts`,
        `keyword.operator.assignment.compound.ts`,
        `keyword.operator.assignment.ts`,
        `keyword.operator.comparison.ts`,
        `keyword.operator.decrement.ts`,
        `keyword.operator.increment.ts`,
        `keyword.operator.logical.ts`,
        `keyword.operator.relational.ts`,
        `keyword.operator.ternary.ts`
      ],
      settings: {
        foreground: grey[2]
      }
    },
    // TypeScript storage
    {
      scope: [
        `keyword.control.export.ts`,
        `keyword.control.from.ts`,
        `keyword.control.import.ts`,
        `keyword.operator.new.ts`,
        `storage.modifier.ts`,
        `storage.type.class.ts`,
        `storage.type.function.arrow.ts`,
        `storage.type.function.ts`,
        `storage.type.interface.ts`,
        `storage.type.ts`,
        `storage.type.type.ts`,
        `storage.type.property.ts`
      ],
      settings: {
        foreground: beige
      }
    },
    // TypeScript super
    {
      scope: `variable.language.super.ts`,
      settings: {
        fontStyle: `normal`,
        foreground: grey[1]
      }
    },
    // TypeScript this
    {
      scope: `variable.language.this.ts`,
      settings: {
        fontStyle: `bold`,
        foreground: grey[2]
      }
    },
    // TypeScript types
    {
      scope: [`entity.name.type.alias.ts`, `support.type.primitive.ts`],
      settings: {
        foreground: red[1]
      }
    },
    // TypeScript undefined
    {
      scope: `constant.language.undefined.ts`,
      settings: {
        fontStyle: `bold`,
        foreground: grey[3]
      }
    },
    // TypeScript variables
    {
      scope: [
        `entity.name.type.module.ts`,
        `support.class.console.ts`,
        `variable.other.constant.ts`,
        `variable.other.object.ts`,
        `variable.other.object.property.ts`,
        `variable.other.readwrite.alias.ts`,
        `variable.other.readwrite.ts`,
        `variable.parameter.ts`
      ],
      settings: {
        fontStyle: `italic`
      }
    },

    // JSON keys, level 0
    {
      scope: `support.type.property-name.json`,
      settings: {
        fontStyle: `italic`,
        foreground: orange[1]
      }
    },
    // JSON keys, level 1
    {
      scope: `meta meta support.type.property-name.json`,
      settings: {
        fontStyle: `italic`,
        foreground: orange[2]
      }
    },
    // JSON keys, level 2
    {
      scope: `meta meta meta meta support.type.property-name.json`,
      settings: {
        fontStyle: `italic`,
        foreground: orange[3]
      }
    },
    // JSON keys, level 3
    {
      scope: `meta meta meta meta meta meta support.type.property-name.json`,
      settings: {
        fontStyle: `italic`,
        foreground: orange[1]
      }
    },
    // JSON keys, level 4
    {
      scope: `meta meta meta meta meta meta meta meta support.type.property-name.json`,
      settings: {
        fontStyle: `italic`,
        foreground: orange[2]
      }
    },
    // JSON keys, level 5
    {
      scope: `meta meta meta meta meta meta meta meta meta meta support.type.property-name.json`,
      settings: {
        fontStyle: `italic`,
        foreground: orange[3]
      }
    },
    // JSON values
    {
      scope: [
        `constant.language.json`,
        `constant.numeric.json`,
        `string.quoted.double.json`
      ],
      settings: {
        foreground: beige
      }
    },

    // Markdown bold
    {
      scope: `markup.bold.markdown`,
      settings: {
        fontStyle: `bold`,
        foreground: orange[2]
      }
    },
    // Markdown headings
    {
      scope: [
        `heading.1.markdown`,
        `heading.2.markdown`,
        `heading.3.markdown`,
        `heading.4.markdown`,
        `heading.5.markdown`,
        `heading.6.markdown`
      ],
      settings: {
        foreground: orange[1]
      }
    },
    // Markdown italics
    {
      scope: `markup.italic.markdown`,
      settings: {
        fontStyle: `italic`,
        foreground: orange[2]
      }
    },
    // Markdown link description
    {
      scope: [
        `constant.other.reference.link.markdown`,
        `string.other.link.description.markdown`
      ],
      settings: {
        foreground: beige
      }
    },
    // Markdown quotation
    {
      scope: `markup.quote.markdown`,
      settings: {
        foreground: red[1]
      }
    },
    // XML attribute names
    {
      scope: `entity.other.attribute-name.localname.xml`,
      settings: {
        foreground: grey[1]
      }
    },
    // XML attribute values
    {
      scope: [`string.quoted.double.xml`, `string.quoted.single.xml`],
      settings: {
        foreground: orange[2]
      }
    },
    // XML comments
    {
      scope: `comment.block.xml`,
      settings: {
        fontStyle: `italic`
      }
    },
    // XML tags
    {
      scope: `entity.name.tag.localname.xml`,
      settings: {
        foreground: orange[1]
      }
    }
  ]
};