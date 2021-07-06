`use strict`;

// Config
// =============================================================================
const name = `The Empire`;
const type = `dark`;

// Opacity
// =============================================================================
const hidden = `00`;
const pronounced = `33`;
const striking = `4d`;
const subtle = `1a`;

// Palette
// =============================================================================
const black = `#010203`;
const bud = `#9fa599`;
const bunker = `#0a0f17`;
const camouflageGreen = `#777d72`;
const catskillWhite = `#fbfcfd`;
const ebony = `#04070b`;
const greenSpring = `#bec4b7`;
const heather = `#becbd8`;
const lynch = `#687f9c`;
const milanoRed = `#af0505`;
const mystic = `#dee6ec`;
const nepal = `#98abc1`;
const red = `#f50a0a`;
const sunsetOrange = `#fa4848`;
const transparent = black + hidden;
const vividTangerine = `#ff8080`;

// Exports
// =============================================================================
module.exports = {
  colors: {
    // Activity bar
    // -------------------------------------------------------------------------
    'activityBar.activeBackground': ebony,
    'activityBar.activeBorder': transparent,
    'activityBar.activeFocusBorder': transparent,
    'activityBar.background': bunker,
    'activityBar.border': transparent,
    'activityBar.dropBackground': transparent,
    'activityBar.dropBorder': milanoRed,
    'activityBar.foreground': mystic,
    'activityBar.inactiveForeground': nepal,
    'activityBarBadge.background': sunsetOrange,
    'activityBarBadge.foreground': black,

    // Badge colors
    // -------------------------------------------------------------------------
    'badge.background': sunsetOrange,
    'badge.foreground': black,

    // Base colors
    // -------------------------------------------------------------------------
    descriptionForeground: heather,
    errorForeground: milanoRed,
    focusBorder: transparent,
    foreground: heather,
    'icon.foreground': nepal,
    'selection.background': milanoRed,
    'widget.shadow': transparent,

    // Breadcrumbs colors
    // -------------------------------------------------------------------------
    'breadcrumb.activeSelectionForeground': mystic,
    'breadcrumb.background': black,
    'breadcrumb.focusForeground': heather,
    'breadcrumb.foreground': lynch,
    'breadcrumbPicker.background': bunker,

    // Button control
    // -------------------------------------------------------------------------
    'button.background': camouflageGreen,
    'button.foreground': black,
    'button.hoverBackground': greenSpring,
    'checkbox.background': black,
    'checkbox.border': milanoRed,
    'checkbox.foreground': nepal,

    // Debug colors
    // -------------------------------------------------------------------------
    'debugTokenExpression.boolean': bud,
    'debugTokenExpression.error': milanoRed,
    'debugTokenExpression.name': red,
    'debugTokenExpression.number': bud,
    'debugTokenExpression.string': bud,
    'debugTokenExpression.value': bud,
    'debugToolBar.background': bunker,
    'debugToolBar.border': bunker,
    'debugView.exceptionLabelBackground': red,
    'debugView.exceptionLabelForeground': black,
    'debugView.stateLabelBackground': sunsetOrange,
    'debugView.stateLabelForeground': black,
    'debugView.valueChangedHighlight': catskillWhite,
    'editor.focusedStackFrameHighlightBackground': bunker,
    'editor.stackFrameHighlightBackground': ebony,

    // Debug icons colors
    // -------------------------------------------------------------------------
    'debugConsole.errorForeground': milanoRed,
    'debugConsole.infoForeground': catskillWhite,
    'debugConsole.sourceForeground': nepal,
    'debugConsole.warningForeground': vividTangerine,
    'debugConsoleInputIcon.foreground': nepal,
    'debugIcon.breakpointCurrentStackframeForeground': sunsetOrange,
    'debugIcon.breakpointDisabledForeground': sunsetOrange,
    'debugIcon.breakpointForeground': sunsetOrange,
    'debugIcon.breakpointStackframeForeground': sunsetOrange,
    'debugIcon.breakpointUnverifiedForeground': sunsetOrange,
    'debugIcon.continueForeground': nepal,
    'debugIcon.disconnectForeground': nepal,
    'debugIcon.pauseForeground': catskillWhite,
    'debugIcon.restartForeground': camouflageGreen,
    'debugIcon.stepBackForeground': nepal,
    'debugIcon.stepIntoForeground': nepal,
    'debugIcon.stepOverForeground': nepal,
    'debugIcon.stepOutForeground': nepal,
    'debugIcon.startForeground': nepal,
    'debugIcon.stopForeground': milanoRed,

    // Diff editor colors
    // -------------------------------------------------------------------------
    'diffEditor.border': transparent,
    'diffEditor.diagonalFill': lynch + striking,
    'diffEditor.insertedTextBackground': camouflageGreen + pronounced,
    'diffEditor.insertedTextBorder': transparent,
    'diffEditor.removedTextBackground': milanoRed + pronounced,
    'diffEditor.removedTextBorder': transparent,

    // Dropdown control
    // -------------------------------------------------------------------------
    'dropdown.background': black,
    'dropdown.border': milanoRed,
    'dropdown.listBackground': bunker,
    'dropdown.foreground': nepal,

    // Editor colors
    // -------------------------------------------------------------------------
    'editor.background': black,
    'editor.findMatchBackground': lynch + pronounced,
    'editor.findMatchBorder': transparent,
    'editor.findMatchHighlightBackground': lynch + pronounced,
    'editor.findMatchHighlightBorder': transparent,
    'editor.findRangeHighlightBackground': lynch + pronounced,
    'editor.findRangeHighlightBorder': transparent,
    'editor.foldBackground': transparent,
    'editor.foreground': heather,
    'editor.hoverHighlightBackground': lynch + pronounced,
    'editor.inactiveSelectionBackground': transparent,
    'editor.lineHighlightBackground': bunker,
    'editor.lineHighlightBorder': transparent,
    'editor.rangeHighlightBackground': lynch + subtle,
    'editor.rangeHighlightBorder': transparent,
    'editor.selectionBackground': lynch + striking,
    'editor.selectionHighlightBackground': lynch + pronounced,
    'editor.selectionHighlightBorder': transparent,
    'editor.symbolHighlightBackground': lynch + pronounced,
    'editor.symbolHighlightBorder': transparent,
    'editor.wordHighlightBackground': lynch + pronounced,
    'editor.wordHighlightBorder': transparent,
    'editor.wordHighlightStrongBackground': lynch + pronounced,
    'editor.wordHighlightStrongBorder': transparent,
    'editorBracketMatch.background': lynch + pronounced,
    'editorBracketMatch.border': transparent,
    'editorCursor.background': transparent,
    'editorCursor.foreground': nepal,
    'editorCodeLens.foreground': lynch,
    'editorError.border': transparent,
    'editorError.foreground': milanoRed,
    'editorGutter.addedBackground': camouflageGreen,
    'editorGutter.background': transparent,
    'editorGutter.commentRangeForeground': transparent,
    'editorGutter.deletedBackground': milanoRed,
    'editorGutter.foldingControlForeground': nepal,
    'editorGutter.modifiedBackground': catskillWhite,
    'editorHint.border': transparent,
    'editorHint.foreground': greenSpring,
    'editorInfo.border': transparent,
    'editorInfo.foreground': catskillWhite,
    'editorLineNumber.activeForeground': nepal,
    'editorLineNumber.foreground': lynch,
    'editorLightBulb.foreground': sunsetOrange,
    'editorLightBulbAutoFix.foreground': sunsetOrange,
    'editorLink.activeForeground': greenSpring,
    'editorOverviewRuler.addedForeground': camouflageGreen,
    'editorOverviewRuler.background': transparent,
    'editorOverviewRuler.border': transparent,
    'editorOverviewRuler.bracketMatchForeground': lynch + pronounced,
    'editorOverviewRuler.deletedForeground': milanoRed,
    'editorOverviewRuler.errorForeground': milanoRed,
    'editorOverviewRuler.findMatchForeground': lynch + pronounced,
    'editorOverviewRuler.infoForeground': catskillWhite,
    'editorOverviewRuler.modifiedForeground': catskillWhite,
    'editorOverviewRuler.rangeHighlightForeground': lynch + pronounced,
    'editorOverviewRuler.selectionHighlightForeground': lynch + striking,
    'editorOverviewRuler.warningForeground': vividTangerine,
    'editorOverviewRuler.wordHighlightForeground': lynch + pronounced,
    'editorOverviewRuler.wordHighlightStrongForeground': lynch + pronounced,
    'editorUnnecessaryCode.border': transparent,
    'editorUnnecessaryCode.opacity': catskillWhite + striking,
    'editorRuler.foreground': heather,
    'editorWarning.border': transparent,
    'editorWarning.foreground': vividTangerine,
    'editorWhitespace.foreground': lynch + striking,
    'problemsErrorIcon.foreground': milanoRed,
    'problemsInfoIcon.foreground': catskillWhite,
    'problemsWarningIcon.foreground': vividTangerine,
    'searchEditor.findMatchBackground': lynch + pronounced,
    'searchEditor.findMatchBorder': transparent,
    'searchEditor.textInputBorder': milanoRed,

    // Editor group and tabs
    // -------------------------------------------------------------------------
    'editorGroup.border': bunker,
    'editorGroup.dropBackground': milanoRed,
    'editorGroup.emptyBackground': ebony,
    'editorGroup.focusedEmptyBorder': milanoRed,
    'editorGroupHeader.border': transparent,
    'editorGroupHeader.tabsBackground': bunker,
    'editorGroupHeader.tabsBorder': black,
    'tab.activeBackground': black,
    'tab.activeBorder': black,
    'tab.activeBorderTop': black,
    'tab.activeForeground': mystic,
    'tab.activeModifiedBorder': bunker,
    'tab.border': bunker,
    'tab.hoverBackground': black,
    'tab.hoverBorder': bunker,
    'tab.hoverForeground': mystic,
    'tab.inactiveBackground': ebony,
    'tab.inactiveForeground': nepal,
    'tab.inactiveModifiedBorder': bunker,
    'tab.unfocusedActiveBackground': black,
    'tab.unfocusedActiveBorderTop': black,
    'tab.unfocusedActiveBorder': black,
    'tab.unfocusedActiveForeground': mystic,
    'tab.unfocusedActiveModifiedBorder': bunker,
    'tab.unfocusedHoverBackground': black,
    'tab.unfocusedHoverBorder': bunker,
    'tab.unfocusedHoverForeground': mystic,
    'tab.unfocusedInactiveBackground': ebony,
    'tab.unfocusedInactiveForeground': nepal,
    'tab.unfocusedInactiveModifiedBorder': bunker,

    // Editor widget colors
    // -------------------------------------------------------------------------
    'debugExceptionWidget.background': bunker,
    'debugExceptionWidget.border': milanoRed,
    'editorHoverWidget.background': bunker,
    'editorHoverWidget.border': milanoRed,
    'editorHoverWidget.foreground': nepal,
    'editorHoverWidget.statusBarBackground': bunker,
    'editorMarkerNavigation.background': heather,
    'editorMarkerNavigationError.background': milanoRed,
    'editorMarkerNavigationInfo.background': catskillWhite,
    'editorMarkerNavigationWarning.background': vividTangerine,
    'editorSuggestWidget.background': bunker,
    'editorSuggestWidget.border': milanoRed,
    'editorSuggestWidget.foreground': nepal,
    'editorSuggestWidget.highlightForeground': mystic,
    'editorSuggestWidget.selectedBackground': black,
    'editorWidget.background': bunker,
    'editorWidget.border': milanoRed,
    'editorWidget.foreground': nepal,
    'editorWidget.resizeBorder': milanoRed,

    // Extension colors
    // -------------------------------------------------------------------------
    'extensionButton.prominentBackground': red,
    'extensionButton.prominentForeground': black,
    'extensionButton.prominentHoverBackground': vividTangerine,
    'extensionBadge.remoteBackground': sunsetOrange,
    'extensionBadge.remoteForeground': black,

    // Git colors
    // -------------------------------------------------------------------------
    'gitDecoration.addedResourceForeground': camouflageGreen,
    'gitDecoration.conflictingResourceForeground': red,
    'gitDecoration.deletedResourceForeground': milanoRed,
    'gitDecoration.ignoredResourceForeground': lynch,
    'gitDecoration.modifiedResourceForeground': catskillWhite,
    'gitDecoration.submoduleResourceForeground': nepal,
    'gitDecoration.untrackedResourceForeground': heather,

    // Input control
    // -------------------------------------------------------------------------
    'input.background': black,
    'input.border': milanoRed,
    'input.foreground': nepal,
    'input.placeholderForeground': lynch,
    'inputOption.activeBackground': bunker,
    'inputOption.activeBorder': transparent,
    'inputOption.activeForeground': mystic,
    'inputValidation.errorBackground': black,
    'inputValidation.errorBorder': milanoRed,
    'inputValidation.errorForeground': milanoRed,
    'inputValidation.infoBackground': black,
    'inputValidation.infoBorder': milanoRed,
    'inputValidation.infoForeground': nepal,

    // Integrated terminal colors
    // -------------------------------------------------------------------------
    'terminal.ansiBlack': camouflageGreen,
    'terminal.ansiBlue': camouflageGreen,
    'terminal.ansiBrightBlack': camouflageGreen,
    'terminal.ansiBrightBlue': camouflageGreen,
    'terminal.ansiBrightCyan': greenSpring,
    'terminal.ansiBrightGreen': greenSpring,
    'terminal.ansiBrightMagenta': red,
    'terminal.ansiBrightRed': red,
    'terminal.ansiBrightWhite': catskillWhite,
    'terminal.ansiBrightYellow': catskillWhite,
    'terminal.ansiCyan': greenSpring,
    'terminal.ansiGreen': greenSpring,
    'terminal.ansiMagenta': red,
    'terminal.ansiRed': red,
    'terminal.ansiWhite': catskillWhite,
    'terminal.ansiYellow': catskillWhite,
    'terminal.background': ebony,
    'terminal.border': transparent,
    'terminal.foreground': nepal,
    'terminal.selectionBackground': lynch + striking,
    'terminalCursor.background': transparent,
    'terminalCursor.foreground': nepal,

    // Lists and trees
    // -------------------------------------------------------------------------
    'list.activeSelectionBackground': black,
    'list.activeSelectionForeground': mystic,
    'list.deemphasizedForeground': lynch,
    'list.dropBackground': milanoRed,
    'list.errorForeground': milanoRed,
    'list.filterMatchBackground': lynch + pronounced,
    'list.filterMatchBorder': transparent,
    'list.focusBackground': black,
    'list.focusForeground': mystic,
    'list.highlightForeground': mystic,
    'list.hoverBackground': bunker,
    'list.hoverForeground': mystic,
    'list.inactiveFocusBackground': black,
    'list.inactiveSelectionBackground': black,
    'list.inactiveSelectionForeground': mystic,
    'list.invalidItemForeground': lynch,
    'list.warningForeground': vividTangerine,
    'listFilterWidget.background': bunker,
    'listFilterWidget.noMatchesOutline': milanoRed,
    'listFilterWidget.outline': milanoRed,
    'tree.indentGuidesStroke': lynch,

    // Menu bar colors
    // -------------------------------------------------------------------------
    'menu.background': ebony,
    'menu.border': ebony,
    'menu.foreground': nepal,
    'menu.selectionBackground': bunker,
    'menu.selectionBorder': bunker,
    'menu.selectionForeground': mystic,
    'menu.separatorBackground': transparent,
    'menubar.selectionBackground': bunker,
    'menubar.selectionBorder': bunker,
    'menubar.selectionForeground': mystic,

    // Merge conflicts colors
    // -------------------------------------------------------------------------
    'editorOverviewRuler.commonContentForeground': heather,
    'editorOverviewRuler.currentContentForeground': heather,
    'editorOverviewRuler.incomingContentForeground': heather,
    'merge.border': transparent,
    'merge.commonContentBackground': catskillWhite + subtle,
    'merge.commonHeaderBackground': catskillWhite + pronounced,
    'merge.currentContentBackground': camouflageGreen + pronounced,
    'merge.currentHeaderBackground': camouflageGreen + striking,
    'merge.incomingContentBackground': greenSpring + pronounced,
    'merge.incomingHeaderBackground': greenSpring + striking,

    // Minimap
    // -------------------------------------------------------------------------
    'minimap.background': ebony,
    'minimap.errorHighlight': milanoRed,
    'minimap.findMatchHighlight': lynch + pronounced,
    'minimap.selectionHighlight': lynch + striking,
    'minimap.warningHighlight': vividTangerine,
    'minimapGutter.addedBackground': camouflageGreen,
    'minimapGutter.deletedBackground': milanoRed,
    'minimapGutter.modifiedBackground': catskillWhite,
    'minimapSlider.activeBackground': lynch + striking,
    'minimapSlider.background': lynch + subtle,
    'minimapSlider.hoverBackground': lynch + pronounced,

    // Notification colors
    // -------------------------------------------------------------------------
    'notificationCenter.border': bunker,
    'notificationCenterHeader.background': bunker,
    'notificationCenterHeader.foreground': mystic,
    'notificationLink.foreground': camouflageGreen,
    'notifications.background': bunker,
    'notifications.border': bunker,
    'notifications.foreground': nepal,
    'notificationsErrorIcon.foreground': milanoRed,
    'notificationsInfoIcon.foreground': catskillWhite,
    'notificationsWarningIcon.foreground': vividTangerine,
    'notificationToast.border': bunker,

    // Panel colors
    // -------------------------------------------------------------------------
    'panel.background': bunker,
    'panel.border': transparent,
    'panel.dropBackground': transparent,
    'panel.dropBorder': milanoRed,
    'panelTitle.activeBorder': transparent,
    'panelTitle.activeForeground': mystic,
    'panelTitle.inactiveForeground': nepal,

    // Peek view colors
    // -------------------------------------------------------------------------
    'peekView.border': bunker,
    'peekViewTitle.background': bunker,
    'peekViewTitleDescription.foreground': nepal,
    'peekViewTitleLabel.foreground': mystic,

    // Preview colors
    // -------------------------------------------------------------------------
    'imagePreview.border': transparent,

    // Progress bar
    // -------------------------------------------------------------------------
    'progressBar.background': milanoRed,

    // Quick picker colors
    // -------------------------------------------------------------------------
    'pickerGroup.border': transparent,
    'pickerGroup.foreground': mystic,
    'quickInput.background': ebony,
    'quickInput.foreground': nepal,

    // Scrollbar control
    // -------------------------------------------------------------------------
    'scrollbar.shadow': transparent,
    'scrollbarSlider.activeBackground': lynch + striking,
    'scrollbarSlider.background': lynch + subtle,
    'scrollbarSlider.hoverBackground': lynch + pronounced,

    // Settings editor colors
    // -------------------------------------------------------------------------
    'settings.checkboxBackground': black,
    'settings.checkboxBorder': milanoRed,
    'settings.checkboxForeground': nepal,
    'settings.dropdownBackground': black,
    'settings.dropdownBorder': milanoRed,
    'settings.dropdownForeground': nepal,
    'settings.dropdownListBorder': bunker,
    'settings.headerForeground': mystic,
    'settings.modifiedItemIndicator': catskillWhite,
    'settings.numberInputBackground': black,
    'settings.numberInputBorder': milanoRed,
    'settings.numberInputForeground': nepal,
    'settings.textInputBackground': black,
    'settings.textInputBorder': milanoRed,
    'settings.textInputForeground': nepal,

    // Side bar
    // -------------------------------------------------------------------------
    'sideBar.background': ebony,
    'sideBar.border': black,
    'sideBar.dropBackground': transparent,
    'sideBar.foreground': nepal,
    'sideBarSectionHeader.background': transparent,
    'sideBarSectionHeader.border': transparent,
    'sideBarSectionHeader.foreground': heather,
    'sideBarTitle.foreground': mystic,

    // Snippets colors
    // -------------------------------------------------------------------------
    'editor.snippetFinalTabstopHighlightBackground': lynch + pronounced,
    'editor.snippetFinalTabstopHighlightBorder': milanoRed,
    'editor.snippetTabstopHighlightBackground': lynch + pronounced,
    'editor.snippetTabstopHighlightBorder': milanoRed,

    // Status bar colors
    // -------------------------------------------------------------------------
    'statusBar.background': camouflageGreen,
    'statusBar.border': transparent,
    'statusBar.foreground': black,
    'statusBar.debuggingBackground': catskillWhite,
    'statusBar.debuggingBorder': transparent,
    'statusBar.debuggingForeground': black,
    'statusBar.noFolderBackground': milanoRed,
    'statusBar.noFolderBorder': transparent,
    'statusBar.noFolderForeground': mystic,
    // "statusBarItem.activeBackground": greenSpring,
    // "statusBarItem.hoverBackground": greenSpring,

    // Symbol icons colors
    // -------------------------------------------------------------------------
    'symbolIcon.arrayForeground': sunsetOrange,
    'symbolIcon.booleanForeground': sunsetOrange,
    'symbolIcon.classForeground': sunsetOrange,
    'symbolIcon.colorForeground': sunsetOrange,
    'symbolIcon.constantForeground': sunsetOrange,
    'symbolIcon.constructorForeground': sunsetOrange,
    'symbolIcon.enumeratorForeground': sunsetOrange,
    'symbolIcon.enumeratorMemberForeground': sunsetOrange,
    'symbolIcon.eventForeground': sunsetOrange,
    'symbolIcon.fieldForeground': sunsetOrange,
    'symbolIcon.fileForeground': sunsetOrange,
    'symbolIcon.folderForeground': sunsetOrange,
    'symbolIcon.functionForeground': sunsetOrange,
    'symbolIcon.interfaceForeground': sunsetOrange,
    'symbolIcon.keyForeground': sunsetOrange,
    'symbolIcon.keywordForeground': sunsetOrange,
    'symbolIcon.methodForeground': sunsetOrange,
    'symbolIcon.moduleForeground': sunsetOrange,
    'symbolIcon.namespaceForeground': sunsetOrange,
    'symbolIcon.nullForeground': sunsetOrange,
    'symbolIcon.numberForeground': sunsetOrange,
    'symbolIcon.objectForeground': sunsetOrange,
    'symbolIcon.operatorForeground': sunsetOrange,
    'symbolIcon.packageForeground': sunsetOrange,
    'symbolIcon.propertyForeground': sunsetOrange,
    'symbolIcon.referenceForeground': sunsetOrange,
    'symbolIcon.snippetForeground': sunsetOrange,
    'symbolIcon.stringForeground': sunsetOrange,
    'symbolIcon.structForeground': sunsetOrange,
    'symbolIcon.textForeground': sunsetOrange,
    'symbolIcon.typeParameterForeground': sunsetOrange,
    'symbolIcon.unitForeground': sunsetOrange,
    'symbolIcon.variableForeground': sunsetOrange,

    // Text colors
    // -------------------------------------------------------------------------
    'textBlockQuote.background': transparent,
    'textBlockQuote.border': heather,
    'textCodeBlock.background': black,
    'textLink.activeForeground': greenSpring,
    'textLink.foreground': camouflageGreen,
    'textPreformat.foreground': catskillWhite,
    'textSeparator.foreground': heather,

    // Welcome page colors
    // -------------------------------------------------------------------------
    'walkThrough.embeddedEditorBackground': ebony,
    'welcomePage.background': ebony,
    'welcomePage.buttonBackground': camouflageGreen,
    'welcomePage.buttonHoverBackground': greenSpring,

    // Window border
    // -------------------------------------------------------------------------
    'window.activeBorder': bunker,
    'window.inactiveBorder': black,
  },
  name,
  tokenColors: [
    // Base tokens
    // -------------------------------------------------------------------------
    {
      name: `Base comments`,
      scope: `comment`,
      settings: {
        foreground: lynch,
      },
    },
    {
      name: `Base constants`,
      scope: `constant`,
      settings: {
        foreground: bud,
      },
    },
    {
      name: `Base entities`,
      scope: `constant.character.entity`,
      settings: {
        fontStyle: `italic`,
        foreground: red,
      },
    },
    {
      name: `Base keywords`,
      scope: `keyword`,
      settings: {
        foreground: catskillWhite,
      },
    },
    {
      name: `Base storage`,
      scope: `storage`,
      settings: {
        foreground: catskillWhite,
      },
    },
    {
      name: `Base strings`,
      scope: `string`,
      settings: {
        foreground: bud,
      },
    },
    {
      name: `Base support`,
      scope: `support`,
      settings: {
        foreground: vividTangerine,
      },
    },
    {
      name: `Base variables`,
      scope: `variable`,
      settings: {
        fontStyle: `italic`,
        foreground: red,
      },
    },

    // CSS tokens
    // -------------------------------------------------------------------------
    {
      name: `CSS attributes`,
      scope: `entity.other.attribute-name.css`,
      settings: {
        foreground: mystic,
      },
    },
    {
      name: `CSS classes`,
      scope: `entity.other.attribute-name.class.css`,
      settings: {
        foreground: sunsetOrange,
      },
    },
    {
      name: `CSS entities`,
      scope: `punctuation.definition.entity.css`,
      settings: {
        fontStyle: `normal`,
        foreground: heather,
      },
    },
    {
      name: `CSS hexadecimals`,
      scope: [
        `constant.other.color.rgb-value.hex.css`,
        `punctuation.definition.constant.css`,
      ],
      settings: {
        foreground: vividTangerine,
      },
    },
    {
      name: `CSS ids`,
      scope: `entity.other.attribute-name.id.css`,
      settings: {
        foreground: sunsetOrange,
      },
    },
    {
      name: `CSS important`,
      scope: `keyword.other.important.css`,
      settings: {
        fontStyle: `bold`,
      },
    },
    {
      name: `CSS operators`,
      scope: [
        `keyword.operator.arithmetic.css`,
        `keyword.operator.combinator.css`,
        `keyword.operator.pattern.css`,
      ],
      settings: {
        foreground: heather,
      },
    },
    {
      name: `CSS properties`,
      scope: `support.type.property-name.css`,
      settings: {
        foreground: heather,
      },
    },
    {
      name: `CSS property values`,
      scope: [
        `support.constant.color.current.css`,
        `support.constant.property-value.css`,
      ],
      settings: {
        foreground: catskillWhite,
      },
    },
    {
      name: `CSS pseudo`,
      scope: [
        `entity.other.attribute-name.pseudo-class.css`,
        `entity.other.attribute-name.pseudo-element.css`,
      ],
      settings: {
        foreground: mystic,
      },
    },
    {
      name: `CSS tags`,
      scope: `entity.name.tag.css`,
      settings: {
        foreground: camouflageGreen,
      },
    },
    {
      name: `CSS units`,
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
        `keyword.other.unit.q.css`,
        `keyword.other.unit.rem.css`,
        `keyword.other.unit.s.css`,
        `keyword.other.unit.vmax.css`,
        `keyword.other.unit.vmin.css`,
        `keyword.other.unit.vh.css`,
        `keyword.other.unit.vw.css`,
      ],
      settings: {
        foreground: bud,
      },
    },
    {
      name: `CSS vendor-prefixed properties`,
      scope: `support.type.vendored.property-name.css`,
      settings: {
        foreground: nepal,
      },
    },

    // HTML tokens
    // -------------------------------------------------------------------------
    {
      name: `HTML attributes`,
      scope: `entity.other.attribute-name.html`,
      settings: {
        foreground: mystic,
      },
    },
    {
      name: `HTML tags`,
      scope: `entity.name.tag.html`,
      settings: {
        foreground: sunsetOrange,
      },
    },

    // JavaScript tokens
    // -------------------------------------------------------------------------
    {
      name: `JavaScript block comments`,
      scope: [`comment.block.documentation.js`, `comment.block.js`],
      settings: {
        foreground: nepal,
      },
    },
    {
      name: `JavaScript brackets`,
      scope: [
        `meta.brace.round.js`,
        `meta.brace.square.js`,
        `punctuation.accessor.js`,
        `punctuation.definition.block.js`,
        `punctuation.definition.bracket.curly.begin.jsdoc`,
        `punctuation.definition.bracket.curly.end.jsdoc`,
        `punctuation.definition.template-expression.begin.js`,
        `punctuation.definition.template-expression.end.js`,
        `punctuation.separator.key-value.js`,
      ],
      settings: {
        foreground: heather,
      },
    },
    {
      name: `JavaScript classes`,
      scope: [
        `entity.name.type.class.js`,
        `entity.name.type.js`,
        `support.class.builtin.js`,
      ],
      settings: {
        foreground: camouflageGreen,
      },
    },
    {
      name: `JavaScript functions`,
      scope: [
        `entity.name.function.js`,
        `support.function.console.js`,
        'support.function.js',
      ],
      settings: {
        foreground: vividTangerine,
      },
    },
    {
      name: `JavaScript inherited classes`,
      scope: `entity.other.inherited-class.js`,
      settings: {
        foreground: greenSpring,
      },
    },
    {
      name: `JavaScript null`,
      scope: `constant.language.null.js`,
      settings: {
        foreground: nepal,
      },
    },
    {
      name: `JavaScript operators`,
      scope: [
        `keyword.operator.arithmetic.js`,
        `keyword.operator.assignment.compound.bitwise.js`,
        `keyword.operator.assignment.compound.js`,
        `keyword.operator.assignment.js`,
        `keyword.operator.comparison.js`,
        `keyword.operator.decrement.js`,
        `keyword.operator.increment.js`,
        `keyword.operator.logical.js`,
        `keyword.operator.relational.js`,
        `keyword.operator.ternary.js`,
      ],
      settings: {
        foreground: heather,
      },
    },
    {
      name: `JavaScript properties`,
      scope: [
        `meta.object-literal.key.js`,
        `variable.other.object.property.js`,
        `variable.other.property.js`,
      ],
      settings: {
        fontStyle: `normal`,
        foreground: sunsetOrange,
      },
    },
    {
      name: `JavaScript regular expressions`,
      scope: `string.regexp.js`,
      settings: {
        foreground: greenSpring,
      },
    },
    {
      name: `JavaScript super`,
      scope: `variable.language.super.js`,
      settings: {
        fontStyle: `normal`,
        foreground: mystic,
      },
    },
    {
      name: `JavaScript this`,
      scope: `variable.language.this.js`,
      settings: {
        foreground: mystic,
      },
    },
    {
      name: `JavaScript types`,
      scope: `entity.name.type.instance.jsdoc`,
      settings: {
        foreground: greenSpring,
      },
    },

    {
      name: `JavaScript undefined`,
      scope: `constant.language.undefined.js`,
      settings: {
        foreground: nepal,
      },
    },

    // JSON tokens
    // -------------------------------------------------------------------------
    {
      name: `JSON properties`,
      scope: `support.type.property-name.json`,
      settings: {
        foreground: heather,
      },
    },

    // JSX tokens
    // -------------------------------------------------------------------------
    {
      name: `JSX attributes`,
      scope: `entity.other.attribute-name.js.jsx`,
      settings: {
        foreground: mystic,
      },
    },
    {
      name: `JSX component tags`,
      scope: `support.class.component.js.jsx`,
      settings: {
        fontStyle: `bold`,
        foreground: sunsetOrange,
      },
    },
    {
      name: `JSX tags`,
      scope: `entity.name.tag.js.jsx`,
      settings: {
        foreground: sunsetOrange,
      },
    },

    // Markdown tokens
    // -------------------------------------------------------------------------
    {
      name: `Markdown backtick strings`,
      scope: `markup.inline.raw.string.markdown`,
      settings: {
        foreground: red,
      },
    },
    {
      name: `Markdown bold`,
      scope: `markup.bold.markdown`,
      settings: {
        fontStyle: `bold`,
      },
    },
    {
      name: `Markdown definitions`,
      scope: [
        `punctuation.definition.bold.markdown`,
        `punctuation.definition.italic.markdown`,
      ],
      settings: {
        fontStyle: `regular`,
      },
    },
    {
      name: `Markdown headings`,
      scope: [
        `heading.1.markdown`,
        `heading.2.markdown`,
        `heading.3.markdown`,
        `heading.4.markdown`,
        `heading.5.markdown`,
        `heading.6.markdown`,
      ],
      settings: {
        foreground: catskillWhite,
      },
    },
    {
      name: `Markdown italics`,
      scope: `markup.italic.markdown`,
      settings: {
        fontStyle: `italic`,
      },
    },
    {
      name: `Markdown link titles`,
      scope: [
        `string.other.link.description.markdown`,
        `string.other.link.title.markdown`,
      ],
      settings: {
        foreground: sunsetOrange,
      },
    },
    {
      name: `Markdown links`,
      scope: `markup.underline.link.markdown`,
      settings: {
        foreground: mystic,
      },
    },

    // Python tokens
    // -------------------------------------------------------------------------
    {
      name: `Python attributes`,
      scope: [`meta.attribute.python`, `meta.indexed-name.python`],
      settings: {
        fontStyle: `regular`,
        foreground: sunsetOrange,
      },
    },
    {
      name: `Python brackets`,
      scope: [
        `constant.character.format.placeholder.other.python`,
        `constant.other.ellipsis.python`,
        `punctuation.definition.arguments.begin.python`,
        `punctuation.definition.arguments.end.python`,
        `punctuation.definition.dict.begin.python`,
        `punctuation.definition.dict.end.python`,
        `punctuation.definition.inheritance.begin.python`,
        `punctuation.definition.inheritance.end.python`,
        `punctuation.definition.list.begin.python`,
        `punctuation.definition.list.end.python`,
        `punctuation.definition.parameters.begin.python`,
        `punctuation.definition.parameters.end.python`,
        `punctuation.parenthesis.begin.python`,
        `punctuation.parenthesis.end.python`,
        `punctuation.section.class.begin.python`,
        `punctuation.section.function.begin.python`,
        `punctuation.separator.annotation.python`,
        `punctuation.separator.annotation.result.python`,
        `punctuation.separator.arguments.python`,
        `punctuation.separator.colon.python`,
        `punctuation.separator.element.python`,
        `punctuation.separator.inheritance.python`,
        `punctuation.separator.slice.python`,
        `punctuation.separator.parameters.python`,
        `punctuation.separator.period.python`,
      ],
      settings: {
        fontStyle: `regular`,
        foreground: heather,
      },
    },
    {
      name: `Python classes`,
      scope: `entity.name.type.class.python`,
      settings: {
        fontStyle: `regular`,
        foreground: camouflageGreen,
      },
    },
    {
      name: `Python comments`,
      scope: `comment.line.number-sign.python`,
      settings: {
        fontStyle: `regular`,
      },
    },
    {
      name: `Python constants`,
      scope: [
        `constant.language.python`,
        `constant.numeric.dec.python`,
        `constant.numeric.float.python`,
      ],
      settings: {
        fontStyle: `regular`,
      },
    },
    {
      name: `Python doc strings`,
      scope: `string.quoted.docstring.multi.python`,
      settings: {
        fontStyle: `regular`,
        foreground: nepal,
      },
    },
    {
      name: `Python escaped characters`,
      scope: `constant.character.escape.python`,
      settings: {
        fontStyle: `regular`,
        foreground: red,
      },
    },
    {
      name: `Python foreground`,
      scope: `source.python`,
      settings: {
        fontStyle: `italic`,
        foreground: red,
      },
    },
    {
      name: `Python functions`,
      scope: [
        `entity.name.function.python`,
        `meta.function-call.generic.python`,
        `support.function.builtin.python`,
        `support.function.magic.python`,
      ],
      settings: {
        fontStyle: `regular`,
        foreground: vividTangerine,
      },
    },
    {
      name: `Python inherited classes`,
      scope: `entity.other.inherited-class.python`,
      settings: {
        fontStyle: `regular`,
        foreground: greenSpring,
      },
    },
    {
      name: `Python keywords`,
      scope: [
        `keyword.control.flow.python`,
        `keyword.control.import.python`,
        `keyword.operator.logical.python`, // Should this be scoped to Python operators?
      ],
      settings: {
        fontStyle: `regular`,
      },
    },
    {
      name: `Python operators`,
      scope: [
        `keyword.operator.arithmetic.python`,
        `keyword.operator.assignment.python`,
        `keyword.operator.bitwise.python`,
        `keyword.operator.comparison.python`,
        `keyword.operator.python`,
        `keyword.operator.unpacking.arguments.python`,
        `keyword.operator.unpacking.parameter.python`,
      ],
      settings: {
        fontStyle: `regular`,
        foreground: heather,
      },
    },
    {
      name: `Python storage`,
      scope: [`storage.type.class.python`, `storage.type.function.python`],
      settings: {
        fontStyle: `regular`,
      },
    },
    {
      name: `Python strings`,
      scope: [
        `string.quoted.docstring.single.python`,
        `string.quoted.single.python`,
      ],
      settings: {
        fontStyle: `regular`,
      },
    },
    {
      name: `Python types`,
      scope: [`support.type.exception.python`, `support.type.python`],
      settings: {
        fontStyle: `regular`,
        foreground: vividTangerine,
      },
    },
    {
      name: `Python variables`,
      scope: `constant.other.caps.python`,
      settings: {
        foreground: red,
      },
    },

    // Regular expression tokens
    // -------------------------------------------------------------------------
    {
      name: `Regular expression brackets`,
      scope: [
        `constant.character.escape.backslash.regexp`,
        `keyword.operator.or.regexp`,
        `punctuation.definition.character-class.regexp`,
        `punctuation.definition.group.regexp`,
      ],
      settings: {
        foreground: camouflageGreen,
      },
    },
    {
      name: `Regular expression constants`,
      scope: [
        `constant.other.character-class.range.regexp`,
        `constant.other.character-class.regexp`,
        `constant.other.character-class.set.regexp`,
      ],
      settings: {
        foreground: greenSpring,
      },
    },
    {
      name: `Regular expression keywords`,
      scope: [
        `keyword.control.anchor.regexp`,
        `keyword.operator.negation.regexp`,
        `keyword.operator.quantifier.regexp`,
      ],
      settings: {
        foreground: greenSpring,
      },
    },

    // SCSS tokens
    // -------------------------------------------------------------------------
    {
      name: `SCSS attributes`,
      scope: `entity.other.attribute-name.attribute.scss`,
      settings: {
        foreground: mystic,
      },
    },
    {
      name: `SCSS block comments`,
      scope: `comment.block.scss`,
      settings: {
        foreground: nepal,
      },
    },
    {
      name: `SCSS brackets`,
      scope: [
        `punctuation.definition.attribute-selector.begin.bracket.square.scss`,
        `punctuation.definition.attribute-selector.end.bracket.square.scss`,
        `punctuation.definition.interpolation.begin.bracket.curly.scss`,
        `punctuation.definition.interpolation.end.bracket.curly.scss`,
        `punctuation.section.function.scss`,
        `punctuation.separator.delimiter.scss`,
      ],
      settings: {
        fontStyle: `regular`,
        foreground: heather,
      },
    },
    {
      name: `SCSS functions`,
      scope: `entity.name.function.scss`,
      settings: {
        foreground: vividTangerine,
      },
    },
    {
      name: `SCSS important`,
      scope: `keyword.other.important.scss`,
      settings: {
        fontStyle: `bold`,
      },
    },
    {
      name: `SCSS operators`,
      scope: `keyword.operator.scss`,
      settings: {
        foreground: heather,
      },
    },
    {
      name: `SCSS strings`,
      scope: `meta.attribute-selector.scss`,
      settings: {
        foreground: bud,
      },
    },

    // TSX tokens
    // -------------------------------------------------------------------------
    {
      name: `TSX block comments`,
      scope: `comment.block.tsx`,
      settings: {
        foreground: nepal,
      },
    },
    {
      name: `TSX interface types`,
      scope: `entity.name.type.interface.tsx`,
      settings: {
        foreground: camouflageGreen,
      },
    },

    // TypeScript tokens
    // -------------------------------------------------------------------------
    {
      name: `TypeScript alias types`,
      scope: `entity.name.type.alias.ts`,
      settings: {
        foreground: greenSpring,
      },
    },
    {
      name: `TypeScript block comments`,
      scope: [`comment.block.documentation.ts`, `comment.block.ts`],
      settings: {
        foreground: nepal,
      },
    },
    {
      name: `TypeScript brackets`,
      scope: [
        `keyword.operator.type.annotation.ts`,
        `meta.brace.round.ts`,
        `meta.brace.square.ts`,
        `punctuation.accessor.ts`,
        `punctuation.definition.block.ts`,
        `punctuation.definition.template-expression.begin.ts`,
        `punctuation.definition.template-expression.end.ts`,
      ],
      settings: {
        foreground: heather,
      },
    },
    {
      name: `TypeScript classes`,
      scope: [
        `entity.name.type.class.ts`,
        `entity.name.type.ts`,
        `support.class.builtin.ts`,
      ],
      settings: {
        foreground: camouflageGreen,
      },
    },
    {
      name: `TypeScript functions`,
      scope: [
        `entity.name.function.ts`,
        `support.function.console.ts`,
        'support.function.ts',
      ],
      settings: {
        foreground: vividTangerine,
      },
    },
    {
      name: `TypeScript inherited classes`,
      scope: `entity.other.inherited-class.ts`,
      settings: {
        foreground: greenSpring,
      },
    },
    {
      name: `TypeScript interface types`,
      scope: `entity.name.type.interface.ts`,
      settings: {
        foreground: camouflageGreen,
      },
    },
    {
      name: `TypeScript null`,
      scope: `constant.language.null.ts`,
      settings: {
        foreground: nepal,
      },
    },
    {
      name: `TypeScript operators`,
      scope: [
        `keyword.operator.arithmetic.ts`,
        `keyword.operator.assignment.compound.bitwise.ts`,
        `keyword.operator.assignment.compound.ts`,
        `keyword.operator.assignment.ts`,
        `keyword.operator.comparison.ts`,
        `keyword.operator.decrement.ts`,
        `keyword.operator.increment.ts`,
        `keyword.operator.logical.ts`,
        `keyword.operator.relational.ts`,
        `keyword.operator.ternary.ts`,
      ],
      settings: {
        foreground: heather,
      },
    },
    {
      name: `TypeScript primitive types`,
      scope: `support.type.primitive.ts`,
      settings: {
        foreground: greenSpring,
      },
    },
    {
      name: `TypeScript properties`,
      scope: [
        `variable.object.property.ts`,
        `variable.other.object.property.ts`,
        `variable.other.property.ts`,
      ],
      settings: {
        fontStyle: `normal`,
        foreground: sunsetOrange,
      },
    },
    {
      name: `TypeScript regular expressions`,
      scope: `string.regexp.ts`,
      settings: {
        foreground: greenSpring,
      },
    },
    {
      name: `TypeScript super`,
      scope: `variable.language.super.ts`,
      settings: {
        fontStyle: `normal`,
        foreground: mystic,
      },
    },
    {
      name: `TypeScript this`,
      scope: `variable.language.this.ts`,
      settings: {
        foreground: mystic,
      },
    },
    {
      name: `TypeScript undefined`,
      scope: `constant.language.undefined.ts`,
      settings: {
        foreground: nepal,
      },
    },

    // XML tokens
    // -------------------------------------------------------------------------
    {
      name: `XML attributes`,
      scope: `entity.other.attribute-name.localname.xml`,
      settings: {
        foreground: mystic,
      },
    },
    {
      name: `XML tags`,
      scope: `entity.name.tag.localname.xml`,
      settings: {
        foreground: sunsetOrange,
      },
    },
  ],
  type,
};
