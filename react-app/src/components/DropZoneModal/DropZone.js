import React, {useState, useEffect, useRef} from "react"
import {useHistory} from 'react-router-dom'

import "./DropZone.css"

const DropZone = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [validFiles, setValidFiles] = useState([]);
  const fileInputRef = useRef();
  const history = useHistory()

  useEffect(() => {
    let filteredArray = selectedFiles.reduce((file, current) => {
        const x = file.find(item => item.name === current.name);
        if (!x) {
            return file.concat([current]);
        } else {
            return file;
        }
    }, []);
    setValidFiles([...filteredArray]);

}, [selectedFiles]);

  const removeFile = (name) => {
    setValidFiles([])
  }

  const validateFile = (file) => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
    if(validTypes.indexOf(file.type) === -1){
      return false;
    }
    return true
  }

  const handleFiles = (files) => {
    for(let i = 0; i < files.length; i++){
      if (validateFile(files[i])){
        setSelectedFiles([files[i]]);
      } else {
        files[i]['invalid'] = true;
        setSelectedFiles([files[i]])
        setErrorMessage('File type not permitted');
      }
    }
  }

  const fileSize = (size) => {
    if (size === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

const fileType = (fileName) => {
  return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;
}

  const dragOver = (e) => {
    e.preventDefault();
  }

  const dragEnter = (e) => {
    e.preventDefault();
  }

  const dragLeave = (e) => {
    e.preventDefault();
  }

  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    console.log(files)
    if (files.length) {
      handleFiles(files);
    }
  }

  const fileInputClicked = () => {
    fileInputRef.current.click();
  }

  const filesSelected = () => {
    if (fileInputRef.current.files.length) {
        handleFiles(fileInputRef.current.files);
    }
  }

  const uploadFiles = async () => {
    const formData = new FormData();
    formData.append("image", validFiles[0]);

    // aws uploads can be a bit slow—displaying
    // some sort of loading message is a good idea

    const res = await fetch("/api/photo_upload", {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      await res.json();
      history.push("/");
    } else {
      // a real app would probably use more advanced
      // error handling
      console.log("error");
    }
  }

  return (

    <>
      <div className='container'>
        <button className="file-upload-btn" onClick={() => uploadFiles()}>Upload Photo</button>
        <div className="drop-container"
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={fileDrop}
          onClick={fileInputClicked}
        >
          <div className="drop-message">
            <input
                ref={fileInputRef}
                className="file-input"
                type="file"
                // multiple
                onChange={filesSelected}
            />
            <div className="upload-icon"></div>
            Drag & Drop files here or click to upload
          </div>
        </div>
        <div className="file-display-container">
            {
                validFiles.map((data, i) =>
                    <div className="file-status-bar" key={i}>
                        <div>
                            <div className="file-type-logo"></div>
                            <div className="file-type">{fileType(data.name)}</div>
                            <span className={`file-name ${data.invalid ? 'file-error' : ''}`}>{data.name}</span>
                            <span className="file-size">({fileSize(data.size)})</span> {data.invalid && <span className='file-error-message'>({errorMessage})</span>}
                        </div>
                        <div className="file-remove" onClick={() => removeFile(data.name)}><i className="fas fa-trash-alt"></i></div>
                    </div>
                )
            }
        </div>
      </div>
    </>
  )
}

export default DropZone;
