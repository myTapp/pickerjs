export default (
  '<div class="picker" data-action="hide" touch-action="none" tabindex="-1" role="dialog">' +
    '<div class="picker-dialog" role="document">' +
      '<div class="picker-header">' +
        // '<h4 class="picker-title">{{ title }}</h4>' +
        '<button type="button" class="picker-edit" data-action="edit" aria-label="Edit">✎ {{ edit_date }}</button>' +
        '<button type="button" class="picker-pick" data-action="pick-mode" aria-label="Pick">{{ title }}</button>' +
  // '<button type="button" class="picker-close" data-action="hide" aria-label="Close">&times;</button>' +
      '</div>' +
      '<div class="picker-body">' +
        '<div class="picker-grid"></div>' +
        '<div class="picker-grid input-mode">\
            <div class="day input-container"><input type="number" pattern="\\d*" autocorrect="off" autocapitalize="off" autocomplete="on"></input></div>\
            <div class="month input-container"><input type="number" pattern="\\d*" autocorrect="off" autocapitalize="off" autocomplete="on"></input></div>\
            <div class="year input-container"><input type="number" pattern="\\d*" autocorrect="off" autocapitalize="off" autocomplete="on"></input></div>\
         </div>' +
      '</div>' +
      '<div class="picker-footer">' +
        '<button type="button" class="picker-cancel" data-action="hide">{{ cancel }}</button>' +
        '<button type="button" class="picker-confirm" data-action="pick">{{ confirm }}</button>' +
      '</div>' +
    '</div>' +
  '</div>'
);
