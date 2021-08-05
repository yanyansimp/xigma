import React, { useRef } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

interface IProps {
  setSignature: (file: Blob) => void;
  imagePreview: string;
}

const SignatureWidgetCropper: React.FC<IProps> = ({ setSignature, imagePreview }) => {
  const cropper = useRef<Cropper>(null);

  const cropImage = () => {
    if (
      cropper.current &&
      typeof cropper.current.getCroppedCanvas() === 'undefined'
    ) {
      return;
    }
    cropper &&
      cropper.current &&
      cropper.current.getCroppedCanvas().toBlob((blob: any) => {
        setSignature(blob);
      }, 'image/png');
  };
  
  return (
    <Cropper
      ref={cropper}
      src={imagePreview}
      style={{ height: 200, width: '100%' }}
      // Cropper.js options
      aspectRatio={1 / 1}
      preview=".imgSignature-preview"
      guides={false}
      viewMode={1}
      dragMode="move"
      scalable={true}
      cropBoxMovable={true}
      cropBoxResizable={true}
      crop={cropImage}
    />
  );
};

export default SignatureWidgetCropper;
