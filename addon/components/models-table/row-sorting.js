import Component from '@ember/component';
import {get} from '@ember/object';
import layout from '../../templates/components/models-table/row-sorting';
import {shownColumns} from '../../utils/macros';

/**
 * Table header item used within [models-table/table-header](Components.ModelsTableTableHeader.html).
 *
 * Component generates tr with column titles in the separated cells. Click by each cell will sort table data by selected field. Check properties [disableSorting](Utils.ModelsTableColumn.html#property_disableSorting), [sortedBy](Utils.ModelsTableColumn.html#property_sortedBy) for ModelsTableColumn.
 *
 * Usage example:
 *
 * ```hbs
 * {{#models-table data=data columns=columns as |mt|}}
 *   {{#mt.table as |table|}}
 *     {{#table.header as |header|}}
 *       {{header.row-sorting}}
 *       {{! ... }}
 *     {{/table.header}}
 *     {{! ... }}
 *   {{/mt.table}}
 *   {{! .... }}
 * {{/models-table}}
 * ```
 *
 * Usage with a block context:
 *
 * ```hbs
 * {{#models-table data=data columns=columns as |mt|}}
 *   {{#mt.table as |table|}}
 *     {{#table.header as |header|}}
 *       {{#header.row-sorting as |rs|}}
 *         {{#each rs.visibleProcessedColumns as |column|}}
 *            <td>{{column.title}}</td>
 *       {{/header.row-sorting}}
 *       {{! ... }}
 *     {{/table.header}}
 *     {{! ... }}
 *   {{/mt.table}}
 *   {{! .... }}
 * {{/models-table}}
 * ```
 *
 * ModelsTableRowSorting yields references to the following contextual components:
 *
 * * [models-table/row-sorting-cell](Components.ModelsTableRowSortingCell.html) - component used as sorting row cell. Clicking on it causes column sorting
 *
 * Check own docs for each component to get detailed info.
 *
 * @namespace Components
 * @class ModelsTableRowSorting
 * @extends Ember.Component
 */
export default Component.extend({
  layout,
  tagName: 'tr',

  /**
   * Bound from {{#crossLink "Components.ModelsTable/visibleProcessedColumns:property"}}ModelsTable.visibleProcessedColumns{{/crossLink}}
   *
   * @property visibleProcessedColumns
   * @type object[]
   * @default null
   */
  visibleProcessedColumns: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/processedColumns:property"}}ModelsTable.processedColumns{{/crossLink}}
   *
   * @property processedColumns
   * @type object[]
   * @default null
   */
  processedColumns: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/selectedItems:property"}}ModelsTable.selectedItems{{/crossLink}}
   *
   * @property selectedItems
   * @default null
   * @type object[]
   */
  selectedItems: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/expandedItems:property"}}ModelsTable.expandedItems{{/crossLink}}
   *
   * @property expandedItems
   * @default null
   * @type object[]
   */
  expandedItems: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/data:property"}}ModelsTable.data{{/crossLink}}
   *
   * @property data
   * @default null
   * @type object[]
   */
  data: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/useDataGrouping:property"}}ModelsTable.useDataGrouping{{/crossLink}}
   *
   * @property useDataGrouping
   * @default null
   * @type boolean
   */
  useDataGrouping: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/displayGroupedValueAs:property"}}ModelsTable.displayGroupedValueAs{{/crossLink}}
   *
   * @property displayGroupedValueAs
   * @default null
   * @type string
   */
  displayGroupedValueAs: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.sort:method"}}ModelsTable.actions.sort{{/crossLink}}
   *
   * @event sort
   */
  sort: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.sendAction:method"}}ModelsTable.actions.sendAction{{/crossLink}}
   *
   * @event sendAction
   */
  sendAction: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.expandAllRows:method"}}ModelsTable.actions.expandAllRows{{/crossLink}}
   *
   * @event expandAllRows
   */
  expandAllRows: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.collapseAllRows:method"}}ModelsTable.actions.collapseAllRows{{/crossLink}}
   *
   * @event collapseAllRows
   */
  collapseAllRows: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.toggleAllSelection:method"}}ModelsTable.actions.toggleAllSelection{{/crossLink}}
   *
   * @event toggleAllSelection
   */
  toggleAllSelection: null,

  /**
   * @property shownColumns
   * @type object[]
   * @private
   * @readonly
   */
  shownColumns: shownColumns('colspanForSortCell'),

  actions: {
    sort(column) {
      get(this, 'sort')(column);
    }
  }
});
