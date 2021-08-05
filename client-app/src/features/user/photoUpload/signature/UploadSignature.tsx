import { observer } from 'mobx-react-lite';
import React, { Fragment, useContext, useEffect } from 'react';
import { Button, Grid, Header } from 'semantic-ui-react';
import PhotoWidgetDropzone from '../../../../app/common/photoUpload/PhotoWidgetDropzone';
import SignatureWidgetCropper from '../../../../app/common/signatureUpload/SignatureWidgetCropper';
import { RootStoreContext } from '../../../../app/stores/rootStore';

const UploadSignature = () => {
  const rootStore = useContext(RootStoreContext);
  const { fileSignature, setFilesSignature, setSignature } = rootStore.userStore;

  useEffect(() => {
    return () => {
      fileSignature.forEach((files) => URL.revokeObjectURL(files.preview));
    };
  });

  return (
    <Grid stackable>
      <Grid.Column width={4}>
        <Header color="teal" sub content="Step 1 - Add Photo of Signature" />
        <PhotoWidgetDropzone setFiles={setFilesSignature} />
      </Grid.Column>
      <Grid.Column width={6}>
        <Header sub color="teal" content="Step 2 - Resize image" />
        {fileSignature.length > 0 && (
          <SignatureWidgetCropper
            setSignature={setSignature}
            imagePreview={fileSignature[0].preview}
          />
        )}
      </Grid.Column>
      <Grid.Column width={4}>
        <Header sub color="teal" content="Step 3 - Preview & Upload" />
        {fileSignature.length > 0 && (
          <Fragment>
            <div
              className="imgSignature-preview"
              style={{
                height: '200px',
                width: '200px',
                overflow: 'hidden',
                marginBottom: '3px',
              }}
            />
            <Button.Group>
              <Button
                floated="left"
                icon="close"
                content="Clear"
                onClick={() => setFilesSignature([])}
              />
            </Button.Group>
          </Fragment>
        )}
      </Grid.Column>
    </Grid>
  );
};

export default observer(UploadSignature);
