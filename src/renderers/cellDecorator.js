(function (Handsontable) {
  'use strict';

  /*
    Adds appropriate CSS class to table cell, based on cellProperties
   */
  Handsontable.renderers.cellDecorator = function (instance, TD, row, col, prop, value, cellProperties) {
    if (cellProperties.className) {
      TD.className = cellProperties.className;
    }

    if(cellProperties.comment) {
      console.log('comment');
      console.log(cellProperties.comment);
    }

    if (cellProperties.readOnly) {
      Handsontable.Dom.addClass(TD, cellProperties.readOnlyCellClassName);
    }

    if (cellProperties.valid === false && cellProperties.invalidCellClassName) {
      Handsontable.Dom.addClass(TD, cellProperties.invalidCellClassName);
    }

    if (cellProperties.wordWrap === false && cellProperties.noWordWrapClassName) {
      Handsontable.Dom.addClass(TD, cellProperties.noWordWrapClassName);
    }

    if (!value && cellProperties.placeholder) {
      Handsontable.Dom.addClass(TD, cellProperties.placeholderCellClassName);
    }
  }

})(Handsontable);