/**
 * @file
 * CKEditor custom plugin initialization.
 */
(function () {
  "use strict";

  const CKEDITOR = window.CKEDITOR;
  CKEDITOR.timestamp = '';
  CKEDITOR.plugins.add('easyopac_button_plugin', {
    init: function (editor) {
      editor.addCommand('insert_button', new CKEDITOR.dialogCommand('eoInsertButtonDialog'));
      editor.ui.addButton('easyopac_button', {
        label: 'Insert button',
        command: 'insert_button',
        icon: this.path + 'images/link.png'
      });
      CKEDITOR.dialog.add('eoInsertButtonDialog', this.path + '/dialogs/eoInsertButtonDialog.js');
    }
  });
})();
