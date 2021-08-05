import React, { Fragment, useContext, useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Button, Grid, Header } from 'semantic-ui-react';
import { RootStoreContext } from '../../stores/rootStore';

const sigPadStyles = {
  border: 'dashed 3px',
  borderColor: '#eee',
  borderRadius: '5px',
  padding: '3px',
  marginBottom: '3px',
  display: 'flex'
};

const SignatureUploadWidget = () => {
  const rootStore = useContext(RootStoreContext);
  const { setSignature } = rootStore.userStore;

  const [uploadSignature, setUploadSignature] = useState(false);
  const [writeSignature, setWriteSignature] = useState(false);

  const [clearButton, setClearButton] = useState(false);

  const sigCanvas = useRef<any>({});

  const getSignature = () => {
    setSignature(sigCanvas.current.getTrimmedCanvas().toBlob((blob: any) => {
    setSignature(blob)},'image/png'));

    setClearButton(true);
  }

  return (
    <Fragment>
      <Grid>
        <Grid.Column width={16}>
          <Button.Group compact className="buttonGroup">
            <Button
              type="button"
              content="Upload Signature"
              onClick={() => {
                setUploadSignature(true);
                setWriteSignature(false);
                
              }}
            />
            <Button.Or />
            <Button
              type="button"
              content="Write Signature"
              onClick={() => {
                setWriteSignature(true);
                setUploadSignature(false);
              }}
            />
          </Button.Group>

          {uploadSignature && <h1>Upload Signature</h1>}

          {writeSignature && (
            <div>
              <Header color="teal" sub content="Add signature" />
              <div style={sigPadStyles}>
                <SignatureCanvas
                  ref={sigCanvas}
                  canvasProps={{
                    className: 'signatureCanvas',
                  }}
                  onEnd={() => getSignature()}
                />
              </div>
            </div>
          )}

          {clearButton && (
            <Button
              type="button"
              floated="left"
              icon="close"
              content="Clear"
              onClick={() => {
                sigCanvas.current.clear();
                setClearButton(false);
              }}
            />
          )}
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default SignatureUploadWidget;
