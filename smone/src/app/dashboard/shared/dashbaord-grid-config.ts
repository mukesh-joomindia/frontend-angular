import { CompactType, DisplayGrid, Draggable, GridsterConfig, GridType, PushDirections, Resizable } from "angular-gridster2";

// Gristerconfig is a object which provide feature like drag and drop control, resizable
export interface DashbaordGridConfig extends GridsterConfig{
    draggable: Draggable;
    resizable: Resizable;
    pushDirections: PushDirections;
}

/**
 * 1. Grid type in angular reffered as a type of grid is used for. It  is determine how grid items is positioned and sized iniside a grid container.GridType is used a 
 * a configuration properties of gridsterconfig.
 * gridTypes - GridTyoes.Fit
 * GridType.scrollVertical , GridType.scrollHorizontal
 * 
 * 2. Compact type reffer to a configuration options that determines how grid items are compacted and rearranged when an empty space is created due to 
 * resizing and removal of items for the grid.
 * possiable values : none, compactUp, compactLeft
 */
export interface DefaultGridOption{
    gridType: GridType.Fit,
    compactType: CompactType.None,
    margin: 5,
    outerMargin: true,
    outerMarginTop: null,
    outerMarginRight: null,
    outerMarginLeft: null,
    useTransformPositioning: true,
    mobileBreakpoint: 640,
    useBodyForBreakpoint: false,
    minCols: 1,
    maxCols: 100,
    minRows: 1,
    maxRows: 100,
    maxItemCols: 100,
    minItemCols: 1,
    maxItemRows: 100,
    minItemRows: 1,
    maxItemArea: 2500,
    minItemArea: 1,
    defaultItemCols: 1,
    defaultItemRows: 1,
    fixedColWidth: 105,
    fixedRowHeight: 105,
    keepFixedHeightInMobile: false,
    keepFixedWidthInMobile: false,
    scrollSensitivity: 10,
    scrollSpeed: 20,
    enableEmptyCellClick: false,
    enableEmptyCellContextMenu: false,
    enableEmptyCellDrop: false,
    enableEmptyCellDrag: false,
    enableOccupiedCellDrop: false,
    emptyCellDragMaxCols: 50,
    emptyCellDragMaxRows: 50,
    ignoreMarginInRow: false,
    draggable: {
        enabled: true,
      },
      resizable: {
        enabled: true,
      },
      swap: false,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: { north: true, east: true, south: true, west: true },
      pushResizeItems: false,
      displayGrid: DisplayGrid.Always,
      disableWindowResize: false,
      disableWarnings: false,
      scrollToNewItems: false,
}