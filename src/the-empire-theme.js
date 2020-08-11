`use strict`;

// Config
// =============================================================================
const name = `The Empire`;
const type = `dark`;

// Opacity
// =============================================================================
const hidden = `00`;
const subtle = `26`;
const pronounced = `4d`;

// Palette
// =============================================================================
const bigStone = `#182336`;
const bitter = `#797d72`;
const bittersweet = `#ff6e6e`;
const black = `#010203`;
const bunker = `#0a0f17`;
const catskillWhite = `#fbfcfd`;
const delta = `#a2a499`;
const ebony = `#04070b`;
const heather = `#becbd8`;
const lynch = `#687f9c`;
const milanoRed = `#af0505`;
const mirage = `#101825`;
const mystic = `#dee6ec`;
const nepal = `#98abc1`;
const red = `#f50a0a`;
const sunsetOrange = `#fc4d4d`;
const transparent = `${black}${hidden}`;
const tide = `#bab9ae`;

// Exports
// =============================================================================
module.exports = {
  colors: {
    // Activity bar | DONE
    // -------------------------------------------------------------------------
    "activityBar.activeBackground": ebony,
    "activityBar.activeBorder": transparent,
    "activityBar.activeFocusBorder": transparent,
    "activityBar.background": bunker,
    "activityBar.border": transparent,
    "activityBar.dropBackground": transparent,
    "activityBar.dropBorder": milanoRed,
    "activityBar.foreground": mystic,
    "activityBar.inactiveForeground": nepal,
    "activityBarBadge.background": sunsetOrange,
    "activityBarBadge.foreground": black,

    // Badge colors | DONE
    // -------------------------------------------------------------------------
    "badge.background": sunsetOrange,
    "badge.foreground": black,

    // Base colors | DONE
    // -------------------------------------------------------------------------
    // descriptionForeground: ``,
    // errorForeground: ``,
    focusBorder: milanoRed,
    foreground: heather,
    "icon.foreground": heather,
    "selection.background": milanoRed,
    "widget.shadow": transparent,

    // Breadcrumbs colors | DONE
    // -------------------------------------------------------------------------
    "breadcrumb.activeSelectionForeground": mystic,
    "breadcrumb.background": black,
    "breadcrumb.focusForeground": heather,
    "breadcrumb.foreground": lynch,
    "breadcrumbPicker.background": bunker,

    // Button control | DONE
    // -------------------------------------------------------------------------
    "button.background": bitter,
    "button.foreground": black,
    "button.hoverBackground": tide,
    // 'button.secondaryBackground': ``,
    // 'button.secondaryForeground': ``,
    // 'button.secondaryHoverBackground': ``,
    "checkbox.background": black,
    "checkbox.border": milanoRed,
    "checkbox.foreground": nepal,

    // Contrast colors | DONE
    // -------------------------------------------------------------------------
    // contrastActiveBorder: ``,
    // contrastBorder: ``,

    // Debug colors | DONE
    // -------------------------------------------------------------------------
    // 'debugTokenExpression.boolean': ``,
    // 'debugTokenExpression.error': ``,
    // 'debugTokenExpression.name': ``,
    // 'debugTokenExpression.number': ``,
    // 'debugTokenExpression.string': ``,
    // 'debugTokenExpression.value': ``,
    "debugToolBar.background": mirage,
    "debugToolBar.border": mirage,
    // 'debugView.exceptionLabelBackground': ``,
    // 'debugView.exceptionLabelForeground': ``,
    // 'debugView.stateLabelBackground': ``,
    // 'debugView.stateLabelForeground': ``,
    // 'debugView.valueChangedHighlight': ``,
    // 'editor.focusedStackFrameHighlightBackground': ``,
    // 'editor.stackFrameHighlightBackground': ``,

    // Debug icons colors | DONE
    // -------------------------------------------------------------------------
    "debugConsole.errorForeground": milanoRed,
    "debugConsole.infoForeground": catskillWhite,
    "debugConsole.sourceForeground": nepal,
    "debugConsole.warningForeground": milanoRed,
    "debugConsoleInputIcon.foreground": catskillWhite,
    "debugIcon.breakpointCurrentStackframeForeground": catskillWhite,
    "debugIcon.breakpointDisabledForeground": catskillWhite,
    "debugIcon.breakpointForeground": catskillWhite,
    "debugIcon.breakpointStackframeForeground": catskillWhite,
    "debugIcon.breakpointUnverifiedForeground": catskillWhite,
    "debugIcon.continueForeground": catskillWhite,
    "debugIcon.disconnectForeground": catskillWhite,
    "debugIcon.pauseForeground": catskillWhite,
    "debugIcon.restartForeground": tide,
    "debugIcon.stepBackForeground": catskillWhite,
    "debugIcon.stepIntoForeground": catskillWhite,
    "debugIcon.stepOverForeground": catskillWhite,
    "debugIcon.stepOutForeground": catskillWhite,
    "debugIcon.startForeground": catskillWhite,
    "debugIcon.stopForeground": red,

    // Diff editor colors | DONE
    // -------------------------------------------------------------------------
    "diffEditor.border": transparent,
    "diffEditor.diagonalFill": transparent,
    "diffEditor.insertedTextBackground": `${bitter}${subtle}`,
    // 'diffEditor.insertedTextBorder': ``,
    "diffEditor.removedTextBackground": `${milanoRed}${subtle}`,
    // 'diffEditor.removedTextBorder': ``,

    // Dropdown control | DONE
    // -------------------------------------------------------------------------
    "dropdown.background": black,
    "dropdown.border": milanoRed,
    "dropdown.listBackground": bunker,
    "dropdown.foreground": nepal,

    // Editor colors
    // -------------------------------------------------------------------------
    "editor.background": black,
    "editor.findMatchBackground": mirage,
    "editor.findMatchBorder": transparent,
    "editor.findMatchHighlightBackground": bigStone,
    "editor.findMatchHighlightBorder": transparent,
    // 'editor.findRangeHighlightBackground': ``,
    // 'editor.findRangeHighlightBorder': ``,
    // 'editor.foldBackground': ``,
    "editor.foreground": heather,
    "editor.hoverHighlightBackground": mirage,
    "editor.inactiveSelectionBackground": bunker,
    "editor.lineHighlightBackground": bunker,
    "editor.lineHighlightBorder": transparent,
    "editor.rangeHighlightBackground": mirage,
    // 'editor.rangeHighlightBorder': ``,
    "editor.selectionBackground": mirage,
    // 'editor.selectionForeground': ``,
    "editor.selectionHighlightBackground": bigStone,
    "editor.selectionHighlightBorder": transparent,
    // 'editor.symbolHighlightBackground': ``,
    // 'editor.symbolHighlightBorder': ``,
    "editor.wordHighlightBackground": mirage,
    // 'editor.wordHighlightBorder': ``,
    "editor.wordHighlightStrongBackground": bigStone,
    // 'editor.wordHighlightStrongBorder': ``,
    "editorBracketMatch.background": transparent,
    "editorBracketMatch.border": lynch,
    // 'editorCursor.background': ``,
    "editorCursor.foreground": nepal,
    // 'editorCodeLens.foreground': ``,
    // 'editorError.border': ``,
    // 'editorError.foreground': ``,
    "editorGutter.addedBackground": bitter,
    "editorGutter.background": transparent,
    // 'editorGutter.commentRangeForeground': ``,
    "editorGutter.deletedBackground": milanoRed,
    // 'editorGutter.foldingControlForeground': ``,
    "editorGutter.modifiedBackground": catskillWhite,
    // 'editorHint.border': ``,
    // 'editorHint.foreground': ``,
    // 'editorIndentGuide.activeBackground': ``,
    // 'editorIndentGuide.background': ``,
    // 'editorInfo.border': ``,
    // 'editorInfo.foreground': ``,
    "editorLineNumber.activeForeground": mystic,
    "editorLineNumber.foreground": nepal,
    // 'editorLightBulb.foreground': ``,
    // 'editorLightBulbAutoFix.foreground': ``,
    // 'editorLink.activeForeground': ``,
    "editorOverviewRuler.addedForeground": bitter,
    "editorOverviewRuler.background": transparent,
    "editorOverviewRuler.border": transparent,
    // 'editorOverviewRuler.bracketMatchForeground': ``,
    "editorOverviewRuler.deletedForeground": milanoRed,
    // 'editorOverviewRuler.errorForeground': ``,
    // 'editorOverviewRuler.findMatchForeground': ``,
    // 'editorOverviewRuler.infoForeground': ``,
    "editorOverviewRuler.modifiedForeground": catskillWhite,
    // 'editorOverviewRuler.rangeHighlightForeground': ``,
    // 'editorOverviewRuler.selectionHighlightForeground': ``,
    // 'editorOverviewRuler.warningForeground': ``,
    // 'editorOverviewRuler.wordHighlightForeground': ``,
    // 'editorOverviewRuler.wordHighlightStrongForeground': ``,
    // 'editorUnnecessaryCode.border': ``,
    // 'editorUnnecessaryCode.opacity': ``,
    // 'editorRuler.foreground': ``,
    // 'editorWarning.border': ``,
    // 'editorWarning.foreground': ``,
    // 'editorWhitespace.foreground': ``,
    // 'problemsErrorIcon.foreground': ``,
    // 'problemsInfoIcon.foreground': ``,
    // 'problemsWarningIcon.foreground': ``,
    // 'searchEditor.findMatchBackground': ``,
    // 'searchEditor.findMatchBorder': ``,
    "searchEditor.textInputBorder": milanoRed,

    // Editor group and tabs
    // -------------------------------------------------------------------------
    "editorGroup.border": black,
    // 'editorGroup.dropBackground': ``,
    "editorGroup.emptyBackground": ebony,
    // 'editorGroup.focusedEmptyBorder': ``,
    // 'editorGroupHeader.border': ``,
    // 'editorGroupHeader.noTabsBackground': ``,
    "editorGroupHeader.tabsBackground": bunker,
    "editorGroupHeader.tabsBorder": black,
    // 'editorPane.background': ``,
    "tab.activeBackground": black,
    "tab.activeBorder": black,
    "tab.activeBorderTop": black,
    "tab.activeForeground": catskillWhite,
    // 'tab.activeModifiedBorder': ``,
    "tab.border": bunker,
    "tab.hoverBackground": black,
    "tab.hoverBorder": transparent,
    // 'tab.hoverForeground': ``,
    "tab.inactiveBackground": ebony,
    "tab.inactiveForeground": heather,
    // 'tab.inactiveModifiedBorder': ``,
    "tab.unfocusedActiveBackground": black,
    "tab.unfocusedActiveBorderTop": black,
    "tab.unfocusedActiveBorder": black,
    "tab.unfocusedActiveForeground": mystic,
    // 'tab.unfocusedActiveModifiedBorder': ``,
    "tab.unfocusedHoverBackground": black,
    "tab.unfocusedHoverBorder": transparent,
    // 'tab.unfocusedHoverForeground': ``,
    // 'tab.unfocusedInactiveBackground': ``,
    "tab.unfocusedInactiveForeground": nepal,
    // 'tab.unfocusedInactiveModifiedBorder': ``,

    // Editor widget colors
    // -------------------------------------------------------------------------
    // 'debugExceptionWidget.background': ``,
    // 'debugExceptionWidget.border': ``,
    // 'editorHoverWidget.background': ``,
    // 'editorHoverWidget.border': ``,
    // 'editorHoverWidget.foreground': ``,
    // 'editorHoverWidget.statusBarBackground': ``,
    // 'editorMarkerNavigation.background': ``,
    // 'editorMarkerNavigationError.background': ``,
    // 'editorMarkerNavigationInfo.background': ``,
    // 'editorMarkerNavigationWarning.background': ``,
    // 'editorSuggestWidget.background': ``,
    // 'editorSuggestWidget.border': ``,
    // 'editorSuggestWidget.foreground': ``,
    // 'editorSuggestWidget.highlightForeground': ``,
    // 'editorSuggestWidget.selectedBackground': ``,
    "editorWidget.background": bunker,
    "editorWidget.border": milanoRed,
    "editorWidget.foreground": heather,
    // 'editorWidget.resizeBorder': ``,

    // Extension colors | DONE
    // -------------------------------------------------------------------------
    "extensionButton.prominentBackground": heather,
    "extensionButton.prominentForeground": black,
    "extensionButton.prominentHoverBackground": mystic,
    "extensionBadge.remoteBackground": red,
    "extensionBadge.remoteForeground": black,

    // Git colors | DONE
    // -------------------------------------------------------------------------
    "gitDecoration.addedResourceForeground": bitter,
    "gitDecoration.conflictingResourceForeground": red,
    "gitDecoration.deletedResourceForeground": milanoRed,
    "gitDecoration.ignoredResourceForeground": lynch,
    "gitDecoration.modifiedResourceForeground": catskillWhite,
    "gitDecoration.submoduleResourceForeground": heather,
    "gitDecoration.untrackedResourceForeground": tide,

    // Input control | DONE
    // -------------------------------------------------------------------------
    "input.background": black,
    "input.border": milanoRed,
    "input.foreground": nepal,
    "input.placeholderForeground": lynch,
    "inputOption.activeBackground": bunker,
    "inputOption.activeBorder": milanoRed,
    "inputOption.activeForeground": heather,
    // 'inputValidation.errorBackground': ``,
    // 'inputValidation.errorBorder': ``,
    // 'inputValidation.errorForeground': ``,
    // 'inputValidation.infoBackground': ``,
    // 'inputValidation.infoBorder': ``,
    // 'inputValidation.infoForeground': ``,

    // Integrated terminal colors | DONE
    // -------------------------------------------------------------------------
    "terminal.ansiBlack": bitter,
    "terminal.ansiBlue": bitter,
    "terminal.ansiBrightBlack": bitter,
    "terminal.ansiBrightBlue": bitter,
    "terminal.ansiBrightCyan": tide,
    "terminal.ansiBrightGreen": tide,
    "terminal.ansiBrightMagenta": sunsetOrange,
    "terminal.ansiBrightRed": sunsetOrange,
    "terminal.ansiBrightWhite": catskillWhite,
    "terminal.ansiBrightYellow": catskillWhite,
    "terminal.ansiCyan": tide,
    "terminal.ansiGreen": tide,
    "terminal.ansiMagenta": sunsetOrange,
    "terminal.ansiRed": sunsetOrange,
    "terminal.ansiWhite": catskillWhite,
    "terminal.ansiYellow": catskillWhite,
    "terminal.background": black,
    "terminal.border": transparent,
    "terminal.foreground": nepal,
    "terminal.selectionBackground": `${lynch}${subtle}`,
    "terminalCursor.background": transparent,
    "terminalCursor.foreground": nepal,

    // Lists and trees | DONE
    // -------------------------------------------------------------------------
    // 'list.activeSelectionBackground': black,
    // 'list.activeSelectionForeground': mystic,
    // 'list.deemphasizedForeground': ``,
    // 'list.dropBackground': ``,
    // 'list.errorForeground': ``,
    // 'list.filterMatchBackground': ``,
    // 'list.filterMatchBorder': ``,
    // 'list.focusBackground': ``,
    // 'list.focusForeground': ``,
    // 'list.highlightForeground': ``,
    // 'list.hoverBackground': bunker,
    // 'list.hoverForeground': heather,
    // 'list.inactiveFocusBackground': ``,
    // 'list.inactiveSelectionBackground': black,
    // 'list.inactiveSelectionForeground': mystic,
    // 'list.invalidItemForeground': ``,
    // 'list.warningForeground': ``,
    // 'listFilterWidget.background': ``,
    // 'listFilterWidget.noMatchesOutline': ``,
    // 'listFilterWidget.outline': ``,
    "tree.indentGuidesStroke": lynch,

    // Menu bar colors
    // -------------------------------------------------------------------------
    // 'menu.background': `#ff0`,
    // 'menu.border': `#ff0`,
    // 'menu.foreground': `#f0f`,
    // 'menu.selectionBackground': ``,
    // 'menu.selectionBorder': ``,
    // 'menu.selectionForeground': ``,
    // 'menu.separatorBackground': ``,
    // 'menubar.selectionBackground': ``,
    // 'menubar.selectionBorder': ``,
    // 'menubar.selectionForeground': ``,

    // Merge conflicts colors | DONE
    // -------------------------------------------------------------------------
    "editorOverviewRuler.commonContentForeground": heather,
    "editorOverviewRuler.currentContentForeground": heather,
    "editorOverviewRuler.incomingContentForeground": heather,
    "merge.border": transparent,
    "merge.commonContentBackground": `${catskillWhite}${subtle}`,
    "merge.commonHeaderBackground": `${catskillWhite}${pronounced}`,
    "merge.currentContentBackground": `${red}${subtle}`,
    "merge.currentHeaderBackground": `${red}${pronounced}`,
    "merge.incomingContentBackground": `${tide}${subtle}`,
    "merge.incomingHeaderBackground": `${tide}${pronounced}`,

    // Minimap
    // -------------------------------------------------------------------------
    // 'minimap.background': ``,
    // 'minimap.errorHighlight': ``,z
    // 'minimap.findMatchHighlight': ``,
    // 'minimap.selectionHighlight': ``,
    // 'minimap.warningHighlight': ``,
    // 'minimapGutter.addedBackground': ``,
    // 'minimapGutter.deletedBackground': ``,
    // 'minimapGutter.modifiedBackground': ``,
    // 'minimapSlider.activeBackground': ``,
    // 'minimapSlider.background': ``,
    // 'minimapSlider.hoverBackground': ``,

    // Notebook colors
    // -------------------------------------------------------------------------
    // 'notebook.cellBorderColor': ``,
    // 'notebook.cellHoverBackground': ``,
    // 'notebook.cellInsertionIndicator': ``,
    // 'notebook.cellStatusBarItemHoverBackground': ``,
    // 'notebook.cellToolbarSeperator': ``,
    // 'notebook.focusedCellBackground': ``,
    // 'notebook.focusedCellBorder': ``,
    // 'notebook.focusedCellShadow': ``,
    // 'notebook.focusedEditorBorder': ``,
    // 'notebook.outputContainerBackgroundColor': ``,
    // 'notebookScrollbarSlider.activeBackground': ``,
    // 'notebookScrollbarSlider.background': ``,
    // 'notebookScrollbarSlider.hoverBackground': ``,
    // 'notebookStatusErrorIcon.foreground': ``,
    // 'notebookStatusRunningIcon.foreground': ``,
    // 'notebookStatusSuccessIcon.foreground': ``,

    // Notification colors | DONE
    // -------------------------------------------------------------------------
    "notificationCenter.border": transparent,
    "notificationCenterHeader.background": bunker,
    "notificationCenterHeader.foreground": mystic,
    // 'notificationLink.foreground': ``,
    "notifications.background": bunker,
    "notifications.border": transparent,
    "notifications.foreground": nepal,
    "notificationsErrorIcon.foreground": milanoRed,
    "notificationsInfoIcon.foreground": catskillWhite,
    "notificationsWarningIcon.foreground": milanoRed,
    "notificationToast.border": transparent,

    // Panel colors | DONE
    // -------------------------------------------------------------------------
    "panel.background": black,
    "panel.border": bunker,
    "panel.dropBackground": transparent,
    "panel.dropBorder": milanoRed,
    // 'panelInput.border': ``,
    // 'panelSection.border': ``,
    // 'panelSection.dropBackground': ``,
    // 'panelSectionHeader.background': ``,
    // 'panelSectionHeader.border': ``,
    // 'panelSectionHeader.foreground': ``,
    "panelTitle.activeBorder": transparent,
    "panelTitle.activeForeground": mystic,
    "panelTitle.inactiveForeground": nepal,

    // Peek view colors | DONE
    // -------------------------------------------------------------------------
    "peekView.border": bunker,
    // 'peekViewEditor.background': ``,
    // 'peekViewEditor.matchHighlightBackground': ``,
    // 'peekViewEditor.matchHighlightBorder': ``,
    // 'peekViewEditorGutter.background': ``,
    // 'peekViewResult.background': ``,
    // 'peekViewResult.fileForeground': ``,
    // 'peekViewResult.lineForeground': ``,
    // 'peekViewResult.matchHighlightBackground': ``,
    // 'peekViewResult.selectionBackground': ``,
    // 'peekViewResult.selectionForeground': ``,
    "peekViewTitle.background": bunker,
    "peekViewTitleDescription.foreground": heather,
    "peekViewTitleLabel.foreground": mystic,

    // Preview colors | DONE
    // -------------------------------------------------------------------------
    "imagePreview.border": milanoRed,

    // Progress bar | DONE
    // -------------------------------------------------------------------------
    "progressBar.background": milanoRed,

    // Quick picker colors | DONE
    // -------------------------------------------------------------------------
    "pickerGroup.border": milanoRed,
    "pickerGroup.foreground": nepal,
    "quickInput.background": ebony,
    "quickInput.foreground": nepal,
    "quickInputTitle.background": heather,

    // Scrollbar control | DONE
    // -------------------------------------------------------------------------
    "scrollbar.shadow": transparent,
    "scrollbarSlider.activeBackground": `${lynch}${pronounced}`,
    "scrollbarSlider.background": `${lynch}${subtle}`,
    "scrollbarSlider.hoverBackground": `${lynch}${pronounced}`,

    // Settings editor colors | DONE
    // -------------------------------------------------------------------------
    "settings.checkboxBackground": black,
    "settings.checkboxBorder": milanoRed,
    "settings.checkboxForeground": nepal,
    "settings.dropdownBackground": black,
    "settings.dropdownBorder": milanoRed,
    "settings.dropdownForeground": nepal,
    "settings.dropdownListBorder": transparent,
    "settings.headerForeground": mystic,
    "settings.modifiedItemIndicator": catskillWhite,
    "settings.numberInputBackground": black,
    "settings.numberInputBorder": milanoRed,
    "settings.numberInputForeground": nepal,
    "settings.textInputBackground": black,
    "settings.textInputBorder": milanoRed,
    "settings.textInputForeground": nepal,

    // Side bar | DONE
    // -------------------------------------------------------------------------
    "sideBar.background": ebony,
    "sideBar.border": transparent,
    "sideBar.dropBackground": transparent,
    "sideBar.foreground": nepal,
    "sideBarSectionHeader.background": transparent,
    "sideBarSectionHeader.border": transparent,
    "sideBarSectionHeader.foreground": heather,
    "sideBarTitle.foreground": mystic,

    // Snippets colors | DONE
    // -------------------------------------------------------------------------
    // 'editor.snippetFinalTabstopHighlightBackground': ``,
    "editor.snippetFinalTabstopHighlightBorder": transparent,
    // 'editor.snippetTabstopHighlightBackground': ``,
    "editor.snippetTabstopHighlightBorder": transparent,

    // Source control colors | DONE
    // -------------------------------------------------------------------------
    "scm.providerBorder": transparent,

    // Status bar colors | DONE
    // -------------------------------------------------------------------------
    "statusBar.background": bitter,
    "statusBar.border": transparent,
    "statusBar.foreground": black,
    "statusBar.debuggingBackground": catskillWhite,
    "statusBar.debuggingBorder": transparent,
    "statusBar.debuggingForeground": black,
    "statusBar.noFolderBackground": milanoRed,
    "statusBar.noFolderBorder": transparent,
    "statusBar.noFolderForeground": mystic,
    "statusBarItem.activeBackground": tide,
    "statusBarItem.hoverBackground": tide,
    // 'statusBarItem.prominentBackground': ``,
    // 'statusBarItem.prominentForeground': ``,
    // 'statusBarItem.prominentHoverBackground': ``,
    // 'statusBarItem.remoteBackground': ``,
    // 'statusBarItem.remoteForeground': ``,

    // Symbol icons colors | DONE
    // -------------------------------------------------------------------------
    // 'symbolIcon.arrayForeground': ``,
    // 'symbolIcon.booleanForeground': ``,
    // 'symbolIcon.classForeground': ``,
    // 'symbolIcon.colorForeground': ``,
    // 'symbolIcon.constantForeground': ``,
    // 'symbolIcon.constructorForeground': ``,
    // 'symbolIcon.enumeratorForeground': ``,
    // 'symbolIcon.enumeratorMemberForeground': ``,
    // 'symbolIcon.eventForeground': ``,
    // 'symbolIcon.fieldForeground': ``,
    // 'symbolIcon.fileForeground': ``,
    // 'symbolIcon.folderForeground': ``,
    // 'symbolIcon.functionForeground': ``,
    // 'symbolIcon.interfaceForeground': ``,
    // 'symbolIcon.keyForeground': ``,
    // 'symbolIcon.keywordForeground': ``,
    // 'symbolIcon.methodForeground': ``,
    // 'symbolIcon.moduleForeground': ``,
    // 'symbolIcon.namespaceForeground': ``,
    // 'symbolIcon.nullForeground': ``,
    // 'symbolIcon.numberForeground': ``,
    // 'symbolIcon.objectForeground': ``,
    // 'symbolIcon.operatorForeground': ``,
    // 'symbolIcon.packageForeground': ``,
    // 'symbolIcon.propertyForeground': ``,
    // 'symbolIcon.referenceForeground': ``,
    // 'symbolIcon.snippetForeground': ``,
    // 'symbolIcon.stringForeground': ``,
    // 'symbolIcon.structForeground': ``,
    // 'symbolIcon.textForeground': ``,
    // 'symbolIcon.typeParameterForeground': ``,
    // 'symbolIcon.unitForeground': ``,
    // 'symbolIcon.variableForeground': ``,

    // Text colors | DONE
    // -------------------------------------------------------------------------
    "textBlockQuote.background": transparent,
    "textBlockQuote.border": catskillWhite,
    "textCodeBlock.background": black,
    "textLink.activeForeground": tide,
    "textLink.foreground": bitter,
    "textPreformat.foreground": catskillWhite,
    "textSeparator.foreground": heather,

    // Title bar colors | DONE
    // -------------------------------------------------------------------------
    "titleBar.activeBackground": bunker,
    "titleBar.activeForeground": mystic,
    "titleBar.border": transparent,
    "titleBar.inactiveBackground": bunker,
    "titleBar.inactiveForeground": mystic,

    // Welcome page colors | DONE
    // -------------------------------------------------------------------------
    "walkThrough.embeddedEditorBackground": ebony,
    "welcomePage.background": ebony,
    "welcomePage.buttonBackground": bitter,
    "welcomePage.buttonHoverBackground": tide,

    // Window border | DONE
    // -------------------------------------------------------------------------
    "window.activeBorder": bunker,
    "window.inactiveBorder": black
  },
  name,
  tokenColors: [
    // Base tokens
    // -------------------------------------------------------------------------
    {
      name: `Base comments`,
      scope: `comment`,
      settings: {
        foreground: lynch
      }
    },
    {
      name: `Base constants`,
      scope: `constant`,
      settings: {
        foreground: delta
      }
    },
    {
      name: `Base entities`,
      scope: `constant.character.entity`,
      settings: {
        fontStyle: `italic`,
        foreground: red
      }
    },
    {
      name: `Base keywords`,
      scope: `keyword`,
      settings: {
        foreground: catskillWhite
      }
    },
    {
      name: `Base storage`,
      scope: `storage`,
      settings: {
        foreground: catskillWhite
      }
    },
    {
      name: `Base strings`,
      scope: `string`,
      settings: {
        foreground: delta
      }
    },
    {
      name: `Base support`,
      scope: `support`,
      settings: {
        foreground: bittersweet
      }
    },
    {
      name: `Base variables`,
      scope: `variable`,
      settings: {
        fontStyle: `italic`,
        foreground: red
      }
    },

    // CSS tokens
    // -------------------------------------------------------------------------
    {
      name: `CSS attributes`,
      scope: `entity.other.attribute-name.css`,
      settings: {
        foreground: mystic
      }
    },
    {
      name: `CSS classes`,
      scope: `entity.other.attribute-name.class.css`,
      settings: {
        foreground: sunsetOrange
      }
    },
    {
      name: `CSS entities`,
      scope: `punctuation.definition.entity.css`,
      settings: {
        fontStyle: `normal`,
        foreground: heather
      }
    },
    {
      name: `CSS hexadecimals`,
      scope: [
        `constant.other.color.rgb-value.hex.css`,
        `punctuation.definition.constant.css`
      ],
      settings: {
        foreground: bittersweet
      }
    },
    {
      name: `CSS ids`,
      scope: `entity.other.attribute-name.id.css`,
      settings: {
        foreground: sunsetOrange
      }
    },
    {
      name: `CSS important`,
      scope: `keyword.other.important.css`,
      settings: {
        fontStyle: `bold`
      }
    },
    {
      name: `CSS operators`,
      scope: [
        `keyword.operator.arithmetic.css`,
        `keyword.operator.combinator.css`,
        `keyword.operator.pattern.css`
      ],
      settings: {
        foreground: heather
      }
    },
    {
      name: `CSS properties`,
      scope: `support.type.property-name.css`,
      settings: {
        foreground: heather
      }
    },
    {
      name: `CSS property values`,
      scope: [
        `support.constant.color.current.css`,
        `support.constant.property-value.css`
      ],
      settings: {
        foreground: catskillWhite
      }
    },
    {
      name: `CSS pseudo`,
      scope: [
        `entity.other.attribute-name.pseudo-class.css`,
        `entity.other.attribute-name.pseudo-element.css`
      ],
      settings: {
        foreground: mystic
      }
    },
    {
      name: `CSS tags`,
      scope: `entity.name.tag.css`,
      settings: {
        foreground: bitter
      }
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
        `keyword.other.unit.vw.css`
      ],
      settings: {
        foreground: delta
      }
    },
    {
      name: `CSS vendor-prefixed properties`,
      scope: `support.type.vendored.property-name.css`,
      settings: {
        foreground: nepal
      }
    },

    // HTML tokens
    // -------------------------------------------------------------------------
    {
      name: `HTML attributes`,
      scope: `entity.other.attribute-name.html`,
      settings: {
        foreground: mystic
      }
    },
    {
      name: `HTML tags`,
      scope: `entity.name.tag.html`,
      settings: {
        foreground: sunsetOrange
      }
    },

    // JavaScript tokens
    // -------------------------------------------------------------------------
    {
      name: `JavaScript block comments`,
      scope: [`comment.block.documentation.js`, `comment.block.js`],
      settings: {
        foreground: nepal
      }
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
        `punctuation.separator.key-value.js`
      ],
      settings: {
        foreground: heather
      }
    },
    {
      name: `JavaScript classes`,
      scope: [
        `entity.name.type.class.js`,
        `entity.name.type.js`,
        `support.class.builtin.js`
      ],
      settings: {
        foreground: bitter
      }
    },
    {
      name: `JavaScript functions`,
      scope: [
        `entity.name.function.js`,
        `support.function.console.js`,
        "support.function.js"
      ],
      settings: {
        foreground: bittersweet
      }
    },
    {
      name: `JavaScript inherited classes`,
      scope: `entity.other.inherited-class.js`,
      settings: {
        foreground: tide
      }
    },
    {
      name: `JavaScript null`,
      scope: `constant.language.null.js`,
      settings: {
        foreground: nepal
      }
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
        `keyword.operator.ternary.js`
      ],
      settings: {
        foreground: heather
      }
    },
    {
      name: `JavaScript properties`,
      scope: [`meta.object-literal.key.js`, `variable.other.property.js`],
      settings: {
        fontStyle: `normal`,
        foreground: sunsetOrange
      }
    },
    {
      name: `JavaScript regular expressions`,
      scope: `string.regexp.js`,
      settings: {
        foreground: tide
      }
    },
    {
      name: `JavaScript super`,
      scope: `variable.language.super.js`,
      settings: {
        fontStyle: `normal`,
        foreground: mystic
      }
    },
    {
      name: `JavaScript this`,
      scope: `variable.language.this.js`,
      settings: {
        foreground: mystic
      }
    },
    {
      name: `JavaScript types`,
      scope: `entity.name.type.instance.jsdoc`,
      settings: {
        foreground: tide
      }
    },

    {
      name: `JavaScript undefined`,
      scope: `constant.language.undefined.js`,
      settings: {
        foreground: nepal
      }
    },

    // JSON tokens
    // -------------------------------------------------------------------------
    {
      name: `JSON properties`,
      scope: `support.type.property-name.json`,
      settings: {
        foreground: heather
      }
    },

    // JSX tokens
    // -------------------------------------------------------------------------
    {
      name: `JSX attributes`,
      scope: `entity.other.attribute-name.js.jsx`,
      settings: {
        foreground: mystic
      }
    },
    {
      name: `JSX component tags`,
      scope: `support.class.component.js.jsx`,
      settings: {
        fontStyle: `bold`,
        foreground: sunsetOrange
      }
    },
    {
      name: `JSX tags`,
      scope: `entity.name.tag.js.jsx`,
      settings: {
        foreground: sunsetOrange
      }
    },

    // Markdown tokens
    // -------------------------------------------------------------------------
    {
      name: `Markdown backtick strings`,
      scope: `markup.inline.raw.string.markdown`,
      settings: {
        foreground: red
      }
    },
    {
      name: `Markdown bold`,
      scope: `markup.bold.markdown`,
      settings: {
        fontStyle: `bold`
      }
    },
    {
      name: `Markdown definitions`,
      scope: [
        `punctuation.definition.bold.markdown`,
        `punctuation.definition.italic.markdown`
      ],
      settings: {
        fontStyle: `regular`
      }
    },
    {
      name: `Markdown headings`,
      scope: [
        `heading.1.markdown`,
        `heading.2.markdown`,
        `heading.3.markdown`,
        `heading.4.markdown`,
        `heading.5.markdown`,
        `heading.6.markdown`
      ],
      settings: {
        foreground: catskillWhite
      }
    },
    {
      name: `Markdown italics`,
      scope: `markup.italic.markdown`,
      settings: {
        fontStyle: `italic`
      }
    },
    {
      name: `Markdown link titles`,
      scope: [
        `string.other.link.description.markdown`,
        `string.other.link.title.markdown`
      ],
      settings: {
        foreground: sunsetOrange
      }
    },
    {
      name: `Markdown links`,
      scope: `markup.underline.link.markdown`,
      settings: {
        foreground: mystic
      }
    },

    // Python tokens
    // -------------------------------------------------------------------------
    {
      name: `Python attributes`,
      scope: [`meta.attribute.python`, `meta.indexed-name.python`],
      settings: {
        fontStyle: `regular`,
        foreground: sunsetOrange
      }
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
        `punctuation.separator.period.python`
      ],
      settings: {
        fontStyle: `regular`,
        foreground: heather
      }
    },
    {
      name: `Python classes`,
      scope: `entity.name.type.class.python`,
      settings: {
        fontStyle: `regular`,
        foreground: bitter
      }
    },
    {
      name: `Python comments`,
      scope: `comment.line.number-sign.python`,
      settings: {
        fontStyle: `regular`
      }
    },
    {
      name: `Python constants`,
      scope: [
        `constant.language.python`,
        `constant.numeric.dec.python`,
        `constant.numeric.float.python`
      ],
      settings: {
        fontStyle: `regular`
      }
    },
    {
      name: `Python doc strings`,
      scope: `string.quoted.docstring.multi.python`,
      settings: {
        fontStyle: `regular`,
        foreground: nepal
      }
    },
    {
      name: `Python escaped characters`,
      scope: `constant.character.escape.python`,
      settings: {
        fontStyle: `regular`,
        foreground: red
      }
    },
    {
      name: `Python foreground`,
      scope: `source.python`,
      settings: {
        fontStyle: `italic`,
        foreground: red
      }
    },
    {
      name: `Python functions`,
      scope: [
        `entity.name.function.python`,
        `meta.function-call.generic.python`,
        `support.function.builtin.python`,
        `support.function.magic.python`
      ],
      settings: {
        fontStyle: `regular`,
        foreground: bittersweet
      }
    },
    {
      name: `Python inherited classes`,
      scope: `entity.other.inherited-class.python`,
      settings: {
        fontStyle: `regular`,
        foreground: tide
      }
    },
    {
      name: `Python keywords`,
      scope: [
        `keyword.control.flow.python`,
        `keyword.control.import.python`,
        `keyword.operator.logical.python` // Should this be scoped to Python operators?
      ],
      settings: {
        fontStyle: `regular`
      }
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
        `keyword.operator.unpacking.parameter.python`
      ],
      settings: {
        fontStyle: `regular`,
        foreground: heather
      }
    },
    {
      name: `Python storage`,
      scope: [`storage.type.class.python`, `storage.type.function.python`],
      settings: {
        fontStyle: `regular`
      }
    },
    {
      name: `Python strings`,
      scope: [
        `string.quoted.docstring.single.python`,
        `string.quoted.single.python`
      ],
      settings: {
        fontStyle: `regular`
      }
    },
    {
      name: `Python types`,
      scope: [`support.type.exception.python`, `support.type.python`],
      settings: {
        fontStyle: `regular`,
        foreground: bittersweet
      }
    },
    {
      name: `Python variables`,
      scope: `constant.other.caps.python`,
      settings: {
        foreground: red
      }
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
        `punctuation.definition.string.begin.js`,
        `punctuation.definition.string.end.js`
      ],
      settings: {
        foreground: bitter
      }
    },
    {
      name: `Regular expression constants`,
      scope: [
        `constant.other.character-class.range.regexp`,
        `constant.other.character-class.regexp`,
        `constant.other.character-class.set.regexp`
      ],
      settings: {
        foreground: tide
      }
    },
    {
      name: `Regular expression keywords`,
      scope: [
        `keyword.control.anchor.regexp`,
        `keyword.operator.negation.regexp`,
        `keyword.operator.quantifier.regexp`
      ],
      settings: {
        foreground: tide
      }
    },

    // SCSS tokens
    // -------------------------------------------------------------------------
    {
      name: `SCSS attributes`,
      scope: `entity.other.attribute-name.attribute.scss`,
      settings: {
        foreground: mystic
      }
    },
    {
      name: `SCSS block comments`,
      scope: `comment.block.scss`,
      settings: {
        foreground: nepal
      }
    },
    {
      name: `SCSS brackets`,
      scope: [
        `punctuation.definition.attribute-selector.begin.bracket.square.scss`,
        `punctuation.definition.attribute-selector.end.bracket.square.scss`,
        `punctuation.definition.interpolation.begin.bracket.curly.scss`,
        `punctuation.definition.interpolation.end.bracket.curly.scss`,
        `punctuation.section.function.scss`,
        `punctuation.separator.delimiter.scss`
      ],
      settings: {
        fontStyle: `regular`,
        foreground: heather
      }
    },
    {
      name: `SCSS functions`,
      scope: `entity.name.function.scss`,
      settings: {
        foreground: bittersweet
      }
    },
    {
      name: `SCSS important`,
      scope: `keyword.other.important.scss`,
      settings: {
        fontStyle: `bold`
      }
    },
    {
      name: `SCSS operators`,
      scope: `keyword.operator.scss`,
      settings: {
        foreground: heather
      }
    },
    {
      name: `SCSS strings`,
      scope: `meta.attribute-selector.scss`,
      settings: {
        foreground: delta
      }
    },

    // TypeScript tokens
    // -------------------------------------------------------------------------
    {
      name: `TypeScript alias types`,
      scope: `entity.name.type.alias.ts`,
      settings: {
        foreground: tide
      }
    },
    {
      name: `TypeScript block comments`,
      scope: [`comment.block.documentation.ts`, `comment.block.ts`],
      settings: {
        foreground: nepal
      }
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
        `punctuation.definition.template-expression.end.ts`
      ],
      settings: {
        foreground: heather
      }
    },
    {
      name: `TypeScript classes`,
      scope: [
        `entity.name.type.class.ts`,
        `entity.name.type.ts`,
        `support.class.builtin.ts`
      ],
      settings: {
        foreground: bitter
      }
    },
    {
      name: `TypeScript functions`,
      scope: [
        `entity.name.function.ts`,
        `support.function.console.ts`,
        "support.function.ts"
      ],
      settings: {
        foreground: bittersweet
      }
    },
    {
      name: `TypeScript inherited classes`,
      scope: `entity.other.inherited-class.ts`,
      settings: {
        foreground: tide
      }
    },
    {
      name: `TypeScript interface types`,
      scope: `entity.name.type.interface.ts`,
      settings: {
        foreground: bitter
      }
    },
    {
      name: `TypeScript null`,
      scope: `constant.language.null.ts`,
      settings: {
        foreground: nepal
      }
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
        `keyword.operator.ternary.ts`
      ],
      settings: {
        foreground: heather
      }
    },
    {
      name: `TypeScript primitive types`,
      scope: `support.type.primitive.ts`,
      settings: {
        foreground: tide
      }
    },
    {
      name: `TypeScript properties`,
      scope: [`variable.object.property.ts`, `variable.other.property.ts`],
      settings: {
        fontStyle: `normal`,
        foreground: sunsetOrange
      }
    },
    {
      name: `TypeScript regular expressions`,
      scope: `string.regexp.ts`,
      settings: {
        foreground: tide
      }
    },
    {
      name: `TypeScript super`,
      scope: `variable.language.super.ts`,
      settings: {
        fontStyle: `normal`,
        foreground: mystic
      }
    },
    {
      name: `TypeScript this`,
      scope: `variable.language.this.ts`,
      settings: {
        foreground: mystic
      }
    },
    {
      name: `TypeScript undefined`,
      scope: `constant.language.undefined.ts`,
      settings: {
        foreground: nepal
      }
    },

    // XML tokens
    // -------------------------------------------------------------------------
    {
      name: `XML attributes`,
      scope: `entity.other.attribute-name.localname.xml`,
      settings: {
        foreground: mystic
      }
    },
    {
      name: `XML tags`,
      scope: `entity.name.tag.localname.xml`,
      settings: {
        foreground: sunsetOrange
      }
    }
  ],
  type
};
