/**
 * @file
 * CKEditor Custom plugin dialog box.
 */

"use strict";

CKEDITOR.dialog.add('eoInsertButtonDialog', function (editor) {
  return {
    title: 'easyOPAC Button: Button properties',
    minWidth: 400,
    minHeight: 200,
    contents: [{
      id: 'tab-basic',
      label: 'Properties',
      elements: [
        {
          type: 'text',
          id: 'url',
          label: 'URL',
          validate: CKEDITOR.dialog.validate.notEmpty("URL field cannot be empty.")
        },
        {
          type: 'text',
          id: 'title',
          label: 'Title',
          validate: CKEDITOR.dialog.validate.notEmpty("Title field cannot be empty.")
        }
      ]
    }],
    onOk: function () {
      var dialog = this;
      var button = editor.document.createElement('div');
      button.addClass('more-link').addClass('ckeditor-more-link');

      var link = editor.document.createElement('a');
      var urlVal = dialog.getValueOf('tab-basic', 'url');
      var titleVal = dialog.getValueOf('tab-basic', 'title');
      link.setAttribute('title', titleVal);
      link.setAttribute('href', urlVal);
      link.setText(titleVal);
      button.append(link);

      editor.insertElement(button);
    }
  };
});
