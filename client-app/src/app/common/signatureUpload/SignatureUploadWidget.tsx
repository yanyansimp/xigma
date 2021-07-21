import React, { Fragment, useContext, useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Button, Grid, Header } from 'semantic-ui-react';
import { RootStoreContext } from '../../stores/rootStore';

const sigPadStyles = {
  border: 'dashed 3px',
  borderColor: '#eee',
  borderRadius: '5px',
  height: '200px',
  padding: '3px',
  marginBottom: '3px',
};

const SignatureUploadWidget = () => {
  const rootStore = useContext(RootStoreContext);
  const { setSignature } = rootStore.userStore;

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
        <Grid.Column width={8}>
          <Header color="teal" sub content="Add signature" />
          <div style={sigPadStyles}>
            <SignatureCanvas
              ref={sigCanvas}
              canvasProps={{
                className: 'signatureCanvas',
                width: '370px',
                height: '190px',
              }}
              onEnd={() => getSignature()}
            />
          </div>
          { clearButton && 
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
          }
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default SignatureUploadWidget;
