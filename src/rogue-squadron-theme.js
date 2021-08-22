'use strict';

// Config
// =============================================================================
const name = 'Rogue Squadron';
const type = 'dark';

// Opacity
// =============================================================================
const hidden = '00';
const pronounced = '33';
const striking = '4d';
const subtle = '1a';

// Palette
// =============================================================================
const appleBlossom = '#a34845';
const black = '#010203';
const bunker = '#0a0f17';
const ebony = '#04070b';
const ecstasy = '#fa7d12';
const greyChateau = '#a8acae';
const indianKhaki = '#c1b398';
const iron = '#cacdcf';
const matrix = '#bc5f5d';
const nepal = '#85adbc';
const porcelain = '#e6e8e9';
const rollingStone = '#7b7f81';
const smaltBlue = '#538397';
const transparent = black + hidden;
const treePoppy = '#fc9d1b';
const trinidad = '#f4500a';

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
    'activityBar.dropBorder': appleBlossom,
    'activityBar.foreground': porcelain,
    'activityBar.inactiveForeground': greyChateau,
    'activityBarBadge.background': ecstasy,
    'activityBarBadge.foreground': black,

    // Badge colors
    // -------------------------------------------------------------------------
    'badge.background': ecstasy,
    'badge.foreground': black,

    // Base colors
    // -------------------------------------------------------------------------
    descriptionForeground: iron,
    errorForeground: appleBlossom,
    focusBorder: transparent,
    foreground: iron,
    'icon.foreground': greyChateau,
    'selection.background': appleBlossom,
    'widget.shadow': transparent,

    // Breadcrumbs colors
    // -------------------------------------------------------------------------
    'breadcrumb.activeSelectionForeground': porcelain,
    'breadcrumb.background': black,
    'breadcrumb.focusForeground': iron,
    'breadcrumb.foreground': rollingStone,
    'breadcrumbPicker.background': bunker,

    // Button control
    // -------------------------------------------------------------------------
    'button.background': smaltBlue,
    'button.foreground': black,
    'button.hoverBackground': nepal,
    'checkbox.background': black,
    'checkbox.border': appleBlossom,
    'checkbox.foreground': greyChateau,

    // Debug colors
    // -------------------------------------------------------------------------
    'debugTokenExpression.boolean': matrix,
    'debugTokenExpression.error': appleBlossom,
    'debugTokenExpression.name': trinidad,
    'debugTokenExpression.number': matrix,
    'debugTokenExpression.string': matrix,
    'debugTokenExpression.value': matrix,
    'debugToolBar.background': bunker,
    'debugToolBar.border': bunker,
    'debugView.exceptionLabelBackground': trinidad,
    'debugView.exceptionLabelForeground': black,
    'debugView.stateLabelBackground': ecstasy,
    'debugView.stateLabelForeground': black,
    'debugView.valueChangedHighlight': indianKhaki,
    'editor.focusedStackFrameHighlightBackground': bunker,
    'editor.stackFrameHighlightBackground': ebony,

    // Debug icons colors
    // -------------------------------------------------------------------------
    'debugConsole.errorForeground': appleBlossom,
    'debugConsole.infoForeground': indianKhaki,
    'debugConsole.sourceForeground': greyChateau,
    'debugConsole.warningForeground': treePoppy,
    'debugConsoleInputIcon.foreground': greyChateau,
    'debugIcon.breakpointCurrentStackframeForeground': ecstasy,
    'debugIcon.breakpointDisabledForeground': ecstasy,
    'debugIcon.breakpointForeground': ecstasy,
    'debugIcon.breakpointStackframeForeground': ecstasy,
    'debugIcon.breakpointUnverifiedForeground': ecstasy,
    'debugIcon.continueForeground': greyChateau,
    'debugIcon.disconnectForeground': greyChateau,
    'debugIcon.pauseForeground': indianKhaki,
    'debugIcon.restartForeground': nepal,
    'debugIcon.stepBackForeground': greyChateau,
    'debugIcon.stepIntoForeground': greyChateau,
    'debugIcon.stepOverForeground': greyChateau,
    'debugIcon.stepOutForeground': greyChateau,
    'debugIcon.startForeground': greyChateau,
    'debugIcon.stopForeground': appleBlossom,

    // Diff editor colors
    // -------------------------------------------------------------------------
    'diffEditor.border': transparent,
    'diffEditor.diagonalFill': rollingStone + striking,
    'diffEditor.insertedTextBackground': smaltBlue + pronounced,
    'diffEditor.insertedTextBorder': transparent,
    'diffEditor.removedTextBackground': appleBlossom + pronounced,
    'diffEditor.removedTextBorder': transparent,

    // Dropdown control
    // -------------------------------------------------------------------------
    'dropdown.background': black,
    'dropdown.border': appleBlossom,
    'dropdown.listBackground': bunker,
    'dropdown.foreground': greyChateau,

    // Editor colors
    // -------------------------------------------------------------------------
    'editor.background': black,
    'editor.findMatchBackground': rollingStone + pronounced,
    'editor.findMatchBorder': transparent,
    'editor.findMatchHighlightBackground': rollingStone + pronounced,
    'editor.findMatchHighlightBorder': transparent,
    'editor.findRangeHighlightBackground': rollingStone + pronounced,
    'editor.findRangeHighlightBorder': transparent,
    'editor.foldBackground': transparent,
    'editor.foreground': iron,
    'editor.hoverHighlightBackground': rollingStone + pronounced,
    'editor.inactiveSelectionBackground': transparent,
    'editor.lineHighlightBackground': bunker,
    'editor.lineHighlightBorder': transparent,
    'editor.rangeHighlightBackground': rollingStone + subtle,
    'editor.rangeHighlightBorder': transparent,
    'editor.selectionBackground': rollingStone + striking,
    'editor.selectionHighlightBackground': rollingStone + pronounced,
    'editor.selectionHighlightBorder': transparent,
    'editor.symbolHighlightBackground': rollingStone + pronounced,
    'editor.symbolHighlightBorder': transparent,
    'editor.wordHighlightBackground': rollingStone + pronounced,
    'editor.wordHighlightBorder': transparent,
    'editor.wordHighlightStrongBackground': rollingStone + pronounced,
    'editor.wordHighlightStrongBorder': transparent,
    'editorBracketMatch.background': rollingStone + pronounced,
    'editorBracketMatch.border': transparent,
    'editorCursor.background': transparent,
    'editorCursor.foreground': greyChateau,
    'editorCodeLens.foreground': rollingStone,
    'editorError.border': transparent,
    'editorError.foreground': appleBlossom,
    'editorGutter.addedBackground': smaltBlue,
    'editorGutter.background': transparent,
    'editorGutter.commentRangeForeground': transparent,
    'editorGutter.deletedBackground': appleBlossom,
    'editorGutter.foldingControlForeground': greyChateau,
    'editorGutter.modifiedBackground': indianKhaki,
    'editorHint.border': transparent,
    'editorHint.foreground': nepal,
    'editorInfo.border': transparent,
    'editorInfo.foreground': indianKhaki,
    'editorLineNumber.activeForeground': greyChateau,
    'editorLineNumber.foreground': rollingStone,
    'editorLightBulb.foreground': ecstasy,
    'editorLightBulbAutoFix.foreground': ecstasy,
    'editorLink.activeForeground': nepal,
    'editorOverviewRuler.addedForeground': smaltBlue,
    'editorOverviewRuler.background': transparent,
    'editorOverviewRuler.border': transparent,
    'editorOverviewRuler.bracketMatchForeground': rollingStone + pronounced,
    'editorOverviewRuler.deletedForeground': appleBlossom,
    'editorOverviewRuler.errorForeground': appleBlossom,
    'editorOverviewRuler.findMatchForeground': rollingStone + pronounced,
    'editorOverviewRuler.infoForeground': indianKhaki,
    'editorOverviewRuler.modifiedForeground': indianKhaki,
    'editorOverviewRuler.rangeHighlightForeground': rollingStone + pronounced,
    'editorOverviewRuler.selectionHighlightForeground': rollingStone + striking,
    'editorOverviewRuler.warningForeground': treePoppy,
    'editorOverviewRuler.wordHighlightForeground': rollingStone + pronounced,
    'editorOverviewRuler.wordHighlightStrongForeground':
      rollingStone + pronounced,
    'editorUnnecessaryCode.border': transparent,
    'editorUnnecessaryCode.opacity': rollingStone + striking,
    'editorRuler.foreground': iron,
    'editorWarning.border': transparent,
    'editorWarning.foreground': treePoppy,
    'editorWhitespace.foreground': rollingStone + striking,
    'problemsErrorIcon.foreground': appleBlossom,
    'problemsInfoIcon.foreground': indianKhaki,
    'problemsWarningIcon.foreground': treePoppy,
    'searchEditor.findMatchBackground': rollingStone + pronounced,
    'searchEditor.findMatchBorder': transparent,
    'searchEditor.textInputBorder': appleBlossom,

    // Editor group and tabs
    // -------------------------------------------------------------------------
    'editorGroup.border': bunker,
    'editorGroup.dropBackground': appleBlossom,
    'editorGroup.emptyBackground': ebony,
    'editorGroup.focusedEmptyBorder': appleBlossom,
    'editorGroupHeader.border': transparent,
    'editorGroupHeader.tabsBackground': bunker,
    'editorGroupHeader.tabsBorder': black,
    'tab.activeBackground': black,
    'tab.activeBorder': black,
    'tab.activeBorderTop': black,
    'tab.activeForeground': porcelain,
    'tab.activeModifiedBorder': bunker,
    'tab.border': bunker,
    'tab.hoverBackground': black,
    'tab.hoverBorder': bunker,
    'tab.hoverForeground': porcelain,
    'tab.inactiveBackground': ebony,
    'tab.inactiveForeground': greyChateau,
    'tab.inactiveModifiedBorder': bunker,
    'tab.unfocusedActiveBackground': black,
    'tab.unfocusedActiveBorderTop': black,
    'tab.unfocusedActiveBorder': black,
    'tab.unfocusedActiveForeground': porcelain,
    'tab.unfocusedActiveModifiedBorder': bunker,
    'tab.unfocusedHoverBackground': black,
    'tab.unfocusedHoverBorder': bunker,
    'tab.unfocusedHoverForeground': porcelain,
    'tab.unfocusedInactiveBackground': ebony,
    'tab.unfocusedInactiveForeground': greyChateau,
    'tab.unfocusedInactiveModifiedBorder': bunker,

    // Editor widget colors
    // -------------------------------------------------------------------------
    'debugExceptionWidget.background': bunker,
    'debugExceptionWidget.border': appleBlossom,
    'editorHoverWidget.background': bunker,
    'editorHoverWidget.border': appleBlossom,
    'editorHoverWidget.foreground': greyChateau,
    'editorHoverWidget.statusBarBackground': bunker,
    'editorMarkerNavigation.background': bunker,
    'editorMarkerNavigationError.background': appleBlossom,
    'editorMarkerNavigationInfo.background': indianKhaki,
    'editorMarkerNavigationWarning.background': treePoppy,
    'editorSuggestWidget.background': bunker,
    'editorSuggestWidget.border': appleBlossom,
    'editorSuggestWidget.foreground': greyChateau,
    'editorSuggestWidget.highlightForeground': porcelain,
    'editorSuggestWidget.selectedBackground': black,
    'editorWidget.background': bunker,
    'editorWidget.border': appleBlossom,
    'editorWidget.foreground': greyChateau,
    'editorWidget.resizeBorder': appleBlossom,

    // Extension colors
    // -------------------------------------------------------------------------
    'extensionButton.prominentBackground': trinidad,
    'extensionButton.prominentForeground': black,
    'extensionButton.prominentHoverBackground': treePoppy,
    'extensionBadge.remoteBackground': ecstasy,
    'extensionBadge.remoteForeground': black,

    // Git colors
    // -------------------------------------------------------------------------
    'gitDecoration.addedResourceForeground': smaltBlue,
    'gitDecoration.conflictingResourceForeground': trinidad,
    'gitDecoration.deletedResourceForeground': appleBlossom,
    'gitDecoration.ignoredResourceForeground': rollingStone,
    'gitDecoration.modifiedResourceForeground': indianKhaki,
    'gitDecoration.submoduleResourceForeground': greyChateau,
    'gitDecoration.untrackedResourceForeground': iron,

    // Input control
    // -------------------------------------------------------------------------
    'input.background': black,
    'input.border': appleBlossom,
    'input.foreground': greyChateau,
    'input.placeholderForeground': rollingStone,
    'inputOption.activeBackground': bunker,
    'inputOption.activeBorder': transparent,
    'inputOption.activeForeground': porcelain,
    'inputValidation.errorBackground': black,
    'inputValidation.errorBorder': appleBlossom,
    'inputValidation.errorForeground': appleBlossom,
    'inputValidation.infoBackground': black,
    'inputValidation.infoBorder': appleBlossom,
    'inputValidation.infoForeground': greyChateau,

    // Integrated terminal colors
    // -------------------------------------------------------------------------
    'terminal.ansiBlack': ebony,
    'terminal.ansiBlue': smaltBlue,
    'terminal.ansiBrightBlack': smaltBlue,
    'terminal.ansiBrightBlue': smaltBlue,
    'terminal.ansiBrightCyan': nepal,
    'terminal.ansiBrightGreen': nepal,
    'terminal.ansiBrightMagenta': matrix,
    'terminal.ansiBrightRed': matrix,
    'terminal.ansiBrightWhite': indianKhaki,
    'terminal.ansiBrightYellow': indianKhaki,
    'terminal.ansiCyan': nepal,
    'terminal.ansiGreen': nepal,
    'terminal.ansiMagenta': matrix,
    'terminal.ansiRed': matrix,
    'terminal.ansiWhite': indianKhaki,
    'terminal.ansiYellow': indianKhaki,
    'terminal.background': ebony,
    'terminal.border': transparent,
    'terminal.foreground': greyChateau,
    'terminal.selectionBackground': rollingStone + striking,
    'terminalCursor.background': transparent,
    'terminalCursor.foreground': greyChateau,

    // Lists and trees
    // -------------------------------------------------------------------------
    'list.activeSelectionBackground': black,
    'list.activeSelectionForeground': porcelain,
    'list.deemphasizedForeground': rollingStone,
    'list.dropBackground': appleBlossom,
    'list.errorForeground': appleBlossom,
    'list.filterMatchBackground': rollingStone + pronounced,
    'list.filterMatchBorder': transparent,
    'list.focusBackground': black,
    'list.focusForeground': porcelain,
    'list.highlightForeground': porcelain,
    'list.hoverBackground': bunker,
    'list.hoverForeground': porcelain,
    'list.inactiveFocusBackground': black,
    'list.inactiveSelectionBackground': black,
    'list.inactiveSelectionForeground': porcelain,
    'list.invalidItemForeground': rollingStone,
    'list.warningForeground': treePoppy,
    'listFilterWidget.background': bunker,
    'listFilterWidget.noMatchesOutline': appleBlossom,
    'listFilterWidget.outline': appleBlossom,
    'tree.indentGuidesStroke': rollingStone,

    // Menu bar colors
    // -------------------------------------------------------------------------
    'menu.background': ebony,
    'menu.border': ebony,
    'menu.foreground': greyChateau,
    'menu.selectionBackground': bunker,
    'menu.selectionBorder': bunker,
    'menu.selectionForeground': porcelain,
    'menu.separatorBackground': transparent,
    'menubar.selectionBackground': bunker,
    'menubar.selectionBorder': bunker,
    'menubar.selectionForeground': porcelain,

    // Merge conflicts colors
    // -------------------------------------------------------------------------
    'editorOverviewRuler.commonContentForeground': iron,
    'editorOverviewRuler.currentContentForeground': iron,
    'editorOverviewRuler.incomingContentForeground': iron,
    'merge.border': transparent,
    'merge.commonContentBackground': indianKhaki + subtle,
    'merge.commonHeaderBackground': indianKhaki + pronounced,
    'merge.currentContentBackground': trinidad + pronounced,
    'merge.currentHeaderBackground': trinidad + striking,
    'merge.incomingContentBackground': nepal + pronounced,
    'merge.incomingHeaderBackground': nepal + striking,

    // Minimap
    // -------------------------------------------------------------------------
    'minimap.background': ebony,
    'minimap.errorHighlight': appleBlossom,
    'minimap.findMatchHighlight': rollingStone + pronounced,
    'minimap.selectionHighlight': rollingStone + striking,
    'minimap.warningHighlight': treePoppy,
    'minimapGutter.addedBackground': smaltBlue,
    'minimapGutter.deletedBackground': appleBlossom,
    'minimapGutter.modifiedBackground': indianKhaki,
    'minimapSlider.activeBackground': rollingStone + striking,
    'minimapSlider.background': rollingStone + subtle,
    'minimapSlider.hoverBackground': rollingStone + pronounced,

    // Notification colors
    // -------------------------------------------------------------------------
    'notificationCenter.border': bunker,
    'notificationCenterHeader.background': bunker,
    'notificationCenterHeader.foreground': porcelain,
    'notificationLink.foreground': smaltBlue,
    'notifications.background': bunker,
    'notifications.border': bunker,
    'notifications.foreground': greyChateau,
    'notificationsErrorIcon.foreground': appleBlossom,
    'notificationsInfoIcon.foreground': indianKhaki,
    'notificationsWarningIcon.foreground': treePoppy,
    'notificationToast.border': bunker,

    // Panel colors
    // -------------------------------------------------------------------------
    'panel.background': bunker,
    'panel.border': transparent,
    'panel.dropBackground': transparent,
    'panel.dropBorder': appleBlossom,
    'panelTitle.activeBorder': transparent,
    'panelTitle.activeForeground': porcelain,
    'panelTitle.inactiveForeground': greyChateau,

    // Peek view colors
    // -------------------------------------------------------------------------
    'peekView.border': bunker,
    'peekViewTitle.background': bunker,
    'peekViewTitleDescription.foreground': greyChateau,
    'peekViewTitleLabel.foreground': porcelain,

    // Preview colors
    // -------------------------------------------------------------------------
    'imagePreview.border': transparent,

    // Progress bar
    // -------------------------------------------------------------------------
    'progressBar.background': appleBlossom,

    // Quick picker colors
    // -------------------------------------------------------------------------
    'pickerGroup.border': transparent,
    'pickerGroup.foreground': porcelain,
    'quickInput.background': ebony,
    'quickInput.foreground': greyChateau,

    // Scrollbar control
    // -------------------------------------------------------------------------
    'scrollbar.shadow': transparent,
    'scrollbarSlider.activeBackground': rollingStone + striking,
    'scrollbarSlider.background': rollingStone + subtle,
    'scrollbarSlider.hoverBackground': rollingStone + pronounced,

    // Settings editor colors
    // -------------------------------------------------------------------------
    'settings.checkboxBackground': black,
    'settings.checkboxBorder': appleBlossom,
    'settings.checkboxForeground': greyChateau,
    'settings.dropdownBackground': black,
    'settings.dropdownBorder': appleBlossom,
    'settings.dropdownForeground': greyChateau,
    'settings.dropdownListBorder': bunker,
    'settings.headerForeground': porcelain,
    'settings.modifiedItemIndicator': indianKhaki,
    'settings.numberInputBackground': black,
    'settings.numberInputBorder': appleBlossom,
    'settings.numberInputForeground': greyChateau,
    'settings.textInputBackground': black,
    'settings.textInputBorder': appleBlossom,
    'settings.textInputForeground': greyChateau,

    // Side bar
    // -------------------------------------------------------------------------
    'sideBar.background': ebony,
    'sideBar.border': black,
    'sideBar.dropBackground': transparent,
    'sideBar.foreground': greyChateau,
    'sideBarSectionHeader.background': transparent,
    'sideBarSectionHeader.border': transparent,
    'sideBarSectionHeader.foreground': iron,
    'sideBarTitle.foreground': porcelain,

    // Snippets colors
    // -------------------------------------------------------------------------
    'editor.snippetFinalTabstopHighlightBackground': rollingStone + pronounced,
    'editor.snippetFinalTabstopHighlightBorder': appleBlossom,
    'editor.snippetTabstopHighlightBackground': rollingStone,
    'editor.snippetTabstopHighlightBorder': appleBlossom,

    // Status bar colors
    // -------------------------------------------------------------------------
    'statusBar.background': smaltBlue,
    'statusBar.border': transparent,
    'statusBar.foreground': black,
    'statusBar.debuggingBackground': indianKhaki,
    'statusBar.debuggingBorder': transparent,
    'statusBar.debuggingForeground': black,
    'statusBar.noFolderBackground': appleBlossom,
    'statusBar.noFolderBorder': transparent,
    'statusBar.noFolderForeground': porcelain,

    // Symbol icons colors
    // -------------------------------------------------------------------------
    'symbolIcon.arrayForeground': ecstasy,
    'symbolIcon.booleanForeground': ecstasy,
    'symbolIcon.classForeground': ecstasy,
    'symbolIcon.colorForeground': ecstasy,
    'symbolIcon.constantForeground': ecstasy,
    'symbolIcon.constructorForeground': ecstasy,
    'symbolIcon.enumeratorForeground': ecstasy,
    'symbolIcon.enumeratorMemberForeground': ecstasy,
    'symbolIcon.eventForeground': ecstasy,
    'symbolIcon.fieldForeground': ecstasy,
    'symbolIcon.fileForeground': ecstasy,
    'symbolIcon.folderForeground': ecstasy,
    'symbolIcon.functionForeground': ecstasy,
    'symbolIcon.interfaceForeground': ecstasy,
    'symbolIcon.keyForeground': ecstasy,
    'symbolIcon.keywordForeground': ecstasy,
    'symbolIcon.methodForeground': ecstasy,
    'symbolIcon.moduleForeground': ecstasy,
    'symbolIcon.namespaceForeground': ecstasy,
    'symbolIcon.nullForeground': ecstasy,
    'symbolIcon.numberForeground': ecstasy,
    'symbolIcon.objectForeground': ecstasy,
    'symbolIcon.operatorForeground': ecstasy,
    'symbolIcon.packageForeground': ecstasy,
    'symbolIcon.propertyForeground': ecstasy,
    'symbolIcon.referenceForeground': ecstasy,
    'symbolIcon.snippetForeground': ecstasy,
    'symbolIcon.stringForeground': ecstasy,
    'symbolIcon.structForeground': ecstasy,
    'symbolIcon.textForeground': ecstasy,
    'symbolIcon.typeParameterForeground': ecstasy,
    'symbolIcon.unitForeground': ecstasy,
    'symbolIcon.variableForeground': ecstasy,

    // Text colors
    // -------------------------------------------------------------------------
    'textBlockQuote.background': transparent,
    'textBlockQuote.border': iron,
    'textCodeBlock.background': black,
    'textLink.activeForeground': nepal,
    'textLink.foreground': smaltBlue,
    'textPreformat.foreground': indianKhaki,
    'textSeparator.foreground': iron,

    // Welcome page colors
    // -------------------------------------------------------------------------
    'walkThrough.embeddedEditorBackground': ebony,
    'welcomePage.background': ebony,
    'welcomePage.buttonBackground': smaltBlue,
    'welcomePage.buttonHoverBackground': nepal,

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
      name: 'Base comments',
      scope: 'comment',
      settings: {
        foreground: rollingStone,
      },
    },
    {
      name: 'Base constants',
      scope: 'constant',
      settings: {
        foreground: matrix,
      },
    },
    {
      name: 'Base entities',
      scope: 'constant.character.entity',
      settings: {
        fontStyle: 'italic',
        foreground: trinidad,
      },
    },
    {
      name: 'Base keywords',
      scope: 'keyword',
      settings: {
        foreground: indianKhaki,
      },
    },
    {
      name: 'Base storage',
      scope: 'storage',
      settings: {
        foreground: indianKhaki,
      },
    },
    {
      name: 'Base strings',
      scope: 'string',
      settings: {
        foreground: matrix,
      },
    },
    {
      name: 'Base support',
      scope: 'support',
      settings: {
        foreground: treePoppy,
      },
    },
    {
      name: 'Base variables',
      scope: 'variable',
      settings: {
        fontStyle: 'italic',
        foreground: trinidad,
      },
    },

    // CSS tokens
    // -------------------------------------------------------------------------
    {
      name: 'CSS attributes',
      scope: 'entity.other.attribute-name.css',
      settings: {
        foreground: porcelain,
      },
    },
    {
      name: 'CSS classes',
      scope: 'entity.other.attribute-name.class.css',
      settings: {
        foreground: ecstasy,
      },
    },
    {
      name: 'CSS entities',
      scope: 'punctuation.definition.entity.css',
      settings: {
        fontStyle: 'normal',
        foreground: iron,
      },
    },
    {
      name: 'CSS hexadecimals',
      scope: [
        'constant.other.color.rgb-value.hex.css',
        'punctuation.definition.constant.css',
      ],
      settings: {
        foreground: treePoppy,
      },
    },
    {
      name: 'CSS ids',
      scope: 'entity.other.attribute-name.id.css',
      settings: {
        foreground: ecstasy,
      },
    },
    {
      name: 'CSS important',
      scope: 'keyword.other.important.css',
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      name: 'CSS operators',
      scope: [
        'keyword.operator.arithmetic.css',
        'keyword.operator.combinator.css',
        'keyword.operator.pattern.css',
      ],
      settings: {
        foreground: iron,
      },
    },
    {
      name: 'CSS properties',
      scope: 'support.type.property-name.css',
      settings: {
        foreground: iron,
      },
    },
    {
      name: 'CSS property values',
      scope: [
        'support.constant.color.current.css',
        'support.constant.property-value.css',
      ],
      settings: {
        foreground: indianKhaki,
      },
    },
    {
      name: 'CSS pseudo',
      scope: [
        'entity.other.attribute-name.pseudo-class.css',
        'entity.other.attribute-name.pseudo-element.css',
      ],
      settings: {
        foreground: porcelain,
      },
    },
    {
      name: 'CSS tags',
      scope: 'entity.name.tag.css',
      settings: {
        foreground: smaltBlue,
      },
    },
    {
      name: 'CSS units',
      scope: [
        'entity.other.keyframe-offset.percentage.css',
        'keyword.other.unit.%.css',
        'keyword.other.unit.ch.css',
        'keyword.other.unit.cm.css',
        'keyword.other.unit.deg.css',
        'keyword.other.unit.em.css',
        'keyword.other.unit.ex.css',
        'keyword.other.unit.in.css',
        'keyword.other.unit.mm.css',
        'keyword.other.unit.ms.css',
        'keyword.other.unit.pc.css',
        'keyword.other.unit.percentage.css',
        'keyword.other.unit.pt.css',
        'keyword.other.unit.px.css',
        'keyword.other.unit.q.css',
        'keyword.other.unit.rem.css',
        'keyword.other.unit.s.css',
        'keyword.other.unit.vmax.css',
        'keyword.other.unit.vmin.css',
        'keyword.other.unit.vh.css',
        'keyword.other.unit.vw.css',
      ],
      settings: {
        foreground: matrix,
      },
    },
    {
      name: 'CSS vendor-prefixed properties',
      scope: 'support.type.vendored.property-name.css',
      settings: {
        foreground: greyChateau,
      },
    },

    // HTML tokens
    // -------------------------------------------------------------------------
    {
      name: 'HTML attributes',
      scope: 'entity.other.attribute-name.html',
      settings: {
        foreground: porcelain,
      },
    },
    {
      name: 'HTML tags',
      scope: 'entity.name.tag.html',
      settings: {
        foreground: ecstasy,
      },
    },

    // JavaScript tokens
    // -------------------------------------------------------------------------
    {
      name: 'JavaScript block comments',
      scope: ['comment.block.documentation.js', 'comment.block.js'],
      settings: {
        foreground: greyChateau,
      },
    },
    {
      name: 'JavaScript brackets',
      scope: [
        'meta.brace.round.js',
        'meta.brace.square.js',
        'punctuation.accessor.js',
        'punctuation.definition.block.js',
        'punctuation.definition.bracket.curly.begin.jsdoc',
        'punctuation.definition.bracket.curly.end.jsdoc',
        'punctuation.definition.template-expression.begin.js',
        'punctuation.definition.template-expression.end.js',
        'punctuation.separator.key-value.js',
      ],
      settings: {
        foreground: iron,
      },
    },
    {
      name: 'JavaScript classes',
      scope: [
        'entity.name.type.class.js',
        'entity.name.type.js',
        'support.class.builtin.js',
      ],
      settings: {
        foreground: smaltBlue,
      },
    },
    {
      name: 'JavaScript functions',
      scope: [
        'entity.name.function.js',
        'support.function.console.js',
        'support.function.js',
      ],
      settings: {
        foreground: treePoppy,
      },
    },
    {
      name: 'JavaScript inherited classes',
      scope: 'entity.other.inherited-class.js',
      settings: {
        foreground: nepal,
      },
    },
    {
      name: 'JavaScript null',
      scope: 'constant.language.null.js',
      settings: {
        foreground: greyChateau,
      },
    },
    {
      name: 'JavaScript operators',
      scope: [
        'keyword.operator.arithmetic.js',
        'keyword.operator.assignment.compound.bitwise.js',
        'keyword.operator.assignment.compound.js',
        'keyword.operator.assignment.js',
        'keyword.operator.comparison.js',
        'keyword.operator.decrement.js',
        'keyword.operator.increment.js',
        'keyword.operator.logical.js',
        'keyword.operator.relational.js',
        'keyword.operator.ternary.js',
      ],
      settings: {
        foreground: iron,
      },
    },
    {
      name: 'JavaScript properties',
      scope: [
        'meta.object-literal.key.js',
        'variable.other.constant.property.js',
        'variable.other.object.property.js',
        'variable.other.property.js',
      ],
      settings: {
        fontStyle: 'normal',
        foreground: ecstasy,
      },
    },
    {
      name: 'JavaScript regular expressions',
      scope: 'string.regexp.js',
      settings: {
        foreground: nepal,
      },
    },
    {
      name: 'JavaScript super',
      scope: 'variable.language.super.js',
      settings: {
        fontStyle: 'normal',
        foreground: porcelain,
      },
    },
    {
      name: 'JavaScript this',
      scope: 'variable.language.this.js',
      settings: {
        foreground: porcelain,
      },
    },
    {
      name: 'JavaScript types',
      scope: 'entity.name.type.instance.jsdoc',
      settings: {
        foreground: nepal,
      },
    },
    {
      name: 'JavaScript undefined',
      scope: 'constant.language.undefined.js',
      settings: {
        foreground: greyChateau,
      },
    },

    // JSON tokens
    // -------------------------------------------------------------------------
    {
      name: 'JSON properties',
      scope: 'support.type.property-name.json',
      settings: {
        foreground: iron,
      },
    },

    // JSX tokens
    // -------------------------------------------------------------------------
    {
      name: 'JSX attributes',
      scope: 'entity.other.attribute-name.js.jsx',
      settings: {
        foreground: porcelain,
      },
    },
    {
      name: 'JSX component tags',
      scope: 'support.class.component.js.jsx',
      settings: {
        fontStyle: 'bold',
        foreground: ecstasy,
      },
    },
    {
      name: 'JSX tags',
      scope: 'entity.name.tag.js.jsx',
      settings: {
        foreground: ecstasy,
      },
    },

    // Markdown tokens
    // -------------------------------------------------------------------------
    {
      name: 'Markdown backtick strings',
      scope: 'markup.inline.raw.string.markdown',
      settings: {
        foreground: trinidad,
      },
    },
    {
      name: 'Markdown bold',
      scope: 'markup.bold.markdown',
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      name: 'Markdown definitions',
      scope: [
        'punctuation.definition.bold.markdown',
        'punctuation.definition.italic.markdown',
      ],
      settings: {
        fontStyle: 'regular',
      },
    },
    {
      name: 'Markdown headings',
      scope: [
        'heading.1.markdown',
        'heading.2.markdown',
        'heading.3.markdown',
        'heading.4.markdown',
        'heading.5.markdown',
        'heading.6.markdown',
      ],
      settings: {
        foreground: indianKhaki,
      },
    },
    {
      name: 'Markdown italics',
      scope: 'markup.italic.markdown',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      name: 'Markdown link titles',
      scope: [
        'string.other.link.description.markdown',
        'string.other.link.title.markdown',
      ],
      settings: {
        foreground: ecstasy,
      },
    },
    {
      name: 'Markdown links',
      scope: 'markup.underline.link.markdown',
      settings: {
        foreground: porcelain,
      },
    },

    // Python tokens
    // -------------------------------------------------------------------------
    {
      name: 'Python attributes',
      scope: ['meta.attribute.python', 'meta.indexed-name.python'],
      settings: {
        fontStyle: 'regular',
        foreground: ecstasy,
      },
    },
    {
      name: 'Python brackets',
      scope: [
        'constant.character.format.placeholder.other.python',
        'constant.other.ellipsis.python',
        'punctuation.definition.arguments.begin.python',
        'punctuation.definition.arguments.end.python',
        'punctuation.definition.dict.begin.python',
        'punctuation.definition.dict.end.python',
        'punctuation.definition.inheritance.begin.python',
        'punctuation.definition.inheritance.end.python',
        'punctuation.definition.list.begin.python',
        'punctuation.definition.list.end.python',
        'punctuation.definition.parameters.begin.python',
        'punctuation.definition.parameters.end.python',
        'punctuation.parenthesis.begin.python',
        'punctuation.parenthesis.end.python',
        'punctuation.section.class.begin.python',
        'punctuation.section.function.begin.python',
        'punctuation.separator.annotation.python',
        'punctuation.separator.annotation.result.python',
        'punctuation.separator.arguments.python',
        'punctuation.separator.colon.python',
        'punctuation.separator.element.python',
        'punctuation.separator.inheritance.python',
        'punctuation.separator.slice.python',
        'punctuation.separator.parameters.python',
        'punctuation.separator.period.python',
      ],
      settings: {
        fontStyle: 'regular',
        foreground: iron,
      },
    },
    {
      name: 'Python classes',
      scope: 'entity.name.type.class.python',
      settings: {
        fontStyle: 'regular',
        foreground: smaltBlue,
      },
    },
    {
      name: 'Python comments',
      scope: 'comment.line.number-sign.python',
      settings: {
        fontStyle: 'regular',
      },
    },
    {
      name: 'Python constants',
      scope: [
        'constant.language.python',
        'constant.numeric.dec.python',
        'constant.numeric.float.python',
      ],
      settings: {
        fontStyle: 'regular',
      },
    },
    {
      name: 'Python doc strings',
      scope: 'string.quoted.docstring.multi.python',
      settings: {
        fontStyle: 'regular',
        foreground: greyChateau,
      },
    },
    {
      name: 'Python escaped characters',
      scope: 'constant.character.escape.python',
      settings: {
        fontStyle: 'regular',
        foreground: trinidad,
      },
    },
    {
      name: 'Python foreground',
      scope: 'source.python',
      settings: {
        fontStyle: 'italic',
        foreground: trinidad,
      },
    },
    {
      name: 'Python functions',
      scope: [
        'entity.name.function.python',
        'meta.function-call.generic.python',
        'support.function.builtin.python',
        'support.function.magic.python',
      ],
      settings: {
        fontStyle: 'regular',
        foreground: treePoppy,
      },
    },
    {
      name: 'Python inherited classes',
      scope: 'entity.other.inherited-class.python',
      settings: {
        fontStyle: 'regular',
        foreground: nepal,
      },
    },
    {
      name: 'Python keywords',
      scope: ['keyword.control.flow.python', 'keyword.control.import.python'],
      settings: {
        fontStyle: 'regular',
      },
    },
    {
      name: 'Python operators',
      scope: [
        'keyword.operator.arithmetic.python',
        'keyword.operator.assignment.python',
        'keyword.operator.bitwise.python',
        'keyword.operator.comparison.python',
        'keyword.operator.logical.python',
        'keyword.operator.python',
        'keyword.operator.unpacking.arguments.python',
        'keyword.operator.unpacking.parameter.python',
      ],
      settings: {
        fontStyle: 'regular',
        foreground: iron,
      },
    },
    {
      name: 'Python storage',
      scope: ['storage.type.class.python', 'storage.type.function.python'],
      settings: {
        fontStyle: 'regular',
      },
    },
    {
      name: 'Python strings',
      scope: [
        'string.quoted.docstring.single.python',
        'string.quoted.single.python',
      ],
      settings: {
        fontStyle: 'regular',
      },
    },
    {
      name: 'Python types',
      scope: ['support.type.exception.python', 'support.type.python'],
      settings: {
        fontStyle: 'regular',
        foreground: treePoppy,
      },
    },
    {
      name: 'Python variables',
      scope: 'constant.other.caps.python',
      settings: {
        foreground: trinidad,
      },
    },

    // Regular expression tokens
    // -------------------------------------------------------------------------
    {
      name: 'Regular expression brackets',
      scope: [
        'constant.character.escape.backslash.regexp',
        'keyword.operator.or.regexp',
        'punctuation.definition.character-class.regexp',
        'punctuation.definition.group.regexp',
      ],
      settings: {
        foreground: smaltBlue,
      },
    },
    {
      name: 'Regular expression constants',
      scope: [
        'constant.other.character-class.range.regexp',
        'constant.other.character-class.regexp',
        'constant.other.character-class.set.regexp',
      ],
      settings: {
        foreground: nepal,
      },
    },
    {
      name: 'Regular expression keywords',
      scope: [
        'keyword.control.anchor.regexp',
        'keyword.operator.negation.regexp',
        'keyword.operator.quantifier.regexp',
      ],
      settings: {
        foreground: nepal,
      },
    },

    // SCSS tokens
    // -------------------------------------------------------------------------
    {
      name: 'SCSS attributes',
      scope: 'entity.other.attribute-name.attribute.scss',
      settings: {
        foreground: porcelain,
      },
    },
    {
      name: 'SCSS block comments',
      scope: 'comment.block.scss',
      settings: {
        foreground: greyChateau,
      },
    },
    {
      name: 'SCSS brackets',
      scope: [
        'punctuation.access.module.scss',
        'punctuation.definition.attribute-selector.begin.bracket.square.scss',
        'punctuation.definition.attribute-selector.end.bracket.square.scss',
        'punctuation.definition.interpolation.begin.bracket.curly.scss',
        'punctuation.definition.interpolation.end.bracket.curly.scss',
        'punctuation.section.function.scss',
        'punctuation.separator.delimiter.scss',
      ],
      settings: {
        fontStyle: 'regular',
        foreground: iron,
      },
    },
    {
      name: 'SCSS functions',
      scope: 'entity.name.function.scss',
      settings: {
        foreground: treePoppy,
      },
    },
    {
      name: 'SCSS important',
      scope: 'keyword.other.important.scss',
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      name: 'SCSS operators',
      scope: 'keyword.operator.scss',
      settings: {
        foreground: iron,
      },
    },
    {
      name: 'SCSS strings',
      scope: 'meta.attribute-selector.scss',
      settings: {
        foreground: matrix,
      },
    },

    // TSX tokens
    // -------------------------------------------------------------------------
    {
      name: 'TSX alias types',
      scope: 'entity.name.type.alias.tsx',
      settings: {
        foreground: nepal,
      },
    },
    {
      name: 'TSX attributes',
      scope: 'entity.other.attribute-name.tsx',
      settings: {
        foreground: porcelain,
      },
    },
    {
      name: 'TSX block comments',
      scope: ['comment.block.documentation.tsx', 'comment.block.tsx'],
      settings: {
        foreground: greyChateau,
      },
    },
    {
      name: 'TSX brackets',
      scope: [
        'keyword.operator.type.annotation.tsx',
        'meta.brace.round.tsx',
        'meta.brace.square.tsx',
        'punctuation.accessor.tsx',
        'punctuation.definition.block.tsx',
        'punctuation.definition.template-expression.begin.tsx',
        'punctuation.definition.template-expression.end.tsx',
        'punctuation.separator.key-value.tsx',
      ],
      settings: {
        foreground: iron,
      },
    },
    {
      name: 'TSX classes',
      scope: [
        'entity.name.type.class.tsx',
        'entity.name.type.tsx',
        'support.class.builtin.tsx',
      ],
      settings: {
        foreground: smaltBlue,
      },
    },
    {
      name: 'TSX component tags',
      scope: 'support.class.component.tsx',
      settings: {
        fontStyle: 'bold',
        foreground: ecstasy,
      },
    },
    {
      name: 'TSX functions',
      scope: [
        'entity.name.function.tsx',
        'support.function.console.tsx',
        'support.function.tsx',
      ],
      settings: {
        foreground: treePoppy,
      },
    },
    {
      name: 'TSX inherited classes',
      scope: 'entity.other.inherited-class.tsx',
      settings: {
        foreground: nepal,
      },
    },
    {
      name: 'TSX interface types',
      scope: 'entity.name.type.interface.tsx',
      settings: {
        foreground: smaltBlue,
      },
    },
    {
      name: 'TSX null',
      scope: 'constant.language.null.tsx',
      settings: {
        foreground: greyChateau,
      },
    },
    {
      name: 'TSX module types',
      scope: 'entity.name.type.module.tsx',
      settings: {
        foreground: smaltBlue,
      },
    },
    {
      name: 'TSX operators',
      scope: [
        'keyword.operator.arithmetic.tsx',
        'keyword.operator.assignment.compound.bitwise.tsx',
        'keyword.operator.assignment.compound.tsx',
        'keyword.operator.assignment.tsx',
        'keyword.operator.comparison.tsx',
        'keyword.operator.decrement.tsx',
        'keyword.operator.increment.tsx',
        'keyword.operator.logical.tsx',
        'keyword.operator.relational.tsx',
        'keyword.operator.ternary.tsx',
      ],
      settings: {
        foreground: iron,
      },
    },
    {
      name: 'TSX primitive types',
      scope: 'support.type.primitive.tsx',
      settings: {
        foreground: nepal,
      },
    },
    {
      name: 'TSX properties',
      scope: [
        'meta.object-literal.key.tsx',
        'variable.other.constant.property.tsx',
        'variable.other.object.property.tsx',
        'variable.other.property.tsx',
      ],
      settings: {
        fontStyle: 'normal',
        foreground: ecstasy,
      },
    },
    {
      name: 'TSX regular expressions',
      scope: 'string.regexp.tsx',
      settings: {
        foreground: nepal,
      },
    },
    {
      name: 'TSX super',
      scope: 'variable.language.super.tsx',
      settings: {
        fontStyle: 'normal',
        foreground: porcelain,
      },
    },
    {
      name: 'TSX tags',
      scope: 'entity.name.tag.tsx',
      settings: {
        foreground: ecstasy,
      },
    },
    {
      name: 'TSX this',
      scope: 'variable.language.this.tsx',
      settings: {
        foreground: porcelain,
      },
    },
    {
      name: 'TSX undefined',
      scope: 'constant.language.undefined.tsx',
      settings: {
        foreground: greyChateau,
      },
    },

    // TypeScript tokens
    // -------------------------------------------------------------------------
    {
      name: 'TypeScript alias types',
      scope: 'entity.name.type.alias.ts',
      settings: {
        foreground: nepal,
      },
    },
    {
      name: 'TypeScript block comments',
      scope: ['comment.block.documentation.ts', 'comment.block.ts'],
      settings: {
        foreground: greyChateau,
      },
    },
    {
      name: 'TypeScript brackets',
      scope: [
        'keyword.operator.type.annotation.ts',
        'meta.brace.round.ts',
        'meta.brace.square.ts',
        'punctuation.accessor.ts',
        'punctuation.definition.block.ts',
        'punctuation.definition.template-expression.begin.ts',
        'punctuation.definition.template-expression.end.ts',
      ],
      settings: {
        foreground: iron,
      },
    },
    {
      name: 'TypeScript classes',
      scope: [
        'entity.name.type.class.ts',
        'entity.name.type.ts',
        'support.class.builtin.ts',
      ],
      settings: {
        foreground: smaltBlue,
      },
    },
    {
      name: 'TypeScript functions',
      scope: [
        'entity.name.function.ts',
        'support.function.console.ts',
        'support.function.ts',
      ],
      settings: {
        foreground: treePoppy,
      },
    },
    {
      name: 'TypeScript inherited classes',
      scope: 'entity.other.inherited-class.ts',
      settings: {
        foreground: nepal,
      },
    },
    {
      name: 'TypeScript interface types',
      scope: 'entity.name.type.interface.ts',
      settings: {
        foreground: smaltBlue,
      },
    },
    {
      name: 'TypeScript null',
      scope: 'constant.language.null.ts',
      settings: {
        foreground: greyChateau,
      },
    },
    {
      name: 'TypeScript module types',
      scope: 'entity.name.type.module.ts',
      settings: {
        foreground: smaltBlue,
      },
    },
    {
      name: 'TypeScript operators',
      scope: [
        'keyword.operator.arithmetic.ts',
        'keyword.operator.assignment.compound.bitwise.ts',
        'keyword.operator.assignment.compound.ts',
        'keyword.operator.assignment.ts',
        'keyword.operator.comparison.ts',
        'keyword.operator.decrement.ts',
        'keyword.operator.increment.ts',
        'keyword.operator.logical.ts',
        'keyword.operator.relational.ts',
        'keyword.operator.ternary.ts',
      ],
      settings: {
        foreground: iron,
      },
    },
    {
      name: 'TypeScript primitive types',
      scope: 'support.type.primitive.ts',
      settings: {
        foreground: nepal,
      },
    },
    {
      name: 'TypeScript properties',
      scope: [
        'variable.object.property.ts',
        'variable.other.constant.property.ts',
        'variable.other.object.property.ts',
        'variable.other.property.ts',
      ],
      settings: {
        fontStyle: 'normal',
        foreground: ecstasy,
      },
    },
    {
      name: 'TypeScript regular expressions',
      scope: 'string.regexp.ts',
      settings: {
        foreground: nepal,
      },
    },
    {
      name: 'TypeScript super',
      scope: 'variable.language.super.ts',
      settings: {
        fontStyle: 'normal',
        foreground: porcelain,
      },
    },
    {
      name: 'TypeScript this',
      scope: 'variable.language.this.ts',
      settings: {
        foreground: porcelain,
      },
    },
    {
      name: 'TypeScript undefined',
      scope: 'constant.language.undefined.ts',
      settings: {
        foreground: greyChateau,
      },
    },

    // XML tokens
    // -------------------------------------------------------------------------
    {
      name: 'XML attributes',
      scope: 'entity.other.attribute-name.localname.xml',
      settings: {
        foreground: porcelain,
      },
    },
    {
      name: 'XML tags',
      scope: 'entity.name.tag.localname.xml',
      settings: {
        foreground: ecstasy,
      },
    },
  ],
  type,
};
