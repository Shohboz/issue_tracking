import React from "react";
import Dropzone from "react-dropzone";

export default field => {
  const files = field.input.value;
  return (
    <div className="form-group">
      <label className="col-sm-2 control-label">{field.label}</label>
      <div className="col-sm-10">
        <div className="upload-manager">
          <Dropzone
            className="popover-content"
            name={field.name}
            onDrop={(filesToUpload, e) => field.input.onChange(filesToUpload)}
          >
            <div className="dropbox-container">
              <div className="im_upload_dropbox_inner noselect">
                Перенесите сюда файлы или кликните, чтобы выбрать файлы для
                закачки
              </div>
            </div>
          </Dropzone>
          {field.meta.touched &&
            field.meta.error && (
              <span className="error">{field.meta.error}</span>
            )}
          {files &&
            Array.isArray(files) && (
              <ul>{files.map((file, i) => <li key={i}>{file.name}</li>)}</ul>
            )}
        </div>
      </div>
    </div>
  );
};
