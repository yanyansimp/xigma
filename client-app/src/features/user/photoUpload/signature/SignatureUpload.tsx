import React, { useContext, useState } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { RootStoreContext } from '../../../../app/stores/rootStore';
import UploadSignature from './UploadSignature';
import WriteSignature from './WriteSignature';

const SignatureUpload = () => {
  const rootStore = useContext(RootStoreContext);
  const { setFilesSignature, setSignature } = rootStore.userStore;

  const [uploadSignature, setUploadSignature] = useState(false);
  const [writeSignature, setWriteSignature] = useState(false);

  return (
    <Grid>
      <Grid.Column width={16}>
        <Button.Group compact className="buttonGroup">
          <Button
            type="button"
            content="Upload Signature"
            onClick={() => {
              setUploadSignature(true);
              setWriteSignature(false);
              setFilesSignature([]);
              //   setSignature(null);
            }}
          />
          <Button.Or />
          <Button
            type="button"
            content="Write Signature"
            onClick={() => {
              setWriteSignature(true);
              setUploadSignature(false);
              setFilesSignature([]);
            }}
          />
        </Button.Group>

        {uploadSignature && <UploadSignature />}

        {writeSignature && <WriteSignature />}
      </Grid.Column>
    </Grid>
  );
};

export default SignatureUpload;
