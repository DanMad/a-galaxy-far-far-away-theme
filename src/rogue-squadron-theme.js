`use strict`;

// Config
// =============================================================================
const name = `Rogue Squadron`;
const type = `dark`;

// Opacity
// =============================================================================
const hidden = `00`;
const subtle = `26`;
const pronounced = `4d`;

// Palette
// =============================================================================
const appleBlossom = `#a34845`;
const bigStone = `#182336`;
const black = `#010203`;
const bunker = `#0a0f17`;
const ebony = `#04070b`;
const ecstasy = `#fa7d12`;
const greyChateau = `#a8acae`;
const indianKhaki = `#c1b398`;
const iron = `#cacdcf`;
const matrix = `#bc5f5d`;
const mirage = `#101825`;
const nepal = `#85adbc`;
const porcelain = `#e6e8e9`;
const rollingStone = `#7b7f81`;
const smaltBlue = `#538397`;
const transparent = `${black}${hidden}`;
const treePoppy = `#fc9d1b`;
const trinidad = `#f4500a`;

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
    "activityBar.dropBorder": appleBlossom,
    "activityBar.foreground": porcelain,
    "activityBar.inactiveForeground": greyChateau,
    "activityBarBadge.background": ecstasy,
    "activityBarBadge.foreground": black,

    // Badge colors | DONE
    // -------------------------------------------------------------------------
    "badge.background": ecstasy,
    "badge.foreground": black,

    // Base colors | DONE
    // -------------------------------------------------------------------------
    // descriptionForeground: ``,
    // errorForeground: ``,
    focusBorder: appleBlossom,
    foreground: iron,
    "icon.foreground": iron,
    "selection.background": appleBlossom,
    "widget.shadow": transparent,

    // Breadcrumbs colors | DONE
    // -------------------------------------------------------------------------
    "breadcrumb.activeSelectionForeground": porcelain,
    "breadcrumb.background": black,
    "breadcrumb.focusForeground": iron,
    "breadcrumb.foreground": rollingStone,
    "breadcrumbPicker.background": bunker,

    // Button control | DONE
    // -------------------------------------------------------------------------
    "button.background": smaltBlue,
    "button.foreground": black,
    "button.hoverBackground": nepal,
    // 'button.secondaryBackground': ``,
    // 'button.secondaryForeground': ``,
    // 'button.secondaryHoverBackground': ``,
    "checkbox.background": black,
    "checkbox.border": appleBlossom,
    "checkbox.foreground": greyChateau,

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
    "debugConsole.errorForeground": appleBlossom,
    "debugConsole.infoForeground": indianKhaki,
    "debugConsole.sourceForeground": greyChateau,
    "debugConsole.warningForeground": appleBlossom,
    "debugConsoleInputIcon.foreground": indianKhaki,
    "debugIcon.breakpointCurrentStackframeForeground": indianKhaki,
    "debugIcon.breakpointDisabledForeground": indianKhaki,
    "debugIcon.breakpointForeground": indianKhaki,
    "debugIcon.breakpointStackframeForeground": indianKhaki,
    "debugIcon.breakpointUnverifiedForeground": indianKhaki,
    "debugIcon.continueForeground": indianKhaki,
    "debugIcon.disconnectForeground": indianKhaki,
    "debugIcon.pauseForeground": indianKhaki,
    "debugIcon.restartForeground": nepal,
    "debugIcon.stepBackForeground": indianKhaki,
    "debugIcon.stepIntoForeground": indianKhaki,
    "debugIcon.stepOverForeground": indianKhaki,
    "debugIcon.stepOutForeground": indianKhaki,
    "debugIcon.startForeground": indianKhaki,
    "debugIcon.stopForeground": trinidad,

    // Diff editor colors | DONE
    // -------------------------------------------------------------------------
    "diffEditor.border": transparent,
    "diffEditor.diagonalFill": transparent,
    "diffEditor.insertedTextBackground": `${smaltBlue}${subtle}`,
    // 'diffEditor.insertedTextBorder': ``,
    "diffEditor.removedTextBackground": `${appleBlossom}${subtle}`,
    // 'diffEditor.removedTextBorder': ``,

    // Dropdown control | DONE
    // -------------------------------------------------------------------------
    "dropdown.background": black,
    "dropdown.border": appleBlossom,
    "dropdown.listBackground": bunker,
    "dropdown.foreground": greyChateau,

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
    "editor.foreground": iron,
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
    "editorBracketMatch.border": rollingStone,
    // 'editorCursor.background': ``,
    "editorCursor.foreground": greyChateau,
    // 'editorCodeLens.foreground': ``,
    // 'editorError.border': ``,
    // 'editorError.foreground': ``,
    "editorGutter.addedBackground": smaltBlue,
    "editorGutter.background": transparent,
    // 'editorGutter.commentRangeForeground': ``,
    "editorGutter.deletedBackground": appleBlossom,
    // 'editorGutter.foldingControlForeground': ``,
    "editorGutter.modifiedBackground": indianKhaki,
    // 'editorHint.border': ``,
    // 'editorHint.foreground': ``,
    // 'editorIndentGuide.activeBackground': ``,
    // 'editorIndentGuide.background': ``,
    // 'editorInfo.border': ``,
    // 'editorInfo.foreground': ``,
    "editorLineNumber.activeForeground": porcelain,
    "editorLineNumber.foreground": greyChateau,
    // 'editorLightBulb.foreground': ``,
    // 'editorLightBulbAutoFix.foreground': ``,
    // 'editorLink.activeForeground': ``,
    "editorOverviewRuler.addedForeground": smaltBlue,
    "editorOverviewRuler.background": transparent,
    "editorOverviewRuler.border": transparent,
    // 'editorOverviewRuler.bracketMatchForeground': ``,
    "editorOverviewRuler.deletedForeground": appleBlossom,
    // 'editorOverviewRuler.errorForeground': ``,
    // 'editorOverviewRuler.findMatchForeground': ``,
    // 'editorOverviewRuler.infoForeground': ``,
    "editorOverviewRuler.modifiedForeground": indianKhaki,
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
    "searchEditor.textInputBorder": appleBlossom,

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
    "tab.activeForeground": porcelain,
    // 'tab.activeModifiedBorder': ``,
    "tab.border": bunker,
    "tab.hoverBackground": black,
    "tab.hoverBorder": transparent,
    // 'tab.hoverForeground': ``,
    "tab.inactiveBackground": ebony,
    "tab.inactiveForeground": iron,
    // 'tab.inactiveModifiedBorder': ``,
    "tab.unfocusedActiveBackground": black,
    "tab.unfocusedActiveBorderTop": black,
    "tab.unfocusedActiveBorder": black,
    "tab.unfocusedActiveForeground": porcelain,
    // 'tab.unfocusedActiveModifiedBorder': ``,
    "tab.unfocusedHoverBackground": black,
    "tab.unfocusedHoverBorder": transparent,
    // 'tab.unfocusedHoverForeground': ``,
    // 'tab.unfocusedInactiveBackground': ``,
    "tab.unfocusedInactiveForeground": greyChateau,
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
    "editorWidget.border": appleBlossom,
    "editorWidget.foreground": iron,
    // 'editorWidget.resizeBorder': ``,

    // Extension colors | DONE
    // -------------------------------------------------------------------------
    "extensionButton.prominentBackground": iron,
    "extensionButton.prominentForeground": black,
    "extensionButton.prominentHoverBackground": porcelain,
    "extensionBadge.remoteBackground": trinidad,
    "extensionBadge.remoteForeground": black,

    // Git colors | DONE
    // -------------------------------------------------------------------------
    "gitDecoration.addedResourceForeground": smaltBlue,
    "gitDecoration.conflictingResourceForeground": matrix,
    "gitDecoration.deletedResourceForeground": appleBlossom,
    "gitDecoration.ignoredResourceForeground": rollingStone,
    "gitDecoration.modifiedResourceForeground": indianKhaki,
    "gitDecoration.submoduleResourceForeground": iron,
    "gitDecoration.untrackedResourceForeground": nepal,

    // Input control | DONE
    // -------------------------------------------------------------------------
    "input.background": black,
    "input.border": appleBlossom,
    "input.foreground": greyChateau,
    "input.placeholderForeground": rollingStone,
    "inputOption.activeBackground": bunker,
    "inputOption.activeBorder": appleBlossom,
    "inputOption.activeForeground": iron,
    // 'inputValidation.errorBackground': ``,
    // 'inputValidation.errorBorder': ``,
    // 'inputValidation.errorForeground': ``,
    // 'inputValidation.infoBackground': ``,
    // 'inputValidation.infoBorder': ``,
    // 'inputValidation.infoForeground': ``,

    // Integrated terminal colors | DONE
    // -------------------------------------------------------------------------
    "terminal.ansiBlack": smaltBlue,
    "terminal.ansiBlue": smaltBlue,
    "terminal.ansiBrightBlack": smaltBlue,
    "terminal.ansiBrightBlue": smaltBlue,
    "terminal.ansiBrightCyan": nepal,
    "terminal.ansiBrightGreen": nepal,
    "terminal.ansiBrightMagenta": matrix,
    "terminal.ansiBrightRed": matrix,
    "terminal.ansiBrightWhite": indianKhaki,
    "terminal.ansiBrightYellow": indianKhaki,
    "terminal.ansiCyan": nepal,
    "terminal.ansiGreen": nepal,
    "terminal.ansiMagenta": matrix,
    "terminal.ansiRed": matrix,
    "terminal.ansiWhite": indianKhaki,
    "terminal.ansiYellow": indianKhaki,
    "terminal.background": black,
    "terminal.border": transparent,
    "terminal.foreground": greyChateau,
    "terminal.selectionBackground": `${rollingStone}${subtle}`,
    "terminalCursor.background": transparent,
    "terminalCursor.foreground": greyChateau,

    // Lists and trees | DONE
    // -------------------------------------------------------------------------
    // 'list.activeSelectionBackground': black,
    // 'list.activeSelectionForeground': porcelain,
    // 'list.deemphasizedForeground': ``,
    // 'list.dropBackground': ``,
    // 'list.errorForeground': ``,
    // 'list.filterMatchBackground': ``,
    // 'list.filterMatchBorder': ``,
    // 'list.focusBackground': ``,
    // 'list.focusForeground': ``,
    // 'list.highlightForeground': ``,
    // 'list.hoverBackground': bunker,
    // 'list.hoverForeground': iron,
    // 'list.inactiveFocusBackground': ``,
    // 'list.inactiveSelectionBackground': black,
    // 'list.inactiveSelectionForeground': porcelain,
    // 'list.invalidItemForeground': ``,
    // 'list.warningForeground': ``,
    // 'listFilterWidget.background': ``,
    // 'listFilterWidget.noMatchesOutline': ``,
    // 'listFilterWidget.outline': ``,
    "tree.indentGuidesStroke": rollingStone,

    // Menu bar colors
    // -------------------------------------------------------------------------
    // 'menu.background': ``,
    // 'menu.border': ``,
    // 'menu.foreground': ``,
    // 'menu.selectionBackground': ``,
    // 'menu.selectionBorder': ``,
    // 'menu.selectionForeground': ``,
    // 'menu.separatorBackground': ``,
    // 'menubar.selectionBackground': ``,
    // 'menubar.selectionBorder': ``,
    // 'menubar.selectionForeground': ``,

    // Merge conflicts colors | DONE
    // -------------------------------------------------------------------------
    "editorOverviewRuler.commonContentForeground": iron,
    "editorOverviewRuler.currentContentForeground": iron,
    "editorOverviewRuler.incomingContentForeground": iron,
    "merge.border": transparent,
    "merge.commonContentBackground": `${indianKhaki}${subtle}`,
    "merge.commonHeaderBackground": `${indianKhaki}${pronounced}`,
    "merge.currentContentBackground": `${trinidad}${subtle}`,
    "merge.currentHeaderBackground": `${trinidad}${pronounced}`,
    "merge.incomingContentBackground": `${smaltBlue}${subtle}`,
    "merge.incomingHeaderBackground": `${smaltBlue}${pronounced}`,

    // Minimap
    // -------------------------------------------------------------------------
    // 'minimap.background': ``,
    // 'minimap.errorHighlight': ``,
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
    "notificationCenterHeader.foreground": porcelain,
    // 'notificationLink.foreground': ``,
    "notifications.background": bunker,
    "notifications.border": transparent,
    "notifications.foreground": greyChateau,
    "notificationsErrorIcon.foreground": appleBlossom,
    "notificationsInfoIcon.foreground": indianKhaki,
    "notificationsWarningIcon.foreground": appleBlossom,
    "notificationToast.border": transparent,

    // Panel colors | DONE
    // -------------------------------------------------------------------------
    "panel.background": black,
    "panel.border": bunker,
    "panel.dropBackground": transparent,
    "panel.dropBorder": appleBlossom,
    // 'panelInput.border': ``,
    // 'panelSection.border': ``,
    // 'panelSection.dropBackground': ``,
    // 'panelSectionHeader.background': ``,
    // 'panelSectionHeader.border': ``,
    // 'panelSectionHeader.foreground': ``,
    "panelTitle.activeBorder": transparent,
    "panelTitle.activeForeground": porcelain,
    "panelTitle.inactiveForeground": greyChateau,

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
    "peekViewTitleDescription.foreground": iron,
    "peekViewTitleLabel.foreground": porcelain,

    // Preview colors | DONE
    // -------------------------------------------------------------------------
    "imagePreview.border": appleBlossom,

    // Progress bar | DONE
    // -------------------------------------------------------------------------
    "progressBar.background": appleBlossom,

    // Quick picker colors | DONE
    // -------------------------------------------------------------------------
    "pickerGroup.border": appleBlossom,
    "pickerGroup.foreground": greyChateau,
    "quickInput.background": ebony,
    "quickInput.foreground": greyChateau,
    "quickInputTitle.background": iron,

    // Scrollbar control | DONE
    // -------------------------------------------------------------------------
    "scrollbar.shadow": transparent,
    "scrollbarSlider.activeBackground": `${rollingStone}${pronounced}`,
    "scrollbarSlider.background": `${rollingStone}${subtle}`,
    "scrollbarSlider.hoverBackground": `${rollingStone}${pronounced}`,

    // Settings editor colors | DONE
    // -------------------------------------------------------------------------
    "settings.checkboxBackground": black,
    "settings.checkboxBorder": appleBlossom,
    "settings.checkboxForeground": greyChateau,
    "settings.dropdownBackground": black,
    "settings.dropdownBorder": appleBlossom,
    "settings.dropdownForeground": greyChateau,
    "settings.dropdownListBorder": transparent,
    "settings.headerForeground": porcelain,
    "settings.modifiedItemIndicator": indianKhaki,
    "settings.numberInputBackground": black,
    "settings.numberInputBorder": appleBlossom,
    "settings.numberInputForeground": greyChateau,
    "settings.textInputBackground": black,
    "settings.textInputBorder": appleBlossom,
    "settings.textInputForeground": greyChateau,

    // Side bar | DONE
    // -------------------------------------------------------------------------
    "sideBar.background": ebony,
    "sideBar.border": transparent,
    "sideBar.dropBackground": transparent,
    "sideBar.foreground": greyChateau,
    "sideBarSectionHeader.background": transparent,
    "sideBarSectionHeader.border": transparent,
    "sideBarSectionHeader.foreground": iron,
    "sideBarTitle.foreground": porcelain,

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
    "statusBar.background": smaltBlue,
    "statusBar.border": transparent,
    "statusBar.foreground": black,
    "statusBar.debuggingBackground": indianKhaki,
    "statusBar.debuggingBorder": transparent,
    "statusBar.debuggingForeground": black,
    "statusBar.noFolderBackground": appleBlossom,
    "statusBar.noFolderBorder": transparent,
    "statusBar.noFolderForeground": porcelain,
    "statusBarItem.activeBackground": nepal,
    "statusBarItem.hoverBackground": nepal,
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
    "textBlockQuote.border": indianKhaki,
    "textCodeBlock.background": black,
    "textLink.activeForeground": nepal,
    "textLink.foreground": smaltBlue,
    "textPreformat.foreground": indianKhaki,
    "textSeparator.foreground": iron,

    // Title bar colors | DONE
    // -------------------------------------------------------------------------
    "titleBar.activeBackground": bunker,
    "titleBar.activeForeground": porcelain,
    "titleBar.border": transparent,
    "titleBar.inactiveBackground": bunker,
    "titleBar.inactiveForeground": porcelain,

    // Welcome page colors | DONE
    // -------------------------------------------------------------------------
    "walkThrough.embeddedEditorBackground": ebony,
    "welcomePage.background": ebony,
    "welcomePage.buttonBackground": smaltBlue,
    "welcomePage.buttonHoverBackground": nepal,

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
        foreground: rollingStone
      }
    },
    {
      name: `Base constants`,
      scope: `constant`,
      settings: {
        foreground: matrix
      }
    },
    {
      name: `Base entities`,
      scope: `constant.character.entity`,
      settings: {
        fontStyle: `italic`,
        foreground: trinidad
      }
    },
    {
      name: `Base keywords`,
      scope: `keyword`,
      settings: {
        foreground: indianKhaki
      }
    },
    {
      name: `Base storage`,
      scope: `storage`,
      settings: {
        foreground: indianKhaki
      }
    },
    {
      name: `Base strings`,
      scope: `string`,
      settings: {
        foreground: matrix
      }
    },
    {
      name: `Base support`,
      scope: `support`,
      settings: {
        foreground: treePoppy
      }
    },
    {
      name: `Base variables`,
      scope: `variable`,
      settings: {
        fontStyle: `italic`,
        foreground: trinidad
      }
    },

    // CSS tokens
    // -------------------------------------------------------------------------
    {
      name: `CSS attributes`,
      scope: `entity.other.attribute-name.css`,
      settings: {
        foreground: porcelain
      }
    },
    {
      name: `CSS classes`,
      scope: `entity.other.attribute-name.class.css`,
      settings: {
        foreground: ecstasy
      }
    },
    {
      name: `CSS entities`,
      scope: `punctuation.definition.entity.css`,
      settings: {
        fontStyle: `normal`,
        foreground: iron
      }
    },
    {
      name: `CSS hexadecimals`,
      scope: [
        `constant.other.color.rgb-value.hex.css`,
        `punctuation.definition.constant.css`
      ],
      settings: {
        foreground: treePoppy
      }
    },
    {
      name: `CSS ids`,
      scope: `entity.other.attribute-name.id.css`,
      settings: {
        foreground: ecstasy
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
        foreground: iron
      }
    },
    {
      name: `CSS properties`,
      scope: `support.type.property-name.css`,
      settings: {
        foreground: iron
      }
    },
    {
      name: `CSS property values`,
      scope: [
        `support.constant.color.current.css`,
        `support.constant.property-value.css`
      ],
      settings: {
        foreground: indianKhaki
      }
    },
    {
      name: `CSS pseudo`,
      scope: [
        `entity.other.attribute-name.pseudo-class.css`,
        `entity.other.attribute-name.pseudo-element.css`
      ],
      settings: {
        foreground: porcelain
      }
    },
    {
      name: `CSS tags`,
      scope: `entity.name.tag.css`,
      settings: {
        foreground: smaltBlue
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
        foreground: matrix
      }
    },
    {
      name: `CSS vendor-prefixed properties`,
      scope: `support.type.vendored.property-name.css`,
      settings: {
        foreground: greyChateau
      }
    },

    // HTML tokens
    // -------------------------------------------------------------------------
    {
      name: `HTML attributes`,
      scope: `entity.other.attribute-name.html`,
      settings: {
        foreground: porcelain
      }
    },
    {
      name: `HTML tags`,
      scope: `entity.name.tag.html`,
      settings: {
        foreground: ecstasy
      }
    },

    // JavaScript tokens
    // -------------------------------------------------------------------------
    {
      name: `JavaScript block comments`,
      scope: [`comment.block.documentation.js`, `comment.block.js`],
      settings: {
        foreground: greyChateau
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
        foreground: iron
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
        foreground: smaltBlue
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
        foreground: treePoppy
      }
    },
    {
      name: `JavaScript inherited classes`,
      scope: `entity.other.inherited-class.js`,
      settings: {
        foreground: nepal
      }
    },
    {
      name: `JavaScript null`,
      scope: `constant.language.null.js`,
      settings: {
        foreground: greyChateau
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
        foreground: iron
      }
    },
    {
      name: `JavaScript properties`,
      scope: [`meta.object-literal.key.js`, `variable.other.property.js`],
      settings: {
        fontStyle: `normal`,
        foreground: ecstasy
      }
    },
    {
      name: `JavaScript regular expressions`,
      scope: `string.regexp.js`,
      settings: {
        foreground: nepal
      }
    },
    {
      name: `JavaScript super`,
      scope: `variable.language.super.js`,
      settings: {
        fontStyle: `normal`,
        foreground: porcelain
      }
    },
    {
      name: `JavaScript this`,
      scope: `variable.language.this.js`,
      settings: {
        foreground: porcelain
      }
    },
    {
      name: `JavaScript types`,
      scope: `entity.name.type.instance.jsdoc`,
      settings: {
        foreground: nepal
      }
    },
    {
      name: `JavaScript undefined`,
      scope: `constant.language.undefined.js`,
      settings: {
        foreground: greyChateau
      }
    },

    // JSON tokens
    // -------------------------------------------------------------------------
    {
      name: `JSON properties`,
      scope: `support.type.property-name.json`,
      settings: {
        foreground: iron
      }
    },

    // JSX tokens
    // -------------------------------------------------------------------------
    {
      name: `JSX attributes`,
      scope: `entity.other.attribute-name.js.jsx`,
      settings: {
        foreground: porcelain
      }
    },
    {
      name: `JSX component tags`,
      scope: `support.class.component.js.jsx`,
      settings: {
        fontStyle: `bold`,
        foreground: ecstasy
      }
    },
    {
      name: `JSX tags`,
      scope: `entity.name.tag.js.jsx`,
      settings: {
        foreground: ecstasy
      }
    },

    // Markdown tokens
    // -------------------------------------------------------------------------
    {
      name: `Markdown backtick strings`,
      scope: `markup.inline.raw.string.markdown`,
      settings: {
        foreground: trinidad
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
        foreground: indianKhaki
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
        foreground: ecstasy
      }
    },
    {
      name: `Markdown links`,
      scope: `markup.underline.link.markdown`,
      settings: {
        foreground: porcelain
      }
    },

    // Python tokens
    // -------------------------------------------------------------------------
    {
      name: `Python attributes`,
      scope: [`meta.attribute.python`, `meta.indexed-name.python`],
      settings: {
        fontStyle: `regular`,
        foreground: ecstasy
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
        foreground: iron
      }
    },
    {
      name: `Python classes`,
      scope: `entity.name.type.class.python`,
      settings: {
        fontStyle: `regular`,
        foreground: smaltBlue
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
        foreground: greyChateau
      }
    },
    {
      name: `Python escaped characters`,
      scope: `constant.character.escape.python`,
      settings: {
        fontStyle: `regular`,
        foreground: trinidad
      }
    },
    {
      name: `Python foreground`,
      scope: `source.python`,
      settings: {
        fontStyle: `italic`,
        foreground: trinidad
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
        foreground: treePoppy
      }
    },
    {
      name: `Python inherited classes`,
      scope: `entity.other.inherited-class.python`,
      settings: {
        fontStyle: `regular`,
        foreground: nepal
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
        foreground: iron
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
        foreground: treePoppy
      }
    },
    {
      name: `Python variables`,
      scope: `constant.other.caps.python`,
      settings: {
        foreground: trinidad
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
        foreground: smaltBlue
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
        foreground: nepal
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
        foreground: nepal
      }
    },

    // SCSS tokens
    // -------------------------------------------------------------------------
    {
      name: `SCSS attributes`,
      scope: `entity.other.attribute-name.attribute.scss`,
      settings: {
        foreground: porcelain
      }
    },
    {
      name: `SCSS block comments`,
      scope: `comment.block.scss`,
      settings: {
        foreground: greyChateau
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
        foreground: iron
      }
    },

    {
      name: `SCSS functions`,
      scope: `entity.name.function.scss`,
      settings: {
        foreground: treePoppy
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
        foreground: iron
      }
    },
    {
      name: `SCSS strings`,
      scope: `meta.attribute-selector.scss`,
      settings: {
        foreground: matrix
      }
    },

    // TypeScript tokens
    // -------------------------------------------------------------------------
    {
      name: `TypeScript alias types`,
      scope: `entity.name.type.alias.ts`,
      settings: {
        foreground: nepal
      }
    },
    {
      name: `TypeScript block comments`,
      scope: [`comment.block.documentation.ts`, `comment.block.ts`],
      settings: {
        foreground: greyChateau
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
        foreground: iron
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
        foreground: smaltBlue
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
        foreground: treePoppy
      }
    },
    {
      name: `TypeScript inherited classes`,
      scope: `entity.other.inherited-class.ts`,
      settings: {
        foreground: nepal
      }
    },
    {
      name: `TypeScript interface types`,
      scope: `entity.name.type.interface.ts`,
      settings: {
        foreground: smaltBlue
      }
    },
    {
      name: `TypeScript null`,
      scope: `constant.language.null.ts`,
      settings: {
        foreground: greyChateau
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
        foreground: iron
      }
    },
    {
      name: `TypeScript primitive types`,
      scope: `support.type.primitive.ts`,
      settings: {
        foreground: nepal
      }
    },
    {
      name: `TypeScript properties`,
      scope: [`variable.object.property.ts`, `variable.other.property.ts`],
      settings: {
        fontStyle: `normal`,
        foreground: ecstasy
      }
    },
    {
      name: `TypeScript regular expressions`,
      scope: `string.regexp.ts`,
      settings: {
        foreground: nepal
      }
    },
    {
      name: `TypeScript super`,
      scope: `variable.language.super.ts`,
      settings: {
        fontStyle: `normal`,
        foreground: porcelain
      }
    },
    {
      name: `TypeScript this`,
      scope: `variable.language.this.ts`,
      settings: {
        foreground: porcelain
      }
    },
    {
      name: `TypeScript undefined`,
      scope: `constant.language.undefined.ts`,
      settings: {
        foreground: greyChateau
      }
    },

    // XML tokens
    // -------------------------------------------------------------------------
    {
      name: `XML attributes`,
      scope: `entity.other.attribute-name.localname.xml`,
      settings: {
        foreground: porcelain
      }
    },
    {
      name: `XML tags`,
      scope: `entity.name.tag.localname.xml`,
      settings: {
        foreground: ecstasy
      }
    }
  ],
  type
};
