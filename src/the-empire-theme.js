`use strict`;

const name = `The Empire`;
const type = `dark`;
const black = { 1: `#0d121a`, 2: `#06090e`, 3: `#010203` };
const grey = {
  1: `#f4f8fb`,
  2: `#d1dce7`,
  3: `#b1c0d1`,
  4: `#91a5bc`,
  5: `#6c83a0`
};
const red = { 1: `#fe696b`, 2: `#fb4649`, 3: `#fa0a0a`, 4: `#960505` };
const olive = { 1: `#afb6ab`, 2: `#99a095`, 3: `#787e73` };

const transparent = `#0000`;

module.exports = {
  name,
  type,

  colors: {
    focusBorder: red[4],
    foreground: grey[3],

    "widget.shadow": transparent,
    "icon.foreground": grey[4],
    "window.activeBorder": black[1],
    "window.inactiveBorder": black[1],
    "textCodeBlock.background": red[2],
    "textLink.activeForeground": red[1],
    "textLink.foreground": red[3],
    "textPreformat.foreground": grey[1],

    "button.background": olive[3],
    "button.foreground": black[3],
    "button.hoverBackground": olive[1],

    "checkbox.background": black[3],
    "checkbox.foreground": grey[3],
    "checkbox.border": red[4],

    "dropdown.background": black[3],
    "dropdown.listBackground": black[2],
    "dropdown.border": red[4],
    "dropdown.foreground": grey[3],

    "input.background": black[3],
    "input.border": transparent,
    "input.foreground": grey[3],
    "input.placeholderForeground": grey[5],
    "inputOption.activeBackground": black[1],
    "inputOption.activeBorder": red[4],

    "scrollbar.shadow": transparent,
    "scrollbarSlider.activeBackground": `#6c83a04d`,
    "scrollbarSlider.background": `#6c83a026`,
    "scrollbarSlider.hoverBackground": `#6c83a04d`,

    "badge.background": red[4],
    "badge.foreground": grey[1],
    "progressBar.background": red[4],

    "list.hoverBackground": black[1],
    "list.hoverForeground": grey[3],
    "list.activeSelectionBackground": black[3],
    "list.activeSelectionForeground": grey[2],
    "list.inactiveSelectionBackground": black[3],
    "list.inactiveSelectionForeground": grey[2],

    "activityBar.background": black[1],
    "activityBar.foreground": grey[2],
    "activityBar.inactiveForeground": grey[4],
    "activityBar.border": black[2],
    "activityBarBadge.background": red[4],
    "activityBarBadge.foreground": grey[1],
    "activityBar.activeBorder": transparent,
    "activityBar.activeBackground": black[2],
    "activityBar.activeFocusBorder": transparent,

    "sideBar.background": black[2],
    "sideBar.foreground": grey[5],
    "sideBar.border": black[3],
    "sideBarTitle.foreground": grey[3],
    "sideBarSectionHeader.background": transparent,
    "sideBarSectionHeader.foreground": grey[4],
    "sideBarSectionHeader.border": transparent,

    "minimap.selectionHighlight": `#6c83a04d`,
    "minimap.background": black[3],
    "minimapSlider.background": `#6c83a026`,
    "minimapSlider.hoverBackground": `#6c83a04d`,
    "minimapSlider.activeBackground": `#6c83a04d`,
    "minimapGutter.addedBackground": olive[3],
    "minimapGutter.modifiedBackground": grey[1],
    "minimapGutter.deletedBackground": red[4],

    "editorGroup.border": black[1],
    "editorGroupHeader.tabsBackground": black[1],
    "editorGroupHeader.tabsBorder": black[3],
    "editorGroup.emptyBackground": black[2],

    "tab.activeBackground": black[3],
    "tab.unfocusedActiveBackground": black[3],
    "tab.activeForeground": grey[2],
    "tab.border": black[1],
    "tab.activeBorder": black[3],
    "tab.unfocusedActiveBorder": black[3],
    "tab.activeBorderTop": black[3],
    "tab.unfocusedActiveBorderTop": black[3],
    "tab.inactiveBackground": black[2],
    "tab.inactiveForeground": grey[4],
    "tab.unfocusedActiveForeground": grey[3],
    "tab.unfocusedInactiveForeground": grey[5],
    "tab.hoverBackground": black[3],
    "tab.unfocusedHoverBackground": black[3],
    "tab.hoverBorder": transparent,
    "tab.unfocusedHoverBorder": transparent,

    "editor.background": black[3],
    "editor.foreground": grey[3],
    "editorLineNumber.foreground": grey[5],
    "editorLineNumber.activeForeground": grey[3],
    "editorCursor.foreground": grey[5],
    "editor.selectionBackground": black[1],
    "editor.inactiveSelectionBackground": black[2],
    "editor.selectionHighlightBackground": black[1],
    "editor.selectionHighlightBorder": transparent,
    "editor.wordHighlightBackground": black[1],
    "editor.wordHighlightStrongBackground": black[1],
    "editor.findMatchHighlightBackground": transparent,
    "editor.findMatchHighlightBorder": red[4],
    "searchEditor.findMatchBackground": transparent,
    "searchEditor.findMatchBorder": red[4],
    "searchEditor.textInputBorder": red[4],
    "editor.hoverHighlightBackground": black[1],
    "editor.lineHighlightBackground": black[2],
    "editor.lineHighlightBorder": transparent,
    "editor.rangeHighlightBackground": black[1],
    "editorWhitespace.foreground": `#6c83a04d`,
    "editorIndentGuide.background": `#6c83a026`,
    "editorIndentGuide.activeBackground": `#6c83a04d`,
    "editorBracketMatch.background": transparent,
    "editorBracketMatch.border": grey[5],
    "editorOverviewRuler.background": transparent,
    "editorOverviewRuler.border": transparent,
    "editorOverviewRuler.selectionHighlightForeground": `#6c83a04d`,
    "editorOverviewRuler.modifiedForeground": grey[1],
    "editorOverviewRuler.addedForeground": olive[3],
    "editorOverviewRuler.deletedForeground": red[4],
    "editorOverviewRuler.bracketMatchForeground": `#6c83a026`,
    "editorGutter.background": transparent,
    "editorGutter.modifiedBackground": grey[4],
    "editorGutter.addedBackground": olive[3],
    "editorGutter.deletedBackground": red[4],
    "editorWidget.foreground": grey[3],
    "editorWidget.background": black[1],
    "editorWidget.border": red[4],

    "extensionButton.prominentForeground": black[3],
    "extensionButton.prominentBackground": red[3],
    "extensionButton.prominentHoverBackground": red[1],

    "statusBar.background": olive[3],
    "statusBar.foreground": black[3],
    "statusBar.debuggingBackground": grey[4],
    "statusBar.debuggingForeground": black[3],
    "statusBar.noFolderBackground": red[4],
    "statusBar.noFolderForeground": grey[1],

    "titleBar.border": transparent,

    "welcomePage.background": black[2],
    "welcomePage.buttonBackground": olive[3],
    "welcomePage.buttonHoverBackground": olive[1],

    "gitDecoration.addedResourceForeground": olive[3],
    "gitDecoration.modifiedResourceForeground": grey[1],
    "gitDecoration.deletedResourceForeground": red[4],
    "gitDecoration.untrackedResourceForeground": olive[1],
    "gitDecoration.ignoredResourceForeground": grey[5],

    "breadcrumb.foreground": grey[5],
    "breadcrumb.focusForeground": grey[3],
    "breadcrumb.activeSelectionForeground": grey[2],
    "breadcrumbPicker.background": black[1],

    "terminal.background": black[3],
    "terminal.border": transparent,
    "terminal.selectionBackground": black[1],
    "terminalCursor.foreground": grey[5]
  },

  tokenColors: [
    // Global
    {
      scope: `comment`,
      settings: {
        foreground: grey[5]
      }
    },
    {
      scope: `constant`,
      settings: {
        foreground: red[1]
      }
    },
    {
      scope: `constant.character.entity`,
      settings: {
        foreground: olive[3]
      }
    },
    {
      scope: `keyword`,
      settings: {
        foreground: olive[3]
      }
    },
    {
      scope: `storage`,
      settings: {
        foreground: olive[1]
      }
    },
    {
      scope: `storage.type`,
      settings: {
        foreground: olive[2]
      }
    },
    {
      scope: `string`,
      settings: {
        foreground: red[1]
      }
    },
    {
      scope: `support`,
      settings: {
        foreground: grey[1]
      }
    },
    {
      scope: `variable`,
      settings: {
        foreground: red[2]
      }
    },

    // HTML attribute names
    {
      scope: `entity.other.attribute-name.html`,
      settings: {
        fontStyle: `normal`,
        foreground: grey[2]
      }
    },
    // HTML attribute (class)
    {
      scope: `meta.attribute.class.html`,
      settings: {
        fontStyle: `bold`
      }
    },
    //  HTML attribute values
    {
      scope: [`string.quoted.double.html`, `string.quoted.single.html`],
      settings: {
        foreground: red[2]
      }
    },
    //  HTML comments
    {
      scope: `comment.block.html`,
      settings: {
        fontStyle: `italic`,
        foreground: grey[5]
      }
    },
    //  HTML tags
    {
      scope: `entity.name.tag.html`,
      settings: {
        foreground: red[3]
      }
    },

    //  CSS attribute names
    {
      scope: `entity.other.attribute-name.css`,
      settings: {
        foreground: grey[2]
      }
    },
    //  CSS classes
    {
      scope: `entity.other.attribute-name.class.css`,
      settings: {
        fontStyle: `bold`,
        foreground: red[2]
      }
    },
    // CSS comments
    {
      scope: `comment.block.css`,
      settings: {
        fontStyle: `italic`,
        foreground: grey[5]
      }
    },
    // CSS hex values
    {
      scope: [
        `constant.other.color.rgb-value.hex.css`,
        `punctuation.definition.constant.css`
      ],
      settings: {
        foreground: olive[3]
      }
    },
    // CSS IDs
    {
      scope: `entity.other.attribute-name.id.css`,
      settings: {
        foreground: red[2]
      }
    },
    // CSS important
    {
      scope: `keyword.other.important.css`,
      settings: {
        fontStyle: `italic`,
        foreground: olive[2]
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
        foreground: grey[3]
      }
    },
    // CSS property names
    {
      scope: `support.type.property-name.css`,
      settings: {
        foreground: grey[3]
      }
    },
    // CSS property names (vendored)
    {
      scope: `support.type.vendored.property-name.css`,
      settings: {
        foreground: grey[4]
      }
    },
    // CSS pseudo-classses
    {
      scope: `entity.other.attribute-name.pseudo-class.css`,
      settings: {
        foreground: grey[2]
      }
    },
    // CSS pseudo-elements
    {
      scope: `entity.other.attribute-name.pseudo-element.css`,
      settings: {
        foreground: grey[2]
      }
    },
    // CSS punctuation
    {
      scope: `punctuation.definition.entity.css`,
      settings: {
        fontStyle: `normal`,
        foreground: grey[3]
      }
    },
    // CSS tags
    {
      scope: `entity.name.tag.css`,
      settings: {
        foreground: red[3]
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
        foreground: red[1]
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
        foreground: grey[2]
      }
    },
    // SCSS attribute values
    {
      scope: `meta.attribute-selector.scss`,
      settings: {
        foreground: red[1]
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
        foreground: grey[3]
      }
    },
    // SCSS comments (block)
    {
      scope: `comment.block.scss`,
      settings: {
        fontStyle: `italic`,
        foreground: grey[4]
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
        foreground: olive[2]
      }
    },
    // SCSS functions
    {
      scope: `entity.name.function.scss`,
      settings: {
        foreground: grey[1]
      }
    },
    // SCSS operators
    {
      scope: [`keyword.control.operator.css.scss`, `keyword.operator.scss`],
      settings: {
        foreground: grey[3]
      }
    },
    // SCSS punctuation
    {
      scope: `punctuation.separator.delimiter.scss`,
      settings: {
        foreground: grey[3]
      }
    },
    // SCSS tags
    {
      scope: `meta.property-name.scss`,
      settings: {
        foreground: red[3]
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
        foreground: grey[3]
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
        foreground: olive[2]
      }
    },
    // JavaScript class (inherited)
    {
      scope: `entity.other.inherited-class.js`,
      settings: {
        foreground: olive[1]
      }
    },
    // JavaScript comments (block)
    {
      scope: `comment.block.js`,
      settings: {
        fontStyle: `italic`,
        foreground: grey[4]
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
        "support.function.js"
      ],
      settings: {
        foreground: red[3]
      }
    },
    // JavaScript key-value separators
    {
      scope: `punctuation.separator.key-value.js`,
      settings: {
        foreground: grey[3]
      }
    },
    // JavaScript null
    {
      scope: `constant.language.null.js`,
      settings: {
        fontStyle: `bold`,
        foreground: grey[4]
      }
    },
    // JavaScript object keys
    {
      scope: `meta.object-literal.key.js`,
      settings: {
        foreground: red[2]
      }
    },
    // JavaScript object property accessors
    {
      scope: `punctuation.accessor.js`,
      settings: {
        foreground: grey[3]
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
        foreground: grey[3]
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
        foreground: grey[1]
      }
    },
    // JavaScript super
    {
      scope: `variable.language.super.js`,
      settings: {
        fontStyle: `normal`,
        foreground: grey[2]
      }
    },
    // JavaScript this
    {
      scope: `variable.language.this.js`,
      settings: {
        fontStyle: `bold`,
        foreground: grey[3]
      }
    },
    // JavaScript undefined
    {
      scope: `constant.language.undefined.js`,
      settings: {
        fontStyle: `bold`,
        foreground: grey[4]
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
        foreground: `#e6e8e9`
      }
    },
    // JSX attribute values
    {
      scope: `string.quoted.double.js.jsx`,
      settings: {
        foreground: red[2]
      }
    },
    // JSX comments (block)
    {
      scope: `comment.block.js.jsx`,
      settings: {
        fontStyle: `italic`,
        foreground: grey[4]
      }
    },
    // JSX comments (line)
    {
      scope: `comment.line.double-slash.js.jsx`,
      settings: {
        fontStyle: `italic`,
        foreground: grey[5]
      }
    },
    // JSX keywords
    {
      scope: [`keyword.control.export.js.jsx`, `keyword.control.import.js.jsx`],
      settings: {
        foreground: grey[1]
      }
    },
    // JSX tags
    {
      scope: `entity.name.tag.js.jsx`,
      settings: {
        foreground: red[3]
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
        foreground: grey[3]
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
        foreground: olive[2]
      }
    },
    // TypeScript class (inherited)
    {
      scope: `entity.other.inherited-class.ts`,
      settings: {
        foreground: olive[1]
      }
    },
    // TypeScript comments (block)
    {
      scope: `comment.block.ts`,
      settings: {
        fontStyle: `italic`,
        foreground: grey[4]
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
        foreground: red[3]
      }
    },
    // TypeScript interface
    {
      scope: `entity.name.type.interface.ts`,
      settings: {
        foreground: olive[1]
      }
    },
    // TypeScript key-value separators
    {
      scope: `punctuation.separator.key-value.ts`,
      settings: {
        foreground: grey[3]
      }
    },
    // TypeScript null
    {
      scope: `constant.language.null.ts`,
      settings: {
        fontStyle: `bold`,
        foreground: grey[4]
      }
    },
    // TypeScript object keys
    {
      scope: `meta.object-literal.key.ts`,
      settings: {
        foreground: red[2]
      }
    },
    // TypeScript object property accessors
    {
      scope: `punctuation.accessor.ts`,
      settings: {
        foreground: grey[3]
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
        foreground: grey[3]
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
        foreground: olive[1]
      }
    },
    // TypeScript super
    {
      scope: `variable.language.super.ts`,
      settings: {
        fontStyle: `normal`,
        foreground: grey[2]
      }
    },
    // TypeScript this
    {
      scope: `variable.language.this.ts`,
      settings: {
        fontStyle: `bold`,
        foreground: grey[3]
      }
    },
    // TypeScript types
    {
      scope: [`entity.name.type.alias.ts`, `support.type.primitive.ts`],
      settings: {
        foreground: olive[2]
      }
    },
    // TypeScript undefined
    {
      scope: `constant.language.undefined.ts`,
      settings: {
        fontStyle: `bold`,
        foreground: grey[4]
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
      scope: `source.json meta.structure.dictionary string`,
      settings: {
        fontStyle: `italic`,
        foreground: red[3]
      }
    },
    // JSON keys, level 1
    {
      scope: `source.json meta meta.structure.dictionary string`,
      settings: {
        fontStyle: `italic`,
        foreground: red[2]
      }
    },
    // JSON keys, level 2
    {
      scope: `source.json meta meta meta meta.structure.dictionary string`,
      settings: {
        fontStyle: `italic`,
        foreground: red[1]
      }
    },
    // JSON keys, level 3
    {
      scope: `source.json meta meta meta meta meta meta.structure.dictionary string`,
      settings: {
        fontStyle: `italic`,
        foreground: red[3]
      }
    },
    // JSON keys, level 4
    {
      scope: `source.json meta meta meta meta meta meta meta meta.structure.dictionary string`,
      settings: {
        fontStyle: `italic`,
        foreground: red[2]
      }
    },
    // JSON keys, level 5
    {
      scope: `source.json meta meta meta meta meta meta meta meta meta meta.structure.dictionary string`,
      settings: {
        fontStyle: `italic`,
        foreground: red[1]
      }
    },
    // JSON values
    {
      scope: `string.quoted.double.json`,
      settings: {
        foreground: grey[1]
      }
    },

    // Markdown bold
    {
      scope: `markup.bold.markdown`,
      settings: {
        fontStyle: `bold`,
        foreground: red[2]
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
        foreground: red[3]
      }
    },
    // Markdown italics
    {
      scope: `markup.italic.markdown`,
      settings: {
        fontStyle: `italic`,
        foreground: red[2]
      }
    },
    // Markdown link description
    {
      scope: [
        `constant.other.reference.link.markdown`,
        `string.other.link.description.markdown`
      ],
      settings: {
        foreground: grey[1]
      }
    },
    // Markdown quotation
    {
      scope: `markup.quote.markdown`,
      settings: {
        foreground: olive[3]
      }
    },
    // XML attribute names
    {
      scope: `entity.other.attribute-name.localname.xml`,
      settings: {
        foreground: grey[2]
      }
    },
    // XML attribute values
    {
      scope: [`string.quoted.double.xml`, `string.quoted.single.xml`],
      settings: {
        foreground: red[2]
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
        foreground: red[3]
      }
    }
  ]
};
